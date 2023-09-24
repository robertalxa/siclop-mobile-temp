import Styles from './tabelaCadastro.module.scss';

export interface ITabela {
  texto: string;
  th: string;
}

export default function TabelaCadastro({ texto, th }: ITabela) {
  return (
    <>
      <div className={Styles.containerTabela}>
        <table>
          <tr>
            <th>{texto}</th>
            <th>{texto}</th>
            <th>{texto}</th>
          </tr>
        </table>
      </div>
    </>
  );
}
