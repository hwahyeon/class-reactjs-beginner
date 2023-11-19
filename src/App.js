import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick =() => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("I run all the time");
  // 한번만 실행되고 다시 랜더링되지 않게 할 때, useEffect 사용
  useEffect(()=>{
    console.log("CALL THE API")
  }, []); 
  // [] 빈 리스트였으니까 딱 한 번만 실행되고 말았던 것
  useEffect(()=>{
    if (keyword !== "" && keyword.length > 5){
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  useEffect(()=>{
    console.log("I run when keyword & counter change.");
  }, [keyword, counter]);
  // []에 있는 것이 변화할 때마다 렌더링하란 뜻.
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export default App;