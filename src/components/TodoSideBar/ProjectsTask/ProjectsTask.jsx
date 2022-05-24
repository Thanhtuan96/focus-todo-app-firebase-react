import React from 'react';
import styled from 'styled-components';
import { GoPrimitiveDot } from 'react-icons/go';
import {
    TaskContainer,
    TaskTitle,
    ProjectsCount,
} from './ProjectsTasks.style.js';

//can't display Project task to the browser

export const ProjectsTask = ({ project }) => {
    return (
        <TaskContainer key={project.id} className='task-container'>
            <TaskTitle>
                <GoPrimitiveDot color={project.color} margin={'20px 20px'} />
                <p>{project.project_name}</p>
            </TaskTitle>
            <ProjectsCount>{project.project_count}</ProjectsCount>
        </TaskContainer>
    );
};
