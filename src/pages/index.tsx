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
  const { communities } = useCommunities();
  const pessoasFavoritas = [
    {name: "juunegreiros"},
    {name: "omariosouto"},
    {name: "peas"},
    {name: "rafaballerini"},
    {name: "marcobrunodev"},
    {name: "felipefialho"},
    {name: "ricmaloy"},
  ];

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
          <ProfileRelations title="Comunidades" data={communities} />
          <ProfileRelations title="Meus amigos" data={pessoasFavoritas} />
        </RightContainer>
      </Layout>
    </>
  );
}
