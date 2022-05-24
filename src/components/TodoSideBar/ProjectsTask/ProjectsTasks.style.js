import styled from 'styled-components';

export const TaskContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    :hover {
        background-color: #80808038;
        transition: all 0.1s ease-in-out;
    }
`;

export const TaskTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-basis: 300px;
    p {
        margin-left: 1em;
    }
`;

export const ProjectsCount = styled.span`
    font-weight: 100;
    color: #0000005e;
`;
