import React, { Component } from 'react'
import { Container, Title, DivTitle, DescProjects, TitleProjects, PProjects, ClickHere } from './styles'
import Footer from './components/Footer/footer'

import FadeInUp from '../../FadeInUp';


export default class Projects extends Component {
  render() {
    return ( <>
        <Container>
          <div>
            <FadeInUp duration="0.6s" delay="0.2s">

              <DivTitle>
                <Title>Projects</Title>
              </DivTitle>
            
            </FadeInUp>
          </div>
          <div>
          <FadeInUp duration="0.6s" delay="0.2s">

            <DescProjects>
              <TitleProjects href='https://reactjs-calculadora.web.app' target="_blank" rel="noopener noreferrer">calculadora.reactjs</TitleProjects>
              <PProjects>This project is a simple calculator just to train my knowledge about ReactJS</PProjects>
              <PProjects>Click <ClickHere href='https://reactjs-calculadora.web.app' target="_blank" rel="noopener noreferrer"> here</ClickHere> to be directed to the website</PProjects>
            </DescProjects>

            </FadeInUp>
            <FadeInUp duration="0.6s" delay="0.3s">

              <DescProjects>
                <TitleProjects href='https://find-git.web.app/' target="_blank" rel="noopener noreferrer">gitfind.reactjs</TitleProjects>
                <PProjects>This project is a website where you can search for anyone's profile using GitHub API.</PProjects>
                <PProjects>Click <ClickHere href='https://find-git.web.app/' target="_blank" rel="noopener noreferrer"> here</ClickHere> to be directed to the website</PProjects>
              </DescProjects>

            </FadeInUp>
            <FadeInUp duration="0.6s" delay="0.4s"> 

              <DescProjects>
                <TitleProjects href='https://tictatoe-reactjs.web.app' target="_blank" rel="noopener noreferrer">tictactoe.reactjs</TitleProjects>
                <PProjects>This project is a game, TicTacToe, made in React.Js to train my knowledge of the language.</PProjects>
                <PProjects>Click <ClickHere href='https://tictatoe-reactjs.web.app' target="_blank" rel="noopener noreferrer"> here</ClickHere> to be directed to the website</PProjects>
              </DescProjects>

            </FadeInUp>

          </div>
        </Container>
        <Footer/>
      </>
    )
  }
}
