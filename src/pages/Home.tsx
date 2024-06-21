import React from 'react';
import NavBarPage from '../components/NavBar';
import CardTweet from '../components/CardTweet';
import { useDisclosure } from '@nextui-org/react';
import ModalSignIn from '../components/ModalSignIn';

function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <NavBarPage onOpen={onOpen} />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <CardTweet />
        <CardTweet />
        <CardTweet />
      </div>
      <ModalSignIn isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}

export default Home;
