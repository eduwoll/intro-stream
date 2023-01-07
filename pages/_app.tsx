import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/global.css";

const queryClient = new QueryClient();

function IntroStream({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default IntroStream;
