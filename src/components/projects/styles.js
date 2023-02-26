import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80vh;

    @media (max-width: 480px) {
        margin-top: 5rem;   
        height: 90vh;
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

    @media (max-width: 1500px) {
        width: 20%;
        height: 8vh;
    }

    @media (max-width: 480px) {
        margin-left: 2vw;   
        width: 48%;
        height: 8vh;
    }
`

export const DescProjects = styled.p`
    margin-left: 10vw;
    margin-bottom: 10vh;
    @media (max-width: 480px) {
        margin-left: 2vw;;
        font-size: 12px;
    }
`

export const TitleProjects= styled.a`
    color: #7DC1FF;
    font-style: italic;
    font-size: 25px;
    font-weight: 300;
    text-decoration: none;
    @media (max-width: 480px) {
        font-size: 20px;  
    }
`

export const PProjects= styled.p`
    color: white;
    font-style: italic;
    font-size: 18px;
    font-weight: 300;
    margin: 0;
    @media (max-width: 480px) {
        font-size: 12px;  
        width: 20rem;
        font-weight: 100;
    }
`
export const ClickHere= styled.a`
    color: #7DC1FF;
    font-style: italic;
`
