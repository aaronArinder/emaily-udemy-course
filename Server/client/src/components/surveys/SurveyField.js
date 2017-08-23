//SurveyField renders a single label/text input

import React from 'react';

//es6 destructuring; looks at props.input etc.
//more destructing with meta
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>
        {label}
      </label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};

//the '...input' says to put on all the reduxform props handlers without
//having to type each one out

//the meta is a props listing a bunch of info that includes an error key that
//hooks up to the redux-form errors object

//if touched is true, interp evaluates the entire boolean statement; if not,
//doesn't. Nice way to check if the form has been clicked into and whether
//an error should be shown
