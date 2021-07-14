import { useContext } from "react";
import { ComunitiesContext } from "../contexts/ComunityContext";

interface ComunitiesItem {
    title: string,
    imageURL: string;
}

interface ComunitiesContextProps {
    comunities: ComunitiesItem[];
    handleAddComunity: (comunityName, comunityURL) => void;
}

function useComunities(): ComunitiesContextProps {
    const context = useContext(ComunitiesContext);

    return context;
}

export { useComunities }