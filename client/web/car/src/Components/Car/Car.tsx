import React from "react";
import { FC } from "react";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

const Car: FC = () => {
  return (
    <Card
      hoverable
      style={{ width: 350 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
};

export default Car;
