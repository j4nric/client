import React, { useEffect } from "react";
import Modal from "../modal";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export function withRouter() {
  return (props) => {
    // console.log("Props (StreamEdit): ", props);
    const match = { params: useParams() };
    return <StreamDelete {...props} match={match} />;
  };
}

const StreamDelete = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
    //console.log(props);
  }, []);

  const onSubmit = () => {
    //console.log(formValues);
    props.deleteStream(props.match.params.id);
    navigate("/");
  };

  let navigate = useNavigate();

  const actions = (
    <>
      <button onClick={onSubmit} className="ui button negative">
        Delete
      </button>
      <button onClick={() => navigate("/")}className="ui button">Cancel</button>
    </>
  );

  return (
      <Modal
        title="Delete Stream"
        content={`Are you sure to delete the Stream "${
          props.streams[props.match.params.id].title
        }"? `}
        actions={actions}
        onDismiss={() => navigate("/")}
      />
  );
};
const mapStateToProps = (state, ownProps) => {
  //console.log(state.streams[Object.keys(state.streams)[0]]);
  return { streams: state.streams };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  withRouter(StreamDelete)
);
