import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksList = links.map((link, j) => <a key={j} href={`#${link}`}>{link}</a>);

  return (
  <nav>
    {linksList}
  </nav>);
}

export default NavBar;
