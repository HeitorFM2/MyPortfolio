import React, { Component } from 'react'
import Header from './components/Header'
import { Container, Description, Profileimg, Title, Desc, IconsProfile, Location, Text } from './styles'
import profile from './components/Imagens/img-portfolio.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";

import FadeInUp from '../../FadeInUp';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <div>
          <Header/>
        </div>
        <Description>
        <FadeInUp duration="0.6s" delay="0.2s">
          <Text>
            <Title>Hey! Welcome to my <strong>portfolio</strong></Title>
            <Desc>My name’s Heitor Melegate, I’m 19 years old and I'm a Web Developer.</Desc>
            <Desc>I’m a systems development technician by Senai and currently I’m studying Systems Analyst and Development at FATEC Americana university.</Desc>
            <Desc>I recently joined Udemy's React, Redux and TypeScript courses to further enhance my knowledge.</Desc>
          </Text>
        </FadeInUp>
          <div>
            <FadeInUp duration="0.6s" delay="0.2s">
              <Profileimg src={profile}/>
            </FadeInUp>
            <IconsProfile>

              <FadeInUp duration="0.6s" delay="0.3s">
                <Location href='https://github.com/HeitorFM2' target="_blank" rel="noopener noreferrer"><FaGithub  size={40} /></Location>
              </FadeInUp>
              <FadeInUp duration="0.6s" delay="0.3s">
                <Location href='https://www.linkedin.com/in/heitor-melegate/' target="_blank" rel="noopener noreferrer"><FaLinkedin  size={40} /></Location>
              </FadeInUp>
              <FadeInUp duration="0.6s" delay="0.3s">
                <Location href='mailto:heitorfm.dev@gmail.com' target="_blank" rel="noopener noreferrer"><AiOutlineMail  size={40} /></Location>
              </FadeInUp>

            </IconsProfile>
          </div>
        </Description>
      </Container>
    )
  }
}
