import React from 'react'
import PropTypes from 'prop-types'

import * as Nav from './components/Nav'
import Container from './components/Container'
import Segment from './components/Segment'

import 'normalize.css'
import './styles/fontOverrides.css'
import './styles/linkStyleOverrides.css'

const App = props => {
  return (
    <>
      <Nav.Container>
        <Container>
          <Nav.Branding href='/'>
            Seia-Soto
          </Nav.Branding>
          <Nav.Item href='https://github.com/Seia-Soto' target='_blank'>GitHub</Nav.Item>
          <Nav.Item href='https://twitter.com/Seia_Soto' target='_blank'>Twitter</Nav.Item>
        </Container>
      </Nav.Container>
      <Container>
        <Segment>
          Some content!
        </Segment>
      </Container>
    </>
  )
}

export default App
