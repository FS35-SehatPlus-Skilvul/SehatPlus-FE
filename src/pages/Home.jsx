import React from "react";
import { Link } from "react-router-dom";

function Home() {
    
  return (
    <div>
      <div>Home</div>
      <Link to={'/login'}>
        <button>Login</button>
      </Link>
    </div>
  );
}

export default Home;
