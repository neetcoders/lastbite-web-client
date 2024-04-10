import { AiOutlineMenu } from "react-icons/ai";
import LastbiteLogo from "../LastbiteLogo";
import { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import { HiChevronDoubleRight } from "react-icons/hi";
import { ButtonBlackMedium, ButtonWhiteMedium } from "../Button/Button";

interface ICurrentStore {
  display_name: string;
  email: string;
  active_address: null;
}

interface SellerNavbarProps {
  logoutHandler: () => void;
  currentStore: ICurrentStore | null;
}

const SellerNavbar: React.FC<SellerNavbarProps> = ({
  logoutHandler,
  currentStore,
}) => {
  const isLoggedIn = currentStore ? true : false;
  const [openDrawer, setOpenDrawer] = useState(false);
  useEffect(() => {
    function handleClickOutside(event: any) {
      const isDrawerOpen = openDrawer;
      const isInsideDrawer = event.target.closest(".drawer-menu");
      const isNavigationLink = event.target.closest(".nav-link");

      if (isDrawerOpen && !isInsideDrawer && !isNavigationLink) {
        setOpenDrawer(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDrawer]);

  return (
    <div className="flex w-full bg-success-main justify-between px-[7%] items-center p-6 lg:w-[5vw] lg:px-0 lg:min-h-screen lg:fixed lg:flex lg:justify-center lg:items-start lg:py-[5%]">
      {isLoggedIn ? (
        <>
          <div className="flex items-center text-h5 text-typo-white lg:hidden">
            <button onClick={() => setOpenDrawer(!openDrawer)}>
              <AiOutlineMenu />
            </button>
          </div>

          {/* UNTUK HANDLE PERUBAHAN ICON MENU KE CHEVRON SAAT DESKTOP VIEWPORT */}
          <div className="items-center text-h5 text-typo-white hidden lg:flex">
            <button onClick={() => setOpenDrawer(!openDrawer)}>
              <HiChevronDoubleRight />
            </button>
          </div>
          <div className="lg:hidden">
            <LastbiteLogo />
          </div>
        </>
      ) : (
        <>
          <div className="lg:hidden">
            <LastbiteLogo />
          </div>

          <div className="flex items-center text-h5 text-typo-white lg:hidden">
            <button onClick={() => setOpenDrawer(!openDrawer)}>
              <AiOutlineMenu />
            </button>
          </div>

          {/* UNTUK HANDLE PERUBAHAN ICON MENU KE CHEVRON SAAT DESKTOP VIEWPORT */}
          <div className="items-center text-h5 text-typo-white hidden lg:flex">
            <button onClick={() => setOpenDrawer(!openDrawer)}>
              <HiChevronDoubleRight />
            </button>
          </div>
        </>
      )}

      {/* Mobile and Tablet Only */}
      {openDrawer ? (
        // SEMUA KOMPONEN DRAWER KETIKA DIBUKA
        isLoggedIn ? (
          // KOMPONEN DRAWER KETIKA DIBUKA DAN STATE USER LOGGED IN
          <div className="fixed min-h-screen left-0 top-0 py-[15vh] bg-success-main w-[60vw] px-6 drawer-menu lg:w-[20vw]">
            <div className="flex w-full flex-col gap-10">
              <div className="flex items-center justify-between">
                <LastbiteLogo />
                <span className="text-h6 text-typo-white">
                  <button onClick={() => setOpenDrawer(!openDrawer)}>
                    <IoCloseOutline />
                  </button>
                </span>
              </div>
              <div className="flex flex-col gap-2 overflow-auto">
                <span className="text-paragraph text-typo-white">
                  <FaRegUserCircle />
                </span>
                <p className="text-title font-bold text-typo-white">
                  {currentStore?.display_name}
                </p>
                <p className="text-bodytext font-medium text-typo-white">
                  {currentStore?.email}
                </p>
              </div>
              <div className="flex flex-col justify-start items-start text-left gap-5">
                <Link
                  href={"/store/product"}
                  onClick={() => setOpenDrawer(false)}
                  className="w-full px-[12px] py-[4px] bg-success-main rounded-[12px] text-typo-white font-bold text-caption hover:bg-typo-white hover:text-typo-main nav-link"
                >
                  Product
                </Link>
                <Link
                  href={"/store/order"}
                  onClick={() => setOpenDrawer(false)}
                  className="w-full px-[12px] py-[4px] bg-success-main rounded-[12px] text-typo-white font-bold text-caption hover:bg-typo-white hover:text-typo-main nav-link"
                >
                  Order
                </Link>
                <button
                  onClick={logoutHandler}
                  className="w-full text-left px-[12px] py-[4px] bg-success-main rounded-[12px] text-danger-main font-bold text-caption hover:bg-typo-white hover:text-typo-main nav-link"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          // KOMPONEN DRAWER KETIKA DIBUKA DAN STATE USER LOGGED OUT
          <div className="fixed min-h-screen left-0 top-0 py-[15vh] bg-success-main w-[60vw] px-6 drawer-menu lg:w-[15vw]">
            <div className="flex w-full flex-col gap-10">
              <div className="flex items-center justify-between">
                <LastbiteLogo />
                <span className="text-h6 text-typo-white">
                  <button onClick={() => setOpenDrawer(!openDrawer)}>
                    <IoCloseOutline />
                  </button>
                </span>
              </div>

              <div className="flex flex-col justify-start items-start text-left gap-5">
                <Link
                  href={"/store/product"}
                  onClick={() => setOpenDrawer(false)}
                  className="w-full px-[12px] py-[4px] bg-success-main rounded-[12px] text-typo-white font-bold text-caption hover:bg-typo-white hover:text-typo-main nav-link"
                >
                  Dashboard
                </Link>
                <Link
                  href={"/store/about"}
                  onClick={() => setOpenDrawer(false)}
                  className="w-full px-[12px] py-[4px] bg-success-main rounded-[12px] text-typo-white font-bold text-caption hover:bg-typo-white hover:text-typo-main nav-link"
                >
                  About us
                </Link>
                <Link
                  href={"/store/order"}
                  onClick={() => setOpenDrawer(false)}
                  className="w-full px-[12px] py-[4px] bg-success-main rounded-[12px] text-typo-white font-bold text-caption hover:bg-typo-white hover:text-typo-main nav-link"
                >
                  Order
                </Link>
                <div className="flex flex-col w-full gap-4">
                  <ButtonBlackMedium text="Register" to="/store/register" />
                  <ButtonWhiteMedium text="Login" to="/store/login" />
                </div>
              </div>
            </div>
          </div>
        )
      ) : (
        // SEMUA KOMPONEN DRAWER KETIKA DITUTUP
        ""
      )}
    </div>
  );
};

export default SellerNavbar;
