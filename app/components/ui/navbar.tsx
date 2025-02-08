import { Link } from "@remix-run/react";
import React from "react";
import GitHubButton from "./github-button";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-black text-neutral-200">

      <div>
      <GitHubButton repoUrl={"https://github.com/LinaMahrouch/Remix-Aceternity-Starter"}/>
      </div>
    </nav>
  );
};
