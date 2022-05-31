import { useState, useEffect } from 'react';
import { database } from '../../firebase';
import { collection, Firestore, getDocs } from 'firebase/firestore';

export const useProjects = () => {
    const [projects, setProjects] = useState([]);

    const usersCollectionRef = collection(database, 'projects');

    useEffect(() => {
        const tasksRef = [];
        const getProjects = async () => {
            const data = await getDocs(usersCollectionRef);
            setProjects(
                data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
        };
        

        getProjects();
    }, []);

    return projects;
};
