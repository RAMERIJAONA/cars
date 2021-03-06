import { Divider, Modal, Typography } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import { userList } from "../../Lib/users";
import User from "../User";
import "./style.css";
const { Text } = Typography;



const ModalCustom = ({
  id,
  description,
  title,
  img,
  visibility,
  onCancel,
  onOk,
}) => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await userList();
      setUsers(data);
    };
    getData();
  }, []);

  return (
    <Modal
      title={title}
      centered
      width={500}
      visible={visibility}
      onCancel={onCancel}
      onOk={onOk}
    >
      <Scrollbars style={{ height: 620 }} hideTracksWhenNotNeeded={true}>
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
        <Divider />
        {users?.map((user, index) => {
          return (
            <User
              key={index}
              name={user?.name ?? ""}
              username={user?.name?.substring(0, 2)}
              commentary={user?.body}
            />
          );
        })}
      </Scrollbars>
      <div className="scroll">
        <TextArea rows={4} placeholder={"Votre commentaire..."} />
      </div>
    </Modal>
  );
};

export default ModalCustom;
