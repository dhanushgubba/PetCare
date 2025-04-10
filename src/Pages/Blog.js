import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-post">
        <img
          src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6"
          alt="Adopted Puppy"
        />
        <div className="blog-content">
          <h2>Why Adoption is Better Than Buying</h2>
          <p>
            Adopting a pet not only saves lives but also gives you a loyal
            companion for life. Shelters are full of loving animals waiting for
            a second chance. Choose adoption and make a difference!
          </p>
        </div>
      </div>

      <div className="blog-post">
        <img
          src="https://images.unsplash.com/photo-1558788353-f76d92427f16"
          alt="Happy Adopted Cat"
        />
        <div className="blog-content">
          <h2>First Week Tips After Adoption</h2>
          <p>
            Bringing home a new pet is exciting! Prepare a cozy space, be
            patient during the adjustment period, and establish routines. The
            first week is crucial to build trust and love.
          </p>
        </div>
      </div>

      <div className="blog-post">
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
          alt="Dog and Kid"
        />
        <div className="blog-content">
          <h2>How Pets Improve Your Life</h2>
          <p>
            Pets offer unconditional love, reduce stress, and encourage an
            active lifestyle. Studies show pet owners are happier and healthier.
            Ready to find your best friend? Start your adoption journey today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
