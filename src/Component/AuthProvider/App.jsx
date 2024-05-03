import React, { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating data and image loading
    const loadData = async () => {
      try {
        // Simulate loading time
        await new Promise(resolve => setTimeout(resolve, 2000));
        // Data and images loaded
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        // Handle error
      }
    };

    loadData();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="flex justify-center items-center h-screen">
      {isLoading ? (
        // Loader
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
      ) : (
        // Content once loading is finished
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome to My Website</h1>
          <p className="text-lg text-gray-700">Here is your content...</p>
        </div>
      )}
    </div>
  );
}

export default App;
