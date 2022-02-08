import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import { useNavigate } from "react-router-dom";

const StreamCreate = (props) => {
  let navigate = useNavigate();

  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  const renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label} </label>
        <input {...input} autoComplete="off" key={label}/>
        {renderError(meta)}
      </div>
    );
  };

  const onSubmit = (formValues) => {
    props.createStream(formValues);
    navigate("/");
    
  };


  return (
    <form
      onSubmit={props.handleSubmit(onSubmit)}
      className="ui form error"
      
    >
      <Field 
        name="title" 
        component={renderInput} 
        label="Enter Title" 
      />
      <Field
        name="description"
        component={renderInput}
        label="Enter Description"
      />
      <button className="ui button primary">Submit</button>
    </form>
  );
};

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    // only ran if user did not enter a title
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

const fromWrapped = reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);

export default connect(null, { createStream })(fromWrapped);
