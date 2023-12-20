import { ReactNode } from "react";

interface ICradProps {
  img: string,
  body?: ReactNode 
}
const Cards = ({img, body} : ICradProps) => {
 return(
  <div className="card">
    <img src={img} className="card-img-top"/>
    {body}
  </div>
 )
}
export default Cards;