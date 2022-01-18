import { useContext } from "react";
import AuthContext from "../../../contexts/Auth";
import { homeworks } from "../../../dummy/index";
import { Row, Col } from "antd";
import HomeworkCard from "../../../components/Cards/HomeworkCard";
import styles from "./styles.module.scss";

const HomeworksPage = () => {
  const { user } = useContext(AuthContext);
  const myHomeworks = homeworks.filter(
    (homework) => homework.teacher.id === user?.id
  );
  return (
    <Row gutter={[16, 16]}>
      {myHomeworks.map((homework) => (
        <Col
          key={homework.id}
          xs={24}
          sm={12}
          lg={8}
          xl={6}
          className={styles.column}
        >
          <HomeworkCard homework={homework} />
        </Col>
      ))}
    </Row>
  );
};

export default HomeworksPage;
