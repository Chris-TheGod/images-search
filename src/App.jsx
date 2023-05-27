import { searchImages } from "./api";
import { SearchBar } from "./components/SearchBar";

export const App = () => {
  const handleSubmit = (term) => {
    searchImages(term);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
};
