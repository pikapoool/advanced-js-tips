export const InputBox = ({ stylesForH1, h1Message }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <>
      <h1 style={stylesForH1}>{h1Message}</h1>
      <input value={input} onChange={handleChange} />
    </>
  );
};
