import React from "react";
import { homeworks } from "../../dummy/index";
import { Row, Col } from "antd";
import HomeworkCard from "../../components/Cards/HomeworkCard";
const HomeworksPage = () => {
  return (
    <Row>
      {homeworks.map((homework) => (
        <Col key={homework.id} xs={24} sm={12} lg={8} xl={6}>
          <HomeworkCard homework={homework} />
        </Col>
      ))}
    </Row>
  );
};

export default HomeworksPage;
