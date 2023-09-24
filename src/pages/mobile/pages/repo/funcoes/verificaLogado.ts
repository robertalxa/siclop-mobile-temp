export default function VerificaLogado(navigate: any) {
  if (!window.localStorage.getItem('usuarioLogado'))
    return navigate('/loginMobile');
}
