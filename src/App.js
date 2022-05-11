import './App.css';
import { useState } from 'react';
import { AppTitle } from './components/AppTitle/AppTitle';
import { TodoContent } from './components/TodoContent/TodoContent';
import { TodoSideBar } from './components/TodoSideBar/TodoSideBar';
import styled from 'styled-components';

const AppContainer = styled.div`
    height: 100%;
    width: 100%;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// const DemoSideBar = styled.div`
//     height: 100%;
//     flex-grow: 2;
//     background-color: white;
//     border-right: 0.5px solid gray;
// `;

const DemoContent = styled.div`
    height: 100%;
    flex-grow: 8;
    background-color: white;
`;

function App() {
    const [isFold, setIsFold] = useState('false');
    return (
        <div className='App'>
            <AppTitle />
            <AppContainer>
                <TodoSideBar>2323</TodoSideBar>
                <TodoContent>232323</TodoContent>
            </AppContainer>
        </div>
    );
}

export default App;
