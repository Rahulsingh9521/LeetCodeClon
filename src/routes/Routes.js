import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "@pjt/pages/loginPage";
import NotFoundPage from "../pjt/pages/NotFoundPage";

const Routers = createBrowserRouter([
  //   { path: "/", Component: App }, // <-- note Component, not element
  { path: "/login", Component: Login },
  { path: "*", Component: NotFoundPage },
]);

// const Routers = () => {
//     return(
//     <Router>
//         <Routes>
//             <Route path ='/'  element ={<App/>}/>
//             <Route path ='/login'  element ={<Login/>}/>
//         </Routes>
//     </Router>
//     )
// }

export default Routers;
