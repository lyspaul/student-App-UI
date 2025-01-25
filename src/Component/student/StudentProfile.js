import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const StudentProfile = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      department: "",
    },
    []
  );

  //Setting the structure of the student array
  const { firstName, lastName, email, department } = student;

  useEffect(() => {
    loadStudents();
  }, []);

  //method that calls on the Rest Api to the backend to retrieve the student by id
  const loadStudents = async () => {
    const result = await axios.get(
      `http://localhost:9192/students/student/${id}`
    );
    setStudent(result.data);
    console.log("This is my data " + firstName);
  };
  return (
    // <div className="container">
    //   {student.map((students, index) => students.firstName)};
    // </div>
    <div>
      <section className="shadow" style={{ backgroundColor: "lightgray" }}>
        <div className="container py-5">
          <div className="main-body">
            <div class="row gutters-sm">
              <div class="col-md-4 mb-3">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex flex-column align-items-center text-center">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="Admin"
                        class="rounded-circle"
                        width="150"
                      ></img>
                      <div class="mt-3">
                        <h4>
                          {student.firstName} {student.lastName}
                        </h4>
                        <p class="text-secondary mb-1">
                          Student ID: {student.id}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">First Name</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {student.firstName}
                      </div>
                    </div>
                    {/* {student.map((students, index) => ( */}

                    {/* ))} */}

                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Last Name</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {student.lastName}
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Email</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">{student.email}</div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Department</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {student.department}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentProfile;
