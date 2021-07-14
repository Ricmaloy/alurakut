import { ProfileRelationsBoxWrapper } from "./styles";

export const ProfileRelations = () => {
  const pessoasFavoritas = [
    "juunegreiros",
    "omariosouto",
    "peas",
    "rafaballerini",
    "marcobrunodev",
    "felipefialho",
  ];

  return (
    <>
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
            Pessoas da comunidade ({pessoasFavoritas.length})
        </h2>

        <ul>
          {pessoasFavoritas.map((pessoa) => {
            return (
                <li key={pessoa}>
                    <a href={`/users/${pessoa}`} >
                        <img src={`https://github.com/${pessoa}.png`} alt={pessoa} />
                        <span>{pessoa}</span>
                    </a>
                </li>
            );
          })}
        </ul>
      </ProfileRelationsBoxWrapper>
    </>
  );
};
