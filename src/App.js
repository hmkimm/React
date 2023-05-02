import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import userEvent from "@testing-library/user-event";

function App() {
  let post = "성북 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "가방 추천",
    "파스타 추천",
    "초콜렛 추천",
  ]);
  let title = "희민쓰";

  let [따봉, 따봉변경] = useState([0, 1, 4]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{title} 블로그</h4>
      </div>

      {글제목.map(function (el, i) {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal(!modal);
              }}
            >
              {el /* {글제목[i]} */}
              <span
                onClick={() => {
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}
              >
                👍🏻{따봉[i]}
              </span>
            </h4>
            <p>2/17 발행</p>
          </div>
        );
      })}
      {modal == true ? <Modal /> : ""}

      <button
        onClick={() => {
          let copy = [...글제목.sort()];
          글제목변경(copy);
        }}
      >
        가나다 정렬
      </button>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
export default App;
