import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media (max-width: 480px) {
        margin-top: 45%;   
    }
`

export const Title = styled.p`
    color: white;
    font-size: 42px;
    width:50vw;
    text-align: center;
    font-weight: 500;
    margin: 0;
    text-shadow: black 0.05em 0.05em 0.1em;
    font-style: italic;
    @media (max-width: 480px) {
        font-size: 28px;   
    }
`

export const DivTitle = styled.div`
    background-color: #2D2E34;
    margin-left: 10%;
    margin-bottom: 6vh;
    width: 15%;
    height: 10vh;
    font-weight: 200;
    display:flex;
    align-items: center;
    @media (max-width: 480px) {
        margin-left: 2vw;   
        width: 48%;
        height: 8vh;
    }
`
export const DescCareer = styled.div`
    margin-left: 8vw;
    @media (max-width: 480px) {
        margin-left: 0;
        font-size: 12px;
    }
`

export const LiCareer = styled.li`
    color: white;
    font-style: italic;
`

export const PCareer = styled.p`
    color: white;
    font-size: 14px;
    font-weight: 200;
    @media (max-width: 480px) {
        width: 20rem;
        font-size: 12px;
        font-weight: 10;
    }
`

export const DivIcons = styled.div`
    margin-left: 8vw;
    display:flex;
    margin-bottom: 10vh;
    @media (max-width: 480px) {
        margin-left: 2vh;
    }
`

export const Icons = styled.img`
    margin-left: 2vw;
    width:50px;
    @media (max-width: 480px) {
        margin-left: 1vh;   
    }
`