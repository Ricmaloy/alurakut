import { useEffect } from "react";
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

export default function Home() {
  const user = "ricmaloy";
  const { communities, setCommunities } = useCommunities();
  const pessoasFavoritas = [
    { name: "juunegreiros" },
    { name: "omariosouto" },
    { name: "peas" },
    { name: "rafaballerini" },
    { name: "marcobrunodev" },
    { name: "felipefialho" },
    { name: "rodrigozamb" },
  ];

  useEffect(() => {
    fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        'Authorization': 'ae0858d6fc0e28873bbc98d9a2398e',
        'Content-Type': "application/json",
        'Accept': "application/json",
      },
      body: JSON.stringify({
        "query": `query {
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
      });
  }, []);

  return (
    <>
      <AlurakutMenu githubUser={user} />
      <Layout>
        <LeftContainer>
          <ProfileSidebar githubUserURL={user} />
        </LeftContainer>

        <MidContainer>
          <WelcomeArea />
        </MidContainer>

        <RightContainer>
          <CommunityRelations containerTitle="Comunidades" data={communities} />
          <ProfileRelations containerTitle="Meus amigos" data={pessoasFavoritas} />
        </RightContainer>
      </Layout>
    </>
  );
}
