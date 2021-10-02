import React, { Suspense, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CContainer, CFade } from "@coreui/react";

// routes config
import routes from "../routes";
import PrivateRoute from "src/views/PrivateRoute";
import { useDispatch } from "react-redux";
import { isEmpty, isNull, isUndefined } from "lodash";
import { getProfileRequest } from "src/redux/modules/profile";
import httpServices from "src/services/httpServices";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const TheContent = () => {
  const user = JSON.parse(window.localStorage.getItem("userSPRS"));
  const distpatch = useDispatch();

  useEffect(() => {
    if (!isEmpty(user) && !isUndefined(user) && !isNull(user)) {
      httpServices.attachTokenToHeader(user);
      distpatch(getProfileRequest());
    }
  }, []);
  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return (
                route.component && (
                  <PrivateRoute
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => (
                      <CFade>
                        <route.component {...props} />
                      </CFade>
                    )}
                  />
                )
              );
            })}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  );
};

export default React.memo(TheContent);
