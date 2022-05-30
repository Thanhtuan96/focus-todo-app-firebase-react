import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
    height: 100%;
    flex-grow: 8;
    background-color: white;
`;

export const TodoContent = () => {
    return (
        <ContentContainer>
            <div>
                <h1>Hello</h1>
            </div>
        </ContentContainer>
    );
};
