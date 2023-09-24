// @ts-nocheck
/* eslint-disable no-restricted-syntax */
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import VerificaLogado from '../repo/funcoes/verificaLogado';
import BotaoTextoMobile from '../../../../components/gerais/mobile/botoesTextoMobile';
import TituloSICLOP from '../../../../components/gerais/tituloSICLOP';
import Styles from './pedidos.module.scss';
import { ChamaRotina } from '../../../../App';
import plus from '../../../../assets/Imagens/plus.png';
import remove from '../../../../assets/Imagens/remove.png';
import btnX from '../../../../assets/Imagens/x-button.png';
import LinhaMobile from '../../../../components/gerais/mobile/linhaMobile';

export default function TelaPedidosMobile() {
  const [stateIdProdItex, setStateIdProdItex] = useState(0);
  const [stateIdGrupoProdItex, setStateIdGrupoProdItex] = useState(0);
  const [stateGrupos, setStateGrupos] = useState();
  const [stateProdutos, setStateProdutos] = useState();
  const [stateItensExtras, setStateItensExtras] = useState();
  const [stateFiltraGrupo, setStateFiltraGrupo] = useState(false);

  const navigate = useNavigate();
  useEffect(() => VerificaLogado(navigate));

  if (!stateGrupos)
    ChamaRotina('ClasseGrupo', 'consultaGruposGeral', null)
      .then((respGrupos: any) => {
        setStateGrupos(respGrupos);
        return respGrupos;
      })
      .catch((err) => console.log(err));

  if (!stateProdutos)
    ChamaRotina('ClasseProduto', 'consultaProdutosGeral', null)
      .then((respProdutos) => {
        setStateProdutos(respProdutos);
        return respProdutos;
      })
      .catch((err) => console.log(err));

  if (!stateItensExtras)
    ChamaRotina('ClasseExtra', 'consultaExtrasGeral', null)
      .then((respExtras) => {
        setStateItensExtras(respExtras);
        return respExtras;
      })
      .catch((err) => console.log(err));

  const btnGrupo = [];
  if (stateGrupos) {
    stateGrupos.map((grupo: any) => {
      const btnGrupos = (
        <div className={Styles.containerGrupos}>
          <BotaoTextoMobile
            texto={grupo.descricao}
            onclick={() => setStateFiltraGrupo(true)}
          />
        </div>
      );
      btnGrupo.push(btnGrupos);
      return grupo;
    });
  }

  const linhaProdutos: any = [];
  if (stateProdutos)
    stateProdutos.map((produto: any) => {
      function tiraQtdProd() {
        const input = document.querySelector(`#qtdPed${produto.id}`);
        const valorInput = document.querySelector(
          `#qtdPed${produto.id}`
        )?.value;
        let count = valorInput - 1;
        count = count < 1 ? 0 : count;
        input!.value = count;
      }
      function addQtdProd() {
        const input = document.querySelector(`#qtdPed${produto.id}`);
        const valorInput = document.querySelector(
          `#qtdPed${produto.id}`
        )?.value;
        const count = parseInt(valorInput) + 1;
        input.value = count;
        return false;
      }
      console.log(produto.tb_grupo);
      const linhaProd = (
        <div className={Styles.containerLinha}>
          <tr className={Styles.tds}>
            <td className={Styles.td_cod}>{produto.cod_prod}</td>
            <td className={Styles.td_prod}>{produto.nome_prod}</td>
            <td className={Styles.td_qtd}>
              <button
                type="button"
                onClick={() => {
                  tiraQtdProd();
                }}
              >
                <img
                  className={Styles.remove}
                  src={remove}
                  alt="botao para remover um produto"
                />
              </button>
              <input
                id={`qtdPed${produto.id}`}
                type="number"
                defaultValue={0}
              />
              <button
                onClick={() => {
                  addQtdProd();
                }}
                type="button"
              >
                <img
                  className={Styles.add}
                  aria-hidden="true"
                  src={plus}
                  alt="botao para adicionar um produto"
                />
              </button>
            </td>
            <td className={Styles.td_ie}>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  const idProduto = e.target.attributes[4].value;
                  const idGrupo = e.target.attributes[5].value;
                  setStateIdProdItex(idProduto);
                  setStateIdGrupoProdItex(idGrupo);
                  console.log(stateIdProdItex);
                  console.log(stateIdGrupoProdItex);
                  document
                    .querySelector('#modalIE')
                    ?.classList.replace(
                      Styles.modalIE___invisivel,
                      Styles.modalIE
                    );
                }}
              >
                <img
                  className={Styles.add}
                  aria-hidden="true"
                  src={plus}
                  alt="botao para adicionar um produto"
                  data-value={produto.id}
                  data-grupo={produto.tb_grupo.id}
                />
              </button>
            </td>
            <td className={Styles.td_val}>
              R$
              {produto.id_tpprod !== 3
                ? produto.vl_json.salao.valor.toFixed(2)
                : produto.vl_json.salao.normal.toFixed(2)}
            </td>
          </tr>
        </div>
      );
      linhaProdutos.push(linhaProd);
      return produto;
    });

  const linhaItensExtras: any = [];
  if (stateItensExtras)
    stateItensExtras.map((itemExtra: any) => {
      itemExtra.tba_extra_grupos.map((e) => {
        console.log(e);
      });
      function tiraQtdProd() {
        const input = document.querySelector(`#qtdIE${itemExtra.id}`);
        const valorInput = document.querySelector(
          `#qtdIE${itemExtra.id}`
        )?.value;
        let count = valorInput - 1;
        count = count < 1 ? 0 : count;
        input!.value = count;
      }
      function addQtdProd() {
        const input = document.querySelector(`#qtdIE${itemExtra.id}`);
        const valorInput = document.querySelector(
          `#qtdIE${itemExtra.id}`
        )?.value;
        const count = parseInt(valorInput) + 1;
        input.value = count;
        return false;
      }
      const linhaIE = (
        <div className={Styles.containerLinhaIE}>
          <tr className={Styles.tds}>
            <td className={Styles.td_qtd}>
              <button
                type="button"
                onClick={() => {
                  tiraQtdProd();
                }}
              >
                <img
                  className={Styles.remove}
                  src={remove}
                  alt="botao para remover um produto"
                />
              </button>
              <input
                id={`qtdIE${itemExtra.id}`}
                type="number"
                defaultValue={0}
              />
              <button
                onClick={() => {
                  addQtdProd();
                }}
                type="button"
              >
                <img
                  className={Styles.add}
                  aria-hidden="true"
                  src={plus}
                  alt="botao para adicionar um produto"
                />
              </button>
            </td>
            <td className={Styles.td_prod}>{itemExtra.descricao}</td>
            <td className={Styles.td_val}>R${itemExtra.acrescimo}</td>
          </tr>
        </div>
      );
      linhaItensExtras.push(linhaIE);
      return itemExtra;
    });

  function ConfirmaPedido() {
    const objPed: any = {};
    const objAjustes = {};
    const arrayProds = [];
    const arrayAjustes: any = [];
    const arrayInputs = document.querySelectorAll('input');
    let soma = 0;
    for (const e of arrayInputs) {
      if (e.id.substring(0, 6) === 'qtdPed') {
        if (e.value > 0) {
          const id = e.id.substring(6, e.id.length);
          const prod = stateProdutos.filter((p: any) => String(p.id) === id);
          const valorProd =
            prod[0].id_tpprod === 3
              ? prod[0].vl_json.salao.normal.toFixed(2)
              : prod[0].vl_json.salao.valor.toFixed(2);
          soma += valorProd * e.value;
          const objProd = { id, prod, qtd: e.value };
          arrayProds.push(objProd);
        }
      }
    }
    objPed.desconto = document.querySelector(
      '#ajustesDescontoPedidoGeralMobile'
    )?.value;
    objPed.acrescimo = document.querySelector(
      '#ajustesAcrescimoPedidoGeralMobile'
    )?.value;
    objPed.obs = document.querySelector(
      '#ajustesObservacaoPedidoGeralMobile'
    )?.value;
    objPed.itens = arrayProds;
    objPed.vl_total = soma;
    console.log(objPed);
  }

  function SalvaExtras() {
    const objExtras: any = {};
    const arrayIE = [];
    const arrayInputExtras = document.querySelectorAll('input');
    for (const inputs of arrayInputExtras) {
      if (inputs.id.substring(0, 5) === 'qtdIE') {
        if (inputs.value > 0) {
          const id = inputs.id.substring(5, inputs.id.length);
          const ie = stateItensExtras.filter((i: any) => String(i.id) === id);

          const objProd = { id, ie, qtd: inputs.value };
          arrayIE.push(objProd);
        }
      }
      if (inputs.id.substring(0, 5) === 'extra') {
        if (inputs.value !== ('' || 0)) {
          const id = inputs.id.substring(5, inputs.id.length);
        }
      }
    }
    objExtras.itens = arrayIE;
  }

  return (
    <>
      <div
        id="modalPedidoGeral"
        className={classNames({
          [Styles.modalPedidoGeral]: true,
          [Styles.modalPedidoGeral___invisivel]: true,
        })}
      >
        <div className={Styles.containerModalPedidoGeral}>
          <header className={Styles.linhaSuperior}>
            <div className={Styles.titulo}>
              <h5>Ajustes</h5>
            </div>
            <div className={Styles.imgX}>
              <img
                aria-hidden="true"
                src={btnX}
                alt="Botão de fechar a modal de ajustes"
                onClick={() => {
                  document
                    .querySelector('#modalPedidoGeral')
                    ?.classList.replace(
                      Styles.modalPedidoGeral,
                      Styles.modalPedidoGeral___invisivel
                    );
                }}
              />
            </div>
          </header>
          <main>
            <div className={Styles.containerInputsModalPedidoGeral}>
              <LinhaMobile
                id_lbl="lbl_descontoPedidoGeralMobile"
                texto="Desconto:. . ."
                obrigatorio={false}
                valorPadrao={0}
                id="ajustesDescontoPedidoGeralMobile"
                nome="Desconto"
                flex
                tipo="number"
                tamanho="26"
              />
              <LinhaMobile
                id_lbl="lbl_acrescimoPedidoGeralMobile"
                texto="Acréscimo: . . "
                obrigatorio={false}
                id="ajustesAcrescimoPedidoGeralMobile"
                nome="Acrescimo"
                flex
                tipo="number"
                tamanho="26"
              />
              <LinhaMobile
                id_lbl="lbl_observacaoPedidoGeralMobile"
                texto="Observação:."
                obrigatorio={false}
                id="ajustesObservacaoPedidoGeralMobile"
                nome="Observacao"
                tipo="text"
                flex
              />
            </div>
          </main>
          <footer>
            <BotaoTextoMobile texto="Salvar" onclick={() => ConfirmaPedido()} />
          </footer>
        </div>
      </div>
      <div
        id="modalIE"
        className={classNames({
          [Styles.modalIE]: true,
          [Styles.modalIE___invisivel]: true,
        })}
      >
        <div className={Styles.containerModal}>
          <header className={Styles.linhaSuperior}>
            <div className={Styles.titulo}>
              <h5>Itens Extras</h5>
            </div>
            <div className={Styles.imgX}>
              <img
                aria-hidden="true"
                src={btnX}
                alt="Botão de fechar a modal de itens extras"
                onClick={() => {
                  document
                    .querySelector('#modalIE')
                    ?.classList.replace(
                      Styles.modalIE,
                      Styles.modalIE___invisivel
                    );
                }}
              />
            </div>
          </header>
          <main className={Styles.conteudoModal}>
            <table>
              <tr className={Styles.ths}>
                <th className={Styles.th_qtd}>Qtd</th>
                <th className={Styles.th_nome}>Nome</th>
                <th className={Styles.th_val}>Valor</th>
              </tr>
              {linhaItensExtras}
            </table>
            <div className={Styles.containerInputs}>
              <LinhaMobile
                id_lbl="lbl_obsPedidoMobile"
                obrigatorio={false}
                id="extraObsPedidoMobile"
                nome="Obsercação:"
                flex
                texto="Observação:"
              />
            </div>
            <h1>{stateIdProdItex}</h1>
          </main>
          <footer>
            <BotaoTextoMobile
              texto="Salvar"
              onclick={() => {
                SalvaExtras();
              }}
            />
          </footer>
        </div>
      </div>
      <body className={Styles.body}>
        <header>
          <TituloSICLOP mobile />
        </header>
        <nav>{btnGrupo}</nav>
        <article>
          <form>
            <label htmlFor="input">
              Digite um produto: <input className={Styles.inputFiltraGrupos} />{' '}
            </label>
          </form>
        </article>
        <main>
          <table>
            <tr className={Styles.ths}>
              <th className={Styles.th_cod}>Cód</th>
              <th className={Styles.th_nome}>Produto</th>
              <th className={Styles.th_qtd}>Qtd</th>
              <th className={Styles.th_ie}>I.E</th>
              <th className={Styles.th_val}>Preço</th>
            </tr>
            {linhaProdutos}
          </table>
        </main>
        <footer>
          <div className={Styles.btns}>
            <BotaoTextoMobile texto="Voltar" link="mobile" />
            <BotaoTextoMobile
              texto="Registrar"
              link=""
              onclick={() => ConfirmaPedido()}
            />
            <BotaoTextoMobile
              texto="Ajustes"
              link=""
              onclick={() =>
                document
                  .querySelector('#modalPedidoGeral')
                  ?.classList.replace(
                    Styles.modalPedidoGeral___invisivel,
                    Styles.modalPedidoGeral
                  )
              }
            />
          </div>
        </footer>
      </body>
    </>
  );
}
