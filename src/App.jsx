import { useState } from 'react';
import ProjectCard from './components/ProjectCard';
import SearchBar from './components/SearchBar';
import ProjectForm from './components/ProjectForm';

const initialProjects = [
  { id: 1, title: 'Harbour & Pine',  description: 'Identity for a coffee roaster.' },
  { id: 2, title: 'Tidewatch', description: 'A tide dashboard for harbour pilots.' },
  { id: 3, title: 'Common Ground',  description: 'A community garden campaign.' },
];

function App() {
  
  const [projects, setProjects] = useState(initialProjects);
  const [query, setQuery] = useState('');

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
            <p className="text-muted p-3 m-0">No projects found.</p>
          )}
        </section>
      </main>
    </>
  );
}

export default App;

