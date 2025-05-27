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

// Importa los componentes informativos que creamos antes:
import SobreNosotros from "./pages/SobreNosotros";
import EnviosDevoluciones from "./pages/EnviosDevoluciones";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import TerminosCondiciones from "./pages/TerminosCondiciones";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes";
import Login from "./pages/Login";
import Register from "./pages/register";
import ProtectedRoute from "./components/ProtectedRoute";

export const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

      {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
      <Route path="/" element={<Home />} />
      <Route path="/carrito" element={<ProtectedRoute requiredRole={'user'}><Carrito /></ProtectedRoute>} />
      <Route path="/favoritos" element={<ProtectedRoute requiredRole={'user'}><Favoritos /></ProtectedRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/perfil" element={<ProtectedRoute requiredRole={'user'}><Perfil /></ProtectedRoute> } />


      <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      <Route path="/envios-devoluciones" element={<EnviosDevoluciones />} />
      <Route path="/privacidad" element={<PoliticaPrivacidad />} />
      <Route path="/terminos" element={<TerminosCondiciones />} />
      <Route path="/faq" element={<PreguntasFrecuentes />} />

      <Route path="/genero/:genero" element={<ListProducts />} />

      <Route path="/descuentos" element={<Descuentos />} />


    </Route>
  )
);