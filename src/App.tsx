import React, { useState, useCallback, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Content } from "./components/Layout";
import { Spin } from "antd";
import AuthContext from "./contexts/Auth";
import Login from "./pages/login/index";
import IUser from "./models/user";
import "antd/dist/antd.css";

//Principle
const HomeworksPage = lazy(() => import("./pages/Principle/Homeworks"));
const TeachersPage = lazy(() => import("./pages/Principle/Teachers"));

//Teacher
const TeacherHomeworksPage = lazy(() => import("./pages/Teacher/Homeworks"));

function App() {
  const [user, setUser] = useState<null | IUser>(null);

  const checkIfUserExists = useCallback(() => {
    const user = localStorage.getItem("user") || sessionStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  useEffect(() => {
    checkIfUserExists();
  }, [checkIfUserExists]);

  return (
    <div>
      <Router>
        <AuthContext.Provider value={{ user: user, setUser: setUser }}>
          {user ? (
            <>
              <Header />
              <Suspense fallback={<Spin />}>
                <Content>
                  <Routes>
                    <Route path='/home' element={<div>Home Page</div>} />
                    <Route
                      path='/homeworks'
                      element={
                        user.type === "Principle" ? (
                          <HomeworksPage />
                        ) : (
                          <TeacherHomeworksPage />
                        )
                      }
                    />
                    <Route path='/teachers' element={<TeachersPage />} />
                  </Routes>
                </Content>
              </Suspense>
            </>
          ) : (
            <Login />
          )}
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
