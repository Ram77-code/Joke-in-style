// HINTS:
// 1. Import express and axios
import express from 'express';
import axios from 'axios';

// 2. Create an express app and set the port number.
const app = express();
const port = process.env.PORT || 3000;
const API_URL = "https://v2.jokeapi.dev/joke/Any?format=txt";

// 3. Use the public folder for static files.
app.use(express.static("public"));
app.set('view engine', 'ejs');

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
app.get('/', async (req, res) => {
  try {
    const response = await axios.get(API_URL);

    res.render('index.ejs', {
         secret:response.data,
        //  username:response.data.username,
        });
  } catch (error) {
    console.log(error.response.data);
    res.status(500).send('internal server error');
  }
});
     
 


// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
