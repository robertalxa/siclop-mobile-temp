export default function formata_valor(value) {
  if (!value) {
    return `R$ 0,00`;
  }
  const regex = /(\d)(?=(\d{3})+(?!\d))/g;
  const formatado = parseFloat(value)
    .toFixed(2)
    .replace('.', ',')
    .replace(regex, '$1.');

  const novoValor = `R$ ${formatado}`;
  return novoValor;
}
