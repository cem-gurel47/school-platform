import { homeworks } from "../../dummy/index";
import { Row, Col } from "antd";
import HomeworkCard from "../../components/Cards/HomeworkCard";
import styles from "./styles.module.scss";

const HomeworksPage = () => {
  return (
    <Row gutter={[16, 16]}>
      {homeworks.map((homework) => (
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
