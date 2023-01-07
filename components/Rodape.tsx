import Logo from "./Logo";

const Rodape: React.FC = () => (
  <>
    <div
      className="fixed bottom-0 left-0 w-screen bg-default"
      style={{ height: 90 }}
    />

    <div
      id="inicio"
      className="fixed bottom-5 left-5 py-0 italic"
      style={{
        fontSize: "2em",
      }}
    >
      Começando em breve...
    </div>

    <div className="fixed bottom-1 right-5">
      <div className="flex justify-center items-center">
        <div className="mr-1 font-[Merienda]">Eu Creio</div>
        <Logo width={80} height={80} />
      </div>
    </div>
  </>
);

export default Rodape;
