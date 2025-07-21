import React, { useState, useEffect } from "react";
import "./App.css";

const TextEditor = () => {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);

  useEffect(() => {
    setCharCount(text.length);
    setWordCount(text.trim() ? text.trim().split(/\s+/).length : 0);
    setSentenceCount(text.split(/[.!?]+/).filter(Boolean).length);
    setParagraphCount(text.split(/\n+/).filter(Boolean).length);
  }, [text]);

  const toUpperCase = () => setText(text.toUpperCase());
  const toLowerCase = () => setText(text.toLowerCase());
  const capitalize = () =>
    setText(
      text
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
  const removeExtraSpaces = () =>
    setText(text.replace(/\s+/g, " ").trim());

  return (
    <>
      <header>
        <div className="container">
          <div className="left">
            <p>
              TEXT <span>TWERK</span>
            </p>
          </div>
          <div className="right">
            <div className="right1">
              <a href="#">contact</a>
              <a href="#">project</a>
              <a href="#">resume</a>
            </div>
            <div className="right2">
              <a href="#"><i className="fa-solid fa-globe"></i></a>
              <a href="#"><i className="fa-solid fa-envelope"></i></a>
              <a href="#"><i className="fa-solid fa-phone"></i></a>
            </div>
          </div>
        </div>
        <hr />
      </header>

      <main>
        <p>
          TEXT<span>EDITOR</span>
        </p>
        <div className="main1">
          <div className="text">
            <textarea
              id="input-text"
              rows="10"
              value={text}
              placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
          <div className="counter">
            <h1>COUNTER</h1>
            <div className="counter1">
              <div className="item">
                <label htmlFor="char-count">Characters:</label>
                <input type="text" id="char-count" value={charCount} disabled />
              </div>
              <div className="item item-2">
                <label htmlFor="word-count">Words:</label>
                <input type="text" id="word-count" value={wordCount} disabled />
              </div>
            </div>
            <div className="counter1">
              <div className="item">
                <label htmlFor="sentence-count">Sentences:</label>
                <input type="text" id="sentence-count" value={sentenceCount} disabled />
              </div>
              <div className="item item-4">
                <label htmlFor="paragraph-count">Paragraphs:</label>
                <input type="text" id="paragraph-count" value={paragraphCount} disabled />
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="btn">
        <button className="btn1" id="btn1" onClick={toUpperCase}>UPPERCASE</button>
        <button className="btn1" id="btn2" onClick={toLowerCase}>LOWERCASE</button>
        <button className="btn1" id="btn3" onClick={capitalize}>CAPITALIZE</button>
        <button className="btn1" id="btn4" onClick={removeExtraSpaces}>WHITE SPACE</button>
      </div>
    </>
  );
};

export default TextEditor;
