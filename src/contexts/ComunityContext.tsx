import { createContext, FormEvent, ReactNode, useState } from "react";

interface ComunitiesItem {
    title: string,
    imageURL: string;
}

interface ComunitiesContextProps {
    comunities: ComunitiesItem[];
    handleAddComunity: ( ComunityName: string, ComunityURL: string) => void;
}

const ComunitiesContext = createContext<ComunitiesContextProps>({} as ComunitiesContextProps);

const ComunitiesProvider = ({children}) => {
    const [comunities, setComunities] = useState<ComunitiesItem[]>([
        {
            title: 'Eu odeio acordar cedo',
            imageURL: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
        }
    ]);

    function handleAddComunity(title: string, imageURL: string) {

        setComunities([...comunities, {title, imageURL}]);

        console.log(comunities);
    }

    return (
        <ComunitiesContext.Provider 
            value={{comunities, handleAddComunity}}
        >
            {children}
        </ComunitiesContext.Provider>
    );
};

export { ComunitiesProvider, ComunitiesContext }