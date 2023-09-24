import classNames from 'classnames';
import Styles from './imagensMobile.module.scss';

export interface IImagem {
  imagem: string;
  alt: string;
  tamanho?: string;
}

export default function ImagensMobile({ imagem, alt, tamanho }: IImagem) {
  return (
    <>
      <img
        className={classNames({
          [Styles.imagem]: true,
        })}
        src={imagem}
        alt={alt}
      />
    </>
  );
}
