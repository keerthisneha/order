import React, { useState } from "react";
import "./order.css";
import details from "./details";
import Detail from "./detail";
import { Link } from "react-router-dom";
let Home = (props) => {
  console.log("ProductId: ", props.id);
  let detailscopy = [...details];

  return (
    <>
      <div className="flexing">
        <div className="display">
          <img src={props.image} width="550px" height="500px" />
          <div className="glassdetails">
            <label>
              <h1>{props.name}</h1>
              <h3>{props.glass}</h3>
              <p>{props.alcoholic}</p>
              <Link to={`/${props.id}/details`}>
                <button>Details</button>
              </Link>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
