import CloudIcon from "@mui/icons-material/Cloud";
import "./Weather.css";
import { useEffect, useState } from "react";

export default function Weather({
  temp,
  tempmin,
  tempmax,
  desc,
  name,
  img,
  date,
}) {
 
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="card-title">
            <h1 className="card-cityname">{name}</h1>
            <h3 className="card-history">{date} </h3>
          </div>
          <hr />
          <div className="card-body">
            <div className="weather-desc">
              <h1 className="temp">
                {temp}
                <img src={img} />
              </h1>
              <p className="skystatus">{desc}</p>
              <p className="temps">
              Max:{tempmax}Cْ   
              </p>
              <p className="temps">
              Min:{tempmin}Cْ  
              </p>
            </div>
            <CloudIcon style={{ fontSize: "16rem", color: "white" }} />
          </div>
        </div>
      </div>
    </>
  );
}
