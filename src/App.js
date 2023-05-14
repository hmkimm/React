import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import userEvent from "@testing-library/user-event";
import makeBlog from "./makeBlog.jsx";

function App() {
  let post = "성북 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "떡볶이 추천",
    "파스타 추천",
    "초콜렛 추천",
  ]);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState("");

  let [따봉, 따봉변경] = useState([0, 3, 25]);
  let [modal, setModal] = useState(false);
  let [test, testChange] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React 블로그</h4>
      </div>

      {글제목.map(function (el, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {el /* {글제목[i]} */}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}
              >
                👍🏻{따봉[i]}
              </span>
            </h4>
            <button
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}
            >
              삭제
            </button>
            <p>2/17 발행</p>
          </div>
        );
      })}
      {modal == true ? (
        <Modal
          color="lightgreen"
          글제목={글제목}
          글제목변경={글제목변경}
          title={title}
        />
      ) : (
        ""
      )}

      <button
        onClick={() => {
          let copy = [...글제목.sort()];
          글제목변경(copy);
        }}
      >
        가나다 정렬
      </button>
      <input
        type="text"
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy);
        }}
      >
        입력
      </button>
      <makeBlog />
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ backgroundColor: props.color }}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          props.글제목변경(["여자 코트 추천", "파스타 추천", "초콜렛 추천"]);
        }}
      >
        글수정
      </button>
    </div>
  );
}
export default App;
