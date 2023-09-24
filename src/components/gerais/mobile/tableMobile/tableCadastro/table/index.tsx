import Styles from './table.module.scss';
import { ITd } from '../td';
import { ITh } from '../th';
import Tr_td from '../tr_td';
import Tr_th from '../tr_th';
import Swal from 'sweetalert2';

export interface ITable {
  listaTh: ITh[];
  listaTd: ITd[][];
}

export default function TableMobile({ listaTh, listaTd }: ITable) {
  let par = false;
  let linha = 0;
  Swal.close();
  return (
    <table className={Styles.containerTabela} id="idTabela">
      <div className={Styles.containerTr_th}>
        <Tr_th listaTh={listaTh} />
      </div>

      <div className={Styles.containerTr_td}>
        {listaTd.map((tds: ITd[]) => {
          linha % 2 === 0 ? (par = true) : (par = false);
          linha += 1;
          return <Tr_td listaTd={tds} par={par} />;
        })}
      </div>
    </table>
  );
}
