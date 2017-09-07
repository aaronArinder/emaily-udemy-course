# emaily-udemy-course
Udemy course covering Node/React/MongoDB/Mongoose by setting up email survey web app

This is a project from a Udemy course by Stephen Grider on react, redux, node, express, mongoDB, and mongoose. The app is hosted at: https://salty-stream-83043.herokuapp.com/.

Two major things (and a few minor things) still need to be sorted out.

First, the production environment's webhook doesn't work because sendgrid only allows for one; so, clicking 'yes' or 'no' in an email doesn't update the database or the app. It does work in the development environment.

Second, the dashboard needs to be overhauled for better navigation, ability to control how a user's surveys are shown, and the ability to delete surveys.
