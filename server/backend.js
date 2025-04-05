const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port number ${PORT}`));

const uri =
  'mongodb+srv://dhanush:dhanush@cluster0.ar7z0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri);

app.get('/klef/test', async function (req, res) {
  res.json('Koneru Lakshmaiah Education Foundation');
});

app.post('/klef/cse', async function (req, res) {
  res.json(req.body);
});

app.get('/', async function (req, res) {
  res.json('Welcome to Pet Spot');
});

app.post('/register/signup', async function (req, res) {
  const { username, email, phone, address, password, confirmpassword } =
    req.body;
  try {
    await client.connect();
    const database = client.db('petspot');
    const collection = database.collection('users');
    const result = await collection.insertOne({
      username,
      email,
      phone,
      address,
      password,
      confirmpassword,
    });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});
app.post('/login/signin', async function (req, res) {
  const { username, password } = req.body;
  const db = client.db('petspot');
  const collection = db.collection('users');

  const user = await collection.findOne({ username, password });
  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }
  res.json({ message: 'Login successful', user });
});
