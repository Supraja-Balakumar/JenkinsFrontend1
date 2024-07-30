import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App2.css";

function Addbooking() {
  const [inputData, setInputData] = useState({
    bid:"",
    bdate: "",
    bustime: "",
    busdate: "",
    source: "",
    destination:""
  });

  const naviget = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let result = validateValues(inputData);
    // setSubmitting(true);

    if (result === true) {
      axios
        .post("http://localhost:8000/booking", inputData)
        .then((res) => {
          alert("Data added Successfully");
          naviget("/");
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please Enter the Valid Inputs!!!");
    }
  };


  // const validateValues = (inputData) => {
  //   if (inputData.busname.length === 0) {
  //     alert("Please enter bus name !!! ");
  //     return false;
  //   } else if (inputData.source.length===0) {
  //     alert("Please enter source!!!");
  //     return false;
  //   // } else if (inputData.destination.length === 0) {
  //   //   alert("Please enter destination!!!");
  //   //   return false;
    
  //   } else {
  //     return true;
  //   }
  // };

  const validateValues = (inputData) => {
    if (inputData.bdate.length === 0) {
      alert("Please enter date !!! ");
      return false;
    } else if (inputData.bustime.length===0) {
      alert("Please enter timing !!!");
      return false;
    } else if (inputData.busname.length === 0) {
      alert("Please enter busname!!!");
      return false;
    } else if (inputData.source.length === 0) {
      alert("Please Enter the source!!!");
      return false;
    } else {
      return true;
    }
  };

  return (
    <div
      id="add2"
      className="d-flex w-100 vh-100 justify-content-center align-items-center "
    >
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleSubmit}>
          <h1>ADD BOOKING'S DATA</h1>
          <div>
            <lable htmlFor="bdate">bookingdate</lable>
            <input
              type="number"
              name="bdate"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, bdate: e.target.value })
              }
            />
          </div>
          <div>
            <lable htmlFor="bustime">Bus Time :</lable>
            <input
              type="number"
              name="bustime"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, bustime: e.target.value })
              }
            />
          </div>

          <div>
            <lable htmlFor="busname">Bus Name :</lable>
            <input
              type="text"
              name="busname"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, busname: e.target.value })
              }
            />
          </div>

          <div>
            <lable htmlFor="source">Source :</lable>
            <input
              type="text"
              name="source"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, source: e.target.value })
              }
            />
          </div>

          <div>
            <lable htmlFor="destination">Destination :</lable>
            <input
              type="text"
              name="destination"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, destination: e.target.value })
              }
            />
          </div>
          <br />

          <button className="btn btn-info ">Submit</button>
        </form>

        
      </div>
    </div>
  );
}

export default Addbooking;
