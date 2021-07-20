import nookies from "nookies";
import jwt from "jsonwebtoken";
import { AlurakutMenu } from "../../lib/AlurakutCommons";
import { LeftContainer } from "../../components/LeftContainer";
import { ProfileSidebar } from "../../components/ProfileSideBar";
import { Layout } from "../../components/Layout";
import { MidRightContainer } from "../../components/MidRightContainer";
import { GetServerSideProps } from "next";
import Head from 'next/head';
import { CommunitiesList } from "../../components/CommunitiesList";

export default function communities ({githubUser, communities}) {
    return (
        <>
            <Head>
              <title>Comunidades | Alurakut</title>
            </Head>
            <AlurakutMenu githubUser={githubUser} />
            <Layout>
                <LeftContainer>
                    <ProfileSidebar githubUserURL={githubUser} />
                </LeftContainer>
                <MidRightContainer>
                    <CommunitiesList communitiesList={communities.data.allCommunities} />
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

    let com;

    await fetch("https://graphql.datocms.com/", {
        method: "POST",
        headers: {
          Authorization: "ae0858d6fc0e28873bbc98d9a2398e",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: `query {
          allCommunities {
            id 
            title
            imageUrl
          }
        }`,
        }),
      }).then((response) => response.json())
        .then(res => com = res)

    return {
        props: {
          githubUser,
          communities: com
        },
    };
}