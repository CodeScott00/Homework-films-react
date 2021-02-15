import React from "react";

const Film = ({movie, children}) => {
    
    return(
        <div className = "Film">
            <h4>{children}</h4>
            <h3>{movie}</h3>
        </div>
    )
}




export default Film;