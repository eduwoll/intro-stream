import {
  ChatBubbleBottomCenterIcon,
  HandThumbUpIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import Social from "./Social";
import YouTubeIcon from "./YouTubeIcon";

const BarraLateral: React.FC = () => (
    <>
    <div className="fixed top-0 right-8 h-screen flex flex-col justify-center items-end">
      <Social className="social" label="Curta" Icon={HandThumbUpIcon} />
      <Social className="social" label="Comente" Icon={ChatBubbleBottomCenterIcon} />
      <Social className="social" label="Compartilhe" Icon={ShareIcon} />
      <Social className="social" label="Inscreva-se" Icon={YouTubeIcon} vermelho />
    </div>
    
    <div className="fixed top-0 right-8 h-screen flex flex-col justify-center items-end">
      <Social className="redes" label="/TabernáculodaFé" Icon={YouTubeIcon} vermelho />
      <Social className="redes" label="@eucreio.ig" Icon={InstagramIcon} />
      <Social className="redes" label="/eucreio.ig" Icon={FacebookIcon} />
    </div>
    </>
);

export default BarraLateral;
