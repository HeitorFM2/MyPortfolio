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
    width:50vh;
    text-align: center;
    font-weight: 800;
    margin: 0;
    text-shadow: black 0.05em 0.05em 0.1em;
    font-style: italic;
    @media (max-width: 480px) {
        font-size: 32px;
    }
`

export const DivTitle = styled.div`
    background-color: #2D2E34;
    font-size: 42px;
    margin-left: 20vh;
    margin-bottom: 6vh;
    width: 35vh;
    height: 10vh;
    font-weight: 200;
    display:flex;
    align-items: center;
    @media (max-width: 480px) {
        margin-left: 2vh;   
        width: 25vh;
        height: 8vh;
    }
`

export const DescProjects = styled.p`
    margin-left: 20vh;
    margin-bottom: 10vh;
    @media (max-width: 480px) {
        margin-left: 2vh;   
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
