import React from "react";
import { Card, Button } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
interface Props {
  submission: {
    studentName: string;
    submissionDate: string;
    submissionFile: File;
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
        href='https://github.com/cem-gurel47/school-platform/blob/master/src/submission.txt'
        download
      >
        <Button type='default'>Download Submission</Button>
      </a>
    </Card>
  );
};

export default SubmissionCard;
