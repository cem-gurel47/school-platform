import React, { useState, useCallback, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Content } from "./components/Layout";
import AuthContext from "./contexts/Auth";
import Login from "./pages/login/index";
import IUser from "./models/user";
import "antd/dist/antd.css";

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
          <Content>
            {user ? (
              <>
                <Header />
                <Routes>
                  <Route path='/home' element={<div>Home Page</div>} />
                </Routes>
              </>
            ) : (
              <Login />
            )}
          </Content>
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
