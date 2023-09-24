import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import consultaCores from './pages/mobile/repo/consultaCoresMobile';

export async function ChamaRotina(
  classe: string,
  metodo: string,
  parametros: any
) {
  const retorno = await axios.post('http://localhost:3030/', {
    classe,
    metodo,
    parametros,
  });
  return retorno.data;
}

export default function AppMobile() {
  ChamaRotina('Cores', 'consultaCores', null)
    .then((resp) => {
      consultaCores(resp);
      return resp;
    })
    .catch((err) => console.log(err));

  return (
    <>
      <Outlet />
    </>
  );
}
