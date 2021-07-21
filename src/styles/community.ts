import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
`;

export const ContainerItem = styled.div`
    padding: 15px;

    background-color: rgb(217, 230, 246);

    &:nth-child(odd) {
        background-color: rgb(241, 249, 254);
    }
`;