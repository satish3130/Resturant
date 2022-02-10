import React from "react";

const Navbar = ({ filteritem, menulist }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menulist.map((ele) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filteritem(ele)}
              >
                {ele}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
