import React, { useEffect } from 'react';
import Head from '../components/Utility/Head';
import LayoutRotas from '../components/Utility/LayoutRotas';
import classes from './Lojas.module.css'

const Lojas = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <LayoutRotas titulo='Encontre a loja mais perto de você!' descricao='A unidade mais próxima para você nos encontrar'>
      <Head title='Lojas' description='Encontre a Sorveteria mais perto da sua casa!' />
      <ul className={classes.listaLojas}>
        

        <li>
          <h2>Encruzilhada</h2>
          <span>Estrada de Belém - 150</span>
          <span>CEP: 52.030-280</span>
          <span>Telefone: (81) 98479-1887</span>
        </li>

        
      </ul>
    </LayoutRotas>
  )
}

export default Lojas