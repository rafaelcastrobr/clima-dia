import React, { useEffect, useState } from 'react';
import date from '../time/date';
import period from '../time/period';

export default function Capitais() {
  const [capitais, setCapitais] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://apiprevmet3.inmet.gov.br/previsao/capitais')
        .then(resp => resp.json())
        .then(data => setCapitais(data['São Paulo'][date()][period()]))
    };

    fetchData();
  }, []);

  return capitais
}

// capitais com manha nao exibe, precisa ser direto no na funcao setcapitais