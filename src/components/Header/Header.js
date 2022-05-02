import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBagShopping,
  faMagnifyingGlass,
  faUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import Category from "./Category";
import SaleBanner from "./SaleBanner";
import SaleBannerCaption from "./SaleBannerCaption";
import FirstSection from "../FirstSection";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [productCategory, setProductCategory] = useState(true);
  const [featuredCategory, setFeaturedCategory] = useState(false);
  const [funaticsCategory, setFunaticsCategory] = useState(false);
  const clickNavbar = () => setNavbar(!navbar);

  const navItems = [
    { name: "PRODUCTS", chosen: productCategory },
    { name: "FEATURED", chosen: featuredCategory },
    { name: "FUNATICS!", chosen: funaticsCategory },
  ];

  const productsItems = [
    {
      title: "Heroes",
      desc: "& Villains",
      img: "https://www.funko.com/craftmin/users/Nav-Batman-8x6_Headshot-69eb20dc46a0942e00fd7cbb8fc674a7.png?width=100",
    },
    {
      title: "Animation",
      desc: "& Cartoons",
      img: "https://www.funko.com/craftmin/users/Nav-Alice-8x6_Headshot-771df8b2cced28ccb619a81325182015.png?width=100",
    },
    {
      title: "Movies",
      desc: "& TV",
      img: "https://www.funko.com/craftmin/users/Nav-Young-Michael-8x6_Headshot-a2d47161aec895909cfebda5a43df2d4.png?width=100",
    },
    {
      title: "Other Pops!",
      desc: "& Collectibles",
      img: "https://www.funko.com/craftmin/users/Nav-Biggie-Smalls-8x6_Headshot-d158b354f3419fb9c011964e642c7614.png?width=100",
    },
    {
      title: "Funko",
      desc: "& Originals",
      img: "https://www.funko.com/craftmin/assets/Nav-Fruit-Bat-8x6_Headshot-a6fe0eb333caf63880e0fd208917f3f2.png?width=100",
    },
    {
      title: "Shop All",
      desc: "",
      img: "https://www.funko.com/craftmin/assets/Freddy-b1cb905950d6d45e6cbe19392df085ae-dc04ade3761b8d406ead20a8d97a4524.png?width=100",
    },
  ];

  const featuredItems = [
    {
      title: "New",
      desc: "Releases",
      img: "https://www.funko.com/craftmin/assets/Nav-Angelica-8x6_Headshot-14d1bb1306c86700203c059e3c352dd1.png?width=100",
    },
    {
      title: "Exclusives",
      desc: "Collectibles",
      img: "https://www.funko.com/craftmin/assets/NavWhitney-8x6_Headshot-03925bf825d2f4cd9e26ec8cf96e3332.png?width=100",
    },
    {
      title: "Best Sellers",
      desc: "Collectibles",
      img: "https://www.funko.com/craftmin/assets/Nav-Freddy-Crown-8x6_Headshot-8da106029f09130c9b1da2f47476c211.png?width=100",
    },
    {
      title: "Back In Stock",
      desc: "Collectibles",
      img: "https://www.funko.com/craftmin/assets/Nav-Mandolorian-8x6_Headshot-c36229ceb90929216ec0ca0301eb83fc.png?width=100",
    },
    {
      title: "Coming Soon",
      desc: "Collectibles",
      img: "https://www.funko.com/craftmin/assets/nav-freddy-raincoat-8x6_Headshot-ba7d695bc8aeb473dd29f52da6432c14.png?width=100",
    },
  ];

  const funaticsItems = [
    {
      title: "Pop!",
      desc: "Yourself",
      img: "https://www.funko.com/craftmin/assets/MicrosoftTeams-image-3-6d2d781a4431e622628c3c0c89991619-64bb69a7650637ec92ba43a3b1521b66.png?width=100",
    },
    {
      title: "Fun TV",
      desc: "Videos & More",
      img: "https://www.funko.com/craftmin/assets/MicrosoftTeams-image-2-53bffecfe7bcd274a4827954a88254ea-6e76c19c20cc7d593496bb4896c8b721.png?width=100",
    },
    {
      title: "Funko Blog",
      desc: "Your Daily Dose",
      img: "https://www.funko.com/craftmin/assets/Blog-Menu-400x400-cdce68aab9191b366fda9c1be0b9ba02-ee82fbf557f3844a3f8d9b9c07081de0.png?width=100",
    },
  ];

  return (
    <>
      <div className="w-screen h-16 z-10 bg-black fixed drop-shadow-md">
        <div className="px-2 items-center w-full h-full grid grid-cols-2">
          {/* LEFT SIDE OF NAVBAR */}
          <div className="flex items-center h-full">
            <img
              className="h-10 w-16 mx-2"
              src="https://www.funko.com/static/media/funko-logo-white.445c4f62.svg"
            />
            <ul className="hidden md:flex flex-row h-full items-center mt-3">
              <li className="text-white px-3 font-bold">PRODUCTS</li>
              <li className="text-white px-3 font-bold">FEATURED</li>
              <li className="text-white px-3 font-bold">FUNATICS!</li>
            </ul>
          </div>
          {/* RIGHT SIDE OF NAVBAR */}
          <div className="flex justify-end">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="md:hidden h-5 mx-2 p-1 text-white font-bold"
            />
            <FontAwesomeIcon
              icon={faBagShopping}
              className="md:hidden h-6 mx-2 p-1 text-white font-bold"
            />
            <FontAwesomeIcon
              onClick={clickNavbar}
              icon={faBars}
              className="md:hidden h-5 mx-2 p-1 text-white font-bold"
            />
          </div>
        </div>
        <SaleBanner />
        <FirstSection />

      </div>
      {navbar ? (
        <div className="absolute right-0 h-screen w-80 bg-white border-l-4 z-20">
          <div className="flex justify-between my-3 ml-7 mr-3">
            <div className="flex justify-center items-center rounded-full h-12 w-12 bg-black">
              <FontAwesomeIcon
                icon={faUser}
                className="md:hidden h-7 mx-2 p-1 text-white font-bold"
              />
            </div>
            <div className="flex justify-center items-center rounded-full h-12 w-12">
              <FontAwesomeIcon
                onClick={clickNavbar}
                icon={faX}
                className="md:hidden h-6 w-10 mx-2 p-1 text-black font-light"
              />
            </div>
          </div>
          <div className="flex justify-center -ml-7 mt-4">
            <ul className="text-lg flex flex-row space-x-3">
              {navItems.map((item, id) => {
                return (
                  <div key={id}>
                    <li
                      key={id}
                      onClick={() => {
                        if (!item.chosen && item.name === "FEATURED") {
                          setFeaturedCategory(true);
                          setFunaticsCategory(false);
                          setProductCategory(false);
                        } else if (!item.chosen && item.name === "FUNATICS!") {
                          setFeaturedCategory(false);
                          setFunaticsCategory(true);
                          setProductCategory(false);
                        } else if (!item.chosen && item.name === "PRODUCTS") {
                          setFeaturedCategory(false);
                          setFunaticsCategory(false);
                          setProductCategory(true);
                        }
                      }}
                      className={
                        item.chosen
                          ? "group rounded-md font-bold tracking-tighter underline decoration-2"
                          : "group rounded-md tracking-tighter font-light"
                      }
                    >
                      {item.name}
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
          {productCategory ? (
            <div className="mt-4">
              {productsItems.map((item, id) => {
                if (id % 2 === 0)
                  return (
                    <Category
                      class="grid grid-cols-3 bg-white py-2"
                      title={item.title}
                      desc={item.desc}
                      img={item.img}
                    />
                  );
                else
                  return (
                    <Category
                      class="grid grid-cols-3 bg-neutral-100 py-2"
                      title={item.title}
                      desc={item.desc}
                      img={item.img}
                    />
                  );
              })}
            </div>
          ) : featuredCategory ? (
            <div className="mt-4">
              {featuredItems.map((item, id) => {
                if (id % 2 === 0)
                  return (
                    <Category
                      class="grid grid-cols-3 bg-white py-2"
                      title={item.title}
                      desc={item.desc}
                      img={item.img}
                    />
                  );
                else
                  return (
                    <Category
                      class="grid grid-cols-3 bg-neutral-100 py-2"
                      title={item.title}
                      desc={item.desc}
                      img={item.img}
                    />
                  );
              })}
            </div>
          ) : (
            <div className="mt-4">
              {funaticsItems.map((item, id) => {
                if (id % 2 === 0)
                  return (
                    <Category
                      class="grid grid-cols-3 bg-white py-2"
                      title={item.title}
                      desc={item.desc}
                      img={item.img}
                    />
                  );
                else
                  return (
                    <Category
                      class="grid grid-cols-3 bg-neutral-100 py-2"
                      title={item.title}
                      desc={item.desc}
                      img={item.img}
                    />
                  );
              })}
            </div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Header;
