import Link from "next/link";
import { ProfileRelationsBoxWrapper } from "./styles";

interface ProfileItem {
  name: string;
}

interface ProfileRelationsProps {
  containerTitle: string,
  data: ProfileItem[] ,
}

export const ProfileRelations = ({containerTitle, data}: ProfileRelationsProps) => {
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
                  <li key={item.name}>
                      <a href={`/users/${item.name}`} >
                          <img 
                            src={`https://github.com/${item.name}.png`} 
                            alt={`${item.name}`} 
                          />
                          <span>{item.name}</span>title
                      </a>
                  </li>
              );
            }
          })}
        </ul>
        {data.length >= 7 && (
          <Link  href="/users">Ver mais</Link>
        )}
      </ProfileRelationsBoxWrapper>
    </>
  );
};
