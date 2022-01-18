import React, { useContext } from "react";
import AuthContext from "../../../contexts/Auth";
import { Layout, Menu } from "antd";
import styles from "./styles.module.scss";
import { LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header } = Layout;

const NAVIGATION_ITEMS = {
  Principle: [
    { route: "/teachers", label: "Teachers" },
    { route: "/homeworks", label: "Homeworks" },
  ],
  Teacher: [
    { route: "/teachers", label: "Teachers" },
    { route: "/homeworks", label: "Homeworks" },
    { route: "/create-homework", label: "Create Homework" },
  ],
  Student: [{ route: "/upload-homework", label: "Upload Homework" }],
};

const AppHeader: React.FC = () => {
  const { setUser, user } = useContext(AuthContext);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
  };

  return (
    <Header className={styles.header}>
      <Menu theme='light' mode='horizontal' defaultSelectedKeys={["2"]}>
        {
          //@ts-ignore
          NAVIGATION_ITEMS[user.type]?.map(({ route, label }) => {
            return (
              <Link to={route} key={route}>
                <Menu.Item>{label}</Menu.Item>
              </Link>
            );
          })
        }
        <Menu.Item key='logout' onClick={logout} icon={<LogoutOutlined />}>
          Logout
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
