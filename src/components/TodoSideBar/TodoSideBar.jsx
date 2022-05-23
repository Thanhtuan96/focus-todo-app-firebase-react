import React, { useState } from 'react';
import styled from 'styled-components';
import { GoPrimitiveDot } from 'react-icons/go';
import { database } from '../../firebase';
import { ProjectsTask } from './ProjectsTask/ProjectsTask';

const projects_task = [
    [
        {
            id: 1,
            task_name: 'GIS Technical Architect',
            project_tasks_number: 1,
            project_task_color: '#c0d2cd',
        },
        {
            id: 2,
            task_name: 'Structural Engineer',
            project_tasks_number: 2,
            project_task_color: '#55cac3',
        },
        {
            id: 3,
            task_name: 'Human Resources Assistant II',
            project_tasks_number: 3,
            project_task_color: '#7d89b8',
        },
        {
            id: 4,
            task_name: 'Programmer I',
            project_tasks_number: 4,
            project_task_color: '#b381aa',
        },
        {
            id: 5,
            task_name: 'Desktop Support Technician',
            project_tasks_number: 5,
            project_task_color: '#3ed504',
        },
    ],
];

export const TodoSideBar = ({ isOpen }) => {
    return (
        <SideBar isOpen={isOpen}>
            <TaskContainer>
                {projects_task.map((project) => {
                    <ProjectsTask project={project} />;
                })}
            </TaskContainer>
        </SideBar>
    );
};

const SideBar = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    height: 100%;
    flex-grow: 2;
    background-color: #f1f0f0;
    flex-direction: column;
    align-items: center;
    transition: all 0.7s ease-in-out;
`;

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
