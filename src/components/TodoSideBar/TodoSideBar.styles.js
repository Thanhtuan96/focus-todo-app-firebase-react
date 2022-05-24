import styled from 'styled-components';
export const SideBar = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    height: 100%;
    flex-grow: 2;
    background-color: #f1f0f0;
    flex-direction: column;
    align-items: center;
    transition: all 0.7s ease-in-out;
`;
