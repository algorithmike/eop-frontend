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

const Results = () => {
  const { loading, error, data } = useQuery(CONTENT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.content.map(({title}: any, index: number) => {
        return (
          <div key={index}>
            <h3>{title}</h3>
          </div>
        )
      })}
    </div>
  );
};

export default Results;