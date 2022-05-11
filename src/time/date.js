
export default function data() {


  const data = new Date()
  const dia = data.getDate() <= 9 ? '0' + data.getDate() : data.getDate()
  const mes = data.getMonth() + 1 <= 9 ? `0${data.getMonth() + 1}` : data.getMonth() + 1
  const ano = data.getFullYear()

  function semana() {
    let semana = data.getDay()

    switch (semana) {
      case 0:
        return semana = 'Domingo'
      case 1:
        return semana = 'Segunda-Feira'
      case 2:
        return semana = 'Terça-Feira'
      case 3:
        return semana = 'Quarta-Feira'
      case 4:
        return semana = 'Quinta-Feira'
      case 5:
        return semana = 'Sexta-Feira'
      case 6:
        return semana = 'Sábado'
      default:
        return semana;
    }
  }



  const datas = ({
    dia,
    mes,
    ano,
    dataEscrita: `${dia}/${mes}/${ano}`,
    dia_semana: semana()
  })



  return datas
}


// pegar o dia do 'data' em content transformar com as props e retornar com uma funcao o valor do dia novo