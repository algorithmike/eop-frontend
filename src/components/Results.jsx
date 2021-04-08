import { connect } from "react-redux";
import { useQuery, gql } from "@apollo/client";

import "../styles/Results.scss";
import Result from "./Result";
import { updateFilter } from "../store/slices/filter";

const CONTENT = gql`
  query Content(
    $text: String
    $country: String
    $state: String
    $city: String
    $beginning: String
    $end: String
    $mediaType: String
  ) {
    content(
      filter: { text: $text }
      location: { country: $country, state: $state, city: $city }
      epochTime: { beginning: $beginning, end: $end }
      mediaType: $mediaType
    ) {
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
  const { text, country, city, state, beginning, end, mediaType, take } = props;
  const { loading, error, data } = useQuery(CONTENT, {
    variables: {
      text,
      country,
      city,
      state,
      beginning,
      end,
      mediaType,
      take,
    },
  });

  if (loading) return <h2>Loading...</h2>;
  if (error) {
    console.log(error);
    return <h2>Error</h2>;
  }

  return (
    <div className="results">
      {!text && data.content.length > 0 && <h2>Latest Content</h2>}

      <div className="results__main">
        {data.content.length < 1 ? (
          <h2>No Results Found</h2>
        ) : (
          data.content.map((item, index) => {
            return <Result key={index} data={item} />;
          })
        )}
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
  mediaType: state.filters?.mediaType,
});

const mapDispatchToProps = (dispatch) => ({
  updateFilter: (filter) => dispatch(updateFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
