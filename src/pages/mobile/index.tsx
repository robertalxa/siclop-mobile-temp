// @ts-nocheck
import { useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import Styles from './telaMobile.module.scss';
import TituloSICLOP from '../../components/gerais/tituloSICLOP';
import Mesas from '../../assets/Imagens/waiter.png';
import Comandas from '../../assets/Imagens/loyalty-card.png';
import BotoesMobile from '../../components/gerais/mobile/botoesMobile';
import VerificaLogado from './pages/repo/funcoes/verificaLogado';

export default function TelaMobile() {
  const navigate = useNavigate();
  useEffect(() => VerificaLogado(navigate)); // função que verifica se o login foi feito
  return (
    <body className={Styles.body}>
      <nav>
        <TituloSICLOP mobile />
      </nav>
      <main>
        <div>
          <BotoesMobile
            id_lbl="lbl_botaoMesas"
            imagem={Mesas}
            alt="Imagem"
            texto="Mesas"
            link="mesas"
            TamanhoFonte="5"
          />
          <BotoesMobile
            id_lbl="lbl_botaoComandas"
            imagem={Comandas}
            alt="Imagem"
            texto="Comandas"
            link="comandas"
            TamanhoFonte="5"
          />
        </div>
      </main>
    </body>
  );
}
