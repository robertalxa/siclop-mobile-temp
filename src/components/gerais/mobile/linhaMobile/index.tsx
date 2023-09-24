// @ts-nocheck
import classNames from 'classnames';
import { useState } from 'react';
import Styles from './linhaMobile.module.scss';
import Label from '../labelMobile';
import Input from '../../../formulario/input';
import LabelInputs from '../labelInputs';
import InputMobile from '../inputMobile';
// import buscaInforSis from '../../../../main/repo/buscaInfos';
// import vl_destinos from '../../../repo/input/modulosInput';

export interface ILinha {
  id_lbl: string;
  texto: string;
  obrigatorio: boolean;
  id: string;
  nome: string;
  tipo?: string;
  tamanhoMax?: number;
  valorMax?: number | string;
  valorMin?: number | string;
  valorPadrao?: string;
  invisivel?: boolean;
  readonly?: boolean;
  step?: number;
  idLinha?: string;
  setStateMin?: any;
  setStateMax?: any;
  tamanho?: string;
  minusculo?: string;
  flex?: boolean;
  comLinha?: boolean;
  btn?: boolean;
  tipoAcao?: string;
  infos?: any;
  inner?: string;
  pagina?: string;
  acao?: string;
  onChange?: any;
  onBlur?: any;
  disabled?: any;
  htmlAdicional?: any;
  valor?: string;
  TamanhoFonte?: string
}

// function atribuiValores(infos: any) {
//   document.querySelectorAll('input').forEach((input) => {
//     if (input.id.split('_')[0] === 'vlJSON' && !input.id.split('_')[2]) {
//       input.value = document.querySelector('#vlJSON_delivery').value;
//       vl_destinos.vl_destinos.onblur(
//         {
//           target: {
//             value: document.querySelector('#vlJSON_delivery').value,
//             id: input.id,
//           },
//         },
//         infos
//       );
//     }
//   });
// }

export default function LinhaMobile({
  id_lbl,
  texto,
  obrigatorio,
  id,
  nome,
  tipo,
  tamanhoMax,
  valorMax,
  valorMin,
  valorPadrao,
  readonly,
  invisivel,
  step,
  idLinha,
  setStateMin,
  setStateMax,
  tamanho,
  minusculo,
  flex,
  comLinha,
  btn,
  tipoAcao,
  infos,
  inner,
  pagina,
  acao,
  onChange,
  onBlur,
  disabled,
  htmlAdicional,
  valor,
  TamanhoFonte,
}: ILinha) {
  return (
    <div
      id={idLinha}
      className={classNames({
        [Styles.containerLinha]: true,
        // [Styles.containerLinha___none]:
        //   !!(id === 'cod_barr'
        //     ? stateInfos[0].cfg_cod_barra === false
        //     : false) ||
        //   (id === 'cfg_pzcombinada' ? stateInfos[0].id_nichos === 3 : false) ||
        //   invisivel,
        [Styles.containerLinha___flex]: flex && !invisivel,
      })}
    >
      <LabelInputs
        id_lbl={id_lbl}
        texto={texto}
        obrigatorio={obrigatorio}
        comLinha={comLinha}
        inner={inner}
        TamanhoFonte={TamanhoFonte}
      />
      <InputMobile
        tipo={tipo}
        readonly={readonly}
        tamanho={tamanho}
        minusculo={minusculo}
        nome={nome}
        tamanhoMax={tamanhoMax}
        valorMax={valorMax}
        valorMin={valorMin}
        valorPadrao={valorPadrao}
        id={id}
        obrigatorio={obrigatorio}
        step={step}
        setStateMin={setStateMin}
        setStateMax={setStateMax}
        tipoAcao={tipoAcao}
        infos={infos}
        pagina={pagina}
        acao={acao}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        valor={valor}
      />
      {htmlAdicional ? <>{htmlAdicional}</> : <></>}
    </div>
  );
}
