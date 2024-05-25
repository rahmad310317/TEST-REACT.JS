const Button = (props) => {
  return (
    <button>{props.text}</button>
  );
}

export default function App() {
  return (
    <Button text="Hello World" />
  )
}
