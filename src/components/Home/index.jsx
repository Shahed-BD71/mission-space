import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addRockets } from "../../redux/Rockets/RocketSlice";
import RocketList from "./RocketList";
import Search from "./Search";

export default function Rocket() {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");
  console.log(term)
  const [select, setSelect] = useState("");
  const handleSelect = (e) => {
    setSelect(e.target.value);
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
      <div className="row mx-auto justify-content-center">
        <div className="d-md-flex col-8 col-md-6 gap-4">
          <Search/>
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
