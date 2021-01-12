import React, { useEffect, useState } from "react";

import "./App.css";
import CardList from "./components/cardsCollection/cardList.component";
import Pagination from "./components/pagination/pagination.component";
import SearchField from "./components/search/searchfield.component";

function App() {
  const [enye, setEnye] = useState([]);
  const [size, setSize] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(20);
  const [searchfield, updateSearchfield] = useState("");

  useEffect(() => {
    fetch("https://api.enye.tech/v1/challenge/records")
      .then((response) => response.json())
      .then((data) => {
        setEnye(data.records.profiles);
        setSize(data.size);

        // console.log(data.records.profiles.slice(0, 20));
      });

    // eslint-disable-next-line
  }, []);

  console.log(enye.map((jj) => jj.FirstName));
  // console.log(size);
  // console.log(searchfield);
  const anotherArray = [...enye];
  // setDuplicate(anotherArray);
  // console.log(duplicate);

  const indexOfLastPost = currentPage * pageLimit;
  const indexOfFirstPost = indexOfLastPost - pageLimit;
  let currentPosts = enye.slice(indexOfFirstPost, indexOfLastPost);
  // currentPosts = [1, 2, 3];
  console.log(currentPosts);
  console.log(indexOfLastPost);
  console.log(currentPage);

  const filteredProfiles = anotherArray.filter((profile) =>
    profile.FirstName.toLowerCase().includes(searchfield.toLowerCase())
  );
  // setEnye(filteredProfiles);
  console.log(filteredProfiles);
  currentPosts = filteredProfiles.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <SearchField
        anotherArray={anotherArray}
        updateSearchfield={updateSearchfield}
      />
      <CardList itemArray={currentPosts} />
      <Pagination
        size={size}
        pageLimit={pageLimit}
        paginate={paginate}
        currentPage={currentPage}
      />
      READY!!! yaah
    </div>
  );
}

export default App;
