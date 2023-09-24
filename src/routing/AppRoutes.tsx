/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import { FC } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import AppMobile from '../App';
import TelaMobile from '../pages/mobile';
import MesasMobile from '../pages/mobile/pages/mesas';
import LoginMobile from '../pages/mobile/auth/login';
import ComandasMobile from '../pages/mobile/pages/comandas';
import TelaPedidosMobile from '../pages/mobile/pages/rotinas';
import TelaResumoPedidosMobile from '../pages/mobile/pages/repo/pedidos';
/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */

const AppRoutes: FC = () => {
  const currentUser = false;
  return (
    <HashRouter>
      <Routes>
        <Route element={<AppMobile />}>
          <Route path="/*" element={<LoginMobile />} />
          <Route path="/loginMobile" element={<LoginMobile />} />
          <Route path="/mobile" element={<TelaMobile />} />
          <Route path="/mobile/mesas" element={<MesasMobile />} />
          <Route path="/mobile/comandas" element={<ComandasMobile />} />
          <Route
            path="/mobile/resumoPedidos"
            element={<TelaResumoPedidosMobile />}
          />
          <Route path="/mobile/pedidos" element={<TelaPedidosMobile />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
