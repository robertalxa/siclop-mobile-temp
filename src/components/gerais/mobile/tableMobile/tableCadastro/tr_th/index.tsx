// @ts-nocheck
import Styles from './tr_th.module.scss';
import Th, { ITh } from '../th';

export interface ITr_th {
  listaTh: ITh[];
}

export default function Tr_th({ listaTh }: ITr_th) {
  return (
    <>
      <div className={Styles.containerTr_th}>
        <tr className={Styles.containerTr}>
          {listaTh.map((th) => (
            <Th
              texto={th.texto}
              extra_mini={th.extra_mini}
              mini={th.mini}
              menor={th.menor}
              medio={th.medio}
              maior={th.maior}
              gigante={th.gigante}
              id_th={th.id_th}
            />
          ))}
        </tr>
      </div>
    </>
  );
}
