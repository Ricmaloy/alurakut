import { useContext } from "react";
import { CommunitiesContext } from "../contexts/ComunityContext";

interface CommunitiesItem {
  creatorSlug: string;
  id: string;
  imageUrl: string;
  title: string;
}

interface CommunitiesContextProps {
  communities: CommunitiesItem[];
  handleAddCommunity: (creatorSlug: string, id: string, imageUrl: string, title: string,) => void;
  setCommunities: ([]) => void;
}

function useCommunities(): CommunitiesContextProps {
  const context = useContext(CommunitiesContext);

  return context;
}

export { useCommunities };
