
import { useContext } from "react";
import { ApiContext } from "../../../contexts/ApiProvider";
import MinMax from "./MinMax";


export default function ContentClima(props) {
  const { state: { tarde, noite } } = useContext(ApiContext)


  return (
    <div>
      <MinMax />
      <h2>Tarde</h2>
      {tarde.resumo}
      <h2>Noite</h2>
      {noite.resumo}
      
    </div>
  )
}
//Object.keys(hoje)[0]