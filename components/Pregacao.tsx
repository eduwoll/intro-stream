import { RetornoFirebase } from "@/pages";

interface PregacaoProps {
  pregacao: RetornoFirebase["pregacao"];
  biblia: RetornoFirebase["biblia"];
}

const Pregacao: React.FC<PregacaoProps> = ({ pregacao, biblia }) => (
  <div
    id="pregacao"
    className="ml-5 max-h-full overflow-hidden card w-96 shadow-xl mt-5 bg-default"
    style={{ width: 600 }}
  >
    <div className="card-body">
      <div className="flex items-center">
        <div className="avatar">
          <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={pregacao.pregador.imagem} />
          </div>
        </div>
        <div className="ml-3 -mr-3">
          <div className="font-bold" style={{ fontSize: "1.5rem" }}>
            {pregacao.titulo}
          </div>
          <div className="opacity-50 text-lg">{pregacao.pregador.nome}</div>
        </div>
      </div>
      <div className="divider" />

      <div className="ml-3 -mr-3 text-lg">
        <div className="font-bold mb-2">{biblia.titulo}</div>
        <div>
          {biblia.texto.split("\n").map((t) => (
            <p style={{ minHeight: 10 }}>{t}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Pregacao;
