import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  User,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';
import PopoverProfile from './PopoverProfile';
import { HeartFilledIcon, HeartNotFilledIcon } from './utils/Icons';

function CardTweet(props: { user: any; tweet: any }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card className="max-w-[340px]" style={{ width: '40%', margin: '10px' }}>
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Popover showArrow placement="bottom">
            <PopoverTrigger>
              <div style={{ display: 'flex' }}>
                <Avatar
                  isBordered
                  radius="full"
                  size="lg"
                  src={props.user.image}
                  style={{ marginRight: '10px' }}
                />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">
                    {props.user.name}
                  </h4>
                  <h5 className="text-small tracking-tight text-default-400">
                    @{props.user.username}
                  </h5>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="p-1">
              <PopoverProfile user={props.user} />
            </PopoverContent>
          </Popover>
        </div>
        <button
          className="focus:outline-none"
          type="button"
          onClick={() => setIsLiked(!isLiked)}
        >
          {isLiked ? (
            <HeartFilledIcon
              className="text-2xl text-default-400 pointer-events-none"
              style={{ marginRight: '10px' }}
            />
          ) : (
            <HeartNotFilledIcon
              className="text-2xl text-default-400 pointer-events-none"
              style={{ marginRight: '10px' }}
            />
          )}
        </button>
      </CardHeader>
      <CardBody
        className="px-3 py-3 text-small text-default-400"
        style={{ height: 'auto' }}
      >
        <p>{props.tweet.text_content}</p>
        <span
          className="pt-2"
          style={{ color: 'rgb(29, 155, 240)', fontWeight: 'bold' }}
        >
          {props.tweet.hashtags.map((element: string) => (
            <Link
              key={props.tweet.hashtags.indexOf(element)}
              href={`localhost:3000/Tweets/${element}`}
              size="sm"
              style={{ margin: '3px' }}
              isExternal
            >
              {`#${element}`}
            </Link>
          ))}
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">
            {props.tweet.likes}
          </p>
          <p className=" text-default-400 text-small">Likes</p>
        </div>
      </CardFooter>
    </Card>
  );
}

export default CardTweet;
