import './App.css'
import Arbitraj from './components/Arbitraj'
import  Currency  from './components/Currency'
import  Rate  from './components/Rate'

function App() {

  return (
    <>
    <div className='container'>
    <div className='control-all-block'>
      <h1 className='title-kurs-valit'>Курстар</h1>
      <div className='arbitraj'>
      <Arbitraj/>
      <div className='mini-blok-rate-and-curency'>
        <Rate/>
        <Currency/>
      </div>
      </div>
    </div>
    </div>


    </>
  )
}

export default App
