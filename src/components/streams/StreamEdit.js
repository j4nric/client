import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const StreamEdit = (props) => {
  const params = useParams();
  return (
    <div>
      Stream Edit Page: <b>{params.id}</b>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: null };
};

export default connect(mapStateToProps)(StreamEdit);
