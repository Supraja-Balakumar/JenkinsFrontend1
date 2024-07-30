import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./App2.css";

function View() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => { 
    axios
      .get("http://localhost:8000/booking/all")
      .then((response) => {
        setColumns(Object.keys(response.data[0]));
        setRecords(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let handleSubmit = (id) => {
    const conf = window.confirm("Do you want to delete");
    if (conf) {
      axios
        .delete("http://localhost:8000/booking/" + id)
        .then((res) => {
          alert("record has deleted");
          navigate("/");
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div id="body">
      <div className="container ">
        <h1 id="app2" className="text-center text-bg-success ">
          Booking Management System
        </h1>

        <div className="text-end">
          <Link to="/addbooking" className="btn btn-primary">
            Add +
          </Link>
        </div>
        <br />
        <table className="table table-bordered  table-info w-100 border bg-white shadow px-5 pb-5 rounded ">
          <thead>
            <tr>
              {/* {columns.map((c, i) => (
                <th key={i}>{c}</th>
              ))} */}
              <th>Booking Id</th>
              <th>Booking date</th>
              <th>Bus time</th>
              <th>Busdate</th>
              <th>Source</th>
              <th>Destination</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {records.map((d, i) => (
              <tr key={i}>
                <td>{d.bid}</td>
                <td>{d.bdate}</td>
                <td>{d.bustime}</td>
                <td>{d.busname}</td>
                <td>{d.source}</td>
                <td>{d.destination}</td>

                <td>
                  <Link
                    to={`/editbooking/${d.bid}`}
                    className="btn btn-sm btn-success "
                  >
                    Update
                  </Link>
                  <button
                    onClick={(e) => handleSubmit(d.bid)}
                    className="btn btn-sm ms-1 btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default View;
