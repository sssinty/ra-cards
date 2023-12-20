import './App.css'
import Cards from './components/Cards'
import CardBody from './components/CardBody'
import buildingImg from './img/breuer-building.jpg'

function App() {
  return (
    <>
      <Cards body={<CardBody text='Some quick example text to build on the card title and make up the bulk of the cards content.' textBtn='Go somewhere' title='Card title'/>} img={buildingImg}/>
      <Cards body={<CardBody text='With supporting text below as a natural lead-in to additional content.' textBtn='Go somewhere' title='Special title treatment'/>} img={buildingImg}/>
    </>
  )
}

export default App;
