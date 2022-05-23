import React from 'react';
import styled from 'styled-components';
import { GoPrimitiveDot } from 'react-icons/go';
const TaskContainer = styled.div`
    display: flex;
    width: 70%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    :hover {
        background-color: gray;
        transition: all 0.1s ease-in-out;
    }
`;

const TaskTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

//can't display Project task to the browser

export const ProjectsTask = ({ project }) => {
    console.log(project);
    return (
        <div>
            <TaskTitle>
                <GoPrimitiveDot color={project.color} margin={'20px 20px'} />
                <p>{project.title}</p>
            </TaskTitle>
            <span>{project.project_count}</span>
        </div>
    );
};
