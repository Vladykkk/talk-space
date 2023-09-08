import React from "react";
import { Link } from "react-router-dom";

import Header from "../../parts/Header";
import Title from "../../components/Title.jsx";

import FirstPlanet from "../../img/login/first-planet.png";
import SecondPlanet from "../../img/login/second-planet.png";

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Title title="Ласкаво Просимо!" />
        <div className="tiles">
          <Link className="homeTile" to="/login">
            <h2>Увійти в аккаунт</h2>
            <img src={FirstPlanet} alt="First Planet" />
          </Link>
          <Link className="homeTile" to="/register">
            <h2>Зареєструвати аккаунт</h2>
            <img src={SecondPlanet} alt="First Planet" />
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
