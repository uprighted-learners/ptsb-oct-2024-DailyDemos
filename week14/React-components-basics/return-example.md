```jsx
function Square(props) {
  return ( // wrapping in a parens allows for multiline returns
    <button className="square" onClick={props.onSquareClick}>
      {props.value}
    </button>
  );
}
```

If you are missing the parens

```jsx
function Square(props) {
  return  // a ; will get added right after the return and you will return undefined
    <button className="square" onClick={props.onSquareClick}>
      {props.value}
    </button>
  ;
}
```