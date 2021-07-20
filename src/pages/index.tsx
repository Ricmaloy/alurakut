import { useEffect } from "react";
import { GetServerSideProps } from "next";
import { CommunityRelations } from "../components/CommunityRelations";
import { Layout } from "../components/Layout";
import { LeftContainer } from "../components/LeftContainer";
import { MidContainer } from "../components/MidContainer";
import { ProfileRelations } from "../components/ProfileRelations";
import { ProfileSidebar } from "../components/ProfileSideBar";
import { RightContainer } from "../components/RightContainer";
import { WelcomeArea } from "../components/WelcomeArea";
import { useCommunities } from "../hooks/useComunities";
import { AlurakutMenu } from "../lib/AlurakutCommons";
import nookies from "nookies";
import jwt from "jsonwebtoken";
import Head from "next/head";

export default function Home({ githubUser, firstName, userFriends }) {

  const { communities, setCommunities } = useCommunities();
  const user = githubUser;

  useEffect(() => {
    fetch("https://graphql.datocms.com/", {
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
          creatorSlug
        }
      }`,
      }),
    })
      .then((response) => response.json()) // Pega o retorno do response.json() e já retorna
      .then((respostaCompleta) => {
        const comunidadesVindasDoDato = respostaCompleta.data.allCommunities;
        setCommunities(comunidadesVindasDoDato);
        console.log(comunidadesVindasDoDato)
      });
  }, []);


  return (
    <>
      <Head>
        <title>Início | Alurakut</title>
      </Head>
      <AlurakutMenu githubUser={user} />
      <Layout>
        <LeftContainer>
          <ProfileSidebar githubUserURL={user} />
        </LeftContainer>

        <MidContainer>
          <WelcomeArea name={firstName} />
        </MidContainer>

        <RightContainer>
          <CommunityRelations containerTitle="Comunidades" data={communities} />
          <ProfileRelations
            containerTitle="Meus amigos"
            data={userFriends}
          />
        </RightContainer>
      </Layout>
    </>
  );
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

  const userData = await fetch(`https://api.github.com/users/${githubUser}`).then( (response) => response.json() );
  const fullName = userData.name.split(' ');

  const userFollowers = await fetch(`https://api.github.com/users/${githubUser}/following`).then( (response) => response.json() );

  const userFriends = userFollowers.map(friendData => {
    return {
      name: friendData.login
    }
  })

  return {
    props: {
      githubUser,
      firstName: fullName[0],
      userFriends
    },
  };
}
