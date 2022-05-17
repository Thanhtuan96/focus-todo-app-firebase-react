import React from 'react';
import styled from 'styled-components';
import { GoPrimitiveDot } from 'react-icons/go';

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

const SideBar = styled.div`
    height: 100%;
    flex-grow: 2;
    background-color: #f1f0f0;
    display: flex;
    flex-direction: column;
    align-items: center;
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
export const TodoSideBar = () => {
    return (
        <SideBar>
            <TaskContainer>
                <TaskTitle>
                    <GoPrimitiveDot color={'#af4e4e'} margin={'20px 20px'} />
                    <p>Structural Engineer</p>
                </TaskTitle>
                <span>2</span>
            </TaskContainer>
        </SideBar>
    );
};
