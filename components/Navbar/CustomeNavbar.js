import React, { useState } from "react";
import MenuIcon from "./MenuIcon";
import styles from "./styles/CustomeNavbar.module.css";
import home from "./home2.json";

const defaultOptions = {
  loop: false,
  autoplay: true,
};

function CustomeNavbar() {
  const [openDropDown, setOpenDropDown] = useState(false);
  console.log(openDropDown);
  return (
    <>
      <div className="m-3">
        <button
          id="dropdownDividerButton"
          data-dropdown-toggle="dropdownDivider"
          onClick={() => setOpenDropDown(!openDropDown)}
          className="text-black rounded-full text-sm p-2 text-center inline-flex items-center "
          type="button"
        >
          <MenuIcon openDropDown={openDropDown} />
        </button>

        <div
          id="dropdownDivider"
          className={
            `z-10 bg-white divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute  ` +
            `${!openDropDown && "hidden"} ` +
            `${styles.dropdownDivider}`
          }
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDividerButton"
          >
            <li className="">
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CustomeNavbar;
