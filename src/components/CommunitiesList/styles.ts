import styled from 'styled-components';

export const CommunityList = styled.ul`
    list-style: none;
    padding: 0;
`;

export const ListItem = styled.li`
   padding: 10px 15px;

   background-color: rgb(217, 230, 246);

    &:nth-child(odd) {
        background-color: rgb(241, 249, 254);
    }
`;

export const CommunityContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

export const CommunityPhoto = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;

export const CommunityName = styled.span`
    cursor: pointer;
`;
