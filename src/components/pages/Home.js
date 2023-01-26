import { useState } from "react"
import HomeHeader from "../HomeHeader"
import NavMenu from "../NavMenu"
import Container from "../shared/Container"
function Home() {
  return (
    <>
        <NavMenu />
        <HomeHeader title='Prayer List Manager' lead='Manage your prayer requests'/>
        <Container>

        </Container>   
    </>
    )
}

export default Home
