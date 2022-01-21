import React, { useState } from "react";
import IHomework from "../../../models/homework";
import { Modal, Row, Col, Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { UploadChangeParam } from "antd/lib/upload";

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
  const [file, setFile] = useState<undefined | UploadChangeParam<unknown>>();
  const [submitting, setSubmitting] = useState(false);

  return (
    <Modal
      visible={visible}
      onCancel={() => setVisible(false)}
      onOk={() => {
        setSubmitting(true);
        setTimeout(() => {
          setSubmitting(false);
          message.success("Uploaded homework successfully");
        }, 1500);
        console.log(file);
      }}
      title={`Upload for ${homework.title}`}
      okText='Submit'
      okButtonProps={{
        disabled: file === undefined,
        loading: submitting,
      }}
    >
      <Row>
        <Col span={24}>
          <Upload
            maxCount={1}
            onChange={(fileData) =>
              file ? setFile(undefined) : setFile(fileData)
            }
            onRemove={() => {
              console.log("removed");
              setFile(undefined);
            }}
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Col>
      </Row>
    </Modal>
  );
};

export default SubmissionsModal;
