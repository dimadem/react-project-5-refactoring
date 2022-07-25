 import React from "react"

 export default function AddItem(props){

 return (
    <form onSubmit={props.onHandleSubmitForm}>
        <div>
          <label htmlFor="id-name">Название:</label>
          <input
            id="id-name"
            type="text"
            placeholder="Название товара"
            className="ui-textfield"
            value={props.name}
            onChange={props.onHandleChangeName}
          />
        </div>
        <div>
          <label htmlFor="id-desc">Описание:</label>
          <input
            id="id-desc"
            type="text"
            placeholder="Описание товара"
            className="ui-textfield"
            value={props.desc}
            onChange={props.onHandleChangeDesc}
          />
        </div>
        <div className="form-footer">
          <div className="validation"></div>
          <label htmlFor="id-AddButton">Добавить:</label>
          <input
            id="id-AddButton"
            type="submit"
            className="ui-button"
            value="Добавить"
          />
        </div>
      </form>

 )
    
 
 }