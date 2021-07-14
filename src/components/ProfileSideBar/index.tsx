import { Box } from "../Box";
import { ProfilePicture } from "./styles";

interface ProfileSideBarProps {
    githubUserURL: string;
}

export const ProfileSidebar = ({ githubUserURL }: ProfileSideBarProps) => {
  return (
      <Box>
        <ProfilePicture src={`https://github.com/${githubUserURL}.png`} alt="" />
      </Box>
  );
};
