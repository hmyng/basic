import React from "react";
import './Layout.css'

const Layout = (props) => {
  return (
    <>
      <h1>Header</h1>
      {props.children}
      <h2>Footer</h2>
    </>
  );
};

export default Layout;
