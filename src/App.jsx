import React from 'react'
import PropTypes from 'prop-types'

import * as Enlighten from './components/Enlighten'
import * as Nav from './components/Nav'
import Container from './components/Container'
import Segment from './components/Segment'
import * as MainHero from './components/MainHero'
import * as Button from './components/Button'

import 'normalize.css'
import './styles/fontOverrides.css'
import './styles/linkStyleOverrides.css'

const App = props => {
  return (
    <Enlighten.RootContainer>
      <Enlighten.FixedContainer>
        <Nav.Container>
          <Nav.Branding href='/'>
            Neatified
          </Nav.Branding>
          <Nav.Item href='https://github.com/Seia-Soto' target='_blank'>by Seia-Soto</Nav.Item>
        </Nav.Container>
      </Enlighten.FixedContainer>
      <Enlighten.Scrollable>
        <MainHero.Container>
          <Container>
            <Segment>
              <MainHero.Title>
                복사하고 붙여넣고,<br />
                우클릭까지.<br />
                프로불편러에게 안성맞춤.<br />
                여러분에게도 안성맞춤.
              </MainHero.Title>
              <MainHero.ActionGroup>
                <Button.Primary href='https://github.com/Seia-Soto/neatified' target='_blank'>
                  웹 브라우저에 설치하기
                </Button.Primary>
              </MainHero.ActionGroup>
            </Segment>
          </Container>
        </MainHero.Container>
        <Container>
          <Segment>
            Neatified는 여러분의 작업 효율이 증가하도록 돕습니다.
          </Segment>
        </Container>
      </Enlighten.Scrollable>
    </Enlighten.RootContainer>
  )
}

export default App
