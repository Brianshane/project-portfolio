import ProjectItem from './projectItem'
function ProjectList({projects}){
    if(projects.length===0){
        return(
            <p className='text-center text-gray-500 py-6'>
                No projects found.
            </p>
        );
    }
    return(
        <div className='space-y-3'>
           {
            projects.map((project) => (<ProjectItem
            key={project.id}
            project={project}
            />
        ))}
        
    
        </div>
    );
}export default ProjectList