import nookies from "nookies";
import jwt from "jsonwebtoken";
import { AlurakutMenu } from "../../lib/AlurakutCommons";
import { LeftContainer } from "../../components/LeftContainer";
import { ProfileSidebar } from "../../components/ProfileSideBar";
import { Layout } from "../../components/Layout";
import { UsersList } from "../../components/UsersList";
import { MidRightContainer } from "../../components/MidRightContainer";
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