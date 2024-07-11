import React, { useEffect, useState } from 'react';
import NavBarPage from '../components/NavBar';
import CardTweet from '../components/CardTweet';
import { Spinner, useDisclosure } from '@nextui-org/react';
import ModalSignIn from '../components/ModalSignIn';

function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [userExist, setUserExist] = useState(null);
  const [Tweets, setTweets] = useState([]);

  useEffect(() => {
    if (!Tweets.length) {
      fetch('/database.json')
        .then((response) => response.json())
        .then((json) => {
          setTweets(json.tweets);
        });
    }
  }, [Tweets, userExist]);

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
        {Tweets.length === 0 ? (
          <Spinner />
        ) : (
          Tweets.map((element: any) => (
            <CardTweet
              key={'tweet:' + element.id}
              user={element.user}
              tweet={element}
            />
          ))
        )}
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
