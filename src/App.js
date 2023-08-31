import React, { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const [showEdit, setShowEdit] = useState(-1);
  const [updatedText, setUpdatedText] = useState("");

  function addItem() {
    if (!newItem) {
      alert("Press enter an item.");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldList) => [...oldList, item]);

    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  function editItem(id, newText) {
    const currentItem = items.filter((item) => item.id === id);

    const newItem = {
      id: currentItem.id,
      value: newText,
    };

    deleteItem(id);

    setItems((oldList) => [...oldList, newItem]);
  }

  return (
    <div className="h-[100vh] text-center p-10 py-10 bg-gradient-to-r from-cyan-400 to-teal-800">
      <h1 className="text-5xl text-teal-100 font-medium md:text-6xl">Ma Todo List !</h1>

      <input
        type="text"
        placeholder="Ajouter un élément..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        className="text-center my-20 rounded"
      />

      <button onClick={() => addItem()} className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">Ajouter</button>

      <ul>
        {items.map((item) => {
          return (
            <div>
              <li key={item.id} onClick={() => setShowEdit(item.id)} className="text-white">
                {item.value}
                <button
                  className="delete-button bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  onClick={() => deleteItem(item.id)}

                >
                  Supprimer
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
