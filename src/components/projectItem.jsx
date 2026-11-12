function ProjectItem({project}){
    return(
        <div className="flex items-center border-b border-gray-200py-2">
            <div className="w-[50px] h-[50px] border border-gray-300 flex justify-center items-center mr-4 font-bold text-gray-300 shrink -0">
                X
            </div>
            <div>
                <div className="font-bold">
                    {project.title}
                </div>
                <div className="=text-sm text-gray-600">
                    {project.description}
                    </div>
            </div>
        </div>
    )
}export default ProjectItem