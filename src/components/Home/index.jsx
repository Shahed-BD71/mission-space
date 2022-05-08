import axios from "axios";
import React, { useEffect, useState } from "react";

export default function RocketList() {
  const [Item, setItem] = useState([]);
  useEffect(() => {
    const getRockets = async () => {
      try {
        const response = await axios.get('/');
        console.log(response)
        const allItems = response.data;
        console.log(allItems);
      } catch (error) {
        console.log(error);
      }
    };
    getRockets();
  }, []);

  return <div>
  </div>;
}
