import Igrejas from "@/components/CarouselIgrejas";
import { mainLoop, socialLoop } from "@/helpers/animations";
import { useEffect, useState } from "react";
// import data from "@/helpers/data";
import BarraLateral from "@/components/BarraLateral";
import Pregacao from "@/components/Pregacao";
import Rodape from "@/components/Rodape";
import VoceSabia from "@/components/VoceSabia";
import { collection, onSnapshot } from "firebase/firestore";
import { z } from "zod";
import { firestore } from "../helpers/firebase";

const schema = z.object({
  biblia: z.object({
    titulo: z.string(),
    texto: z.string(),
  }),
  pregacao: z.object({
    titulo: z.string(),
    pregador: z.object({
      nome: z.string(),
      imagem: z.string(),
    }),
  }),
  voceSabia: z.object({
    fatos: z.array(z.string()),
  }),
});

export type RetornoFirebase = z.infer<typeof schema>;

const dadosVazio = {
  biblia: {
    titulo: "",
    texto: "",
  },
  pregacao: {
    titulo: "",
    pregador: {
      nome: "",
      imagem: "",
    },
  },
  voceSabia: { fatos: [""] },
} as RetornoFirebase;

const ref = {
  data: dadosVazio,
};

const Home: React.FC = () => {
  const [fatoAtual, setFatoAtual] = useState(0);
  const [data, setData] = useState(dadosVazio);
  ref.data = data;

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, "intro"),
      (snapshot) => {
        const data: Record<string, unknown> = {};
        snapshot.docs.forEach((d) => (data[d.id] = d.data()));
        setData(schema.parse(data));
      }
    );
    return unsubscribe;
  }, []);

  useEffect(() => {
    selecionarNovoFato();
  }, [data]);

  const selecionarNovoFato = () => {
    const { data } = ref;

    if (!data?.voceSabia) return;

    const fatos = data.voceSabia.fatos;

    if (fatos.length > 0) {
      const novoFato = Math.floor(Math.random() * fatos.length);
      setFatoAtual(novoFato);
    }
  };

  mainLoop(selecionarNovoFato);
  socialLoop();

  return (
    <div className="p-5 flex flex-col" style={{ height: 630 }}>
      {/* <video className="fixed left-0 top-0 w-screen h-screen opacity-30" src="/bg-video.mp4" autoPlay loop /> */}
      <VoceSabia fato={ref.data.voceSabia.fatos[fatoAtual]} />
      <div className="flex w-full mb-0">
        <Igrejas />
        <Pregacao pregacao={ref.data.pregacao} biblia={ref.data.biblia} />
      </div>
      <BarraLateral />
      <Rodape />
    </div>
  );
};

export default Home;
