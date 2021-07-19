import { useState } from "react";
import { toast } from "react-toastify";
import { useCommunities } from "../../hooks/useComunities"

export const ComunitiesForm = () => {
    const { communities, setCommunities } = useCommunities();
    const [comunityName, setComunityName] = useState('');
    const [comunityURL, setComunityURL] = useState('');

    function handleCreateDatoCommunity() {
        if(comunityName.trim() === '' || comunityURL.trim() === '') {
            toast.error('❌ Campos inválidos !');
            return;
        }

        const newCommunity = {
            title: comunityName,
            imageUrl: comunityURL,
            creatorSlug: 'ricmaloy'
        };

        fetch('/api/comunidades', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCommunity)
        }).then(async (response) => {
            const dados = await response.json();
            const comunidade = dados.registro;
            setCommunities([...communities, comunidade]);
            setComunityName('');
            setComunityURL('');
        });

        toast('🦄 Comunidade criada!');
    }

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
                onClick={handleCreateDatoCommunity}
            >
                Criar comunidade
            </button>
        </form>
        </>
    )
}