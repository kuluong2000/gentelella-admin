import React from "react";
// import DefaultLayout from "../components/Layout/defaultLayout/DefaultLayout";
// import Login from "../components/Layout/Authen/Login";
const DefaultLayout = React.lazy(() => import("../components/Layout/defaultLayout/DefaultLayout"));
const Login = React.lazy(() => import("../components/Layout/Authen/Login"));
const Register = React.lazy(() => import("../components/Layout/Authen/Register"));
// import Register from "../components/Layout/Authen/Register";
// const DefaultLayout = React.lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(import("../components/Layout/defaultLayout/DefaultLayout")), 1000);
//   });
// });
// const Login = React.lazy(() => {
//   return Promise.all([import("../components/Layout/Authen/Login"), new Promise((resolve) => setTimeout(resolve, 300))]).then(([moduleExports]) => moduleExports);
// });
// const Register = React.lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(import("../components/Layout/Authen/Register")), 1000);
//   });
// });

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
