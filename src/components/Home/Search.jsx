import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRockets, getAllRockets } from "../../redux/Rockets/RocketSlice";

export default function Search() {
  // Search..
  const [term, setTerm] = useState("");
  console.log(term)
  const rocketData = useSelector(getAllRockets);
  let searchData = rocketData.filter((o) => o.rocket.rocket_name.toLowerCase() === term.toLowerCase());
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addRockets(searchData));
    e.target.reset();
  };

  return (
      <form  onSubmit={(e) => {
        handleSubmit(e);
      }} className="d-flex gap-2">
        <input
          type="text"
          className="form-control shadow-none"
          placeholder="search..."
          name={term}
          onBlur={(e) => setTerm(e.target.value)}
        />
        <button type="submit" className="btn btn-primary shadow-none">Search</button>
      </form>
  );
}
