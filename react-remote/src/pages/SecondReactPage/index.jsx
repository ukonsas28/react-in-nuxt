import React from "react";
import { Link } from "react-router-dom";
import { VueLink } from "../../components/VueLink";

export const SecondReactPage = () => (
  <div>
    <h1>Second React Page</h1>
    <Link to="/reactPage?page=firstPage"> Go to Second Page react</Link>
    <div>
      <VueLink to="/test2">Для перехода в Nuxt</VueLink>
    </div>
  </div>
);
