import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar />
      <div>Home</div>
      <div>
        <Link to={"/login"}>
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
