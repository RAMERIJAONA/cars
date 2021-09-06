import React, { FC, useState } from "react";
import Car from "../../Components/Car";
import ModalCustom from "../../Components/Modal";
import { cars } from "../../Lib/carsData";
import "./style.css";

const ListCars: FC = () => {
  const [car, setCar] = useState({
    id: "",
    img: "",
    title: "",
    description: "",
  });

  const [visibility, setVisibility] = useState(false);

  const onClickCar = (
    id: string,
    img: string,
    title: string,
    description: string
  ) => {
    setCar({ id, img, title, description });
    setVisibility(true);
  };

  const onOkOrOnCancel = () => {
    setVisibility(false);
  };

  return (
    <>
      <ModalCustom
        id={car.id}
        img={car.img}
        title={car.title}
        description={car.description}
        visibility={visibility}
        onOk={() => {}}
        onCancel={onOkOrOnCancel}
      />
      <div className="cars">
        {cars?.map((car) => {
          return (
            <Car
              key={car.id}
              id={car.id}
              img={car.img}
              title={car.title}
              descritpion={car.descritpion}
              onClick={() =>
                onClickCar(car.id, car.img, car.title, car.descritpion)
              }
            />
          );
        })}
      </div>
    </>
  );
};

export default ListCars;
