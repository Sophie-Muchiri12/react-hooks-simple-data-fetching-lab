import React, { useState, useEffect } from "react";

function App() {
  const [image, setImage] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json()) // Parse the JSON from the response
      .then((data) => {
        setImage(data.message); // Set the image URL correctly
        setIsLoaded(true); // Indicate that the image has been loaded
      })
      .catch((error) => console.error("Error fetching the image:", error));
  }, []);

  if (!isLoaded) return <p>Loading...</p>; // Show loading message while fetching

  return (
    <div>
      <img src={image} alt="A Random Dog" /> {/* Display the image with the correct alt text */}
    </div>
  );
}

export default App;
