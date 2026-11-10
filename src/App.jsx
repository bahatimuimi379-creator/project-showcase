import { useState, useEffect } from 'react';
import ProjectCard from './components/ProjectCard';
import SearchBar from './components/SearchBar';
import ProjectForm from './components/ProjectForm';

const initialProjects = [
  { id: 1, title: 'Harbour & Pine', color: '#2b4bff', description: 'Identity for a coffee roaster.' },
  { id: 2, title: 'Tidewatch', color: '#0e9f8e', description: 'A tide dashboard for harbour pilots.' },
  { id: 3, title: 'Common Ground', color: '#e8553d', description: 'A community garden campaign.' },
];

function App() {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('projects');
    return saved ? JSON.parse(saved) : initialProjects;
  });
  const [query, setQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const addProject = (newProject) => {
    setProjects([newProject, ...projects]);
  };

  
  const visibleProjects = projects.filter((project) =>
    `${project.title} ${project.description}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <>
      
      <header className="bg-light border-bottom py-3 text-center">
        <h1 className="h5 m-0">Personal Project Showcase App</h1>
      </header>

      
      <main className="container py-4" style={{ maxWidth: '40rem' }}>
        <ProjectForm onAdd={addProject} />

        
        <section className="card" aria-label="Projects">
          <div className="card-header bg-white">
            <SearchBar value={query} onChange={setQuery} />
          </div>

          <ul className="list-group list-group-flush">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ul>

          {visibleProjects.length === 0 && (
            <p className="text-muted p-3 m-0">No projects match your search. Try another word.</p>
          )}
        </section>
      </main>
    </>
  );
}

export default App;

