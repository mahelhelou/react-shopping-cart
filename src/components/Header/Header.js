import './Header.scss'
import { Navbar, Container, Nav, FormControl, Badge, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
	return (
		<header className='site-header'>
			<Navbar bg='dark' variant='dark' style={{ height: 80 }}>
				<Container>
					<Navbar.Brand>
						<Link to='/'>Shopping Cart</Link>
					</Navbar.Brand>
					<Navbar.Text className='search'>
						<FormControl style={{ width: 500 }} type='search' placeholder='Search a product...' className='m-auto' aria-label='Search' />
					</Navbar.Text>
					<Nav>
						<Dropdown alignRight>
							<Dropdown.Toggle variant='success'>
								<FaShoppingCart color='white' fontSize='25px' />
								<Badge>10</Badge>
							</Dropdown.Toggle>

							<Dropdown.Menu style={{ minWidth: 370 }}>
								<span style={{ padding: 10 }}>Cart is Empty!</span>
							</Dropdown.Menu>
						</Dropdown>
					</Nav>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
