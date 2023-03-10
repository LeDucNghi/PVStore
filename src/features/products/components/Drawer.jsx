import React, { useEffect } from "react";

import Account from "../../account/pages/Account/Account";
import Error from "components/Common/NotFound/NotFound";
import { useParams } from "react-router";

// import Favorites from "../Favorites";
// import Notification from "../Notification";
// import Order from "../Order";

function Drawer(props) {
  const { form } = useParams();

  useEffect(() => {
    console.log("🚀 ~ file: index.jsx ~ line 14 ~ Drawer ~ form", form);
  }, []);

  if (form === "account") return <Account />;
  // if (form === "order") return <Order />;
  // if (form === "favorites") return <Favorites />;
  // if (form === "notify") return <Notification />;

  return <Error />;
}

export default Drawer;
