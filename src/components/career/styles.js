import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background:linear-gradient(180deg, #373940 0%, #33353C 100%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
`
export const DescCareer = styled.div`
    margin-left: 16vh;
`

export const LiCareer = styled.li`
    color: white;
    font-style: italic;
`

export const PCareer = styled.p`
    color: white;
    font-size: 14px;
    font-weight: 200;
`

export const DivIcons = styled.div`
    margin-left: 14vh;
    display:flex;
    margin-bottom: 10vh;
`

export const Icons = styled.img`
    margin-left: 6vh;
    width:50px;
`