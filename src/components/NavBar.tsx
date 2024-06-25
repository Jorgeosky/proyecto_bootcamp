import React, { useState, useEffect } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Spinner,
} from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { useSelector } from '../store/store';
import { useDispath } from '../store/store';

const stylesP = {
  color: 'white',
};

function NavBarPage(props: { setExist: any; onOpen: any }) {
  const [loading, setLoading] = useState(false);
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispath();

  useEffect(() => {
    if (loading) {
      dispatch({
        type: 'UNSET_USER',
      });
      setLoading(false);
    }
  }, [loading]);

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
        {user.username ? (
          <>
            <NavbarItem className="lg:flex">
              <Button
                as={Link}
                color="danger"
                href="#"
                variant="flat"
                onPress={() => {
                  setLoading(true);
                  console.log('se cerro la sesion');
                }}
              >
                {loading ? <Spinner /> : <p>Log out</p>}
              </Button>
            </NavbarItem>
          </>
        ) : (
          <>
            <NavbarItem className="lg:flex">
              <Button
                as={Link}
                color="primary"
                href="#"
                variant="flat"
                onPress={() => {
                  props.setExist(true);
                  props.onOpen();
                  console.log('boton sign in');
                }}
              >
                Sign In
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button
                as={Link}
                color="primary"
                href="#"
                variant="flat"
                onPress={() => {
                  props.setExist(false);
                  props.onOpen();
                }}
              >
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
}

export default NavBarPage;
