import DefaultLayout from "../components/Layout/defaultLayout/DefaultLayout";
import Login from "../components/Layout/Authen/Login";
import Register from "../components/Layout/Authen/Register";
const routerPublic = [
  {
    path: "/",
    component: DefaultLayout,
  },
  {
    path: "/login",
    component: Login,
    layout: null,
  },
  {
    path: "/register",
    component: Register,
    layout: null,
  },
];

export default routerPublic;
