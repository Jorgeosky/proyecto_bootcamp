import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  User,
  Link,
  Button,
  CardBody,
  CardFooter,
} from '@nextui-org/react';

const PopoverProfile = (props: any) => {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Card shadow="none" className="max-w-[300px] border-none bg-transparent">
      <CardHeader className="justify-between">
        <User
          name={props.user.name}
          description={
            <Link href={``} size="sm" isExternal>
              @{props.user.username}
            </Link>
          }
          avatarProps={{
            src: `${props.user.image}`,
          }}
        ></User>
        <Button
          className={
            isFollowed
              ? 'bg-transparent text-foreground border-default-200'
              : ''
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? 'bordered' : 'solid'}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? 'Unfollow' : 'Follow'}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0">
        <p className="text-small pl-px text-default-500">
          {props.user.description}
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-600 text-small">
            {props.user.following}
          </p>
          <p className=" text-default-500 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-600 text-small">
            {props.user.followers}
          </p>
          <p className="text-default-500 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PopoverProfile;
