import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import { MenuCard } from "../MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

console.log(uniqueList);

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menulist, setmenulist] = useState(uniqueList);

  const filteritem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedlist = Menu.filter((ele) => {
      return ele.category === category;
    });
    setMenuData(updatedlist);
  };
  return (
    <>
      <Navbar filteritem={filteritem} menulist={menulist} />
      <MenuCard menuData={menuData} />
    </>
  );
};
export default Resturant;
