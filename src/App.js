import './App.css';
import { useState, useEffect } from 'react';
import { AppTitle } from './components/AppTitle/AppTitle';
import { TodoContent } from './components/TodoContent/TodoContent';
import { TodoSideBar } from './components/TodoSideBar/TodoSideBar';
import { database } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

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
    const [projects, setProjects] = useState([]);

    const usersCollectionRef = collection(database, 'projects');

    useEffect(() => {
        const getProjects = async () => {
            const data = await getDocs(usersCollectionRef);
            setProjects(
                data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
        };

        getProjects();
    }, []);

    console.log(projects);

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
