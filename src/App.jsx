import React from 'react'
import PropTypes from 'prop-types'

import * as Enlighten from './components/Enlighten'
import * as Nav from './components/Nav'
import Container from './components/Container'
import Segment from './components/Segment'
import * as MainHero from './components/MainHero'

import 'normalize.css'
import './styles/fontOverrides.css'
import './styles/linkStyleOverrides.css'

const App = props => {
  return (
    <Enlighten.RootContainer>
      <Enlighten.FixedContainer>
        <Nav.Container>
          <Container>
            <Nav.Branding href='/'>
              Enlighten
            </Nav.Branding>
            <Nav.Item href='https://github.com/Seia-Soto' target='_blank'>GitHub</Nav.Item>
            <Nav.Item href='https://twitter.com/Seia_Soto' target='_blank'>Twitter</Nav.Item>
          </Container>
        </Nav.Container>
      </Enlighten.FixedContainer>
      <Enlighten.Scrollable>
        <MainHero.Container>
        </MainHero.Container>
        <Container>
          <Segment>
            Some content!
          </Segment>
        </Container>
      </Enlighten.Scrollable>
    </Enlighten.RootContainer>
  )
}

export default App
