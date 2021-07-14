import React, {useState} from "react";
import "./navbar.css"

const Navbar: React.FC = () => {

   const [displayDropDown, setDisplayDropDown] = useState<boolean>(false)

   const handleClick = (): void => {
      setDisplayDropDown((state:boolean)=>!state)
   }

   return (
      <>
         <nav className="navbar navbar-light bg-dark">
            <div className="d-inline-flex justify-content-between w-100">
               <div onClick={handleClick} className="navbar-brand mb-0 h4" style={{color:"var(--nav-text-color)", textIndent:".5rem"}}>Menu</div>
               <p className="navbar-brand mb-0 h4" style={{color:"var(--nav-text-color)"}}>TOLL FREE + 1 (808) 999 - 9999</p>
            </div>
         </nav>
      {displayDropDown && (
         <nav className="nav-bar position-absolute" style={{width:"97%", backgroundColor:"var(--nav-dropdown-bg-color)"}}>
            <a className="nav-link" href="/resorts">Resorts</a>
            <a className="nav-link" href="/covid_19">COVID-19 Updates</a>
            <a className="nav-link" href="/search">Search</a>
            <a className="nav-link" href="/real_estate">Real Estate</a>
            <a className="nav-link" href="/about">About Us</a>
            <a className="nav-link" href="/management">Explore Management</a>
            <a className="nav-link" href="/login">Login</a>
         </nav>
      )}
      </>
   )
}

export default Navbar
