import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import { useState } from "react";
import "./App.css";
import Home from "./Home";
import StudentsView from "./Component/student/StudentsView";
import NavBar from "./Component/Common/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./Component/student/AddStudent";
import UpdateStudent from "./Component/student/UpdateStudent";
import StudentProfile from "./Component/student/StudentProfile";
function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="container mt-5">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/view-students" element={<StudentsView />}></Route>
          <Route exact path="/add-students" element={<AddStudent />}></Route>
          <Route
            exact
            path="/update-student/:id"
            element={<UpdateStudent />}
          ></Route>
          <Route
            exact
            path="/student-profile/:id"
            element={<StudentProfile />}
          ></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
