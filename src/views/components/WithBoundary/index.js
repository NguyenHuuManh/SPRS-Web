import React, { useEffect, useState } from "react";
import { RouteBase } from "src/constrants/routeBaseUrl";
import ErrorBoundary from "../ErrorBoundary";

const specialLink = [
    "//",
    RouteBase.UserManager
];

const NoPermission = (props) => {
    useEffect(() => {
        // dispatch(getUserRequest());
        document.body.classList.remove("bg-login");
        document.body.classList.add("bg-home-index");
        return () => {
            document.body.classList.remove("bg-home-index");
        };
    }, []);
    return <div>Tài khoản của bạn không có quyền xem chức năng này</div>;
};

const withErrorBoundary = (BaseComponent) => {
    return (props) => {
        const [state, setState] = useState({
            loading: true,
            havePermission: false,
        });
        const urlPath = window.location.hash;
        // console.log(urlPath, "urlPath");
        useEffect(() => {
            // get permission menu
            // const menu = getLocalMenu();
            const menu = [];
            const stringMenu = JSON.stringify(menu);
            // get url
            const splitUrl = urlPath.split("/");
            // create url after split
            const reCreateUrl = `/${splitUrl?.[1] || ""}`;
            let sliceUrl = reCreateUrl;
            console.log("sliceUrl", sliceUrl)
            console.log("specialLink", specialLink)
            // check have search params
            if (urlPath.includes("?")) {
                // remove search params
                sliceUrl = reCreateUrl.split("?")?.[0];
            }

            // check permission view page
            if (stringMenu.includes(sliceUrl) || specialLink.includes(sliceUrl)) {
                // have permission view page
                setState({ loading: false, havePermission: true });
            } else {
                // no permission view page
                setState({ loading: false, havePermission: false });
            }
        }, [urlPath]);

        // while loading permission
        if (state.loading) {
            return null;
        }
        // while loaded permission
        if (state.havePermission) {
            // have permission view page
            return (
                <ErrorBoundary>
                    <BaseComponent {...props} />
                </ErrorBoundary>
            );
        } else {
            // no permission view page
            return <NoPermission />;
        }
    };
};

export default withErrorBoundary;
