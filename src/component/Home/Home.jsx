import React from "react";
import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";
import "./Home.css";

const Home = () => {
  return (
    <main style={{ marginTop: "120px" }}>
      <h1 className="home-header">
        Find all sorts of gadgets you'll love. Support independent sellers.{" "}
        <br /> Only on Gadgette.
      </h1>
      <Link to={"shop"}>
        <button className="see-product-btn">
          <div>All products</div>
          <MdArrowForward className="forward-btn" />
        </button>
      </Link>
    </main>
  );
};

export default Home;
