import React from "react";

export default function Search() {
  return (
    <div className="d-flex my-4 justify-content-center h-100">
      <div className="d-flex gap-2">
        <input
          type="text"
          className="form-control shadow-none"
          placeholder="search..."
          name=""
        />
        <button className="btn btn-primary">Search</button>
      </div>
    </div>
  );
}
