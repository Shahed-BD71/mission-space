import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRockets } from "../../redux/Rockets/RocketSlice";

export default function Search() {
   const [term, setTerm] = useState("");
   const dispatch = useDispatch()
   const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addRockets(term))
    console.log(term)
   }

   

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
        <button className="btn btn-primary shadow-none">Search</button>
      </form>
    </div>
  );
}
