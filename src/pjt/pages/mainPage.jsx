import React from "react";
// import styled from "styled-components";
import Navbar from './Navbar.jsx'
import Problems from './Problems.jsx'
import Footer from './Footer.jsx'

// const Page = styled.div``;


const MainPage = () => {
    return (
            <div>
                <Navbar/>
                <Problems/>
                <Footer/>
            </div>
    )
}
export default MainPage;