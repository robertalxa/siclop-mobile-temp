// @ts-nocheck
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Styles from './botoesTextoMobile.module.scss';
import LabelMobile from '../labelMobile';

export interface IBotaoTexto {
  texto: string;
  id_lbl: string;
  tipo?: string;
  link?: string;
  negativo?: boolean;
  onclick?: any;
  TamanhoFonte: string;
}

export default function BotaoTextoMobile({
  texto,
  id_lbl,
  tipo = 'button',
  link,
  negativo = false,
  onclick,
  TamanhoFonte,
}: IBotaoTexto) {
  return (
    <>
      {link ? (
        <Link className={Styles.link} to={`/${link}`}>
          <div
            className={classNames({
              [Styles.containerBotao]: true,
              [Styles.containerBotao___negativo]: negativo,
            })}
          >
            <LabelMobile
              id_lbl={id_lbl}
              texto={texto}
              TamanhoFonte={TamanhoFonte}
            />
          </div>
        </Link>
      ) : (
        <button
          type={tipo}
          className={Styles.link}
          onClick={onclick}
          id={`btn_${id_lbl}`}
        >
          <div
            className={classNames({
              [Styles.containerBotao]: true,
              [Styles.containerBotao___negativo]: negativo,
            })}
          >
            <LabelMobile
              id_lbl={id_lbl}
              texto={texto}
              TamanhoFonte={TamanhoFonte}
            />
          </div>
        </button>
      )}
    </>
  );
}

BotaoTextoMobile.defaultProps = {
  tipo: 'button',
};
