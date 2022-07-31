import { useState } from "react";
import { useEffect } from "react";

export default function MagicalLabel() {
  const [mode, setMode] = useState("view");
  const [text, setText] = useState("Sample Test");

  useEffect(() => {
    document.title = text;
  }, [mode]);

  function handleLabelClick() {
    setMode("edit");
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      setMode("view");
    }
  }

  return (
    <div>
      {mode === "view" && <label onClick={handleLabelClick}>{text}</label>}
      {mode === "edit" && <input type="text" value={text} onChange={handleChange} onKeyPress={handleKeyPress} />}
    </div>
  );
}
