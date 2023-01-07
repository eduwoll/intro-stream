interface VoceSabiaProps {
  fato: string;
}

const VoceSabia: React.FC<VoceSabiaProps> = ({ fato }) => (
  <div
    id="aviso"
    className="alert shadow-lg flex-col items-start bg-default"
  >
    <div className="flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="stroke-info flex-shrink-0 w-6 h-6 mr-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <h3 className="font-bold">Você sabia?</h3>
    </div>
    <div className="text-xl pt-3">{fato}</div>
  </div>
);

export default VoceSabia;
