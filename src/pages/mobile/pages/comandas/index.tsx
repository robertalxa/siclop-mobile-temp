// @ts-nocheck
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TituloSICLOP from '../../../../components/gerais/tituloSICLOP';
import Styles from './comandas.module.scss';
import logoComanda from '../../../../assets/img/logoSICLOPComandaSembg.png';
import onorango from '../../../../assets/img/logo_olho_no_rango.png';
import BotaoTextoMobile from '../../../../components/gerais/mobile/botoesTextoMobile';
import VerificaLogado from '../repo/funcoes/verificaLogado';
import { ChamaRotina } from '../../../../App';

function PegaComanda(cmd: any) {
  ChamaRotina('ClassePedido', 'consultaPedidosEspecifica', [
    'des',
    'nmr_salao',
    cmd,
    'COMANDA',
  ])
    .then((resp) => {
      console.log(resp);
      return resp;
    })
    .catch((err) => console.log(err));
}
export default function ComandasMobile() {
  const [stateComanda, setStateComanda] = useState();
  const [stateNumMesa, setStateNumMesa] = useState(0);
  const navigate = useNavigate();
  useEffect(() => VerificaLogado(navigate));
  return (
    <body className={Styles.body}>
      <header>
        <TituloSICLOP mobile />
      </header>
      <main>
        <div className={Styles.containerComandas}>
          <header>
            <img src={logoComanda} alt="logo SICLOP" />
          </header>
          <section>
            <input
              type="number"
              placeholder="N° da Comanda"
              onChange={(e) => {
                const nMesa = e.target.value;
                return setStateNumMesa(nMesa);
              }}
              max={999}
            />
            <div className={Styles.containerBotao}>
              <button
                type="button"
                onClick={() => {
                  const cmd = stateNumMesa;
                  PegaComanda(cmd);
                }}
              >
                OK
              </button>
            </div>
          </section>
          <footer>
            <p>
              <b>{stateNumMesa}</b>
            </p>
            <div className={Styles.onorango}>
              <img src={onorango} alt="onorango" />
            </div>
          </footer>
        </div>
      </main>
      <footer>
        <div className={Styles.botaoVoltar}>
          <BotaoTextoMobile link="mobile" texto="Voltar" />
        </div>
      </footer>
    </body>
  );
}
