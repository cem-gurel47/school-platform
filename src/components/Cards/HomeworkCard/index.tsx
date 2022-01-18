import React, { useState } from "react";
import IHomework from "../../../models/homework";
import { Card, Button } from "antd";
import styles from "./styles.module.scss";
import { UserOutlined } from "@ant-design/icons";
import SubmissionsModal from "../../Modals/SubmissionsModal";

interface Props {
  homework: IHomework;
}

interface SectionProps {
  title: string;
  value: string;
}

const CardSection: React.FC<SectionProps> = ({ title, value }) => (
  <p>
    <b>{`${title}: `}</b>
    {value}
  </p>
);

const HomeworkCard: React.FC<Props> = ({ homework }) => {
  const { title, description, createdDate, deadline, teacher } = homework;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Card title={title}>
      <CardSection title='Teacher' value={teacher.name} />
      <CardSection title='Creation Date' value={createdDate} />
      <CardSection title='Deadline' value={deadline} />
      <CardSection title='Description' value={description} />
      <Button
        type='primary'
        className={styles.submissionsButton}
        icon={<UserOutlined />}
        onClick={() => setModalVisible(true)}
      >
        See Submissions
      </Button>
      <SubmissionsModal
        visible={modalVisible}
        setVisible={setModalVisible}
        homework={homework}
      />
    </Card>
  );
};

export default HomeworkCard;
