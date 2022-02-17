import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export function withRouter() {
  return (props) => {
    const match = { params: useParams() };
    return <StreamShow {...props} match={match} />;
  };
}

const StreamShow = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);

  if (
    !props.streams ||
    !Object.keys(props.streams).includes(props.match.params.id)
  ) {
    return <div>Loading...</div>;
  }
  const { title, description } = props.streams[props.match.params.id];

  return (
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { streams: state.streams };
};

export default connect(mapStateToProps, { fetchStream })(
  withRouter(StreamShow)
);
