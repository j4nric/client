import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";
import { useParams } from "react-router-dom";
import { formValues } from "redux-form";

export function withRouter() {
  return (props) => {
    // console.log("Props (StreamEdit): ", props);
    const match = { params: useParams() };
    return <StreamEdit {...props} match={match} />;
  };
}

const StreamEdit = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);

  const onSubmit = (formValues) => {
    //console.log(formValues);
    props.editStream(props.match.params.id, formValues);
  };

  if (
    !props.streams ||
    !Object.keys(props.streams).includes(props.match.params.id)
  ) {
    return <div>Loading...</div>;
  }

  // {props.streams[props.match.params.id].title} -- Title
      return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={{title: props.streams[props.match.params.id].title, description: props.streams[props.match.params.id].description }}
          onSubmit={onSubmit}
        />
      </div>
    );
};

const mapStateToProps = (state, ownProps) => {
  //console.log(state.streams[Object.keys(state.streams)[0]]);
  return { streams: state.streams };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  withRouter(StreamEdit)
);
