import React from "react";
import { Modal, Row, Col } from "antd";
import CardSection from "../../Cards/CardSection";

interface Props {
  students: {
    name: string;
  }[];
  visible: boolean;
  setVisible: (state: boolean) => void;
}

const StudentsModal: React.FC<Props> = ({ visible, setVisible, students }) => {
  return (
    <Modal
      visible={visible}
      onCancel={() => setVisible(false)}
      onOk={() => setVisible(false)}
      title={`Students`}
    >
      <Row>
        {students.map((student) => (
          <Col span={24}>
            <CardSection title='Name' value={student.name} />
          </Col>
        ))}
      </Row>
    </Modal>
  );
};

export default StudentsModal;
