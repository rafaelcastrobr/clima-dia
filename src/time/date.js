
export default function data() {


  const data = new Date()
  const dia = data.getDate() <= 9 ? '0' + data.getDate() : data.getDate()
  const mes = data.getMonth() + 1 <= 9 ? `0${data.getMonth() + 1}` : data.getMonth() + 1
  const ano = data.getFullYear()


  const datas = ({
    dia,
    mes,
    ano,
    dataEscrita: `${dia}/${mes}/${ano}`,
  })



  return datas
}


// pegar o dia do 'data' em content transformar com as props e retornar com uma funcao o valor do dia novo