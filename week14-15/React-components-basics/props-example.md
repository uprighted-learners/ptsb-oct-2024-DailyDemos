```jsx
function Square({ value, onSquareClick }) { //object destructuring
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
```
is the same as this example
```jsx
function Square(props) {
  return ( // wrapping in a parens allows for multiline returns
    <button className="square" onClick={props.onSquareClick}>
      {props.value}
    </button>
  );
}
```

```jsx
       <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
```      