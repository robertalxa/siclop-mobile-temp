import classNames from 'classnames';
import Styles from './td.module.scss';

export interface ITd {
  texto: string;
  tipo: string;
  id_td: string;
  par: boolean;
  tam_5?: boolean;
  tam_7?: boolean;
  tam_10?: boolean;
  tam_16?: boolean;
  tam_9_string?: boolean;
  tam_9_number?: boolean;
  tam_5_number?: boolean;
  tam_10_number?: boolean;
  tam_9_5_string?: boolean;
  tam_16_string?: boolean;
  tam_40_string?: boolean;
}

export default function Td({
  texto,
  id_td,
  par,
  tipo,
  tam_5,
  tam_7,
  tam_10,
  tam_16,
  tam_9_string,
  tam_9_number,
  tam_5_number,
  tam_10_number,
  tam_9_5_string,
  tam_16_string,
  tam_40_string,
}: ITd) {
  return (
    <>
      <td
        id={id_td}
        className={classNames({
          [Styles.td]: true,
          [Styles.td___par]: par,
          [Styles[`td___${tipo}`]]: true,
          [Styles.tam_5]: tam_5,
          [Styles.tam_7]: tam_7,
          [Styles.tam_10]: tam_10,
          [Styles.tam_16]: tam_16,
          [Styles.tam_9_string]: tam_9_string,
          [Styles.tam_9_number]: tam_9_number,
          [Styles.tam_5_number]: tam_5_number,
          [Styles.tam_9_5_string]: tam_9_5_string,
          [Styles.tam_10_number]: tam_10_number,
          [Styles.tam_16_string]: tam_16_string,
          [Styles.tam_40_string]: tam_40_string,
        })}
      >
        {texto}
      </td>
    </>
  );
}
