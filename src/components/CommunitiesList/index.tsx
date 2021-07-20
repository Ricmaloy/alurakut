import Link from "next/link";
import { Box } from "../Box";

import {
  CommunityList,
  ListItem,
  CommunityContainer,
  CommunityPhoto,
  CommunityName,
} from "./styles";

export function CommunitiesList({ communitiesList }) {

  return (
    <>
      <Box>
        <h1 className="title">Comunidades</h1>
        <CommunityList>
          {communitiesList.map((community) => {
            return (
              <ListItem key={community.id}>
                <CommunityContainer>
                  <CommunityPhoto src={community.imageUrl} alt="Foto do usuário" />
                  <Link href={`communities/${community.id}`}>
                    <a href={`communities/${community.id}`}>
                      <CommunityName>{community.title}</CommunityName>
                    </a>
                  </Link>
                </CommunityContainer>
              </ListItem>
            );
          })}
        </CommunityList>
      </Box>
    </>
  );
}
