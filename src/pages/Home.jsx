import { useState } from "react";
import Gallary from "../components/Galerey";
import Search from "../components/Search";
import { useFetch } from "../hooks/useFetch";
const API = "https://api.unsplash.com/search/photos?client_id=Ofwzh8pDlKhORhDnh3HtnmDN4bgU2TqgH3LHM45CK-U&page=1&query="

function Home() {
  const [url, setUrl] = useState(API + "features");
  const { data, isPending, error } = useFetch(url);

  const setNewUrl = (url) => {
    setUrl(API + url);
  };
  return (
    <div>
      <h1>Search Any Image: </h1>
      <Search setNewUrl={setNewUrl} />
      {data && <Gallary data={data} />}
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
    </div>
  );
}

export default Home;