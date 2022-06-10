import Basic from './components/Basic';
import Clock from './components/Clock';
import From from "./components/Form";
import Calculator from './components/tempCalculator/Calculator';

  
function App() {
  // console.log('App component')
  const counter = [1];
  return (
    <>
      <div>
        <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-md-5 text-center">
              <Clock />
            </div>
          </div>
        </div>
        {
          counter.map(() => {
            return <Basic key={Math.random()}/>
          })
        }
      </div>
      
      <From />

      <Calculator/>

    </>
  );
}

export default App;
