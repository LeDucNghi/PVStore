import "./Header.css";
import "./HeaderActive.css";

import {
  handleChangeUserFirestoreCart,
  handleFetchAll,
} from "features/products/productThunk";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Cart from "features/cart/components/Cart";
import Cookies from "universal-cookie";
import CustomDrawer from "../Drawer/Drawer";
import Navbar from "./Navbar";
import Search from "features/products/components/Search";
import Toggles from "./Toggles";
import { WavyLink } from "react-wavy-transitions";
import { fetchNotifications } from "features/account/accountThunk";
import { selectAccountDetail } from "features/account/accountSlice";
import { selectListCart } from "features/cart/cartSlice";
import { useLocation } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const cookies = new Cookies();
  const data = cookies.get(`information`);

  const accountDetail = useSelector(selectAccountDetail);
  const cartStorage = useSelector(selectListCart);

  const [openDrawer, setOpenDrawer] = useState({
    isOpen: false,
    component: "",
  });

  useEffect(() => {
    dispatch(handleFetchAll());
    if (accountDetail) {
      dispatch(fetchNotifications(accountDetail.data.email));
      dispatch(handleChangeUserFirestoreCart("get"));
    }
  }, [dispatch, accountDetail]);

  useEffect(() => {
    if (accountDetail) dispatch(handleChangeUserFirestoreCart("post"));
  }, [cartStorage, accountDetail, dispatch]);

  window.addEventListener("scroll", function () {
    const Header = this.document.querySelector("header");
    Header.classList.toggle("sticky", window.scrollY > 0);
  });

  if (pathname === `/login`) return <></>;
  if (pathname === `/register`) return <></>;
  if (pathname === `/admin`) return <></>;
  if (pathname === `/success`) return <></>;
  if (pathname === `/dashboard/app`) return <></>;
  if (pathname === `/dashboard/user`) return <></>;
  if (pathname === `/dashboard/orders`) return <></>;
  if (pathname === `/dashboard/products`) return <></>;
  if (pathname === `/bill`) return <></>;

  return (
    <header>
      <div
        className="menu-logo"
        // onClick={() => dispatch(handleLogout())}
      >
        <WavyLink duration={1000} color="#f08080" to="/home">
          PV Store
        </WavyLink>
      </div>

      <Navbar />

      <CustomDrawer
        anchor="right"
        width={500}
        openDrawer={openDrawer.isOpen}
        onClose={() =>
          setOpenDrawer({ ...openDrawer, isOpen: !openDrawer.isOpen })
        }
      >
        {openDrawer.component === "search" ? (
          <Search setOpenSearch={setOpenDrawer} />
        ) : (
          <Cart openSearch={openDrawer} setOpenSearch={setOpenDrawer} />
        )}
      </CustomDrawer>

      <Toggles data={data} setOpenDrawer={setOpenDrawer} />
    </header>
  );
}

export default Header;
