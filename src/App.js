import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
// import CardList from "./components/cardsCollection/cardList.component";
import Pagination from "./components/pagination/pagination.component";
import SearchField from "./components/search/searchfield.component";
import FilterField from "./components/filters/filter.component";
import Card from "./components/card/card";
import Header from "./components/header/header.component";
import SingleProfile from "./components/single-profile/single-profile.component";
import Loading from "./components/loading/loading.component";

function App() {
  const [enye, setEnye] = useState([]);
  const [size, setSize] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit] = useState(20);
  const [searchfield, updateSearchfield] = useState("");
  const [payment, setPayment] = useState("");
  const [gender, setGender] = useState("");

  const [load, updateLoad] = useState(false);

  useEffect(() => {
    fetch("https://api.enye.tech/v1/challenge/records")
      .then((response) => response.json())
      .then((data) => {
        setEnye(data.records.profiles);
        setSize(data.size);
        updateLoad(true);
      });

    updateLoad(false);

    // eslint-disable-next-line
  }, []);

  console.log(enye);

  const anotherArray = [...enye];

  // let newArray;
  let newLength;
  let newPost = null;

  const indexOfLastPost = currentPage * pageLimit;
  const indexOfFirstPost = indexOfLastPost - pageLimit;

  let currentPosts;

  if (enye) {
    currentPosts = enye.slice(indexOfFirstPost, indexOfLastPost);
    newPost = currentPosts.map((post, index) => (
      <Card post={post} key={index} />
    ));
    newLength = enye.length;
    console.log(newPost);
  }

  if (searchfield.length >= 1) {
    const filteredProfiles = enye.filter((profile) =>
      profile.FirstName.toLowerCase().includes(searchfield.toLowerCase())
    );
    // setEnye(filteredProfiles);
    console.log(filteredProfiles);

    currentPosts = filteredProfiles.slice(indexOfFirstPost, indexOfLastPost);

    newPost = currentPosts.map((post, index) => (
      <Card post={post} key={index} />
    ));

    newLength = filteredProfiles.length;
    console.log(newLength);
  }

  let paymentSelect;

  if (gender === "male" || gender === "female" || gender === "Prefer to skip") {
    const genderSelect = anotherArray.filter(
      (profile) => profile.Gender.toLowerCase() === gender.toLowerCase()
    );

    newLength = genderSelect.length;
    console.log(newLength);

    currentPosts = genderSelect.slice(indexOfFirstPost, indexOfLastPost);

    newPost = currentPosts.map((post, index) => (
      <Card post={post} key={index} />
    ));
  } else if (
    payment === "cc" ||
    payment === "money order" ||
    payment === "check" ||
    payment === "paypal"
  ) {
    paymentSelect = anotherArray.filter(
      (profile) => profile.PaymentMethod.toLowerCase() === payment.toLowerCase()
    );
    newLength = paymentSelect.length;
    console.log(newLength);

    currentPosts = paymentSelect.slice(indexOfFirstPost, indexOfLastPost);
    console.log(currentPosts);

    newPost = currentPosts.map((post, i) => <Card post={post} key={i} />);
    console.log(newPost);
  } else {
    currentPosts = enye.slice(indexOfFirstPost, indexOfLastPost);
    newLength = enye.length;
  }

  if (searchfield.length >= 1) {
    const filteredProfiles = enye.filter((profile) =>
      profile.FirstName.toLowerCase().includes(searchfield.toLowerCase())
    );

    console.log(filteredProfiles);

    currentPosts = filteredProfiles.slice(indexOfFirstPost, indexOfLastPost);

    newPost = currentPosts.map((post, index) => (
      <Card post={post} key={index} />
    ));

    newLength = filteredProfiles.length;
    console.log(newLength);
  }

  if (!load) {
    newPost = <Loading />;
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <Header size={size} />
      <Switch>
        <Route exact path="/">
          <div className="search-and-filter-container">
            <div className="searchandfilter">
              <SearchField
                anotherArray={anotherArray}
                updateSearchfield={updateSearchfield}
              />
              <FilterField setPayment={setPayment} setGender={setGender} />
            </div>
          </div>

          <div className="profile-posts">{newPost}</div>

          <Pagination
            newLength={newLength}
            pageLimit={pageLimit}
            paginate={paginate}
            currentPage={currentPage}
          />
        </Route>
        <Route path="/singleprofile" component={SingleProfile} />
      </Switch>
    </div>
  );
}

export default App;
