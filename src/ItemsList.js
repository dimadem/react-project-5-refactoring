import React from "react";
import Item from "./Item.js";

export function ItemsList() {
  items.map((item) => (
    <li className="ui-item-list" key={item.id}>
      <Item info={item} />
      <label htmlFor="id-itemButton">Удалить:</label>
      <button
        id="id-itemButton"
        className="item-button"
        onClick={() => handleDeleteItem(item.id)}>
        Удалить
      </button>
    </li>
  ));
}

function handleDeleteItem(id) {
  setItems(items.filter((i) => i.id !== id));
}
