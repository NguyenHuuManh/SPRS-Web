import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";

const Map = (props) => {

    return (
        <div>
            <GoogleMap
                {...props}
                defaultZoom={8}
            >
                {/* {props.children} */}
            </GoogleMap>
        </div>
    );
}

export default withScriptjs(withGoogleMap(Map));
