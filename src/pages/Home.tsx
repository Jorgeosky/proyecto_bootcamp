import React, { useEffect, useState } from 'react';
import NavBarPage from '../components/NavBar';
import CardTweet from '../components/CardTweet';
import { useDisclosure } from '@nextui-org/react';
import ModalSignIn from '../components/ModalSignIn';

function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [userExist, setUserExist] = useState(null);

  useEffect(() => {
    console.log(userExist);
  }, [userExist]);

  return (
    <>
      <NavBarPage onOpen={onOpen} setExist={setUserExist} />
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
      <ModalSignIn
        exist={userExist}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </>
  );
}

export default Home;
