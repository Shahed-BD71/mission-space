import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRockets, getAllRockets } from "../../redux/Rockets/RocketSlice";
import RocketList from "./RocketList";

export default function Rocket() {
  const dispatch = useDispatch();
  const rocketData = useSelector(getAllRockets);
  const [term, setTerm] = useState("");
  // Search Feature..
  // let searchData = rocketData.filter((o) => o.rocket.rocket_name === term);
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(addRockets(searchData));
    setTerm("");
  };

  useEffect(() => {
    const getRockets = async () => {
      try {
        const response = await axios.get("/");
        console.log(response);
        const allItems = response.data;
        console.log(allItems)
        dispatch(addRockets(allItems));
      } catch (error) {
        console.log(error);
      }
    };
    getRockets();
  }, []);

  return (
    <section className="my-5">
      <div className="d-flex my-4 justify-content-center h-100">
        <form onSubmit={handleSubmit} className="d-flex gap-2">
          <input
            type="text"
            className="form-control shadow-none"
            placeholder="search..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button className="btn btn-primary shadow-none">Search</button>
        </form>
      </div>
      <RocketList term={term}/>
    </section>
  );
}
