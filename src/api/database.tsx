import { useEffect, useState } from 'react';

export interface User {
  id?: number;
  username: string;
  name: string;
  email: string;
  password?: string;
}

export const GetUsers = (): User[] => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    fetch('/database.json')
      .then((response) => response.json())
      .then((json) => setData(json.users));
    console.log(data);
  }, []);

  return data;
};

export const GetTweets = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('/database.json')
      .then((response) => response.json())
      .then((json) => setData(json.tweets));
    console.log(data);
  }, []);

  return data;
};
