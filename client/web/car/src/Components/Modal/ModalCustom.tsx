import { Modal } from "antd";
import React, { FC } from "react";

interface ModalProps {
  id: string;
  title: string;
  descritpion: string;
  img: string;
  visibility: boolean;
  onCancel?:
    | ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void)
    | undefined;
  onOk?: ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
}

const ModalCustom: FC<ModalProps> = ({
  id,
  descritpion,
  title,
  img,
  visibility,
  onCancel,
  onOk,
}) => {
  return (
    <Modal
      title="Modal 1000px width"
      centered
      width={500}
      visible={visibility}
      onCancel={onCancel}
      onOk={onOk}
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </Modal>
  );
};

export default ModalCustom;
