import React from "react";
import { Link } from "react-router-dom";
import { VueLink } from "../../components/VueLink";

export const FirstReactPage = () => (
  <div>
    <h1>First React Page</h1>
    <Link to="/reactPage?page=secondPage"> Go to Second Page react</Link>
    <div>
      <VueLink to="/test2">Для перехода в Nuxt</VueLink>
    </div>
  </div>
);
