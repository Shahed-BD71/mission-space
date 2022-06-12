import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRockets } from "../../redux/Rockets/RocketSlice";

export default function Search() {
  // Search..
  const [term, setTerm] = useState("");
  const rocketData = useSelector(getAllRockets);
  let searchData = rocketData.filter((o) => o.rocket.rocket_name === term);
  console.log(searchData);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addRockets(searchData));
    console.log(term);
  };

  return (
    <div className="d-flex my-4 justify-content-center h-100">
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          type="text"
          className="form-control shadow-none"
          placeholder="search..."
          name=""
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit" className="btn btn-primary shadow-none">Search</button>
      </form>
    </div>
  );
}
