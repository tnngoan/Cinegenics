import React from "react";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  SearchIcon,
  UserIcon,
  CollectionIcon,
  BadgeCheckIcon,
  LightningBoltIcon,
} from "@heroicons/react/outline";

const logo = require("../img/hululogo.png");

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image className="object-contain" src={logo} width={100} height={40} />
    </header>
  );
}

export default Header;
