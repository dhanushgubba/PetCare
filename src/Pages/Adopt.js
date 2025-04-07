import React, { useEffect } from 'react';

const Adopt = () => {
  useEffect(() => {
    document.title = 'PetSpot | Adopt';
  }, []);
  return (
    <div className="adopt-container">
      <h1>Adopt a Pet</h1>
      <p>Find your perfect furry friend!</p>
    </div>
  );
};
export default Adopt;
