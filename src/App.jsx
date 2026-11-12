
import { useState } from 'react';

import Header from './components/Header';
import AddProjectForm from './components/AddProject';
import SearchBar from './components/searchBar';
import ProjectList from './components/projectList';

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Project 1',
      description: 'A React portfolio application'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'A JavaScript weather application'
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'A personal blog website'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Add a new project
  const handleAddProject = (newProject) => {
    setProjects((previousProjects) => [
      {
        id: crypto.randomUUID(),
        ...newProject
      },
      ...previousProjects
    ]);
  };

  // Search project titles and descriptions
  const filteredProjects = projects.filter((project) => {
    const search = searchTerm.toLowerCase().trim();

    return (
      project.title.toLowerCase().includes(search) ||
      project.description.toLowerCase().includes(search)
    );
  });

  return (
    <div className="max-w-xl mx-auto my-8 font-sans px-4">

      <Header />

      <AddProjectForm onAddProject={handleAddProject} />

      <div className="border border-gray-300 rounded-lg p-4 mt-4">

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <ProjectList projects={filteredProjects} />

      </div>
    </div>
  );
}

export default App;
