import { readFlowerUrl } from "./lib/flower-url";
import Home from "./pages/home";
import NotFound from "./pages/not-found";

/* Sem biblioteca de rotas: o site só tem a página inicial, então qualquer
   outro endereço, ou uma flor que não existe na URL, cai na 404. */
export default function App() {
  const isHomePath = window.location.pathname.replace(/\/+$/, "") === "";
  const isValidFlower = readFlowerUrl(window.location.search).status !== "invalid";

  return isHomePath && isValidFlower ? <Home /> : <NotFound />;
}
