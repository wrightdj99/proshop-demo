import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
export const Header = () => {
  return (
    <header>
        <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
            <Container>
                <Link as='/'>
                <Navbar.Brand>
                    <img src={logo} alt='proshop'/>
                    ProShop
                </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="ms-auto">
                        <Link as='/cart'>
                        <Nav.Link>
                            <FaShoppingCart /> Cart
                        </Nav.Link>
                        </Link>
                        <Link as='/login'>
                        <Nav.Link>
                            <FaUser /> Sign In
                        </Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}
