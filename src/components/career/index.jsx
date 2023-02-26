import React, { Component } from 'react'
import { Container, DivTitle, Title, DescCareer, LiCareer, PCareer, DivIcons,Icons } from './styles'
// import html from './images/html.png'
// import css from './images/css.png'
// import Bootstrap from './images/Bootstrap.png'
import JS from './images/JS.png'
import ReactJS from './images/ReactJS.png'
import nodejs from './images/nodejs.png'
import typescript from './images/typescript.png'
import java from './images/java.png'
import python from './images/python.png'
import git from './images/Git.png'
import php from './images/php.png'
// import c from './images/C.png'
// import cSharp from './images/CSharp.png'
// import api from './images/api.png'
import postgresql from './images/postgresql.png'
import mysql from './images/mysql.png'

import FadeInUp from '../../FadeInUp';




export default class Career extends Component {
  render() {
    return (
      <Container>
        <div>
          <FadeInUp duration="0.6s" delay="0.2s">
            <DivTitle>
              <Title>My Career</Title>
            </DivTitle>
          </FadeInUp>
          <DescCareer>
            <ul>
            <FadeInUp duration="0.6s" delay="0.2s">

              <LiCareer>
                Trainee Full-Stack - 8SYS Desenvolvimento de Sistemas LTDA (03/2022 - Currently).
              </LiCareer>
              
            </FadeInUp>
            <FadeInUp duration="0.6s" delay="0.2s">

              <PCareer>I’m working directly on the production and maintenance of the company's WebSite, using HTML5, CSS3, JavaScript with JQuery framework and API with PHP.</PCareer>
              
            </FadeInUp>
            
            </ul>
          </DescCareer>
        </div>
        <div>
          <FadeInUp duration="0.6s" delay="0.2s">

            <DivTitle>
              <Title>My Skills</Title>
            </DivTitle>

          </FadeInUp>

          <DivIcons>
            <FadeInUp duration="0.6s" delay="0.2s">
              <Icons src={JS}/>
              <Icons src={ReactJS}/>
              <Icons src={nodejs}/>
              <Icons src={typescript}/>
              <Icons src={java}/>
              <Icons src={php}/>
              <Icons src={python}/>
              <Icons src={git}/>
              <Icons src={postgresql}/>
              <Icons src={mysql}/>
            </FadeInUp>
          </DivIcons>
        </div>
      </Container>
    )
  }
}
