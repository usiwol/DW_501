## React ์์ (22.12.22 ~ 22.12.23) ๐ผ

    React.js๋ก Open API์ด์ฉํ ์ํ ์ฌ์ดํธ ๋ง๋ค๊ธฐ

### ์ฌ์  ๊ฐ๋์ ๋ฆฌ

1. ES6 ๋ฌธ๋ฒ ๊ณต๋ถ

### ์ฌ์  ์ค๋น

    https://www.omdbapi.com/ ์์ API KEY ๋ฐ๊ธ ๋ฐ๊ธฐ

### React ์ค์น ๋ฐ ์คํ

1. node ์ค์น (https://nodejs.org/ko/download/)
2. npm install -g create-react-app
3. npx create-react-app (project-name)

### ํ์ํ ๋ผ์ด๋ธ๋ฌ๋ฆฌ

- npm i redux react-redux @reduxjs/toolkit
- npm i react-router-dom

### JSX(JavaScript Syntax Extension)

    JavaScriptํ์ผ์์๋ง ์ฌ์ฉํ  ์ ์๋ html๋ฌธ๋ฒ

1. className

```javascript
//๋ฆฌ์กํธ์์ html ํ๊ทธ ์์ฑํ๋ ๋ฐฉ๋ฒ
<div className="App"></div>
```

2. ๋ถ๋ชจ div๊ฐ ๋ฌด์กฐ๊ฑด ์์ด์ผ ํ๋ค.

```javascript
return (
  <div>
    <div className="title">HOME</div>;
  </div>
);
```

3. if๊ฐ ์๋ค. ์ผํญ์ฐ์ฐ์๋ฅผ ์ด์ฉํ์.

```javascript
function App() {
  const name = '๋ฉ์';
  return <div>{name === '๋ฉ์' ? <h1>๋ฉ์</h1> : <h2>ํธ๋ ๋</h2>}</div>;
}
```

4. css์์ background-color ์ ๊ฐ์ด - ๋ฌธ์๊ฐ ํฌํจ๋ ์ด๋ฆ๋ค์, JSX์์๋ ์นด๋ฉ ํ๊ธฐ๋ฒ์ผ๋ก ์์ฑํ์.

```javascript
function App() {
  const style = {
    backgroundColor: 'white',
    fontSize: '10px',
    fontWeight: 'bold',
  };
  return <div style={style}>๋ฆฌ์กํธ๊ฐ ๋ญ๊ธธ๋!!</div>;
}
```

5. JSX์์๋ ๋ฐ๋์ ๋ซ์์ฃผ๋ ํ๊ทธ๋ฅผ ์์ฑํด์ผ ํฉ๋๋ค.

```javascript
<input></input>
// ํน์ ๋ค์๊ณผ ๊ฐ์ด self-closing ํ๊ทธ๋ก ์์ฑํด๋ ๋ฌด๋ฐฉ
<input />
```
