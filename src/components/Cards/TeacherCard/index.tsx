import React, { useState } from "react";
import IUser from "../../../models/user";
import { Card, Button } from "antd";
import styles from "./styles.module.scss";
import CardSection from "../CardSection";
import StudentsModal from "../../Modals/StudentsModal";

interface Props {
  teacher: IUser;
}

const TeacherCard: React.FC<Props> = ({ teacher }) => {
  const { name, students, teachingCourse } = teacher;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Card title={name}>
      <CardSection title='Teaching Course' value={teachingCourse || ""} />
      <CardSection
        title='Number of Students'
        value={students?.length.toString() || "0"}
      />
      <Button
        type='primary'
        onClick={() => setModalVisible(true)}
        className={styles.studentsButton}
      >
        See Students
      </Button>
      <StudentsModal
        visible={modalVisible}
        setVisible={setModalVisible}
        students={students || []}
      />
    </Card>
  );
};

export default TeacherCard;
