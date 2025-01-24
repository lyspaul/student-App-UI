import React, { useState } from "react";

const AddStudent = () => {
  //student array
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });
  //Setting the structure of the student array
  const { firstName, lastName, email, department } = student;

  //method to handle the input changes
  const handleUpdateChange = (e) => {
    //assigns the value to the target name, and then updating student array value with those changes
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  return (
    <div className="col-sm-8 py-2 px-5">
      <form>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="firstName">
            First Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="firstName"
            id="firstName"
            required
            value={firstName}
            onChange={(e) => handleUpdateChange(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="lastName"
            id="lastName"
            required
            value={lastName}
            onChange={(e) => handleUpdateChange(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="email">
            Email
          </label>
          <input
            className="form-control col-sm-6"
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => handleUpdateChange(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="department">
            Department
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="department"
            id="department"
            required
            value={department}
            onChange={(e) => handleUpdateChange(e)}
          />
        </div>

        <div className="row mb-5">
          <div className="col-sm-2">
            <button type="submit" className="btn btn-outline-success btn-leg">
              Save
            </button>
          </div>

          <div className="col-sm-2">
            <button type="submit" className="btn btn-outline-warning btn-leg">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
