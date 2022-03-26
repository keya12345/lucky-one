
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './component/Products/Products';
import Answer from './component/Answer/Answer';


function App() {
  return (
    <div >
      <h1 className='text-center title'>MY GOLD HOUSE</h1>
      <Products></Products>
     <Answer></Answer>
     
    </div>
  );
}

export default App;
