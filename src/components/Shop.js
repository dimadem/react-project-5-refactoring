import React, { useState, useEffect } from "react";
import AddItem from "./AddItem";
import ItemsList from "./ItemsList";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    console.log(localStorage.items, "Check localStorage");
  }, [items]);

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeDesc(event) {
    setDesc(event.target.value);
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    if (name === "" || desc === "") {
      console.log(name, desc, "Empty Submit");
      return alert("не удалось создать товар!");
    } else {
      setItems((prev) => [
        ...items,
        {
          name,
          desc,
          id: prev.length,
        },
      ]);
      setName("");
      setDesc("");
    }
  }

  function handleDeleteItem(id) {
    setItems(items.filter((i) => i.id !== id));
  }

  //consoleCheck
  console.log(items, "Items");

  //OUTPUT
  return (
    <>
      <AddItem
        onHandleSubmitForm={handleSubmitForm}
        name={name}
        onHandleChangeName={handleChangeName}
        desc={desc}
        onHandleChangeDesc={handleChangeDesc}
      />
      <div>
        <p className="ui-title">{items < [1] && "Добавьте первый товар"}</p>
      </div>
      <ItemsList items={items} onHandleDeleteItem={handleDeleteItem} />
    </>
  );
}
