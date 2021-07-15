import React from "react";
import Search from "../search";
import "./home.css"

const Home = () => {
   return (
      <div className="Home">
         <div className="position-absolute container-fluid d-lg-flex justify-content-center align-items-center" style={{height:"100%", width:"100%"}}>
            <Search />
         </div>
         <div
         className="w-100"
         style={{
            height: "333px",
            backgroundSize: "cover",
            backgroundImage:"url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcache.marriott.com%2Fmarriottassets%2Fdestinations%2Fhero%2Fwailea-destination.jpg%3Finterpolation%3Dprogressive-bilinear&f=1&nofb=1)"
            }} />
      </div>
   )
}

export default Home
