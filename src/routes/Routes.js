import { createBrowserRouter } from "react-router-dom";
import Login from "@pjt/pages/loginPage";
import NotFoundPage from "@pjt/pages/NotFoundPage";
import ProblemParent from "@pjt/pages/problemParent";

const Routers = createBrowserRouter([
  { path: "/", Component: Login }, // <-- note Component, not element
  { path: "/login", Component: Login },
  { path: "/problemset", Component: ProblemParent },
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
