import React, { useEffect, useState, memo } from "react";

function MemoTest() {
  let [pName, setPName] = useState("김연아");

  return (
    <div>
      <p>memo() 연습 해볼까</p>
      <Parent name={pName} age={"33"} />
      <button
        onClick={() => {
          setPName("김연아 변경후");
        }}
      >
        memo 잘되나?
      </button>
    </div>
  );
}

function Parent(props) {
  return (
    <>
      <Child1 name={props.name} />
      <Child2 age={props.age} />
    </>
  );
}
let Child1 = memo(function (props) {
  useEffect(() => {
    console.log("Child1 렌더링 됨 111333");
  }, [props]);
  return (
    <>
      <h3>Child2 111</h3>
      <h3>{props.name}</h3>
    </>
  );
});

let Child2 = memo(function (props) {
  useEffect(() => {
    console.log("Child2 렌더링 됨 222");
  }, [props]);
  return (
    <>
      <h3>Child2 222</h3>
      <h3>{props.age}</h3>
    </>
  );
});

export default MemoTest;
