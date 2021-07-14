import { ProfileRelationsBoxWrapper } from "./styles";

interface DataItem {
  title: string,
  imageURL: string;
}

interface ProfileItem {
  name: string;
}

interface ProfileRelationsProps {
  title: string,
  data?: DataItem[] | ProfileItem[],
}

export const ProfileRelations = ({title, data}: ProfileRelationsProps) => {

  return (
    <>
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
            {title} ({data.length})
        </h2>

        <ul>
          {data.map((item, index) => {
            if(index < 6) {
              return (
                  <li key={item.title || item.name}>
                      <a href={ title === 'Comunidades' ? `/comunities/${item.title}` : `/users/${item.name}`} >
                          <img 
                            src={ title === 'Comunidades' ? item.imageURL : `https://github.com/${item.name}.png`} 
                            alt={`Comunidade ${item.title}`} 
                          />
                          <span>{item.title || item.name}</span>title
                      </a>
                  </li>
              );
            }
          })}
        </ul>
        {data.length >= 7 && (
          <a className="boxLink" href="/">Ver mais</a>
        )}
      </ProfileRelationsBoxWrapper>
    </>
  );
};
