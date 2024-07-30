import axios from "axios";
import React from "react";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./App2.css";
import "./Reg.css";

function Add() {
  const [records, setRecords] = useState([]);
  const[data,setData]=useState([])
  const [inputData, setInputData] = useState({
    id:"-1 ",
    name: "",
    city:"",
    gender:"",
    age: "",
    booking:
    {
    bid:"",
    bdate: "",
    bustime: "",
    busname: "",
    source: "",
    destination: ""
  }
});

useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await axios.get("http://localhost:8000/booking/idlist")
      .then((res) => {
        console.log(res.data);
        setRecords(res.data);
        return res.data;
      })
      .catch((err) => console.error(err));
  };

  let handleChange = (e) => {
    // if (e.target.name === "aid") {
        console.log(e.target.value);
        setInputData({ ...inputData, booking: { bid: e.target.value } });
        axios.get("http://localhost:8000/booking/"+e.target.value)
        .then((res)=>{
            console.log(res.data);
            setInputData({ ...inputData, booking: res.data });
            return res.data;
        })
        .catch((err) => console.error(err));
    // }; 
  }

  const naviget = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let result = validateValues(inputData);
    // setSubmitting(true);

    if (result === true) {
      console.log(inputData);
      axios
        .post("http://localhost:8000/customer", inputData)
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


  const validateValues = (inputData) => {
    if (inputData.name.length === 0) {
      alert("Enter the name ");
      return false;
    } else if (inputData.city.length==0) {
        alert("Enter Valid city ");
      return false;
    } 
    else {
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
          <h1>ADD CUSTOMER DATA</h1>
          <div>
            <lable htmlFor="Name">Name</lable>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
          </div>
          <div>
            <lable htmlFor="City">City :</lable>
            <input
              type="text"
              name="city"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, city: e.target.value })
              }
            />
          </div>

          <div>
            <lable htmlFor="Gender">Gender :</lable>
            <input
              type="text"
              name="gender"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, gender: e.target.value })
              }
            />
          </div>

          <div>
            <lable htmlFor="Age">Age :</lable>
            <input
              type="number"
              name="age"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, age: e.target.value })
              }
            />
          </div>

          <div>
          <label htmlFor="bid">Booking Id</label>
          
                  <select
                    class="form-select"
                    required="required"
                    name="bid"
                    title="Select ID "
                    onChange={handleChange}
                  >
                    <option name="bid" selected="selected">
                      Select One
                    </option>
                    {records.map((items) => (
                      <option value={items} key={items}>
                        {items}
                      </option>
                    ))}
                  </select>
            </div>

          <br />

          <button className="btn btn-info ">Submit</button>
        </form>

        
      </div>
    </div>
  );
}

export default Add;
