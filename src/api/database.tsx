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

export const GetTweets = () =>
  fetch('/database.json')
    .then((response) => response.json())
    .then((json) => json.tweets);
