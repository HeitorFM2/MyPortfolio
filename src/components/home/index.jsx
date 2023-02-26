import React, { Component } from 'react'
import Header from './components/Header'
import { Container, Description } from './styles'
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
            <div className='Text'>
              <h1 className='Title'>Hey! Welcome to my <strong>portfolio</strong></h1>
              <p className='Desc'>My name’s Heitor Melegate, I’m 19 years old and I'm a Web Developer.</p>
              <p className='Desc'>I’m a systems development technician by Senai, currently I’m studying Systems Analyst and Development at FATEC Americana university.</p>
              <p className='Desc'>I recently joined Udemy's React, Redux and TypeScript courses to further enhance my knowledge.</p>
            </div>
          </FadeInUp>
          <div className='Profile'>
            <FadeInUp duration="0.6s" delay="0.2s">
              <div className='Profileimg'>
                <img src={profile} alt="My Img"/>
              </div>
            </FadeInUp>
            <div className='IconsProfile'>

              <FadeInUp duration="0.6s" delay="0.3s">
                <a className='Location' href='https://github.com/HeitorFM2' target="_blank" rel="noopener noreferrer"><FaGithub  size={40} /></a>
              </FadeInUp>
              <FadeInUp duration="0.6s" delay="0.3s">
                <a className='Location' href='https://www.linkedin.com/in/heitor-melegate/' target="_blank" rel="noopener noreferrer"><FaLinkedin  size={40} /></a>
              </FadeInUp>
              <FadeInUp duration="0.6s" delay="0.3s">
                <a className='Location' href='mailto:heitorfm.dev@gmail.com' target="_blank" rel="noopener noreferrer"><AiOutlineMail  size={40} /></a>
              </FadeInUp>

            </div>
          </div>
        </Description>

      </Container>

    )
  }
}
