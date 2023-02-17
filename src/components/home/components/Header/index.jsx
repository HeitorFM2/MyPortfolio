import React, { Component } from 'react'
import { Container, Location } from './styles'

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Location href=""> Home </Location>
        <Location href="#Career"> My Career </Location>
        <Location href="#Career"> My Skills </Location>
        <Location href="#Projects"> Projects </Location>
      </Container>
    )
  }
}
