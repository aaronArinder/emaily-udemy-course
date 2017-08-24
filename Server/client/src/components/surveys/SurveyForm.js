import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import _ from 'lodash';
import validateEmails from '../../utils/emailValidation';
import formFields from './formFields';

//the _.map iterates over an array and returns a new array with different records
//inside of it; the arrow function is called for each item in the array, just like
//normal .map()

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  //key to satisfy react

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
}
//Validate from redux-form; values object contains all the values coming off the form; has each key: value
//pair. If redux-form gets an empty errors object back, then it continues on like normal. If it gets an object
// with something, it stops the submission process, redux-form looks at the errors on the errors object, and
//if it matches up with one of the fields we're attempting to render, redux-form passes the error as a prop to
//our Field component. Pretty sweet.

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false /*prevents the form data from being removed on hitting back button*/
})(SurveyForm);
