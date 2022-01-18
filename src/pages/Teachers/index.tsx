import { teachers } from "../../dummy/index";
import { Row, Col } from "antd";
import TeacherCard from "../../components/Cards/TeacherCard";
import styles from "./styles.module.scss";

const TeachersPage = () => {
  return (
    <Row gutter={[16, 16]}>
      {teachers.map((teacher) => (
        <Col
          key={teacher.id}
          xs={24}
          sm={12}
          lg={8}
          xl={6}
          className={styles.column}
        >
          <TeacherCard teacher={teacher} />
        </Col>
      ))}
    </Row>
  );
};

export default TeachersPage;
