const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const { MongoClient } = require('mongodb');
const { error } = require('console');
const app = express();
app.use(express.json());
app.use(cors());

const uploadPath = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}-${
      file.originalname
    }`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage: storage });

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
app.post('/login/signin', async (req, res) => {
  const { username, password } = req.body;

  try {
    const conn = await client.connect();
    const db = conn.db('petspot');
    const user = await db.collection('users').findOne({ username, password });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    res.json({ email: user.email });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Login failed', details: err.message });
  }
});

app.post('/find/pets', upload.single('image'), async (req, res) => {
  try {
    const {
      username,
      petName,
      location,
      description,
      date,
      time,
      contactInfo,
    } = req.body;
    const image = req.file;

    if (!image) {
      return res
        .status(400)
        .json({ success: false, message: 'Image is required.' });
    }

    // 🔌 Connect to MongoDB
    await client.connect();
    const db = client.db('petspot');
    const collection = db.collection('pets');

    const result = await collection.insertOne({
      username,
      petName,
      location,
      description,
      date,
      time,
      contactInfo,
      imageUrl: `/uploads/${image.filename}`,
    });

    res.status(200).json({
      success: true,
      message: 'Pet sighting submitted successfully!',
      data: {
        petName,
        description,
        location,
        date,
        time,
        contactInfo,
        imageUrl: `/uploads/${image.filename}`,
        _id: result.insertedId,
      },
    });
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit pet sighting. Please try again.',
    });
  } finally {
    await client.close();
  }
});
app.get('/api/profile', async (req, res) => {
  const userEmail = req.query.email;
  let conn;

  try {
    conn = await client.connect();
    const db = conn.db('petspot');
    const user = await db.collection('users').findOne({ email: userEmail });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: 'Failed to fetch profile', details: err.message });
  } finally {
    if (conn) await conn.close();
  }
});

app.post('/login/adminlogin', async (req, res) => {
  const { username, password } = req.body;

  try {
    const conn = await client.connect();
    const db = conn.db('petspot');
    const admin = await db
      .collection('adminlogin')
      .findOne({ username, password });

    if (!admin) {
      return res
        .status(401)
        .json({ success: false, error: 'Invalid credentials' });
    }

    res.json({ success: true, message: 'Login successful' });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, error: 'Login failed', details: err.message });
  } finally {
    await client.close();
  }
});
app.get('/get/persons', async (req, res) => {
  let conn;
  try {
    conn = await client.connect();
    const db = conn.db('petspot');
    const persons = await db.collection('users').find().toArray();
    res.json(persons);
  } catch (err) {
    console.error(err);
    res
      .json(500)
      .json({ success: false, error: 'Failed to fetch', details: err.message });
  } finally {
    await client.close();
  }
});

app.get('/get/adminprofile', async (req, res) => {
  const username = req.query.username;
  let conn;

  try {
    conn = await client.connect();
    const db = conn.db('petspot');
    const user = await db
      .collection('adminlogin')
      .findOne({ username: username });

    if (!user) {
      return res.status(404).json({ error: 'Admin not found' });
    }

    // Only send necessary fields
    res.json({
      username: user.username,
      // Don't send the password back for security!
    });
  } catch (err) {
    console.error('Error fetching admin profile:', err);
    res
      .status(500)
      .json({ error: 'Failed to fetch profile', details: err.message });
  } finally {
    if (conn) {
      await conn.close();
    }
  }
});
