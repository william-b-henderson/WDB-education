import React from "react";

const Navbar = ({title, description}) => {
    let x = 5;
    return (
        <div>
            <h1>{title}</h1>
            <p>{description} and {x}</p>

        </div>
    )
}


export default Navbar;