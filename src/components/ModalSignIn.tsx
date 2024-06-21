import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Spinner,
} from '@nextui-org/react';
import { EyeFilledIcon, EyeSlashFilledIcon } from './utils/Icons';

function ModalSignIn(props: { isOpen: boolean; onOpenChange: any }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (loading) {
      //axios
      //  .post('/users/signIn', {
      //    body: {
      //      username: user,
      //      password,
      //    },
      //  })
      //  then((res) => {
      const res = 200;
      if (res === 200) {
        setLoading(false);
        props.onOpenChange();
      } else {
        setLoading(false);
      }
      //  });
    }
  }, [loading, user, password, props]);

  return (
    <Modal isOpen={props.isOpen} onOpenChange={props.onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Inciar Sesion
            </ModalHeader>
            {loading ? (
              <ModalBody>
                <Spinner style={{ margin: '100px' }} />
              </ModalBody>
            ) : (
              <>
                <ModalBody>
                  <p>Ingrese nombre de usuario y contraseña.</p>
                  <Input
                    type="text"
                    variant="underlined"
                    label="Nombre de usuario"
                    onValueChange={(value: string) => setUser(value)}
                  />
                  <Input
                    type={passwordVisible ? 'text' : 'password'}
                    variant="underlined"
                    label="Contraseña"
                    onValueChange={(value: string) => setPassword(value)}
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      >
                        {passwordVisible ? (
                          <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                  </Button>
                  <Button color="primary" onPress={() => setLoading(true)}>
                    Ingresar
                  </Button>
                </ModalFooter>
              </>
            )}
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default ModalSignIn;
