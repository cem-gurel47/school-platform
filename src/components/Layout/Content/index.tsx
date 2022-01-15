import React from "react";
import { Layout } from "antd";
import styles from "./styles.module.scss";

const { Content } = Layout;

interface Props {
  children: React.ReactNode;
}

const index = (props: Props) => {
  return <Content className={styles.container}>{props.children}</Content>;
};

export default index;
