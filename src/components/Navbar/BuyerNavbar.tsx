import { AiOutlineMenu } from "react-icons/ai";
import LastbiteLogo from "../LastbiteLogo";
import { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";

interface ICurrentUser {
  display_name: string;
  email: string;
}

interface BuyerNavbarProps {
  logoutHandler: () => void;
  currentUser: ICurrentUser | null;
}

const BuyerNavbar: React.FC<BuyerNavbarProps> = ({
  logoutHandler,
  currentUser,
}) => {
  const isLoggedIn = currentUser ? true : false;
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
    <div className="flex w-full bg-success-main justify-between px-[7%] items-center p-6">
      {isLoggedIn ? (
        <>
          <div className="flex items-center text-h5 text-typo-white">
            <button onClick={() => setOpenDrawer(!openDrawer)}>
              <AiOutlineMenu />
            </button>
          </div>
          <div>
            <LastbiteLogo />
          </div>
        </>
      ) : (
        <>
          <div>
            <LastbiteLogo />
          </div>
          <div className="flex items-center text-h5 text-typo-white">
            <button onClick={() => setOpenDrawer(!openDrawer)}>
              <AiOutlineMenu />
            </button>
          </div>
        </>
      )}

      {/* Mobile and Tablet Only */}
      {openDrawer ? (
        <div className="fixed min-h-screen left-0 top-0 py-[15vh] bg-success-main w-[60vw] px-6 drawer-menu">
          <div className="flex w-full flex-col gap-10">
            <div className="flex items-center justify-between">
              <LastbiteLogo />
              <span className="text-h6 text-typo-white">
                <button onClick={() => setOpenDrawer(!openDrawer)}>
                  <IoCloseOutline />
                </button>
              </span>
            </div>
            <div className="flex flex-col gap-2">
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
                href={"/dashboard"}
                className="w-full px-[12px] py-[4px] bg-success-main rounded-[12px] text-typo-white font-bold text-caption hover:bg-typo-white hover:text-typo-main nav-link"
              >
                Dashboard
              </Link>
              <Link
                href={"dashboard/profile"}
                className="w-full px-[12px] py-[4px] bg-success-main rounded-[12px] text-typo-white font-bold text-caption hover:bg-typo-white hover:text-typo-main nav-link"
              >
                Profile
              </Link>
              <Link
                href={"cart"}
                className="w-full px-[12px] py-[4px] bg-success-main rounded-[12px] text-typo-white font-bold text-caption hover:bg-typo-white hover:text-typo-main nav-link"
              >
                Cart
              </Link>
              <Link
                href={"my-order"}
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
        ""
      )}
    </div>
  );
};

export default BuyerNavbar;
