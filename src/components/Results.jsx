import { connect } from 'react-redux';
import { useQuery, gql } from '@apollo/client';

import '../styles/Results.scss';
import Result from './Result';
import { updateFilter } from '../store/slices/filter';

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
      createdAt
      event {
        title
        city
      }
    }
  }
`;

const Results = (props) => {
  //TODO: Update backend for pagination, then add ability here;
  const {text, country, city, state, beginning, end, mediaType, take} = props
  const { loading, error, data } = useQuery(CONTENT, {
    variables: {
      text, country, city, state, beginning, end, mediaType, take
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error)
    return <p>Error</p>
  };

  return (
    <div className="results">
      {(!text) && <h2>Latest Content</h2>}
      <div className="results__main">
        {data.content.map((item, index) => {
          return (
            <Result key={index} data={item}/>
          )
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  take: state.filters?.take,
  text: state.filters?.text,
  country: state.filters?.location?.country,
  city: state.filters?.location?.city,
  state: state.filters?.location?.state,
  beginning: state.filters?.epochTime?.beginning,
  end: state.filters?.epochTime?.end,
  mediaType: state.filters?.mediaType
})

//TODO: Use updateFilter to update filter.take state.
const mapDispatchToProps = (dispatch) => ({
  updateFilter: (filter) => (dispatch(updateFilter(filter)))
})

export default connect(mapStateToProps, mapDispatchToProps)(Results); 