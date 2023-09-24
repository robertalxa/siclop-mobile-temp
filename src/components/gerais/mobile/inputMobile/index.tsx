// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-expressions */
import classNames from 'classnames';
import { useState } from 'react';
import Styles from './inputMobile.module.scss';

export interface IInput {
  id: string;
  nome: string;
  tipo: string;
  tamanhoMax?: number;
  valorMax?: number;
  valorMin?: number;
  valorPadrao?: string;
  readonly: boolean;
  obrigatorio: boolean;
  step?: number;
  placeholder?: string;
  setStateMin?: any;
  setStateMax?: any;
  tamanho?: string;
  minusculo?: string;
  tabIndex?: number;
  tipoAcao?: any;
  infos: any;
  pagina?: string;
  acao?: string;
  onChange?: any;
  onBlur?: any;
  disabled?: any;
  valor?: string;
}

export default function InputMobile({
  id,
  nome,
  tipo,
  tamanhoMax,
  valorMax,
  valorMin,
  valorPadrao,
  readonly,
  obrigatorio,
  step,
  placeholder,
  setStateMin,
  setStateMax,
  tamanho,
  minusculo,
  tipoAcao,
  infos,
  pagina,
  acao,
  onChange,
  onBlur,
  disabled,
  valor,
}: IInput) {
  const [stateValid, setStateValid] = useState(true);
  const [stateCod, setStateCod] = useState('inicial');
  const [stateCodGrp, setStateCodGrp] = useState([]);
  const [stateCodFpgto, setStateCodFpgto] = useState([]);
  const usuarioLogado = JSON.parse(
    window.localStorage.getItem('usuarioLogado')!
  );
  const nivel = usuarioLogado ? usuarioLogado.id_nivel : 3;
  const params = {
    min: [setStateMin, setStateValid],
    max: [setStateMax, setStateValid],
    cod_prod: [setStateCod],
    cod_grupo: [setStateCodGrp],
    cod_fpgto: [setStateCodFpgto],
    vl_destinos: [infos],
    vl_destinos_promo: [infos],
  };

  function removeEspeciaisSQL(e: any) {
    let textoDigitado = e.target.value;
    textoDigitado = textoDigitado.replaceAll('&', '');
    textoDigitado = textoDigitado.replaceAll('!', '');
    textoDigitado = textoDigitado.replaceAll('%', '');
    textoDigitado = textoDigitado.replaceAll('*', '');
    textoDigitado = textoDigitado.replaceAll('#', '');
    e.target.value = textoDigitado;
  }

//   function atribuiFuncao(e: any, funcao: string) {
//     if (obj[id]) {
//       if (obj[id][funcao]) {
//         const p = params[id] ? [...params[id]] : [];
//         obj[id][funcao](e, ...p);
//       }
//     } else if (obj[tipoAcao]) {
//       if (obj[tipoAcao][funcao]) {
//         const p = params[tipoAcao] ? [...params[tipoAcao]] : [];
//         obj[tipoAcao][funcao](e, ...p);
//       }
//     }
//   }
//   if (id === 'cod_prod') {
//     if (stateCod === 'inicial') {
//       /* document.querySelector('#cod_prod')
//         ? (document.querySelector('#cod_prod')!.disabled = true)
//         : null; */
//     } else if (stateCod !== null && stateCod !== 'inicial') {
//       document.querySelector('#cod_prod')?.classList.add(Styles.invalido);
//       document.querySelector('#cod_prod')?.classList.remove(Styles.valido);
//       /* document.querySelector('#cod_prod')
//         ? (document.querySelector('#cod_prod')!.disabled = false)
//         : null; */
//       stateValid === true ? setStateValid(false) : null;
//     } else if (stateCod !== 'inicial' && stateCod === null) {
//       document.querySelector('#cod_prod')?.classList.add(Styles.valido);
//       document.querySelector('#cod_prod')?.classList.remove(Styles.invalido);
//       /* document.querySelector('#cod_prod')
//         ? (document.querySelector('#cod_prod')!.disabled = false)
//         : null; */
//       stateValid === false ? setStateValid(true) : null;
//     }
//   } else if (id === 'cod_grupo') {
//     if (
//       stateCodGrp !== null &&
//       stateCodGrp !== 'inicial' &&
//       acao === 'insere'
//     ) {
//       document.querySelector('#cod_grupo')?.classList.add(Styles.invalido);
//       document.querySelector('#cod_grupo')?.classList.remove(Styles.valido);
//       stateValid === true ? setStateValid(false) : null;
//     } else if (stateCodGrp === null && stateCodGrp !== 'inicial') {
//       document.querySelector('#cod_grupo')?.classList.add(Styles.valido);
//       document.querySelector('#cod_grupo')?.classList.remove(Styles.invalido);
//       stateValid === false ? setStateValid(true) : null;
//     }
//   } else if (id === 'cod_cli') {
//     if (stateCodCli !== null && stateCodCli !== 'inicial') {
//       document.querySelector('#cod_cli')?.classList.add(Styles.invalido);
//       document.querySelector('#cod_cli')?.classList.remove(Styles.valido);
//       stateValid === true ? setStateValid(false) : null;
//     } else if (stateCodCli === null && stateCodCli !== 'inicial') {
//       document.querySelector('#cod_cli')?.classList.add(Styles.valido);
//       document.querySelector('#cod_cli')?.classList.remove(Styles.invalido);
//       stateValid === false ? setStateValid(true) : null;
//     }
//   } else if (id === 'cod_fpgto') {
//     if (stateCodFpgto !== null && stateCodFpgto !== 'inicial') {
//       document.querySelector('#cod_fpgto')?.classList.add(Styles.invalido);
//       document.querySelector('#cod_fpgto')?.classList.remove(Styles.valido);
//       stateValid === true ? setStateValid(false) : null;
//     } else if (stateCodFpgto === null && stateCodFpgto !== 'inicial') {
//       document.querySelector('#cod_fpgto')?.classList.add(Styles.valido);
//       document.querySelector('#cod_fpgto')?.classList.remove(Styles.invalido);
//       stateValid === false ? setStateValid(true) : null;
//     }
//   }
  return (
    <>
      <input
        placeholder={placeholder}
        onKeyUp={(e) => {
          if (e.target.type !== 'date') removeEspeciaisSQL(e);
        }}
        id={id}
        name={nome}
        type={tipo}
        min={valorMin}
        max={valorMax}
        maxLength={tamanhoMax}
        readOnly={readonly}
        required={obrigatorio}
        step={step}
        className={classNames({
          [Styles.input]: true,
          [Styles.input___read]: readonly,
          [Styles.input___6]: tamanho === '6',
          [Styles.input___8]: tamanho === '8',
          [Styles.input___11]: tamanho === '11',
          [Styles.input___26]: tamanho === '26',
          [Styles.input___30]: tamanho === '30',
          [Styles.input___minusculo]: minusculo === 'minusculo',
        })}
        data-validacao={stateValid}
      />
    </>
  );
}
