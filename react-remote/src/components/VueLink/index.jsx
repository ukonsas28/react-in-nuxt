import React from "react";
import { Link } from "react-router-dom";

export const VueLink = ({ to, children }) => {
  const onClick = (e) => {
    e.preventDefault();
    window.onNavigate(to);
  };

  return (
    <Link to={to} onClick={onClick}>
      {children}
    </Link>
  );
};
