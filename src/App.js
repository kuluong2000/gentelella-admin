import "./components/css/globoalStyle.scss";
import Login from "./components/Layout/Authen/Login";
import DefaultLayout from "./components/Layout/defaultLayout/DefaultLayout";
import OnlyContent from "./components/Layout/OnlyContent/OnlyContent";
import routerPublic from "./router";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
