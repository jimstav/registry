import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    navigate(`/search?term=${term}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={term} onChange={(e) => setTerm(e.target.value)} />
    </form>
  );
}

export default SearchInput;
