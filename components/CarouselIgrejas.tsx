import React, { useEffect, useRef, useState } from "react";

interface Igreja {
  img: string;
  cidade: string;
  end: string;
  cultos: {
    dia:
      | "Domingo"
      | "Segunda"
      | "Terça"
      | "Quarta"
      | "Quinta"
      | "Sexta"
      | "Sábado";
    hora: string;
  }[];
}

const igrejas: Igreja[] = [
  {
    img: "/tramandai.jpg",
    cidade: "Tramandaí",
    end: "Av. João Magalhães, 1748 - Bairro São Francisco II",
    cultos: [
      { dia: "Quarta", hora: "19:30" },
      { dia: "Domingo", hora: "17:30" },
    ],
  },
  {
    img: "https://placeimg.com/256/400/arch",
    cidade: "Balneário Pinhal",
    end: "Rua Rio Grande do Norte, 230 - Túnel Verde",
    cultos: [
      { dia: "Quarta", hora: "19:30" },
      { dia: "Sábado", hora: "19:30" },
    ],
  },
  {
    img: "https://placeimg.com/256/400/arch",
    cidade: "Osório",
    end: "Rua Passinhos, 756 - Bairro Primavera",
    cultos: [{ dia: "Quinta", hora: "19:30" }],
  },
  {
    img: "https://placeimg.com/256/400/arch",
    cidade: "Capão da Canoa",
    end: "Trv. São Pedro, 1564",
    cultos: [{ dia: "Sexta", hora: "19:30" }],
  },
];

const Igrejas = () => {
  const [igrejaAtual, setIgrejaAtual] = useState(0);
  const timeoutIgreja = useRef(setTimeout(() => {}));

  useEffect(() => {
    window.location.href = "/#item" + igrejaAtual;

    clearTimeout(timeoutIgreja.current);
    timeoutIgreja.current = setTimeout(() => {
      setIgrejaAtual((i) => {
        if (i < igrejas.length - 1) return i + 1;
        return 0;
      });
    }, 8000);

    return () => clearTimeout(timeoutIgreja.current);
  }, [igrejaAtual]);
  return (
    <div id="igrejas" className="card w-96 shadow-xl mt-5 bg-default">
      <div className="card-body">
        <h2 className="card-title mb-3">Congregações:</h2>
        <div className="carousel rounded-box shadow-lg bg-neutral">
          {igrejas.map((ig, ix) => {
            return (
              <div
                key={ix}
                id={"item" + ix}
                className={
                  "carousel-item w-full flex flex-col " +
                  (ix % 2 == 0 ? "bg-primary" : "bg-secondary")
                }
              >
                {/* <div
                style={{
                  background: `url(${ig.img})`,
                  backgroundSize: "cover",
                  height: 200,
                }}
              /> */}
                <div className="p-4">
                  <h3 className="font-bold">{ig.cidade}</h3>
                  <div className="text-xl">{ig.end}</div>

                  <div className="divider"></div>

                  <h3 className="font-bold">Cultos:</h3>
                  <ul>
                    {ig.cultos.map((c, i) => (
                      <li key={i} className="text-xl">
                        {c.dia} às {c.hora}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center pt-3 -mb-5">
          <div className="btn-group">
            {igrejas.map((ig, ix) => {
              if (ix == igrejaAtual)
                return (
                  <div
                    key={ix}
                    className={
                      "btn " + (ix % 2 == 0 ? "btn-secondary" : "btn-primary")
                    }
                  >
                    {ix + 1}
                  </div>
                );
              return (
                <button key={ix} className={"btn"}>
                  {ix + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Igrejas;
