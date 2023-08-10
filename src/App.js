import { useState } from "react";
import "./index.css";
import { Images } from "./assets/Images";
import { Title } from "./components/Title";
import { Menu } from "./components/Menu";
import { FlashCards } from "./components/FlashCards";
import { Footer } from "./components/Footer";

export default function App() {
  const [filteredItems, setFilteredItems] = useState(Images); // State for filtered items
  const [sortBy, setSortBy] = useState("all");
  const [char, setChar] = useState("");

  function handleSearchItems(e) {
    const searchValue = e.target.value;
    setChar(searchValue);

    const filteredData = Images.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredItems(filteredData);
  }

  const handleSortChange = (e) => {
    const selectedValue = e.target.value;
    setSortBy(selectedValue);

    // Filter the items based on the selected option
    let filteredData = [];

    if (selectedValue === "all") {
      filteredData = Images; // Replace 'Images' with your actual data source
    } else {
      filteredData = Images.filter((item) => item.game.includes(selectedValue));
    }

    filteredData.sort((a, b) => {
      // Assuming the 'game' property is an array of game options
      const indexOfA = a.game.indexOf(selectedValue);
      const indexOfB = b.game.indexOf(selectedValue);
      return indexOfA - indexOfB;
    });

    setFilteredItems(filteredData);
  };

  return (
    <div className="app">
      <Title />
      <Menu
        sortBy={sortBy}
        char={char}
        onSort={handleSortChange}
        onSearch={handleSearchItems}
      />
      <FlashCards filteredItems={filteredItems} />
      <Footer />
    </div>
  );
}
