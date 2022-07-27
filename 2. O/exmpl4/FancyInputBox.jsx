import { InputBox } from "./InputBox";

const FancyInputBox = () => {
  return (
    <div>
      <InputBox
        stylesForH1={{ color: "red" }}
        h1Message={"Enter your name: "}
      />
    </div>
  );
};
