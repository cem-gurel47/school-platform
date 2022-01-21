import { useContext } from "react";
import { Row, Col } from "antd";
import HomeworkUploadCard from "../../../components/Cards/HomeworkUploadCard";
import AuthContext from "../../../contexts/Auth/index";
import { homeworks as allHomeworks } from "../../../dummy/index";
import styles from "./styles.module.scss";

const StudentHomeworksPage = () => {
  const { user } = useContext(AuthContext);
  const homeworks = allHomeworks.filter((homework) =>
    user?.takingCourses?.includes(homework.course)
  );

  console.log(user);

  console.log(homeworks);

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
          <HomeworkUploadCard homework={homework} />
        </Col>
      ))}
    </Row>
  );
};

export default StudentHomeworksPage;
