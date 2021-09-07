import React from "react";
import { FC } from "react";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import "./style.css";



const Car = ({ id, descritpion, title, img, onClick }) => {
  return (
    <div style={{ margin: "auto", marginTop: 30 }} onClick={onClick}>
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
