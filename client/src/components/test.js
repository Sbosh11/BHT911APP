import React, { Fragment } from "react";
import queryString from "query-string";


const ResetPass = ({ match, location }) => {
    console.log("MATCH", match);
    console.log("LOCATION", location);
    const parsed = queryString.parse(location.search);
    return (
        <Fragment>
            <p>Params: {parsed.email}</p> {/* => Params: anything*/}
        </Fragment>
    );
};

export default ResetPass;