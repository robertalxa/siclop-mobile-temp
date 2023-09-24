// @ts-nocheck
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Styles from './botoesMobile.module.scss';
import ImagensMobile from '../imagensMobile';
import LabelMobile from '../labelMobile';

export interface IBotao {
  id_lbl: string;
  texto?: any;
  imagem?: string;
  alt: string;
  link?: string;
  tamanho?: string;
  TamanhoFonte?: string;
}

export default function BotoesMobile({
  id_lbl,
  texto,
  imagem,
  alt,
  link,
  tamanho,
  TamanhoFonte,
}) {
  return (
    <>
      <Link className={Styles.linkBotao} to={`/mobile/${link}`}>
        <button type="button">
          <ImagensMobile imagem={imagem} alt={alt} tamanho={tamanho} />
          <LabelMobile
            id_lbl={id_lbl}
            texto={texto}
            TamanhoFonte={TamanhoFonte}
          />
        </button>
      </Link>
    </>
  );
}
