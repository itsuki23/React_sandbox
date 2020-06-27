import React, { useState, useEffect, useCallback } from "react";
import { Answers, Chats, Loading } from "./components/index";
import Modal from "./components/Forms/Modal";
import dataset from "./dataset";
import "./style.css";

const App = () => {
  const [pageId, setPageId] = useState("init");
  const [chats, setChats] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      addChats({
        text: dataset[pageId].question,
        type: "question"
      });
      setAnswers(dataset[pageId].answers);
    }, 1000);
  }, [pageId]);

  useEffect(() => {
    const scrollArea = document.getElementById("scroll-area");
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  });

  const addChats = useCallback(
    chat => {
      setChats(prevChats => {
        return [...prevChats, chat];
      });
    },
    [setChats]
  );

  const handleClickOpen = useCallback(() => {
    setModal(true);
  }, [setModal]);

  const handleClose = useCallback(() => {
    setModal(false);
  }, [setModal]);

  // from Answer Selected
  const selectedAnswer = (selectedContent, selectedNextId) => {
    switch (true) {
      case selectedNextId === "contact":
        handleClickOpen();
        break;
      case /^https:*/.test(selectedNextId):
        const a = document.createElement("a");
        a.href = selectedNextId;
        a.target = "_blank";
        a.click();
        break;
      default:
        addChats({
          text: selectedContent,
          type: "answer"
        });
        setPageId(selectedNextId); // Id変化をトリガーにuseEffect {Chats追記, Answers変化}
        break;
    }
  };

  return (
    <>
      <section className="c-section">
        <div className="c-box">
          {Object.keys(dataset).length === 0 ? (
            <Loading />
          ) : (
            <>
              <Chats chats={chats} />
              <Answers answers={answers} select={selectedAnswer} />
            </>
          )}
          <Modal open={modal} handleClose={handleClose} />
        </div>
      </section>
    </>
  );
};

export default App;
