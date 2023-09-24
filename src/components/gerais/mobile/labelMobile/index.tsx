import classNames from 'classnames';
import Styles from './labelMobile.module.scss';

export interface ILabel {
  texto: string;
  id_lbl: string;
  TamanhoFonte?: string;
}

export default function LabelMobile({ texto, id_lbl, TamanhoFonte }: ILabel) {
  return (
    <>
      <p
        id={id_lbl}
        className={classNames({
          [Styles.label]: true,
          [Styles.label___2]: TamanhoFonte === '2',
          [Styles.label___3]: TamanhoFonte === '3',
        })}
      >
        {texto}
      </p>
    </>
  );
}
