import React, { useEffect, useState } from 'react';
import './Pets.css';

const Pets = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    petName: '',
    petType: '',
    location: '',
    description: '',
    date: '',
    time: '',
    contactInfo: '',
    image: null,
  });

  useEffect(() => {
    document.title = 'PetSpot | Report Seen Pets';
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevState) => ({
        ...prevState,
        image: file,
      }));
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleReset = () => {
    setFormData({
      username: '',
      petName: '',
      petType: '',
      location: '',
      description: '',
      date: '',
      time: '',
      contactInfo: '',
      image: null,
    });
    setPreviewImage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('username', formData.username);
    data.append('petName', formData.petName);
    data.append('petType', formData.petType);
    data.append('location', formData.location);
    data.append('description', formData.description);
    data.append('date', formData.date);
    data.append('time', formData.time);
    data.append('contactInfo', formData.contactInfo);
    data.append('image', formData.image);

    try {
      const response = await fetch('http://localhost:5000/find/pets', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        alert('Pet sighting submitted successfully!');
        handleReset();
      } else {
        alert('Failed to submit pet sighting. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="pets-container">
      <div className="pets-content">
        <div className="pets-header">
          <h2>Submit a Seen Pet</h2>
          <p>
            Help reunite lost pets with their families by reporting sightings
          </p>
        </div>

        <form
          className="pets-form"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="form-group">
            <label htmlFor="username">
              <span className="label-text">Your Name</span>
              <span className="required">*</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="petName">
              <span className="label-text">Pet Name</span>
              <span className="required">*</span>
            </label>
            <input
              type="text"
              id="petName"
              name="petName"
              value={formData.petName}
              onChange={handleChange}
              placeholder="Enter pet name (if known)"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="image" className="camera-label">
              📷 Upload or Take a Photo
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              capture="environment"
              onChange={handleImageChange}
            />
            {previewImage && (
              <div className="image-preview">
                <img src={previewImage} alt="Preview" height="100" />
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="petType">
              <span className="label-text">Pet Type</span>
              <span className="required">*</span>
            </label>
            <select
              id="petType"
              name="petType"
              value={formData.petType}
              onChange={handleChange}
              required
            >
              <option value="">Select pet type...</option>
              <option value="dog">Dog 🐕</option>
              <option value="cat">Cat 🐱</option>
              <option value="bird">Bird 🦜</option>
              <option value="rabbit">Rabbit 🐰</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">
                <span className="label-text">Date Seen</span>
                <span className="required">*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">
                <span className="label-text">Time Seen</span>
                <span className="required">*</span>
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="location">
              <span className="label-text">Location Seen</span>
              <span className="required">*</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter the location where you saw the pet"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">
              <span className="label-text">Description</span>
              <span className="required">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Describe the pet's appearance, behavior, and any distinctive features"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="contactInfo">
              <span className="label-text">Contact Information</span>
              <span className="required">*</span>
            </label>
            <input
              type="text"
              id="contactInfo"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
              placeholder="Your phone number or email"
              required
            />
          </div>

          <div className="form-buttons">
            <button type="submit" className="submit-btn">
              Submit Report
            </button>
            <button type="button" className="reset-btn" onClick={handleReset}>
              Clear Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Pets;
