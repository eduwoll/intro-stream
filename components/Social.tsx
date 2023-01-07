interface SocialProps {
  className: string;
  label: string;
  vermelho?: boolean;
  Icon: (
    props: React.ComponentProps<"svg"> & {
      title?: string;
      titleId?: string;
    }
  ) => JSX.Element;
}

const Social: React.FC<SocialProps> = ({
  label,
  Icon,
  vermelho,
  className,
}) => (
  <div className={className}>
    <div className="relative mb-3">
      <div
        className={
          "badge  p-3 ml-4 absolute top-0 left-0 transform -translate-x-full text-lg whitespace-nowrap " +
          (vermelho ? "badge-error" : "badge-primary")
        }
      >
        {label}
      </div>
      <div className="bg-neutral rounded-full p-3 flex flex-col justify-center items-center">
        <Icon width={32} />
      </div>
    </div>
  </div>
);

export default Social;
