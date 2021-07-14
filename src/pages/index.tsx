import { Layout } from "../components/Layout";
import { LeftContainer } from "../components/LeftContainer";
import { MidContainer } from "../components/MidContainer";
import { ProfileRelations } from "../components/ProfileRelations";
import { ProfileSidebar } from "../components/ProfileSideBar";
import { RightContainer } from "../components/RightContainer";
import { WelcomeArea } from "../components/WelcomeArea";
import { AlurakutMenu } from "../lib/AlurakutCommons";

export default function Home() {
  const user = "ricmaloy";

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
          <ProfileRelations />
        </RightContainer>
      </Layout>
    </>
  );
}
