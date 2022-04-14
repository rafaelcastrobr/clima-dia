import React, { useEffect, useState } from 'react';


export default function Capitais() {
  const [capitais, setCapitais] = useState([])
  const datp = '14/04/2022'

  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://apiprevmet3.inmet.gov.br/previsao/capitais')
        .then(resp => resp.json())
        .then(data => setCapitais(data['São Paulo'][datp]))
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>
        {capitais['manha'].uf}
      </p>
    </div>
  )
}

// capitais com manha nao exibe, precisa ser direto no na funcao setcapitais