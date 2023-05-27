import { SearchBar } from "./components/SearchBar";

export const App = () => {
  const handleSubmit = (term) => {
    console.log(term);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
};
