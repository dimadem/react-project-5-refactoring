import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import AddItemForm from "./AddItemForm";
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
      // return (
      //   <>
      //     <div role="alert">
      //       <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
      //         Danger
      //       </div>
      //       <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
      //         <p>Something not ideal might be happening.</p>
      //       </div>
      //     </div>
      //   </>
      // );
    } else {
      setItems((prev) => [
        ...items,
        {
          name,
          desc,
          id: uuid(),
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
      <div className="grid grid-cols-1 content-start">
        <AddItemForm
          onHandleSubmitForm={handleSubmitForm}
          name={name}
          onHandleChangeName={handleChangeName}
          desc={desc}
          onHandleChangeDesc={handleChangeDesc}
        />

        <ItemsList
          item={items.length}
          items={items}
          onHandleDeleteItem={handleDeleteItem}
        />
      </div>
    </>
  );
}
