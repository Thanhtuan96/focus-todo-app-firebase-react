import styled from 'styled-components';

export const Container = styled.div`
    background-color: orange;
    height: 2em;
    font-size: 1em;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Header = styled.h1`
    margin: 5px 10px;
    margin: 1em 1em;
`;
export const CTAButton = styled.button`
    border: 1px solid red;
    font-size: 5rem;
    padding: 20px 40px;
    border-radius: 15px;
    background-color: transparent;
    color: red;
    margin-top: 5rem;
    :hover {
        border: 1px solid green;
        color: green;
        transition: all 0.05s ease-in-out;
    }
`;

export const UserIcon = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0 1em;
`;

export const ToggleBtn = styled.button`
    width: 50px;
    height: 50px;
    border: 1px solid gray;
    border-radius: 15px;
    margin: 0 1em;
    background-color: transparent;
`;
