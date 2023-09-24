// @ts-nocheck
import classNames from 'classnames';
import Styles from './th.module.scss';

export interface ITh {
  texto: string;
  id_th: string;
  tam_5?: boolean;
  tam_7_5?: boolean;
  tam_16?: boolean;
  tam_9?: boolean;
  maior?: boolean;
  tam_40?: boolean;
}

export default function Th({
  texto,
  id_th,
  tam_5,
  tam_7_5,
  tam_16,
  tam_9,
  tam_8_5,
  tam_40,
}: ITh) {
  return (
    <>
      <th
        id={id_th}
        className={classNames({
          [Styles.th]: true,
          [Styles.tam_5]: tam_5,
          [Styles.tam_7_5]: tam_7_5,
          [Styles.tam_8_5]: tam_8_5,
          [Styles.tam_9]: tam_9,
          [Styles.tam_16]: tam_16,
          [Styles.maior]: tam_40,
        })}
      >
        {texto}
      </th>
    </>
  );
}
