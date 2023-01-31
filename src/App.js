import React, { useState, useEffect } from "react";
import style from "./App.module.scss";
import AddNote from "./AddNote/AddNote";
import EditNote from "./EditNote/EditNote";
import Note from "./Note/Note";

const reload = () => {
  let reloadNotes = JSON.parse(localStorage.getItem("notes"));
  if (reloadNotes) return reloadNotes;
  return [];
};

const App = (props) => {
  const [addBtn, setAddBtn] = useState(false);
  const [notes, setNotes] = useState(true);
  const [data, setData] = useState(reload());
  const [editOverlay, setEditOverlay] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(data));
  }, [data]);

  const checkNotes = () => {
    setNotes(true);
    setAddBtn(false);
  };

  const addNote = () => {
    setAddBtn(true);
    setNotes(false);
  };

  const dataUpdate = (main) => {
    setData((prev) => [...prev, main]);
  };

  const deteleNote = (index) => {
    data.splice(index, 1);
    setData((prev) => [...prev]);
  };

  const editNote = (index, object) => {
    data[index] = object;
    setData((prev) => [...prev]);
  };

  const displayEdit = (boolean, index) => {
    setEditOverlay(boolean);
    setIndex(index);
  };

  return (
    <div className={style.container}>
      <div className={style.taskBar}>
        <div className={style.logo}>
          <i className="fa-solid fa-list"></i>
        </div>
        <div>
          <div onClick={addNote}>
            <i className="fa-solid fa-plus"></i>
            <div>Add</div>
          </div>
          <div onClick={checkNotes}>
            <i className="fa-solid fa-clipboard-list"></i>
            <div>Notes</div>
          </div>
        </div>
      </div>
      <div className={style.mainSection}>
        <div className={style.mainContainer}>
          {addBtn && <AddNote onAdd={dataUpdate} />}
          {notes &&
            data.map((note, i) => (
              <Note
                title={note.title}
                content={note.content}
                index={i}
                onDelele={deteleNote}
                editOverlay={displayEdit}
              />
            ))}
          {editOverlay && (
            <EditNote
              editOverlay={displayEdit}
              index={index}
              dataMain={data}
              editNote={editNote}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
