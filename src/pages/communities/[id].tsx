import { GetServerSideProps } from "next";
import Head from 'next/head';
import Link from "next/link";
import nookies from "nookies";
import { Box } from "../../components/Box";
import { Layout } from "../../components/Layout";
import { LeftContainer } from "../../components/LeftContainer";
import { MidContainer } from "../../components/MidContainer";
import { ProfileRelations } from "../../components/ProfileRelations";
import { RightContainer } from "../../components/RightContainer";
import { AlurakutMenu } from "../../lib/AlurakutCommons";

import { Container, ContainerItem } from '../../styles/community';

export default function community({ community }) {
  const pessoasFavoritas = [
    {name: 'juunegreiros'},
    {name: 'omariosouto'},
    {name: 'peas'},
    {name: 'rafaballerini'},
    {name: 'marcobrunodev'},
    {name: 'felipefialho'},
  ]
  console.log(community)
    return (
        <>
          <Head>
            {community.title}
          </Head>
          <AlurakutMenu githubUser={community.creatorSlug} />

          <Layout>
            <LeftContainer>
              <Box>
                <img style={{width: "130px", height: "130px", marginBottom: "10px"}} src={community.imageUrl} alt="Capa da comunidade" />
                  <Link href="/">
                    <a href="/">
                      <span style={{display: "flex", gap: "8px"}}>
                        <img src={`http://alurakut.vercel.app/icons/plus.svg`} alt="Participar da comunidade" />
                        Participar
                      </span>
                    </a>
                  </Link>
              </Box>
            </LeftContainer>
            <MidContainer>
              <Box>
                <h1 className="title">{community.title}</h1>
                <Container>
                  <ContainerItem>
                    Idioma: Português
                  </ContainerItem>
                  <ContainerItem>
                    Categoria: Pessoas
                  </ContainerItem>
                  <ContainerItem>
                    Dono: {community.creatorSlug}
                  </ContainerItem>
                  <ContainerItem>
                    Tipo: Pública
                  </ContainerItem>
                  <ContainerItem>
                    Local: Brasil
                  </ContainerItem>
                  <ContainerItem>
                    Criado em: {community.createdAt}
                  </ContainerItem>
                  <ContainerItem>
                    Membros: 4521
                  </ContainerItem>
                </Container>
              </Box>
            </MidContainer>
            <RightContainer>
              <ProfileRelations containerTitle={`Membros`} data={pessoasFavoritas} />
            </RightContainer>
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

    const { id } = context.params;

    const communityData = await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        Authorization: "ae0858d6fc0e28873bbc98d9a2398e",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: `query {
          community(filter: {id: {eq: "${id}"}}) {
          id 
          title
          imageUrl
          creatorSlug
          createdAt
        }
      }`,
      }),
    }).then((response) => response.json())
  
    const community = {
      id: communityData.data.community.id,
      title: communityData.data.community.title,
      imageUrl: communityData.data.community.imageUrl,
      creatorSlug: communityData.data.community.creatorSlug,
      createdAt: new Date(communityData.data.community.createdAt).toLocaleDateString('pt-BR', {
        timeZone: 'UTC',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    })
    }
    console.log(community);

    return {
        props: {
          community
        }
    }
}