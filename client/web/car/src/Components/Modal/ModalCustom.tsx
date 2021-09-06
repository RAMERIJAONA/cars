import { Modal } from "antd";
import React, { FC } from "react";
import { Typography } from "antd";
const { Text } = Typography;

interface ModalProps {
  id: string;
  title: string;
  description: string;
  img: string;
  visibility: boolean;
  onCancel?:
    | ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void)
    | undefined;
  onOk?: ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
}

const ModalCustom: FC<ModalProps> = ({
  id,
  description,
  title,
  img,
  visibility,
  onCancel,
  onOk,
}) => {
  return (
    <Modal
      title={title}
      centered
      width={500}
      visible={visibility}
      onCancel={onCancel}
      onOk={onOk}
    >
      <img
        src={img}
        alt={title}
        style={{
          padding: 10,
          height: 250,
          width: "100%",
          objectFit: "contain",
        }}
      />
      <Text type="secondary">{description}</Text>
    </Modal>
  );
};

export default ModalCustom;
