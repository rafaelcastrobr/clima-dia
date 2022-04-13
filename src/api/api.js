

async function data () {
  try {
    const response = await fetch('https://apiprevmet3.inmet.gov.br/previsao/capitais') 
    const data = await response.json();
    console.log('data: ', data);
  }catch (error) {
    console.log(error)
  }
}
