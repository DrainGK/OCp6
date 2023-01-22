import { React, useState } from "react";
import Slider from "../components/Slider";
import Dropdown from "../components/Dropdown";
import Stars from "./Stars";

const Rent = (props) => {
  const { house } = props;
  const [equip, setEquip] = useState(house.equipments);
  const [tags, setTags] = useState(house.tags);

  return (
    <div className="rent">
      <div className="title-background">
        <Slider slides={house.pictures} />
      </div>
      <div className="rent-container">
        <div className="house-info">
          <p className="title">{house.title}</p>
          <p className="sub-title">{house.location}</p>
          <div className="tags-container">
            {tags.map((res, index) => {
              return (
                <span className="tags" key={index}>
                  {res}
                </span>
              );
            })}
          </div>
        </div>
        <div className="owner">
          <div className="owner-infos">
            <p>{house.host.name}</p>
            <img src={house.host.picture} alt={house.host.name} />
          </div>
          <div className="stars-container">
            <Stars rates={house.rating} />
          </div>
        </div>
      </div>
      <div className="rent-info">
        <div className="dropdown-container">
          <Dropdown
            key={house.id}
            dropTitle="description"
            dropDetails={<h4>{house.description}</h4>}
          />
        </div>
        <div className="dropdown-container">
          <Dropdown
            key={house.id}
            dropTitle="équipements"
            dropDetails={equip.map((equipment, index) => {
              return (
                <ul>
                  <li key={index}>{equipment}</li>
                </ul>
              );
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default Rent;
