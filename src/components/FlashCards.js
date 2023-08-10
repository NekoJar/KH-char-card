import { useState } from "react";

export function FlashCards({ filteredItems }) {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="container">
      <h3>Kingdom Hearts Characters</h3>
      <div className="flashcards">
        {filteredItems.map((images) => (
          <div
            key={images.id}
            onClick={() => handleClick(images.id)}
            className={images.id === selectedId ? "selected" : ""}
          >
            {images.id === selectedId ? (
              <>
                <h4>{images.name}</h4>
              </>
            ) : (
              <>
                <img src={images.image} alt={images.name} />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
