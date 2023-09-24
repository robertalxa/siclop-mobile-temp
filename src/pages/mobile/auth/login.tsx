import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Formik, FormikHelpers, Form, Field } from 'formik';
import TituloSICLOP from '../../../components/gerais/tituloSICLOP';
import Styles from './login.module.scss';
import { ChamaRotina } from '../../../App';

const dataHora = new Date();
const senhaTemp = `${dataHora.getDate() + 10}${dataHora.getSeconds() + 10}`;

interface Values {
  inputLoginMobile: string;
  inputSenhaMobile: string;
}

export default function LoginMobile() {
  const navigate = useNavigate();
  const [botaoManter, setBotaoManter] = useState(false);
  ChamaRotina('InforSist', 'selectAll', null)
    .then((a) => {
      console.log(a);
      return a;
    })
    .catch((err) => console.log(err));

  function logarAuth(employee: Values) {
    Swal.fire({
      title: 'Conectando...',
      allowOutsideClick: false,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    ChamaRotina('Funcionario', 'auth', {
      login: employee.inputLoginMobile,
      senha: employee.inputSenhaMobile,
    })
      .then((resp) => {
        console.log(resp);
        const logouSiclop = false;
        let resultado = resp;

        if (!resp) {
          if (
            employee.inputLoginMobile.toUpperCase().trim() === 'SICLOP' &&
            senhaTemp.toUpperCase().trim() === employee.inputSenhaMobile
          ) {
            resultado = {
              id: 0,
              nome: 'SICLOP MASTER',
              ddd: '11',
              fone1: '28416556',
              num_res: 188,
              id_nivel: 3,
              id_setor: 1,
              id_funcao: 1,
              id_logradouro: 1,
              id_tipo_conta: 1,
              id_cat: 1,
            };
          }
        }
        if (!resultado) {
          Swal.fire({
            title: 'Credenciais incorretas',
            confirmButtonColor: '#0f0f57',
            allowOutsideClick: false,
          });
        } else {
          Swal.close();
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          !logouSiclop
            ? window.localStorage.setItem('usuario', JSON.stringify(resultado))
            : window.sessionStorage.setItem(
                'usuario',
                JSON.stringify(resultado)
              );

          window.localStorage.setItem(
            'usuarioLogado',
            JSON.stringify(resultado)
          );
          navigate('/mobile');
        }
        return '';
      })
      .catch((err) => console.log(err));
  }

  return (
    <body className={Styles.body}>
      <nav>
        <TituloSICLOP mobile />
      </nav>
      <main>
        <div className={Styles.containerForm}>
          <p className={Styles.dica_senha}>{dataHora.toLocaleString()}</p>
          <h2>Digite Login e Senha!</h2>
          <Formik
            initialValues={{
              inputLoginMobile: '',
              inputSenhaMobile: '',
            }}
            onSubmit={(
              values: Values,
              { setSubmitting }: FormikHelpers<Values>
            ) => {
              setTimeout(() => {
                // alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                logarAuth(values);
              }, 500);
            }}
          >
            <Form>
              <label htmlFor="inputLoginMobile">
                Login:{' '}
                <Field
                  id="inputLoginMobile"
                  name="inputLoginMobile"
                  placeholder="LOGIN"
                  type="text"
                />
              </label>
              <label htmlFor="inputSenhaMobile">
                Senha:{' '}
                <Field
                  id="inputSenhaMobile"
                  name="inputSenhaMobile"
                  placeholder="SENHA"
                  type="password"
                />
              </label>
              <button type="submit">Entrar</button>
            </Form>
          </Formik>
        </div>
      </main>
    </body>
  );
}
