import { ProfileRelationsBoxWrapper } from "./styles";

interface DataItem {
  creatorSlug: string;
  id: string;
  imageUrl: string;
  title: string;
}
interface CommunitylationsProps {
  containerTitle: string,
  data: DataItem[],
}

export const CommunityRelations = ({containerTitle, data}: CommunitylationsProps) => {
  return (
    <>
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
            {containerTitle} ({data.length})
        </h2>

        <ul>
          {data.map((item, index) => {
            if(index < 6) {
              return (
                  <li key={item.title}>
                      <a href={`/communities/${item.id}`} >
                          <img 
                            src={item.imageUrl} 
                            alt={`Comunidade ${item.title}`} 
                          />
                          <span>{item.title}</span>title
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
