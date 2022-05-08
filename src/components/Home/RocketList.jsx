import React from "react";
import { useSelector } from "react-redux";
import { getAllRockets } from "../../redux/Rockets/RocketSlice";
import RocketDetails from "./RocketDetails";

export default function RocketList() {
  const rocketList = useSelector(getAllRockets);
  console.log(rocketList);
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        {rocketList &&
          rocketList.length &&
          rocketList.map((rocket) => {
            return (
              <div className="col p-3 col-md-3">
                <RocketDetails key={rocket.rocket.index} rocket={rocket} />;
              </div>
            );
          })}
      </div>
    </div>
  );
}
