import './App.css';
import { useState } from 'react';
import { AppTitle } from './components/AppTitle/AppTitle';
import { TodoContent } from './components/TodoContent/TodoContent';
import { TodoSideBar } from './components/TodoSideBar/TodoSideBar';
import { useProjects } from './utils/Hooks/useProjects';
import { useTasks } from './utils/Hooks/useTasks';

import styled from 'styled-components';

const AppContainer = styled.div`
    height: 100%;
    width: 100%;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function App() {
    const [isOpen, setIsOpen] = useState(true);

    const projects = useProjects();
    const tasks = useTasks();

    console.log([projects, tasks]);

    return (
        <div className='App'>
            <AppTitle isOpen={isOpen} setIsOpen={setIsOpen} />
            <AppContainer>
                <TodoSideBar isOpen={isOpen} projects={projects}>
                    2323
                </TodoSideBar>
                <TodoContent>232323</TodoContent>
            </AppContainer>
        </div>
    );
}

export default App;
