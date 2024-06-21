import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from '@nextui-org/react';
import { Link } from 'react-router-dom';

const stylesP = {
  color: 'white',
};

function NavBarPage(props: { onOpen: any }) {
  return (
    <Navbar style={{ background: 'black' }}>
      <NavbarBrand>
        <Link to="/">
          <p className="font-bold text-inherit" style={stylesP}>
            TWITTER
          </p>
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="lg:flex">
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            onPress={props.onOpen}
          >
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default NavBarPage;
