// @ts-nocheck
import classNames from 'classnames';
import Styles from './tr_td.module.scss';
import Td, { ITd } from '../td';

export interface ITr_td {
  listaTd: ITd[];
  par: boolean;
}

export default function Tr_td({ listaTd, par }: ITr_td) {
  return (
    <>
      <tr
        className={classNames({
          [Styles.tr_td]: true,
          [Styles.tr_td___par]: par,
        })}
      >
        {listaTd.map((td) => (
          <Td
            tipo={td.tipo}
            texto={td.texto}
            id_td={td.id_td}
            mini={td.mini}
            menor={td.menor}
            medio={td.medio}
            maior={td.maior}
            mini_number={td.mini_number}
            menor_number={td.menor_number}
            menor_string={td.menor_string}
            medio_number={td.medio_number}
            medio_string={td.medio_string}
            maior_string={td.maior_string}
            giga_string={td.giga_string}
            par={par}
          />
        ))}
      </tr>
    </>
  );
}
