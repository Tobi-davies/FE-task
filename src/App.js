import React, { useEffect, useState } from "react";

import "./App.css";
import CardList from "./components/cardsCollection/cardList.component";
import Pagination from "./components/pagination/pagination.component";

function App() {
  const [enye, setEnye] = useState([]);
  const [size, setSize] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(20);

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

  const indexOfLastPost = currentPage * pageLimit;
  const indexOfFirstPost = indexOfLastPost - pageLimit;
  const currentPosts = enye.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentPosts);
  console.log(indexOfLastPost);
  console.log(currentPage);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <CardList itemArray={currentPosts} />
      <Pagination size={size} pageLimit={pageLimit} />
      READY!!! yaah
    </div>
  );
}

export default App;
