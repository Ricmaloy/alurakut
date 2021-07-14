import { createContext, FormEvent, ReactNode, useState } from "react";

interface CommunitiesItem {
    title: string,
    imageURL: string;
}

interface CommunitiesContextProps {
    communities: CommunitiesItem[];
    handleAddCommunity: ( CommunityName: string, CommunityURL: string) => void;
}

const CommunitiesContext = createContext<CommunitiesContextProps>({} as CommunitiesContextProps);

const CommunitiesProvider = ({children}) => {
    const [communities, setCommunities] = useState<CommunitiesItem[]>([
        {
            title: 'Eu odeio acordar cedo',
            imageURL: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
        }
    ]);

    function handleAddCommunity(title: string, imageURL: string) {

        setCommunities([...communities, {title, imageURL}]);

        console.log(communities);
    }

    return (
        <CommunitiesContext.Provider 
            value={{communities, handleAddCommunity}}
        >
            {children}
        </CommunitiesContext.Provider>
    );
};

export { CommunitiesProvider, CommunitiesContext }