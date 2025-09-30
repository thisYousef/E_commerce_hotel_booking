import { useState } from "react";
import classes from "./CartItem.module.css";
import Search from "./Tabs/Search";
import Enhance from "./Tabs/Enhance";
import Complete from "./Tabs/Complete";

const CartItem = ({ name, image, price, amount, onRemove, onAdd }) => {
  const Tabs = {
    "Search": <Search />,
    "Enhance": <Enhance />,
    "Complete": <Complete />,
  };
  const [selectedTab, setSelectedTab] = useState("Search");

  return (
    <>
      <ul className={classes.tabs}>
        {Object.keys(Tabs).map((tab, index) => (
          <>
            <li
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={selectedTab === tab ? classes.active : ""}
            >
              <span>{++index}</span> {tab}
            </li>
          </>
        ))}
      </ul>
      {Tabs[selectedTab]}

    </>
  );
};

export default CartItem;
