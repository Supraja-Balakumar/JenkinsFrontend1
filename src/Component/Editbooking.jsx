import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./App2.css";

function Editbooking() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/booking/" + id)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8000/booking" ,data).then((res) => {
      alert("User Updated Successfully");
      navigate("/");
    });
  };

  return (
    <div>
      <div
        id="edit2"
        className="d-flex w-100 vh-100 justify-content-center align-items-center "
      >
        <div className="w-50 border bg-light p-5">
          <form onSubmit={handleSubmit}>
            <h1>UPDATE BOOKING'S DATA</h1>
            <div>
              <lable htmlFor="id">ID :</lable>
              <input
                type="text"
                disabled
                name="bid"
                className="form-control"
                value={data.bid}
                // onChange={(e) => setData({ ...data, Name: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="bdate">Booking date :</lable>
              <input
                type="text"
                name="bdate"
                className="form-control"
                value={data.bdate}
                onChange={(e) => setData({ ...data, bdate: e.target.value })}
              />
            </div>
            <div>
              <lable htmlFor="bustime">Bustime :</lable>
              <input
                type="number"
                name="bustime"
                className="form-control"
                value={data.bustime}
                onChange={(e) => setData({ ...data, bustime: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="busname">Busname :</lable>
              <input
                type="text"
                name="busname"
                className="form-control"
                value={data.busname}
                onChange={(e) => setData({ ...data, busname: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="source">Source :</lable>
              <input
                type="text"
                name="source"
                className="form-control"
                value={data.source}
                onChange={(e) => setData({ ...data, source: e.target.value })}
              />
            </div>
            
            

            <div>
            <lable htmlFor="destination">Destination :</lable>
            <input
              type="text"
              name="destination"
              className="form-control"
              value={data.destination}
              onChange={(e) =>
                setData({ ...data, destination:e.target.value })
              }
            />
          </div>
            <br />

            <button className="btn btn-info ">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Editbooking;
