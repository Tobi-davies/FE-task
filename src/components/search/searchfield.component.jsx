import React from "react";

const SearchField = ({ updateSearchfield }) => {
  // const [searchfield, updateSearchfield] = useState("");

  // const filteredProfiles = anotherArray.filter((profile) =>
  //   profile.FirstName.toLowerCase().includes(searchfield.toLowerCase())
  // );
  // setDuplicate(7);
  // console.log(filteredProfiles);

  const inputHandler = (e) => {
    // onChange={e => ({ searchField: e.target.value})
    console.log(e.target.value);
    updateSearchfield(e.target.value);
  };

  return (
    <div className="search-field">
      <input type="text" onChange={inputHandler} id="" />
    </div>
  );
};

export default SearchField;
