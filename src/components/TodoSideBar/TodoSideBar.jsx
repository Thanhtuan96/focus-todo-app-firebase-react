import React from 'react';
import styled from 'styled-components';

const SideBar = styled.div`
    height: 100%;
    flex-grow: 2;
    background-color: white;
    border-right: 0.5px solid gray;
`;

export const TodoSideBar = () => {
    return <SideBar />;
};
