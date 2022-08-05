import React from "react";

export default function AddItemForm(props) {
  return (
    <>
      <div className="gap-6 w-fit bg-gradient-to-br from-blue-300 via-purple-50 to-pink-200">
        <p className="py-4 text-blue-600 font-bold text-2xl text-center">
          Форма добавления
        </p>
        <form
          className="px-8 pt-6 pb-8 mb-4"
          onSubmit={props.onHandleSubmitForm}
        >
          <div className="text-black">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="id-name"
            >
              Название:
            </label>
            <input
              id="id-name"
              type="text"
              placeholder="Название товара"
              className="ui-textfield shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              value={props.name}
              onChange={props.onHandleChangeName}
            />
          </div>
          <div className="text-black">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="id-desc"
            >
              Описание:
            </label>
            <input
              id="id-desc"
              type="text"
              placeholder="Описание товара"
              className="shadow appearance-none border-none w-full py-2 px-3 text-gray-700 leading-tight"
              value={props.desc}
              onChange={props.onHandleChangeDesc}
            />
          </div>
          <div className="p-4 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-b-full">
            <div className="validation"></div>
            <label hidden htmlFor="id-AddButton">
              Добавить:
            </label>
            <input
              id="id-AddButton"
              type="submit"
              className="ui-button inline-block w-full text-xl"
              value="Добавить"
            />
          </div>
        </form>
      </div>
    </>
  );
}
