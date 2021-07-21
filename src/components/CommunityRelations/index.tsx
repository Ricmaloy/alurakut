import Link from "next/link";
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
                      <Link href={`/communities/${item.id}`} >
                        <a href={`/communities/${item.id}`}>
                          <img 
                            src={item.imageUrl} 
                            alt={`Comunidade ${item.title}`} 
                          />
                          <span>{item.title}</span>title
                        </a>
                      </Link>
                  </li>
              );
            }
          })}
        </ul>
        {data.length >= 7 && (
          <Link href="/communities">
            <a className="boxLink" href="/communities">Ver mais</a>
          </Link>
        )}
      </ProfileRelationsBoxWrapper>
    </>
  );
};
