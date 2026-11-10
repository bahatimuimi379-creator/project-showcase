
function SearchBar({ value, onChange }) {
  return (
    <div>
      
      <label htmlFor="search" className="visually-hidden">Search projects</label>
      <input
        id="search"
        type="search"
        className="form-control"
        placeholder="Search Projects"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
