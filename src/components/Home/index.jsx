import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addRockets } from "../../redux/Rockets/RocketSlice";
import RocketList from "./RocketList";

export default function Rocket() {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");
  console.log(term)
  const [select, setSelect] = useState("");
  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTerm("");
  };

  useEffect(() => {
    const getRockets = async () => {
      try {
        const response = await axios.get("/");
        const allItems = response.data;
        dispatch(addRockets(allItems));
      } catch (error) {
        console.log(error);
      }
    };
    getRockets();
  }, []);

  return (
    <section className="my-5 container">
      <div className="row mx-auto">
        <div className="d-md-flex justify-content-center gap-4">
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
          <div className="justify-content-center mt-3 mt-md-0">
            <select
              onChange={handleSelect}
              className="form-select"
              aria-label="size 3 select example"
            >
              <option selected disabled>
                Filters
              </option>
              <optgroup value="launch_date" label="Launch Date">
                <option value="week">Last week</option>
                <option value="month">Last Month</option>
                <option value="year">Last Year</option>
              </optgroup>
              <optgroup value="launch_status" label="Launch Status">
                <option value="success">Success</option>
                <option value="failure">Failure</option>
              </optgroup>
              <option value="upcoming">Upcoming</option>
            </select>
          </div>
        </div>
      </div>
      <RocketList term={term} select={select} />
    </section>
  );
}
