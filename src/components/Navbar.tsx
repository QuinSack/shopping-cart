import React from 'react'
import {Navbar as NavbarBs, Container, Nav, NavLink, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useShoppingCart } from '../contexts/ShoppingCartContext'

const Navbar = () => {
    const {openCart, cartQuantity} = useShoppingCart();
  return (
    <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
        <Container>
            <Nav className='me-auto'>
                <Nav.Link href='/' as={NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link href='/store' as={NavLink}>
                    Store
                </Nav.Link>
                <Nav.Link href='/about' as={NavLink}>
                    About
                </Nav.Link>
            </Nav>
            {cartQuantity > 0 && (
                <Button style={{width: '3rem', height: '3rem', position: 'relative'}} variant='outline-primary' className='rounded-circle' onClick={openCart}>
                <FontAwesomeIcon icon={faCartPlus} size='2x'></FontAwesomeIcon>
                <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center' style={{color:'white', width: '1.5rem', height: '1.5rem', position: 'absolute', bottom: '0', right: '0', transform: 'translate(25%, 25%)'}}>
                    {cartQuantity}
                </div>
            </Button>
            )}
            
        </Container>
    </NavbarBs>
  )
}

export default Navbar