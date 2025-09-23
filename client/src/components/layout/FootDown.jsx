import React from "react";
import { Link } from "react-router-dom";

function FootDown() {
  const aboutPageLinks = [
    "About This Blog",
    "Popular Posts",
    "Recent Posts",
    "Archive",
    "Sitemap",
    "Privacy Policy",
    "Terms of Service",
    "Newsletter Signup",
  ];
  return (
    <>
      <div className="bg-black h-72 flex justify-between p-5">
        <div className="">
          <h1 className="text-4xl font-bold">Grizzly Bunch</h1>
          <div className="font-semibold mt-3 mx-2 opacity-75">
            <p>&copy;2025 Grizzly Bunch. All rights reserved. </p>
          </div>
        </div>
        <div className="flex flex-col text-xl gap-5">
          <h1 className="font-semibold text-4xl">Contents</h1>
          <div className="grid grid-cols-4 gap-2 text-white mt-5">
            { aboutPageLinks.map((e) => {
              return <p key={e} className="hover:underline cursor-pointer">{e}</p>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default FootDown;
