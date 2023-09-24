import classNames from 'classnames';
import Styles from './tituloSICLOP.module.scss';

export interface ITitulo {
  mobile?: boolean;
}

export default function TituloSICLOP({ mobile }: ITitulo) {
  return (
    <div className={Styles.containerTituloSICLOP}>
      <h1
        className={classNames({
          [Styles.siclop]: true,
          [Styles.siclopMobile]: mobile,
        })}
      >
        SICLOP⁺
      </h1>
      {/* <p
        className={classNames({
          [Styles.subtitulo]: true,
          [Styles.subtituloMobile]: mobile,
        })}
      >
        Serviços e Sistemas
      </p> */}
    </div>
  );
}
