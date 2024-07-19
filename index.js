import express from 'express';
// Create an express app
const app = express();
// Set a port from the environment variable or default to 8080
const port = process.env.PORT || 8080;
// This line lets us use the JSON body of a request in our routes as req.body
app.use(express.json());
// app.route() helps us define handlers for different HTTP methods on the same route
app
  .route('/users')
  .get((req, res) => res.json({ message: 'GET /' }))
  .post((req, res) => res.json({ message: 'POST /' }));
app
  .route('/users/:id')
  .get((req, res) => res.json({ message: 'GET /:id' }))
  .put((req, res) => res.json({ message: 'PUT /:id' }))
  .delete((req, res) => res.json({ message: 'DELETE /:id' }));
// Start the server
app.listen(port, () => console.log(`Server is running on port ${port}`));
