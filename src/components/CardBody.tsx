interface ICradBodyProps {
  title: string,
  text: string,
  textBtn: string
}
const CardBody = ({text, textBtn, title} : ICradBodyProps) => {
  return(
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href="#" className="btn btn-primary">{textBtn}</a>
    </div>
  )
}
export default CardBody;