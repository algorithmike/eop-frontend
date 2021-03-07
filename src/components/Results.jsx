import { connect } from 'react-redux';
import { useQuery, gql } from '@apollo/client';

import '../styles/Results.scss';
import Result from './Result';

const CONTENT = gql`
  query  Content(
    $text: String,
    $country: String,
    $state: String,
    $city: String,
    $beginning: String,
    $end: String,
    $mediaType: String
  ) {
    content(
      filter: {
        text: $text
      },
      location: {
        country: $country,
        state: $state,
        city: $city
      },
      epochTime: {
        beginning: $beginning,
        end: $end
      },
      mediaType: $mediaType
    ){
      id
      title
      createdAt
      mediaType
      mediaUrl
      mediaPreviewUrl
      description
    }
  }
`;

const Results = (props) => {
  const {text, country, city, state, beginning, end, mediaType} = props
  const { loading, error, data } = useQuery(CONTENT, {
    variables: {
      text, country, city, state, beginning, end, mediaType
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error)
    return <p>Error</p>
  };
  
  console.log(data);
  return (
    <div className="results">
      {data.content.map(({title, mediaPreviewUrl}, index) => {
        return (
          <Result index={index} title={title} mediaPreviewUrl={mediaPreviewUrl}/>
        )
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  text: state.filters?.text,
  country: state.filters?.location?.country,
  city: state.filters?.location?.city,
  state: state.filters?.location?.state,
  beginning: state.filters?.epochTime?.beginning,
  end: state.filters?.epochTime?.end,
  mediaType: state.filters?.mediaType
})

export default connect(mapStateToProps)(Results); 