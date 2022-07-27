// Components should abide by some kind of contract.
interface ModalHolderProps {
  contentToShow: JSX.Element;
}

export const ModalHolder = ({ contentToShow }: ModalHolderProps) => {
  const [visibility, setVisibility] = useState(false);

  return (
    <>
      <button onClick={() => setVisibility(true)}> Show Modal</button>

      <Modal isOpen={visibility}>
        <div>{contentToShow}</div>
      </Modal>
    </>
  );
};
