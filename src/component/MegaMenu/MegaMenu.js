/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./MegaMenu.css"; // Import your CSS file for styling

function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="dropdown">
        {/* Dropdown toggle button */}
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          Click Me
        </button>
        {/* Dropdown menu */}
        {isOpen && (
          <div className="dropdown-menu">
            <div className="row">
              <div className="col">
                <ul className="mega-menu">
                  <li className="sub-mega-menu sub-mega-menu-width-22">
                    <a className="menu-title" href="#">
                      Category 1
                    </a>
                    <ul>
                      <li>
                        <a href="#">Option 1.1</a>
                      </li>
                      <li>
                        <a href="#">Option 1.2</a>
                      </li>
                      <li>
                        <a href="#">Option 1.3</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul className="mega-menu">
                  <li className="sub-mega-menu sub-mega-menu-width-22">
                    <a className="menu-title" href="#">
                      Category 2
                    </a>
                    <ul>
                      <li>
                        <a href="#">Option 2.1</a>
                      </li>
                      <li>
                        <a href="#">Option 2.2</a>
                      </li>
                      <li>
                        <a href="#">Option 2.3</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul className="mega-menu">
                  <li className="sub-mega-menu sub-mega-menu-width-22">
                    <a className="menu-title" href="#">
                      Category 3
                    </a>
                    <ul>
                      <li>
                        <a href="#">Option 3.1</a>
                      </li>
                      <li>
                        <a href="#">Option 3.2</a>
                      </li>
                      <li>
                        <a href="#">Option 3.3</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MegaMenu;




// function MegaMenu() {

//     const [isOpen, setIsOpen] = useState(false);

//     // Toggle dropdown visibility
//     const toggleDropdown = () => {
//       setIsOpen(!isOpen);
//     };
//   return (
//     <>
//    <div className="dropdown">
//       {/* Dropdown toggle button */}
//       <button className="dropdown-toggle" onClick={toggleDropdown}>
//         Click Me
//       </button>
//       {/* Dropdown menu */}
//       {isOpen && (
//         <div className="dropdown-menu">
//           <ul>
//             <li>
//               <a href="#">Option 1</a>
//             </li>
//             <li>
//               <a href="#">Option 2</a>
//             </li>
//             <li>
//               <a href="#">Option 3</a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>

    
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col">
//             <ul className="mega-menu">
//               <li className="sub-mega-menu sub-mega-menu-width-22">
//                 <a className="menu-title" href="#">
//                   Fruit &amp; Vegetables
//                 </a>
//                 <ul>
//                   <li>
//                     <a href="#">Meat &amp; Poultry</a>
//                   </li>
//                   <li>
//                     <a href="#">Fresh Vegetables</a>
//                   </li>
//                   <li>
//                     <a href="#">Herbs &amp; Seasonings</a>
//                   </li>
//                   <li>
//                     <a href="#">Cuts &amp; Sprouts</a>
//                   </li>
//                   <li>
//                     <a href="#">Exotic Fruits &amp; Veggies</a>
//                   </li>
//                   <li>
//                     <a href="#">Packaged Produce</a>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           </div>

//           <div className="col">
//             <ul className="mega-menu">
//               <li className="sub-mega-menu sub-mega-menu-width-22">
//                 <a className="menu-title" href="#">
//                   Breakfast &amp; Dairy
//                 </a>
//                 <ul>
//                   <li>
//                     <a href="#">Milk &amp; Flavoured Milk</a>
//                   </li>
//                   <li>
//                     <a href="#">Butter and Margarine</a>
//                   </li>
//                   <li>
//                     <a href="#">Eggs Substitutes</a>
//                   </li>
//                   <li>
//                     <a href="#">Marmalades</a>
//                   </li>
//                   <li>
//                     <a href="#">Sour Cream</a>
//                   </li>
//                   <li>
//                     <a href="#">Cheese</a>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           </div>

//           <div className="col">
//             <ul className="mega-menu">
//               <li className="sub-mega-menu sub-mega-menu-width-22">
//                 <a className="menu-title" href="#">
//                   Meat &amp; Seafood
//                 </a>
//                 <ul>
//                   <li>
//                     <a href="#">Breakfast Sausage</a>
//                   </li>
//                   <li>
//                     <a href="#">Dinner Sausage</a>
//                   </li>
//                   <li>
//                     <a href="#">Chicken</a>
//                   </li>
//                   <li>
//                     <a href="#">Sliced Deli Meat</a>
//                   </li>
//                   <li>
//                     <a href="#">Wild Caught Fillets</a>
//                   </li>
//                   <li>
//                     <a href="#">Crab and Shellfish</a>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           </div>

//           <div className="col">
//             <ul className="mega-menu">
//               <li className="sub-mega-menu sub-mega-menu-width-34">
//                 <div className="menu-banner-wrap">
//                   <a href="#">
//                     <img src={banner} alt="Nest" />
//                   </a>
//                   <div className="menu-banner-content">
//                     <h4>Hot deals</h4>
//                     <h3>
//                       Don't miss
//                       <br />
//                       Trending
//                     </h3>
//                     <div className="menu-banner-price">
//                       <span className="new-price text-success">Save to 50%</span>
//                     </div>
//                     <div className="menu-banner-btn">
//                       <a href="#">Shop now</a>
//                     </div>
//                   </div>
//                   <div className="menu-banner-discount">
//                     <h3>
//                       <span>25%</span>off
//                     </h3>
//                   </div>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default MegaMenu;
