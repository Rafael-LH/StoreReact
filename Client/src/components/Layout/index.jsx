import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Main } from './styles'

const Layout = ({ children }) => (
  <>
    <Header />
    <Main>
      {children}
    </Main>
    <Footer />
  </>
)
export default Layout