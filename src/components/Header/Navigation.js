// styles
import Link from "next/link"
import { Container, Nav, Navbar } from "react-bootstrap"
import style from "./style.module.scss"
const Navigation = () => {
  return (
    <div className={style.navigation}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand className= {style.logo} href="/">Students</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={style.lists}>
              <Link href="/">Home</Link>
              <Link href="/studentDetails">Details</Link>
              <Link href="/createStudent">Create</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation