import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [searchTxt, setSerachTXT] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [hoverListItem, setHoverListItem] = useState(false);

  useEffect(() => {
    const fetchUsers = () => {
      if (searchTxt.trim === "") {
        setSuggestions([]);
        return;
      }
      fetch(`https://dummyjson.com/users/search?q=${searchTxt}`)
        .then((res) => res.json())
        .then((data) => setSuggestions(data))
        .catch((err) => console.log(err));
    };
    fetchUsers();
  }, [searchTxt]);

  return (
    <div className="user-search-container">
      <div
        style={{
          width: "100px",
          alignItems: "center",
          display: "flex",
          flexWrap: "wrap",
          borderRadius: "20px",
          gap: "8px",
        }}
      >
        <input
          style={{ height: "20px", padding: "5px" }}
          placeholder="Search.."
          value={searchTxt}
          type="text"
          onChange={(e) => setSerachTXT(e.target.value)}
        ></input>
        <ul
           className="suggestion-tem"
        >
          {suggestions?.users?.map((user) => {
            return (
              <li
                key={user.email}
                
              >
                <img
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                ></img>
                <span>
                  {user.firstName} {user.lastName}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
{
  /* <input
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{ outline: isFocused ? '2px solid blue' : 'none' }}
      /> */
}
// fetch(`https://dummyjson.com/users/search?q=${searchTxt}`) interpolation
// write fetchUser Method
//listStyle: 'none' . nhi aata
// maxHeight 300 bcoz if its more than 100 results we dont want it to go beyond page
// suggestion item li cursor pointer
// how to hover list item
//.suggestion-tem li:hover {
//   background-color: #ccc;
// }

// .suggestion-tem li img {
//  height: 20px;
// }