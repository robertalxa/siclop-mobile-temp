// @ts-nocheck
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import VerificaLogado from '../funcoes/verificaLogado';
import BotaoTextoMobile from '../../../../../components/gerais/mobile/botoesTextoMobile';
import TituloSICLOP from '../../../../../components/gerais/tituloSICLOP';
import Styles from './resumoPedidos.module.scss';

export default function TelaResumoPedidosMobile() {
  const navigate = useNavigate();
  useEffect(() => VerificaLogado(navigate));
  return (
    <body className={Styles.body}>
      <header>
        <TituloSICLOP mobile />
      </header>
      <main>{/* {aparecePedido()} */}</main>
      <article>
        <div className={Styles.containerBotoes}>
          <BotaoTextoMobile texto="Adicionar Item" />
          <BotaoTextoMobile texto="Trocar Mesa" />
        </div>
        <div className={Styles.containerBotoes}>
          <BotaoTextoMobile texto="Imprimir" />
          <BotaoTextoMobile texto="Fechar Mesa" />
        </div>
      </article>
    </body>
  );
}
