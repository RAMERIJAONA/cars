import React, { FC } from "react";
import { Avatar } from "antd";
import Title from "antd/lib/typography/Title";
import { Typography } from "antd";
const { Text } = Typography;


const User = ({ name, username, commentary }) => {
  const colorList = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];

  return (
    <div style={{ display: "flex", flexDirection: "row", marginBottom: 16 }}>
      <div style={{ marginRight: 20 }}>
        <Avatar
          style={{
            backgroundColor:
              colorList[Math.floor(Math.random() * colorList.length)],
            verticalAlign: "middle",
          }}
          size="large"
          gap={4}
        >
          {username}
        </Avatar>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <Title level={5}>{name}</Title>
        </div>
        <div>
          <Text type="secondary">{commentary}</Text>
        </div>
      </div>
    </div>
  );
};

export default User;
