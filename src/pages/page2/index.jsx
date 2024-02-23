import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Page2 = () => {
  const navigate = useNavigate();
  const state = { name: "songweed" };
  return (
    <div>
      <Link to="/" state={state}>
        Pass Data To Page 1 Using Link
      </Link>
      <button onClick={() => navigate("/", { state })}>
        Pass Data To Page 1 Using useNavigate
      </button>
    </div>
  );
};

export default Page2;
