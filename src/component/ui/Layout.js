import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'

export default function Layout() {
  return (
    <>
        <Container className='s_tbdr'>
            <Header/>
            <main>
               <Outlet />
            </main>
            <Footer />
        </Container>
    </>
  )
}
