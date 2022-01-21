import React, { useState } from "react";
import IHomework from "../../../models/homework";
import { Card, Button } from "antd";
import styles from "../HomeworkCard/styles.module.scss";
import { UploadOutlined } from "@ant-design/icons";
import UploadHomeworkModal from "../../Modals/UploadHomeworkModal";
import CardSection from "../CardSection";

interface Props {
  homework: IHomework;
}

const HomeworkUploadCard: React.FC<Props> = ({ homework }) => {
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
        icon={<UploadOutlined />}
        onClick={() => setModalVisible(true)}
      >
        Upload Homework
      </Button>
      <UploadHomeworkModal
        visible={modalVisible}
        setVisible={setModalVisible}
        homework={homework}
      />
    </Card>
  );
};

export default HomeworkUploadCard;
