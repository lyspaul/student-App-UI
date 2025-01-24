import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";

const StudentsView = () => {
  //students array to hold all students from the back end and it includes the setStudents method.
  const [students, setStudents] = useState([]);

  //Display the students data on the UI.
  useEffect(() => {
    loadStudents();
  }, []);

  //method that calls on the Rest Api to the backend to retrieve the students data
  const loadStudents = async () => {
    const result = await axios.get("http://localhost:9192/students", {
      validateStatus: () => {
        return true;
      },
    });
    if (result.status === 302) {
      setStudents(result.data);
    }
  };
  return (
    <section>
      <table className="table table-bordered table-hover">
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
          {students.map((student, index) => (
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
                  to={`/edit-student/${student.id}`}
                  className="btn btn-warning"
                >
                  <FaEdit />
                </Link>
              </td>
              <td className="mx-2">
                <button className="btn btn-danger">
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
