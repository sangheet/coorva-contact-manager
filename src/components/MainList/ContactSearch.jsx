import React from "react";

import SearchIcon from "@material-ui/icons/Search";

const Styles = {
  searchIcon: {
    marginTop: 15,
    marginLeft: 15,
    color: "#DF1882",
  },
};

function ContactSearch(props) {
  const [searchParam, setSearchParam] = React.useState("");
  const [searchFilter, setFilter] = React.useState("name");

  const handleSearchParam = (e) => {
    setSearchParam(e.target.value);
  };
  const handleFilterType = (e) => {
    setFilter(e.target.value);
  };
  const selectOptions = [
    { value: "name", text: "Name" },
    { value: "lastName", text: "Last name" },
    { value: "email", text: "E-mail" },
  ];

  const clearAndResetSearch = () => {
    setSearchParam("");
    props.sendSearchValues({ param: "", filter: searchFilter });
  };

  return (
    <div className="contact-search-container">
      <SearchIcon style={Styles.searchIcon} />
      <input
        value={searchParam}
        onChange={handleSearchParam}
        placeholder="Search..."
        type="text"
      />
      {searchParam && (
        <label onClick={clearAndResetSearch}>
          <b>Clear</b>
        </label>
      )}
      <label htmlFor="filter by">Filter by:</label>
      <select
        name="filter"
        id="search-filter-select"
        onChange={handleFilterType}
        value={searchFilter}
      >
        {selectOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <button
        onClick={(e) => {
          props.sendSearchValues({ param: searchParam, filter: searchFilter });
        }}
      >
        Go
      </button>
    </div>
  );
}

export default ContactSearch;
