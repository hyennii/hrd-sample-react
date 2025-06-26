import './App.css';

function App() {
  const name = "리액트"
  return (
    <>
      {/* 삼항 연산자 조건식 */}
      {name === '리액트' ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다.</h2>}

      {/* AND 연산자 조건식 */}
      {name === '리액트' && <h1>리액트입니다.</h1>}
    </>
  );
}

export default App;
