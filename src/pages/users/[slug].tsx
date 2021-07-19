import { GetServerSideProps } from "next"
import { Layout } from "../../components/Layout";
import { LeftContainer } from "../../components/LeftContainer";
import { MidContainer } from "../../components/MidContainer";
import { ProfileRelations } from "../../components/ProfileRelations";
import { ProfileSidebar } from "../../components/ProfileSideBar";
import { RightContainer } from "../../components/RightContainer";
import { AlurakutMenu } from "../../lib/AlurakutCommons";

export default function User({user, userFriends}) {
    return (
        <>
            <AlurakutMenu githubUser={user.username} />
            <Layout>
                <LeftContainer>
                    <ProfileSidebar githubUserURL={user.username} />
                </LeftContainer>
                <MidContainer>

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