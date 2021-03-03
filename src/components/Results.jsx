import { connect } from 'react-redux';
import { useQuery, gql } from '@apollo/client';

const CONTENT = gql`
  query {
    content {
      id
      title
      mediaType
      mediaUrl
      mediaPreviewUrl
      description
    }
  }
`;

const Results = (props) => {
  const { loading, error, data } = useQuery(CONTENT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      {data.content.map(({title, mediaPreviewUrl}, index) => {
        return (
          <div key={index}>
            <img src={mediaPreviewUrl} alt={title} style={{width: '15rem'}}/>
            <h3>{title}</h3>
          </div>
        )
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  
})
const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Results); 