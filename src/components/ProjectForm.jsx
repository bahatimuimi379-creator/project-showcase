import { useState } from 'react';

function ProjectForm({ onAdd }) {

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Branding');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
   
    e.preventDefault();

   
    if (description.trim().length<20){
      setError('Describe the project in at least 20 characters');
      return;
    }
 
    onAdd({
      id: Date.now(),
      title: title.trim(),
      category: category,
      description: description.trim(),
    });

    
    setTitle('');
    setDescription('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="card card-body mb-4">
      <h2 className="h5">Add a project</h2>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
          id="title"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">Category</label>
        <select
          id="category"
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Branding</option>
          <option>Web</option>
          <option>Campaign</option>
          <option>Motion</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          id="description"
          className="form-control"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

    
      {error && <p className="text-danger">{error}</p>}

      <button type="submit" className="btn btn-primary">Add project</button>
    </form>
  );
}

export default ProjectForm;
