import Logo from "./Logo";

const Rodape: React.FC = () => (
  <>
    <div className="fixed bottom-0 left-0 w-screen bg-default flex justify-center items-center p-2">
      <div className="flex items-center">
        <Logo width={80} height={80} />
        <div className="mr-1 text-2xl font-[Merienda]">Eu Creio</div>
      </div>
      <div className="w-10" />
      <div
        id="inicio"
        className="italic"
        style={{
          fontSize: "2em",
        }}
      >
        Começando em breve...
      </div>
    </div>
  </>
);

export default Rodape;
