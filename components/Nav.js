import React from "react";
import requests from "../utils/requests";
import { useRouter } from "next/router";

function Nav() {

const router = useRouter();

  return (
    <nav>
      <div className="flex whitespace-nowrap space-10 sm:space-x-5 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            className="px-5 sm:px-5 text-l last:pr-12 first:pl-12 cursor-pointer transition duration-100 hover:scale-125 hover:text-pink-900 active:text-red-900"
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#FCE7F3] h-10 w-1/12"></div>
    </nav>
  );
}

export default Nav;
