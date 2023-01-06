import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Dropdown = ({ dropDetails, dropTitle }) => {
  const [opened, setOpened] = useState(false);

  function toggle() {
    setOpened((opened) => !opened);
  }
  return (
    <div className="dropdown">
      <div className="dropdown-button" onClick={toggle}>
        <h4 className="drop-title">{dropTitle}</h4>
        {opened ? (
          <img src="/arrow_up.svg" alt="arrow" />
        ) : (
          <img src="/arrow_down.svg" alt="arrow" />
        )}
      </div>
      <div className="dropdown-details">
        {opened && <div className="drop-details">{dropDetails}</div>}
      </div>
    </div>
  );
};

export default Dropdown;
