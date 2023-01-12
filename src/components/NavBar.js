import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navElement = links.map(link => {
    return <a key={link} href={"#" + link}>{link}</a>
  })

  return <nav>{navElement}</nav>;
}

export default NavBar;
