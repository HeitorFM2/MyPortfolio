import React, { Component } from 'react'
import { Container, Location, IconsProfile } from './styles'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";



export default class Footer extends Component {
  render() {
    return (
      <Container>
        <div>
            <p>2023© Heitor Melegate</p>
        </div>

        <div>
            <p>Thanks to visit my WebSite!</p>
        </div>

        <div>
            <IconsProfile>
              <Location href='https://github.com/HeitorFM2' target="_blank" rel="noopener noreferrer"><FaGithub  size={40} /></Location>
              <Location href='https://www.linkedin.com/in/heitor-melegate/' target="_blank" rel="noopener noreferrer"><FaLinkedin  size={40} /></Location>
              <Location href='mailto:heitorfm3@gmail.com' target="_blank" rel="noopener noreferrer"><AiOutlineMail  size={40} /></Location>
            </IconsProfile>
        </div>
      </Container>
    )
  }
}
