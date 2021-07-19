import { Box } from "../Box";

import {
  UserList,
  ListItem,
  UserContainer,
  UserPhoto,
  UserName,
} from "./styles";

export function UsersList({ usersList }) {

  return (
    <>
      <Box>
        <h1 className="title">Amigos(as)</h1>
        <UserList>
          {usersList.map((user) => {
            return (
              <ListItem key={user.name}>
                <UserContainer>
                  <UserPhoto src={user.avatar} alt="Foto do usuário" />
                  <a href={`https://github.com/${user.name}`}><UserName>{user.name}</UserName></a>
                </UserContainer>
              </ListItem>
            );
          })}
        </UserList>
      </Box>
    </>
  );
}
