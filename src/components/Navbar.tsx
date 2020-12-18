import React from "react";
import NavButton from "./NavButton";
import styles from "styles/NavBar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      NavBar
      <NavButton path="/" label="Home" />
      <NavButton path="/blog" label="Blog" />
    </nav>
  );
};

export default Navbar;
