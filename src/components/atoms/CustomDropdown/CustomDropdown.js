import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./styles.scss";

export const CustomDropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const { title } = props;
  return (
    <div>
      <p className="input-title">{title}</p>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} className="w-100">
        <DropdownToggle className="dropdown-style" caret>Toque para selecionar</DropdownToggle>
        <DropdownMenu className="w-100">
          <DropdownItem>1</DropdownItem>
          <DropdownItem>2</DropdownItem>
          <DropdownItem>3</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
