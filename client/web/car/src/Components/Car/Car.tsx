import React from "react";
import { FC } from "react";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import "./style.css";

interface CarPorps {
  id: string;
  title: string;
  descritpion: string;
  img: string;
}

const Car: FC<CarPorps> = ({ id, descritpion, title, img }) => {
  return (
    <div style={{ margin: "auto", marginTop: 30 }}>
      <Card
        style={{ width: 350, minHeight: 400 }}
        hoverable
        cover={
          <img
            alt={title}
            src={img}
            style={{
              padding: 10,
              height: 250,
              width: "100%",
              objectFit: "contain",
            }}
          />
        }
      >
        <Meta
          title={title}
          className="metaClass"
          description={descritpion}
          style={{ height: 5 }}
        />
      </Card>
    </div>
  );
};

export default Car;
