import { AiOutlineMenu } from "react-icons/ai";
import LastbiteLogo from "../LastbiteLogo";
import { useState, useEffect, useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import { HiChevronDoubleRight } from "react-icons/hi";
import {
  ButtonBlackMedium,
  ButtonWhiteMedium,
} from "../Button/Button";
import { logout } from "@/app/services/userService";
import { AuthContext } from "@/app/services/BuyerAuthContext";
import { useRouter } from "next/navigation";

const BuyerNavbar = () => {
  const router = useRouter();
  const { currentUser, refetchCurrentUser } = useContext(AuthContext);
  const isLoggedIn = currentUser ? true : false;
  const [openDrawer, setOpenDrawer] = useState(false);

  const logoutHandler = async () => {
    await logout();
    refetchCurrentUser();
    router.push("/user/login");
  }

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
              <div className="flex flex-col gap-2 overflow-clip">
                <span className="text-paragraph text-typo-white">
                  <FaRegUserCircle />
                </span>
                <p className="text-title font-bold text-typo-white">
                  {currentUser?.display_name}
                </p>
                <p className="text-bodytext font-medium text-typo-white">
                  {currentUser?.email}
                </p>
              </div>
              <div className="flex flex-col justify-start items-start text-left gap-5">
                <Link
                  href={"/user/dashboard"}
                  onClick={() => setOpenDrawer(false)}
                  className="w-full px-[12px] py-[4px] bg-success-main rounded-[12px] text-typo-white font-bold text-caption hover:bg-typo-white hover:text-typo-main nav-link"
                >
                  Dashboard
                </Link>
                <Link
                  href={"/user/profile"}
                  onClick={() => setOpenDrawer(false)}
                  className="w-full px-[12px] py-[4px] bg-success-main rounded-[12px] text-typo-white font-bold text-caption hover:bg-typo-white hover:text-typo-main nav-link"
                >
                  Profile
                </Link>
                <Link
                  href={"/user/my-cart"}
                  onClick={() => setOpenDrawer(false)}
                  className="w-full px-[12px] py-[4px] bg-success-main rounded-[12px] text-typo-white font-bold text-caption hover:bg-typo-white hover:text-typo-main nav-link"
                >
                  Cart
                </Link>
                <Link
                  href={"/user/my-order"}
                  onClick={() => setOpenDrawer(false)}
                  className="w-full px-[12px] py-[4px] bg-success-main rounded-[12px] text-typo-white font-bold text-caption hover:bg-typo-white hover:text-typo-main nav-link"
                >
                  My Order
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
                  href={"/user/dashboard"}
                  onClick={() => setOpenDrawer(false)}
                  className="w-full px-[12px] py-[4px] bg-success-main rounded-[12px] text-typo-white font-bold text-caption hover:bg-typo-white hover:text-typo-main nav-link"
                >
                  Dashboard
                </Link>
                <Link
                  href={"/user/about"}
                  onClick={() => setOpenDrawer(false)}
                  className="w-full px-[12px] py-[4px] bg-success-main rounded-[12px] text-typo-white font-bold text-caption hover:bg-typo-white hover:text-typo-main nav-link"
                >
                  About us
                </Link>
                <Link
                  href={"/user/order"}
                  onClick={() => setOpenDrawer(false)}
                  className="w-full px-[12px] py-[4px] bg-success-main rounded-[12px] text-typo-white font-bold text-caption hover:bg-typo-white hover:text-typo-main nav-link"
                >
                  Order
                </Link>
                <div className="flex flex-col w-full gap-4">
                  <ButtonBlackMedium text="Register" to="/user/register" />
                  <ButtonWhiteMedium text="Login" to="/user/login" />
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

export default BuyerNavbar;
