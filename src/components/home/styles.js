import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`

export const Description = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100vh;

    @media (max-width: 480px) {
        flex-direction: column;   
    }
`

export const Text = styled.div`
    @media (max-width: 480px) {
        margin-top: 15rem;  
    }
`

export const Profileimg = styled.img`
    width: 60vh;
    height: 60vh;

    @media (max-width: 480px) {
        width: 40vh;
        height: 40vh;
    }
`

export const Location = styled.a`
    text-decoration: none;
    color: black;
`

export const IconsProfile = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 42vh;

    @media (max-width: 480px) {
        width: 28vh;
    }
`

export const Title = styled.p`
    color: white;
    font-size: 42px;
    width:50vh;
    text-align: center;
    font-weight: 200;

    @media (max-width: 480px) {
        font-size: 35px;
        width:35vh;
    }
`

export const Desc = styled.p`
    color: white;
    font-size: 20px;
    width:60vh;
    text-align: left;
    font-weight: 100;
    
    @media (max-width: 480px) {
        font-size: 15px;
        width:40vh;
    }
`
