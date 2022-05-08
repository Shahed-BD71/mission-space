import React from "react";
import { useSelector } from "react-redux";
import { getAllRockets } from "../../redux/Rockets/RocketSlice";
import RocketDetails from "./RocketDetails";

export default function RocketList() {
  const rocketList = useSelector(getAllRockets);
  return (
    <div>
      {rocketList &&
        rocketList.length &&
        rocketList.map((rocket) => {
          return <RocketDetails key={rocket.flight_number} rocket={rocket} />;
        })}
    </div>
  );
}
