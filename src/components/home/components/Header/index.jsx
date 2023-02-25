import React, { Component } from 'react'
import { Container, Location } from './styles'
import { Link, animateScroll as scroll } from "react-scroll";
export default class Header extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {

    return (
      <Container className='nav'>
        
        <Location onClick={this.scrollToTop}> Home </Location>
        <Location>
          <Link activeClass="active" to="Career" spy={true} smooth={true} offset={-70} duration={500}>
          My Career
          </Link>
        </Location> 
        <Location>
          <Link activeClass="active" to="Career" spy={true} smooth={true} offset={-70} duration={500}>
          My Skills
          </Link>
        </Location>        
        <Location>
          <Link activeClass="active" to="Projects" spy={true} smooth={true} offset={-70} duration={500}>
            Projects
          </Link>
        </Location>

      </Container>
    )
  }
}
