import Home from "./pages/home";
import NotFound from "./pages/not-found";

/* Sem biblioteca de rotas: o site só tem a página inicial, então qualquer
   outro endereço cai na 404. */
export default function App() {
  const isHome = window.location.pathname.replace(/\/+$/, "") === "";
  return isHome ? <Home /> : <NotFound />;
}
