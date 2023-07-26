// import React from "react";
// import { useState } from "react";
// import "./header.css";

// const Header = () => {
//   const [Toggle, showMenu] = useState(false);
//   return (
//     <header className="header">
//       <nav className="nav container">
//         <a href="index.html" className="nav_logo">
//           Gurveer
//         </a>
//         <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>

//           <ul className="nav_list grid">
//             <li className="nav_item">
//               <a href="#home" className="nav_link active-link">
//                 <i className="uil uil-estate nav_icon"></i> Home
//               </a>
//             </li>
//             <li className="nav_item">
//               <a href="#about" className="nav_link ">
//                 <i className="uil uil-user nav_icon"></i> About
//               </a>
//             </li>
//             <li className="nav_item">
//               <a href="#skills" className="nav_link">
//                 <i className="uil uil-file-alt nav_icon"></i> Skills
//               </a>
//             </li>
//             <li className="nav_item">
//               <a href="#portfolio" className="nav_link">
//                 <i className="uil uil-scenery nav_icon"></i> Portfolio
//               </a>
//             </li>
//             <li className="nav_item">
//               <a href="#resume" className="nav_link">
//                 <i className="uil uil-file-alt nav_icon"></i> Resume
//               </a>
//             </li>
//             <li className="nav_item">
//               <a href="#contact" className="nav_link">
//                 <i className="uil uil-message nav_icon"></i> Contact
//               </a>
//             </li>
//           </ul>

//           <i
//             className="uil uil-times nav_close"
//             onClick={() => showMenu(!Toggle)}
//           ></i>
//         </div>
//         <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>

//           <i className="uil uil-apps"></i>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import "./header.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          Gurveer
        </a>
        <div className={currentPage === "Home" ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a
                href="#home"
                onClick={() => handlePageChange("Home")}
                className={currentPage === "Home" ? "nav_link active-link" : "nav_link"}
              >
                <i className="uil uil-estate nav_icon"></i> Home
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                className={currentPage === "About" ? "nav_link active-link" : "nav_link"}
              >
                <i className="uil uil-user nav_icon"></i> About
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#portfolio"
                onClick={() => handlePageChange("Portfolio")}
                className={currentPage === "Portfolio" ? "nav_link active-link" : "nav_link"}
              >
                <i className="uil uil-scenery nav_icon"></i> Portfolio
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                className={currentPage === "Resume" ? "nav_link active-link" : "nav_link"}
              >
                <i className="uil uil-file-alt nav_icon"></i> Resume
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={currentPage === "Contact" ? "nav_link active-link" : "nav_link"}
              >
                <i className="uil uil-message nav_icon"></i> Contact
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav_close" onClick={() => handlePageChange("Home")}></i>
        </div>
        <div className="nav_toggle" onClick={() => handlePageChange("Home")}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}

export default NavTabs;

