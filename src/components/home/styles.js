import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
`

export const Description = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100vh;

    @media (max-width: 760px) {
        flex-direction: column;   
    }

    .Text {
        
        display:flex;
        flex-direction: column;
        align-items: center;
        margin: 0;

        @media (max-width: 480px) {
            margin-top: 350px;  
        }
    
        .Title{
            color: white;
            font-size: 42px;
            width:80%;
            text-align: center;
            font-weight: 200;
    
            @media (max-width: 760px) {
                font-size: 35px;
                width:35vh;
            }
        }
    
        .Desc{
            color: white;
            font-size: 20px;
            width:30vw;
            text-align: justify;
            font-weight: 100;
            
            @media (max-width: 760px) {
                font-size: 15px;
                width:60vw;
            }
        }
    }

    .Profile{

        .Profileimg{
            display: flex;
            justify-content: center;
        
            img{
                width: 90%;

                @media (max-width: 760px) {
                    width: 70%;
                }
            }

        }
    }

    .Location{
        text-decoration: none;
        color: black;
    }

    .IconsProfile{
        display: flex;
        justify-content: space-evenly;
        width: 100%;
    }
`