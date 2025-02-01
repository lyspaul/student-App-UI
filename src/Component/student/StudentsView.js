import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../Common/Search";

const StudentsView = () => {
  //students array to hold all students from the back end and it includes the setStudents method.
  const [students, setStudents] = useState([]);

  //search string variable value initialized to empty
  const [search, setSearch] = useState("");

  //Display the students data on the UI.
  useEffect(() => {
    loadStudents();
  }, []);

  //method that calls on the Rest Api to the backend to retrieve the students data
  const loadStudents = async () => {
    const result = await axios.get(
      "https://studentapp-production-8140.up.railway.app/students",
      {
        validateStatus: () => {
          return true;
        },
      }
    );
    if (result.status === 302) {
      setStudents(result.data);
    }
  };
  //variable that deletes a student profile based on student id
  const handleDelete = async (id) => {
    await axios.delete(
      `http://studentapp-production-8140.up.railway.app/students/delete/${id}`
    );
    loadStudents();
  };
  return (
    <section>
      {/* Initialize to set search as a function */}
      <Search search={search} setSearch={setSearch} />
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {students
            .filter((st) => st.firstName.toLowerCase().includes(search))
            .map((student, index) => (
              <tr key={student.id}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.email}</td>
                <td>{student.department}</td>
                <td className="mx-2">
                  <Link
                    to={`/student-profile/${student.id}`}
                    className="btn btn-info"
                  >
                    <FaEye />
                  </Link>
                </td>
                <td className="mx-2">
                  <Link
                    to={`/update-student/${student.id}`}
                    className="btn btn-warning"
                  >
                    <FaEdit />
                  </Link>
                </td>
                <td className="mx-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(student.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default StudentsView;
