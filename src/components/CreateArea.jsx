import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return { ...prevInput, [name]: value };
    });
  }

  return (
    <div>
      <form className="create-note">
        <input onChange={handleChange} value={input.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} value={input.content} name="content" placeholder="Take a note..." rows="3" />
        <Zoom in={true}>
          <Fab
            onClick={(event) => {
              props.add(input);
              setInput({
                title: "",
                content: "",
              });
              event.preventDefault();
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
