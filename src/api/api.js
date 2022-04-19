import React, { useEffect, useState } from 'react';


export default function Capitais() {
  const [capitais, setCapitais] = useState([])
  const datp = '19/04/2022'

  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://apiprevmet3.inmet.gov.br/previsao/capitais')
        .then(resp => resp.json())
        .then(data => setCapitais(data['São Paulo'][datp]['manha']))
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>
        {capitais.resumo}
      </p>
    </div>
  )
}

// capitais com manha nao exibe, precisa ser direto no na funcao setcapitais