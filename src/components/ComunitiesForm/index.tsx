import { useState } from "react";
import { useCommunities } from "../../hooks/useComunities"

export const ComunitiesForm = () => {
    const { handleAddCommunity } = useCommunities();
    const [comunityName, setComunityName] = useState('');
    const [comunityURL, setComunityURL] = useState('');

    return (
        <>
        <h2 className="subTitle">O que você deseja fazer ?</h2>
        <form>
            <div>
                <input 
                    type="text" 
                    placeholder="Qual vai ser o nome da sua comunidade ?"
                    name="title"
                    aria-label="Qual vai ser o nome da sua comunidade ?"
                    onChange={ev => setComunityName(ev.target.value)}
                    value={comunityName}
                />
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder="Coloque uma URL para usarmos de capa"
                    name="image"
                    aria-label="Coloque uma URL para usarmos de capa"
                    onChange={ev => setComunityURL(ev.target.value)}
                    value={comunityURL}
                />
            </div>
            <button 
                type="button"
                onClick={() => {
                    handleAddCommunity(comunityName, comunityURL);
                    setComunityName('');
                    setComunityURL('');
                }}
            >
                Criar comunidade
            </button>
        </form>
        </>
    )
}