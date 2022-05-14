import React from "react";
import logo from "../../assets/logos/logo.png";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import Button from "../../components/Button";

const Interface = ({ toggleFun, toggleValue }) => {
  return (
    <nav className="flex justify-between items-center text-white border-b-2 border-secondary">
      <Link href="/">
        <Image src={logo} alt="sezonac-logo" />
      </Link>
      <div className="siteNavbar md:w-full md:min-w-min">
        <ul
          className={classNames(
            `${toggleValue && `open`} my-5 flex p-0 items-center list-none`
          )}
        >
          <li className="text-white mr-4">
            <Link href="#">
              <a>O Nama</a>
            </Link>
          </li>
          <li className="text-white mr-4">
            <Link href="#">
              <a>Kontakt</a>
            </Link>
          </li>
          <li>
            <div className="block border-l-2 border-secondary h-8 mx-2 md:border-r-0 md:border-t-1 md:border-secondary md:h-0 md:m-r-0"></div>
          </li>
          <li className="mx-3">
            <Link href="#">
              <a>
                <Button
                  name="Prijavi se"
                  textColor="color-white"
                  bgColor="bg-transparent"
                  hover="hover:bg-sky-700"
                  paddingY="py-4"
                  paddingX="px-6"
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>ili se registruj</a>
            </Link>
          </li>
        </ul>
      </div>
      <button
        className={classNames(
          `${
            toggleValue && `togglerOpen`
          } border-3 border-white m-3 bg-transparent cursor-pointer h-9 hidden z-10 md:block `
        )}
        onClick={toggleFun}
      >
        <span className="spanAnimation togglerOpen w-7 h-1 bg-white block ease-in-out duration-300 "></span>
      </button>
      <style>
        {`.spanAnimation::before {
  width: 28px;
  height: 3px;
  background-color: #fff;
  display: block;
  transition: 0.3s;
}
.spanAnimation::after {
  width: 28px;
  height: 3px;
  background-color: #fff;
  display: block;
  transition: 0.3s;
}

.spanAnimation::before {
  content: "";
  transform: translateY(-9px);
}

.spanAnimation::after {
  content: "";
  transform: translateY(6px);
}

.togglerOpen span {
  background-color: transparent;
}
.togglerOpen span:before {
  transform: translateY(0px) rotate(45deg);
}
.togglerOpen span:after {
  transform: translateY(-3px) rotate(-45deg);
}

@media (max-width: 768px){
  .siteNavbar ul {
    position: absolute;
    width: 100%;
    height: calc(100vh - 60px);
    left: 0;
    top: 60px;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.95);
    max-height: 0;
    overflow: hidden;
    transition: 0.3s;
  }

    .siteNavbar ul li {
    width: 100%;
    text-align: center;
    margin-top: 1rem;
    font-size: 2rem;
  }

    .siteNavbar .open {
    max-height: 100vh;
    overflow: visible;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    z-index: 1;
  }

}
`}
      </style>
    </nav>
  );
};

export default Interface;
