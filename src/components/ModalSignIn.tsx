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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';
import { EyeFilledIcon, EyeSlashFilledIcon } from './utils/Icons';
import { useDispath, useSelector } from '../store/store';
import { GetUsers, User } from '../api/database';

function ModalSignIn(props: {
  exist: boolean | null;
  isOpen: boolean;
  onOpenChange: any;
}) {
  const dispatch = useDispath();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [usernameIsValid, setUsernameIsValid] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordAgain, setPasswordAgain] = useState('');

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const user = useSelector((state: any) => state.user);
  const userData = GetUsers();

  useEffect(() => {});

  useEffect(() => {
    console.log('onloading', loading);
    if (loading) {
      console.log('onloading', loading);
      if (props.exist) {
        let isValid = false;
        userData.forEach((element: User) => {
          if (element.username === username && element.password === password) {
            isValid = true;
          }
        });
        console.log('valid: ', isValid);
        if (isValid) {
          dispatch({
            type: 'SET_USER',
            payload: {
              username,
              email,
              name,
              password,
            },
          });
          setLoading(false);
          props.onOpenChange();
        } else {
          setIsPopoverOpen(true);
          setLoading(false);
        }
      } else {
        try {
          //PostUser({ username, name, email, password }).then(
          dispatch({
            type: 'SET_USER',
            payload: {
              username,
              email,
              name,
              password,
            },
          });
          setLoading(false);
          props.onOpenChange();
        } catch (error) {
          //<Alert>Error {error.statusCode}: {error.message}</Alert>
        }
      }
    }
  }, [loading, username, password, props, userData, dispatch, email, name]);

  return (
    <Modal isOpen={props.isOpen} onOpenChange={props.onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {props.exist ? 'Inciar Sesion' : 'Crea un usuario'}
            </ModalHeader>
            {loading ? (
              <ModalBody>
                <Spinner style={{ margin: '100px' }} />
              </ModalBody>
            ) : (
              <>
                <ModalBody>
                  {props.exist ? (
                    <p>Ingrese nombre de usuario y contraseña.</p>
                  ) : (
                    <p>Ingrese los campos correspondientes</p>
                  )}

                  <Input
                    type="text"
                    variant="underlined"
                    label="Nombre de usuario"
                    isInvalid={!props.exist && !usernameIsValid}
                    errorMessage="El nombre de usuario ingresado ya se encuentra registrado"
                    onFocus={() => setIsPopoverOpen(false)}
                    onValueChange={(value: string) => {
                      userData.forEach((user: any) => {
                        if (user.username === value) {
                          setUsernameIsValid(false);
                        } else {
                          setUsernameIsValid(true);
                        }
                      });
                      return setUsername(value);
                    }}
                  />
                  {!props.exist ? (
                    <>
                      <Input
                        type="text"
                        variant="underlined"
                        label="Nombre"
                        onValueChange={(value: string) => setName(value)}
                      />
                      <Input
                        type="email"
                        variant="underlined"
                        label="Email"
                        isInvalid={!emailIsValid}
                        errorMessage="El email ingresado ya se encuentra registrado"
                        onValueChange={(value: string) => {
                          user.forEach((user: any) => {
                            if (user.email === value) {
                              setEmailIsValid(false);
                            } else {
                              setEmailIsValid(true);
                            }
                          });
                          setEmail(value);
                        }}
                      />
                    </>
                  ) : (
                    <></>
                  )}
                  <Input
                    type={passwordVisible ? 'text' : 'password'}
                    variant="underlined"
                    label="Contraseña"
                    onFocus={() => setIsPopoverOpen(false)}
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
                  {!props.exist ? (
                    <Input
                      type={passwordVisible ? 'text' : 'password'}
                      variant="underlined"
                      label="Contraseña Nuevamente"
                      isInvalid={password !== passwordAgain}
                      onValueChange={(value: string) => setPasswordAgain(value)}
                      errorMessage="Las contraseñas no coinciden"
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
                  ) : (
                    <></>
                  )}
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                  </Button>
                  <Button
                    color="primary"
                    onMouseLeave={() => setIsPopoverOpen(false)}
                  >
                    <Popover
                      color="danger"
                      showArrow={true}
                      placement="bottom"
                      isOpen={isPopoverOpen}
                    >
                      <PopoverTrigger onClick={() => setLoading(true)}>
                        Ingresar
                      </PopoverTrigger>
                      <PopoverContent>
                        <div className="px-1 py-2">
                          <div className="text-small font-bold">
                            Usuario Incorrecto
                          </div>
                          <div className="text-tiny">
                            Por favor ingrese nuevamente
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
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
