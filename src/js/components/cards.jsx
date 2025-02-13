import React from "react";

const Cards = ({ numero }) => {
    return (
        <div className="card mb-3 bg-dark m-1" style={{ width: "6rem", height: "8rem" }}>
            <h1 className="card-title text-center text-white " style={{ marginTop: "2.5rem" }}>
                {numero}
            </h1>

        </div>
    )
}
export default Cards