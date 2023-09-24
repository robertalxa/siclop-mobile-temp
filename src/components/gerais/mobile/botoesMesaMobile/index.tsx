// @ts-nocheck
import classNames from 'classnames';
import Swal from 'sweetalert2';
import Styles from './botoesMesaMobile.module.scss';
import Label from '../labelMobile';

export interface IBotao {
  id_lbl: string;
  texto?: any;
  imagem?: string;
  alt: string;
  link?: string;
  tamanho?: string;
  status?: Function;
  setStatePedMesa?: any;
  ApareceResumo?: any;
  contador?: any;
  setStateMesaSelecionada?: any;
  pedido?: any;
  setStateValor?: any;
  stateEditar?: any;
}

export default function BotoesMesaMobile({
  texto,
  tamanho,
  setStatePedMesa,
  ApareceResumo,
  contador,
  setStateMesaSelecionada,
  pedido,
  setStateValor,
  stateEditar,
}: IBotao) {
  return (
    <div
      id={`fundo_${contador}`}
      className={classNames({
        [Styles.containerBotoes]: true,
        [Styles.containerBotoes___pequeno]: tamanho === 'pequeno',
        [Styles.containerBotoes___mini]: tamanho === 'mini',
        [Styles.containerBotoes___extra_mini]: tamanho === 'extra_mini',
        [Styles.containerBotoes___disponivel]: true,
        [Styles.containerBotoes___ocupado]:
          pedido.status_pedido === 'PENDENTE' ||
          pedido.status_pedido === 'RESERVA',
        [Styles.containerBotoes___fechamento]:
          pedido.status_pedido === 'FECHADO',
      })}
    >
      <div className={Styles.linkBotao} aria-hidden>
        <div
          className={classNames({
            [Styles.conteudoBotao]: true,
            [Styles.conteudoBotao___pequeno]: tamanho === 'pequeno',
          })}
          id={`btn_${contador}`}
          onClick={(e) => {
            if (stateEditar)
              return Swal.fire({
                title: 'Atenção',
                text: 'Você ainda possui alterações pendentes',
                icon: 'warning',
                confirmButtonColor: '#0f0f57',
                allowOutsideClick: false,
              });
            // window.Pedidos.consultaPedidosEspecifica(
            //   'nmr_salao',
            //   `${e.target.id.split('_')[1]}`,
            //   'MESA'
            // )
            //   .then((res) => {
            //     res ? setStatePedMesa(res) : setStatePedMesa([]);
            //     res
            //       ? !res[0]
            //         ? setStateValor(0)
            //         : setStateValor(res[0].vl_total)
            //       : setStateValor(0);
            //     return res;
            //   })
            //   .catch(TrataErros.verificaErro);
            // ApareceResumo();
            // setStateMesaSelecionada(e.target.id.split('_')[1]);
          }}
          aria-hidden
        >
          <Label
            id_lbl={`botao_${contador}`}
            texto={texto}
            id={`botao_${contador}`}
          />
        </div>
      </div>
    </div>
  );
}
