import "./components/css/globoalStyle.scss";
// import Login from "./components/Layout/Authen/Login";
import DefaultLayout from "./components/Layout/defaultLayout/DefaultLayout";
import OnlyContent from "./components/Layout/OnlyContent/OnlyContent";
import routerPublic from "./router";
import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Loading from "./components/Loading/Loading";

function App() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
    return () => {
      setShow(false);
    };
  }, []);
  return (
    <div className="App">
      <React.Suspense fallback={show && <Loading classes={"dashed-loading"} />}>
        <Routes>
          {routerPublic.map((route, idx) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout === null) {
              Layout = OnlyContent;
            }
            return (
              <Route
                key={idx}
                path={route.path}
                element={
                  <Layout>
                    <Page></Page>
                  </Layout>
                }
              ></Route>
            );
          })}
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
