import React from "react";
import { Card, Button } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
interface Props {
  submission: {
    studentName: string;
    submissionDate: string;
  };
}

const SubmissionCard: React.FC<Props> = ({ submission }) => {
  const { submissionDate, studentName } = submission;
  return (
    <Card title={studentName}>
      <p>
        <ClockCircleOutlined /> Submission Date: {submissionDate}
      </p>
      <a
        href='https://github.com/cem-gurel47/school-platform/blob/1a1f3af12491ca97c9ab01b59f80dbc914da1a2d/src/submission.txt'
        target='_blank'
        rel='noreferrer'
      >
        <Button type='default'>Open Submission</Button>
      </a>
    </Card>
  );
};

export default SubmissionCard;
