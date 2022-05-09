import React from "react";
import { useSelector } from "react-redux";
import { getAllRockets } from "../../redux/Rockets/RocketSlice";
import RocketDetails from "./RocketDetails";
import Search from "./Search";

export default function RocketList() {
  const rocketData = useSelector(getAllRockets);
  let term = rocketData.find(o => o.rocket.rocket_name === 'Falcon 1');
  if (term) {
    console.log(rocketData)
  }
  return (
    <>
      <div className="container my-5">
        <Search />
        <div className="row justify-content-center">
          {rocketData && rocketData.length !== 0 ? (
            rocketData.map((rocket) => {
              return (
                <div className="col-10 col-sm-6 p-3 col-md-4 col-lg-3">
                  <RocketDetails key={rocket.index} rocket={rocket} />;
                </div>
              );
            })
          ) : (
            <div className="spinner-grow mt-5" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
