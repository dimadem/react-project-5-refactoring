import React from "react";
import Item from "./Item";

export default function ItemsList(props) {
  const itemsList = props.items.map((item) => (
    <li className="ui-item-list" key={item.id}>
      <Item info={item} />
      <label htmlFor="id-itemButton">Удалить:</label>
      <button
        id="id-itemButton"
        className="item-button"
        onClick={() => props.onHandleDeleteItem(item.id)}
      >
        Удалить
      </button>
    </li>
  ));

  return (
    <>
      <div className="">
        <p className="px-24 ui-title text-red-500">
          {props.item < [1] && "Добавьте товар"}
        </p>
      </div>
      <ul className="shop">{itemsList}</ul>
    </>
  );
}
