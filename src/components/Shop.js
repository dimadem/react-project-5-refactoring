import React, { useState } from "react";
import AddItem from "./AddItem";
import ItemsList from "./ItemsList";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

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
      setItems((prev) => [...items, { 
        name, 
        desc, 
        id: prev.length }]);
      setName("");
      setDesc("");
    }
  }

  function handleDeleteItem(id) {
    setItems(items.filter((i) => i.id !== id));
  }

  //consoleCheck
  console.log(items);

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
      <ItemsList 
      items={items} 
      onHandleDeleteItem={handleDeleteItem}/>
    </>
  );
}

/*
Начните с того, что сделайте товары стейт-переменной. 
Далее создайте контролируемые компоненты для полей формы с названием 
и описанием добавляемого товара. Не забывайте о доступности.

Когда админ сабмитит форму, новый айтем должен быть добавлен 
в список товаров (массив items). После сабмита нужно заресетить форму, 
очистив ее поля от текста.

Каждый товар должен быть представлен объектом со свойствами id, 
name и desc. Для id можно использовать items.length или добавить 
в зависимости библиотеку uuid📦, генерирующую уникальные id.

Для каждого товара в стейте items, должен рендериться компонент <Item />
 с соответствующим пропсом info и кнопкой Удалить, нажатие по которой
  должно удалять товар из списка.

Абзац <p>Добавьте первый товар</p> должен исчезать, если хоть один 
товар добавляется в список и появляться снова, как только из списка 
снова удаляются все товары. 

И, наконец, реализуйте запрет на добавление товара, если заполнены 
не все поля, предупреждая о незаполненном поле/полях сообщением 
внутри  <div className="validation"></div>.

*/
