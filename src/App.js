import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setIsLoading(true); // redundant
    try {
      const res = await fetch(url);
      const data = await res.json();

      setIsLoading(false);
      setTours(data);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const handleNotInterested = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0)
    return (
      <main>
        <div className="title">
          <h2>No tour is available</h2>
          <button
            className="btn"
            onClick={() => {
              fetchTours();
            }}
          >
            refresh
          </button>
        </div>
      </main>
    );

  return (
    <main>
      <Tours tours={tours} handleNotInterested={handleNotInterested} />
    </main>
  );
}

export default App;
