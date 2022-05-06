import { useState } from 'react';


export default function Api() {

  const fetchData = async () => {
    await fetch('https://apiprevmet3.inmet.gov.br/previsao/capitais')
      .then(resp => resp.json())
      .then(data => data['São Paulo'])
   
  };



  return fetchData();    

}



// capitais com manha nao exibe, precisa ser direto no na funcao setcapitais

//['São Paulo'][`${dia}/${mes}/${ano}`][period()]