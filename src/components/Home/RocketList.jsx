import React from "react";
import { useSelector } from "react-redux";
import RocketDetails from "./RocketDetails";

export default function RocketList({ term }) {
  const rocketData = useSelector((state) => {
    let updateRocket = state.rockets.rockets;
    if (term) {
      return updateRocket.filter((o) => o.rocket.rocket_name === term)
    }
    else{
      return updateRocket;
    }
  }
    
  );
  

  return (
    <>
      <div className="container my-5">
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
