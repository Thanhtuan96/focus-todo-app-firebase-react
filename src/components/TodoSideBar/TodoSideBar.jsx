import { SideBar } from './TodoSideBar.styles.js';
import { ProjectsTask } from './ProjectsTask/ProjectsTask';

export const TodoSideBar = ({ isOpen, projects }) => {
    return (
        <SideBar isOpen={isOpen}>
            {projects.map((project) => {
                return <ProjectsTask project={project} />;
            })}
        </SideBar>
    );
};
