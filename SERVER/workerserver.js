// // Importing required modules
// import express from 'express';

// // Creating an Express application
// const app = express();

// // Define a route handler for the default route
// app.get('/work', (req, res) => {

 


//     res.send('Hello World!');
// });

// // Starting the server
// const PORT =  3001;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

function getdata(){
fetch('http://localhost:3000/user', {
    method: 'POST', // Specify the HTTP method
    headers: {
      'Content-Type': 'application/json', // Specify the content type of the request body
    },
    body: JSON.stringify({ key: 'value' }), // Convert your JSON data to a string
  })
  .then(response => response.json()) // Parse the response body as JSON
  .then(data => {
    // Handle the JSON data in the frontend
    console.log('Received data:', data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error fetching data:', error);
  });
  
}
getdata()