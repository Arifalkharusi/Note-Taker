import React, { useState } from "react";
import style from "./EditNote.module.scss";
const EditNote = (props) => {
  const [title, setTitle] = useState(props.dataMain[props.index].title);
  const [content, setContent] = useState(props.dataMain[props.index].content);

  const closeEdit = () => {
    props.editOverlay(false);
  };

  const submit = (e) => {
    e.preventDefault();
    let obj = {
      title: e.target[0].value,
      content: e.target[1].value,
    };
    props.editNote(props.index, obj);
    props.editOverlay(false);
  };

  return (
    <div className={style.overlay}>
      <form onSubmit={submit}>
        <i className="fa-regular fa-circle-xmark" onClick={closeEdit}></i>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label htmlFor="content">Content:</label>
        <textarea
          rows="15"
          cols="50"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Save Edit</button>
      </form>
    </div>
  );
};
export default EditNote;
