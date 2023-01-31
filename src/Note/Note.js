import React from "react";
import style from "./Note.module.scss";
const Note = (props) => {
  const deleteNote = () => {
    props.onDelele(props.index);
  };

  const displayEdit = () => {
    props.editOverlay(true, props.index);
  };

  return (
    <div className={style.container}>
      <div className={style.title}>{props.title}</div>
      <div className={style.content}>{props.content}</div>
      <div className={style.btnContainer}>
        <i className="fa-regular fa-circle-xmark" onClick={deleteNote}></i>
        <i className="fa-regular fa-pen-to-square" onClick={displayEdit}></i>
      </div>
    </div>
  );
};
export default Note;
