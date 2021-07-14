import { useContext } from "react";
import { CommunitiesContext } from "../contexts/ComunityContext";

interface CommunitiesItem {
  title: string;
  imageURL: string;
}

interface CommunitiesContextProps {
  communities: CommunitiesItem[];
  handleAddCommunity: (communityName: string, communityURL: string) => void;
}

function useCommunities(): CommunitiesContextProps {
  const context = useContext(CommunitiesContext);

  return context;
}

export { useCommunities };
