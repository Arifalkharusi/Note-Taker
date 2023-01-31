import React from "react";
import style from "./AddNote.module.scss";

const AddNote = (props) => {
  const submit = (e) => {
    e.preventDefault();
    let obj = {
      title: e.target[0].value,
      content: e.target[1].value,
    };

    props.onAdd(obj);
    e.target.reset();
  };

  return (
    <div className={style.container}>
      <div>Add New Note</div>
      <form onSubmit={submit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title"></input>
        <label htmlFor="content">Content:</label>
        <textarea rows="15" cols="1" id="content"></textarea>
        <button type="submit">Save Note</button>
      </form>
    </div>
  );
};
export default AddNote;
