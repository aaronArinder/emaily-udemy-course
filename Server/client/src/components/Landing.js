import React from 'react';

const Landing = () => {
  return (
    <div style={{ margin: '5% 15%' }}>
      <div>
        <h2
          style={{
            textAlign: 'center'
          }}
        >
          Emaily!
        </h2>

        <p>
          This app sends emails to a list of clients after accepting payment. It
          was built as the course project for a course on Udemy taught by
          Stephen Grider. If you haven't checked out Grider's courses before, go
          <a href={'https://rallycoding.com'}> check him out</a>! He's an
          excellent educator.
        </p>
        <h5>To test its functionality: </h5>
        <ol>
          <li>Go through OAuth.</li>

          <li>
            Add credits with any dummy email (e.g., asdf@asdf.com), a dummy
            card: 4242 4242 4242 4242, a date greater than today's, and a random
            CVC.
          </li>

          <li>
            Click 'Emaily', then '+', create a survey, send it, and wait for it
            to show up!
          </li>
        </ol>
      </div>

      <div>
        <h5>Updates needed</h5>
        <ol>
          <li>
            The production environment's webhook doesn't work because SendGrid
            only allows for one; so, clicking 'yes' or 'no' in an email doesn't
            update the database or the app. I need to go back in and add another
            webhook to SendGrid.
          </li>>
          <li>
            The dashboard needs to be overhauled for better navigation, ability
            to control how a user's surveys are shown, and the ability to delete
            surveys.
          </li>
          <li>
            The landing pages for thanking a participant need beautification.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Landing;
