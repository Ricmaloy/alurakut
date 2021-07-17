import { createContext, useState } from "react";

interface CommunitiesItem {
    creatorSlug: string;
    id: string;
    imageUrl: string;
    title: string;
}

interface CommunitiesContextProps {
    communities: CommunitiesItem[];
    handleAddCommunity: ( CommunityName: string, CommunityURL: string,  creatorSlug: string, id: string) => void;
    setCommunities: ([]) => void;
}

const CommunitiesContext = createContext<CommunitiesContextProps>({} as CommunitiesContextProps);

const CommunitiesProvider = ({children}) => {
    const [communities, setCommunities] = useState<CommunitiesItem[]>([]);

    function handleAddCommunity(title: string, imageUrl: string, creatorSlug: string, id: string) {

        setCommunities([...communities, {title, imageUrl, creatorSlug, id}]);

        console.log(communities);
    }

    return (
        <CommunitiesContext.Provider 
            value={{communities, setCommunities, handleAddCommunity}}
        >
            {children}
        </CommunitiesContext.Provider>
    );
};

export { CommunitiesProvider, CommunitiesContext }