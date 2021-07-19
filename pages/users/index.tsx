import nookies from "nookies";
import jwt from "jsonwebtoken";
import { AlurakutMenu } from "../../src/lib/AlurakutCommons";
import { LeftContainer } from "../../src/components/LeftContainer";
import { ProfileSidebar } from "../../src/components/ProfileSideBar";
import { Layout } from "../../src/components/Layout";
import { UsersList } from "../../src/components/UsersList";
import { MidRightContainer } from "../../src/components/MidRightContainer";
import { GetServerSideProps } from "next";

export default function Users({githubUser, userFriends}) {
    return (
        <>
            <AlurakutMenu githubUser={githubUser} />
            <Layout>
                <LeftContainer>
                    <ProfileSidebar githubUserURL={githubUser} />
                </LeftContainer>
                <MidRightContainer>
                    <UsersList usersList={userFriends} />
                </MidRightContainer>
            </Layout>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const token = nookies.get(context).USER_TOKEN;

    const auth = await fetch('https://alurakut.vercel.app/api/auth', {
      headers: {
          Authorization: token
        }
    })
    .then((resposta) => resposta.json());
  
    const { isAuthenticated } = auth;
  
    if(!isAuthenticated) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        }
      }
    }
  
    const { githubUser } = jwt.decode(token);

    const userFollowersData = await fetch(`https://api.github.com/users/${githubUser}/following`).then( (response) => response.json() );

    const userFriends = userFollowersData.map(friendData => {
        return {
            name: friendData.login,
            avatar: friendData.avatar_url
        }
    })
    
    return {
        props: {
          githubUser,
          userFriends
        },
    };
}