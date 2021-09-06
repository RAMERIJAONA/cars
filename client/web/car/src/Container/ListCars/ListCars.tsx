import React, { FC } from "react";
import Car from "../../Components/Car";
import { cars } from "../../Lib/carsData";
import "./style.css";

const ListCars: FC = () => {
  return (
    <div className="cars">
      {cars?.map((car) => {
        return (
          <Car
            key={car.id}
            id={car.id}
            img={car.img}
            title={car.title}
            descritpion={car.descritpion}
          />
        );
      })}
    </div>
  );
};

export default ListCars;
