import React from "react";

export default function RocketDetails({ rocket }) {

  // let term = rocket.find(o => o.rocket.rocket.rocket_name === 'falcon 1');
  // console.log(term)
  
  return (
    <div className="card h-100 align-items-center">
      {/*<img className="card-img-top img-fluid img-thumbnail w-25" src={rocket?.links.mission_patch} alt={rocket.mission_name} /> */}
      <div className="card-body">
        <h6 className="card-title">Mission: <span className="fw-bolder">{rocket.mission_name}</span></h6>
        <p className="card-title">
          Rocket: {rocket.rocket.rocket_name}
        </p>
        <p className="card-text">Launch Year: <span className="fw-bold">{rocket.launch_year}</span></p>
        {/*<p className="card-text">{rocket.launch_failure_details?.reason}</p>*/}
        <div className="mt-3">
          {rocket.launch_success == !false ? (
            <span className="p-2 btn-success rounded">Success</span>
          ) : (
            <span className="p-2 btn-danger rounded">Failure</span>
          )}
        </div>
      </div>
    </div>
  );
}
