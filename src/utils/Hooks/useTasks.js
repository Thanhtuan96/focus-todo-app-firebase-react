import { useState, useEffect } from 'react';
import { database } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

export const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    const usersCollectionRef = collection(database, 'tasks');

    useEffect(() => {
        const getTasks = async () => {
            const data = await getDocs(usersCollectionRef);
            setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getTasks();
    }, []);

    return tasks;
};
