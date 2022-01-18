import React from "react";
import IHomework from "../../../models/homework";
import { Modal, Row, Col } from "antd";
import SubmissionCard from "../../Cards/SubmissionCard";

interface Props {
  homework: IHomework;
  visible: boolean;
  setVisible: (state: boolean) => void;
}

const SubmissionsModal: React.FC<Props> = ({
  visible,
  setVisible,
  homework,
}) => {
  return (
    <Modal
      visible={visible}
      onCancel={() => setVisible(false)}
      onOk={() => setVisible(false)}
      title={`Submissions for ${homework.title}`}
    >
      <Row>
        {homework.submissions.map((submission) => (
          <Col span={24}>
            <SubmissionCard submission={submission} />
          </Col>
        ))}
      </Row>
    </Modal>
  );
};

export default SubmissionsModal;
