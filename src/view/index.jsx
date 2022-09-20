import React from "react";
import styled from "styled-components";
import Header from "../module/Header";
import Dashboard from '../pages/Dashboard';


const Homepage = () => {
    return (
        <HomepageStyles>
            <Container>
                <Dashboard/>
            </Container>
        </HomepageStyles>
      
    )
}
export default Homepage

const HomepageStyles = styled.div`
    
`
const Container = styled.div``

