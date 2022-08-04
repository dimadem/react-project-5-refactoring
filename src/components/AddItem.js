import React from "react";

export default function AddItem(props) {
  return (
    <form onSubmit={props.onHandleSubmitForm}>
      <div className="border border-black p-4 text-black text-lg">
        <label htmlFor="id-name">Название:</label>
        <input
          id="id-name"
          type="text"
          placeholder="Название товара"
          className="ui-textfield px-2"
          value={props.name}
          onChange={props.onHandleChangeName}
        />
      </div>
      <div className="border border-black p-4 text-black text-lg">
        <label htmlFor="id-desc">Описание:</label>
        <input
          id="id-desc"
          type="text"
          placeholder="Описание товара"
          className="ui-textfield px-2"
          value={props.desc}
          onChange={props.onHandleChangeDesc}
        />
      </div>
      <div className="form-footer p-4 border border-black text-black text-lg">
        <div className="validation"></div>
        <label htmlFor="id-AddButton">Добавить:</label>
        <input
          id="id-AddButton"
          type="submit"
          className="ui-button px-10"
          value="Добавить"
        />
      </div>
    </form>
  );
}
