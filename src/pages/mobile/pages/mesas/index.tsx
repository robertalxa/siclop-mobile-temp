// @ts-nocheck
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VerificaLogado from '../repo/funcoes/verificaLogado';
import BotoesMesaMobile from '../../../../components/gerais/mobile/botoesMesaMobile';
import BotaoTextoMobile from '../../../../components/gerais/mobile/botoesTextoMobile';
import LinhaMobile from '../../../../components/gerais/mobile/linhaMobile';
import TituloSICLOP from '../../../../components/gerais/tituloSICLOP';
import Styles from './mesasMobile.module.scss';
import { ChamaRotina } from '../../../../App';

export default function MesasMobile() {
  const navigate = useNavigate();
  useEffect(() => VerificaLogado(navigate));

  const [stateInforSis, setStateInforSis] = useState();
  const [statePedido, setStatePedido] = useState();
  if (!stateInforSis)
    ChamaRotina('InforSist', 'selectAll', null)
      .then((respInforSis) => {
        setStateInforSis(respInforSis);
        return respInforSis;
      })
      .catch((err) => console.log(err));

  if (!statePedido)
    ChamaRotina('ClassePedido', 'consultaPedidosGeral', null)
      .then((respConsultaPedido) => {
        setStatePedido(respConsultaPedido);
        return respConsultaPedido;
      })
      .catch((err) => console.log(err));

  let contador = 1;
  const mesas = stateInforSis ? stateInforSis[0].qde_mesas : '';
  const qtdMesas = [];
  function ApareceResumo() {
    navigate('/mobile/resumoPedidos');
  }
  const pedidosMesa = statePedido
    ? statePedido.filter((p: any) => p.cliente === 'MESA')
    : [];
  while (contador <= mesas) {
    // eslint-disable-next-line @typescript-eslint/no-loop-func
    const pedidoMesa = pedidosMesa.filter((p: any) => {
      return p.cliente === 'MESA' && parseInt(p.nmr_salao, 10) === contador;
    });
    const LinhaMesa = (
      <div id={`botao_${contador}`} aria-hidden="true" className={Styles.mesa}>
        <BotoesMesaMobile
          texto={contador}
          id_lbl={`btn_mesa${contador}`}
          tamanho="extra_mini"
          // setStatePedMesa={setStatePedMesa}
          ApareceResumo={ApareceResumo}
          contador={contador}
          // setStateMesaSelecionada={setStateMesaSelecionada}
          pedido={pedidoMesa.length > 0 ? pedidoMesa[0] : {}}
          // setStateValor={setStateValor}
          // stateEditar={stateEditar}
          alt=""
        />
      </div>
    );
    qtdMesas.push(LinhaMesa);
    contador += 1;
  }

  return (
    <body className={Styles.body}>
      <header>
        <TituloSICLOP mobile />
      </header>
      <nav>
        <div className={Styles.linhaPesquisa}>
          <LinhaMobile
            id_lbl="n° mesa"
            texto="Mesa n°:"
            obrigatorio={false}
            id="nMesaMobile"
            nome="n° da mesa"
            flex
            tipo="number"
          />
          <BotaoTextoMobile TamanhoFonte="4" texto="OK" id_lbl="ok" />
        </div>
      </nav>
      <main>
        <div className={Styles.containerMesas}>
          <div className={Styles.linha}>{qtdMesas}</div>
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
