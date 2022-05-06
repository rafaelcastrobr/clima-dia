import ClimaDia from "./ClimaDia";
import MinMax from "./MinMax";
import data from "../../../time/date";


export default function ContentClima (props) {

  return (
    <div>
      <MinMax proxDia={props.proxDia}/>
      
    </div>
  )
}