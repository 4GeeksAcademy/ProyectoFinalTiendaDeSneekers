import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import Descuentos from "./pages/Descuentos";
import ListProducts from "./pages/ListProducts";
import Carrito from './pages/Carrito';
import Favoritos from './pages/Favoritos';
import Perfil from './pages/Perfil';
import MujerProducts from './pages/MujerProducts';
import NinosProducts from './pages/NinosProducts';
import Ofertas from './pages/Ofertas';

// Informativos
import SobreNosotros from "./pages/SobreNosotros";
import EnviosDevoluciones from "./pages/EnviosDevoluciones";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import TerminosCondiciones from "./pages/TerminosCondiciones";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes";

import Login from "./pages/Login";
import Register from "./pages/register";
import ProtectedRoute from "./components/ProtectedRoute";
import Search from "./pages/Search";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
      <Route path="/" element={<Home />} />

      {/* Rutas protegidas */}
      <Route path="/carrito" element={<ProtectedRoute requiredRole="user"><Carrito /></ProtectedRoute>} />
      <Route path="/favoritos" element={<ProtectedRoute requiredRole="user"><Favoritos /></ProtectedRoute>} />
      <Route path="/perfil" element={<ProtectedRoute requiredRole="user"><Perfil /></ProtectedRoute>} />

      {/* Rutas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/mujer" element={<MujerProducts />} />
      <Route path="/ninos" element={<NinosProducts />} />
      <Route path="/ofertas" element={<Ofertas />} />
      <Route path="/ofertas/:categoria" element={<Ofertas />} /> {/* 🔥 Agregado para manejar /ofertas/hombre, etc. */}
      <Route path="/genero/:genero" element={<ListProducts />} />
      <Route path="/search/:modelo" element={<Search />} />
      <Route path="/descuentos" element={<Descuentos />} />

      {/* Informativas */}
      <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      <Route path="/envios-devoluciones" element={<EnviosDevoluciones />} />
      <Route path="/privacidad" element={<PoliticaPrivacidad />} />
      <Route path="/terminos" element={<TerminosCondiciones />} />
      <Route path="/faq" element={<PreguntasFrecuentes />} />
    </Route>
  )
);
