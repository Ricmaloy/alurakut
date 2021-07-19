import { GetServerSideProps } from "next"
import { Layout } from "../../components/Layout";
import { LeftContainer } from "../../components/LeftContainer";
import { MidContainer } from "../../components/MidContainer";
import { ProfileRelations } from "../../components/ProfileRelations";
import { ProfileSidebar } from "../../components/ProfileSideBar";
import { RightContainer } from "../../components/RightContainer";
import { AlurakutMenu, OrkutNostalgicIconSet } from "../../lib/AlurakutCommons";
import { Box } from '../../components/Box'

import { SocialContainer, Title, SubTitle } from './styles';

export default function user ({user, userFriends}) {
    return (
        <>
            <AlurakutMenu githubUser={user.username} />
            <Layout>
                <LeftContainer>
                    <ProfileSidebar githubUserURL={user.username} />
                </LeftContainer>
                <MidContainer>
                    <Box>
                        <Title>{user.fullName}</Title>
                        <SubTitle>{user.location}</SubTitle>
                        <OrkutNostalgicIconSet />
                        <SocialContainer>
                            <div>
                                <p className="subTitle" >Seguindo</p>
                                <span>{user.following}</span>
                            </div>
                            <div>
                                <p className="subTitle">Seguidores</p>
                                <span>{user.followers}</span>
                            </div>
                        </SocialContainer>
                        <hr />
                        <p>{user.bio}</p>
                        <span><a href={`https://github.com/${user.username}`}>Visitar {user.username}</a></span>
                    </Box>
                </MidContainer>
                <RightContainer>
                    <ProfileRelations
                        containerTitle="Amigos"
                        data={userFriends}
                    />
                </RightContainer>
            </Layout>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({params}) => {

    const { slug } = params;

    const userData = await fetch(`https://api.github.com/users/${slug}`).then((response) => response.json());

    const userFollowersData = await fetch(`https://api.github.com/users/${slug}/following`).then( (response) => response.json() );

    const userFriends = userFollowersData.map(friendData => {
        return {
            name: friendData.login,
            avatar: friendData.avatar_url
        }
    })

    const user = {
        username: userData.login,
        avatar: userData.avatar_url,
        fullName: userData.name,
        location: userData.location,
        bio: userData.bio,
        followers: userData.followers,
        following: userData.following,
    }

    return {
        props: {
            user,
            userFriends
        }
    }
}