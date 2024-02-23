import React from "react";
import { Link, useLocation } from "react-router-dom";

const Page1 = () => {
  const { state } = useLocation();
  console.log("state", state);
  return <Link to="/next">Go to The Page Which Have the state</Link>;
};
export default Page1;
