import React from "react";
import { useSelector } from "react-redux";
import RocketDetails from "./RocketDetails";

export default function RocketList({ term, select }) {
  const rocketData = useSelector((state) => {
    let date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
    let filterRocket = state.rockets.rockets;
    if (term) {
      return filterRocket.filter((o) => o.rocket.rocket_name === term);
    } else if (select === "success") {
      return filterRocket.filter((o) => o.launch_success);
    } else if (select === "failure") {
      return filterRocket.filter((o) => !o.launch_success);
    } else if (select === "upcoming") {
      return filterRocket.filter((o) => o.upcoming);
    } else if (select === "year") {
      return filterRocket.filter((o) => o.launch_year == yyyy - 2); //using 2, because last year has no value
    } else {
      return filterRocket;
    }
  });

  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          {rocketData && rocketData.length !== 0 ? (
            rocketData.map((rocket) => {
              return (
                <div className="col-10 col-sm-6 p-3 col-md-4 col-lg-3">
                  <RocketDetails key={rocket.index} rocket={rocket} />
                </div>
              )
            })
          ) : (
            <div className="spinner-grow mt-5" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
