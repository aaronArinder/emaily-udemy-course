import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  state = { showReview: false };

  renderContent() {
    if (this.state.showReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showReview: false })}
        />
      );
    }
    return (
      <SurveyForm onSurveySubmit={() => this.setState({ showReview: true })} />
    );
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({ form: 'surveyForm' })(SurveyNew);

//once SurveyNew is unmounted, it destroys the survey data; cf. SurveyForm & SurveyFormReview.
//Makes sense since SurveyNew contains SurveyForm and SurveyFormReview, so switching the view
//away from those to, say, home should destroy the form data
