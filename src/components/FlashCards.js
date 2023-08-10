import { useState } from "react";

export function FlashCards({ filteredItems }) {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {filteredItems.map((images) => (
        <div
          key={images.id}
          onClick={() => handleClick(images.id)}
          className={images.id === selectedId ? "selected" : ""}
        >
          {images.id === selectedId ? (
            <p>{images.name}</p>
          ) : (
            <img src={images.image} alt={images.name} />
          )}
        </div>
      ))}
    </div>
  );
}
