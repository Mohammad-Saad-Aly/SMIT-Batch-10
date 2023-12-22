import './App.css';
import Post from './Components/Post/Post';
// import Button from './Components/Button/Button';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}

    <div style={{display:'flex', justifyContent:'space-around', marginTop:'200px'}}>

      <img src={require('./logo192.png')} alt="" />


      <Post imgSrc='https://www.audi.com.pk/content/dam/nemo/models/audi-e-tron-gt/e-tron-gt/my-2022/NeMo-Carline-Startpage/1920-stage/1920x1920-audi-e-tron-gt-Stage_Desktop.jpg?imwidth=768'/>
     
      <Post imgSrc='https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_307,y_0,w_901,h_600/w_375,h_250,c_fill/auto-client/36ed5b9b8c2bbe0428a28cb779c19916/audi_electric.jpg'/>
     
      <Post imgSrc='https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_0,y_296,w_960,h_640/w_375,h_250,c_fill/auto-client/bf3bb358d2bf43da061f201df6934aff/148056941_4291608120866810_8001242543694781197_n.jpg'/>

    </div>


      {/* <Button abc='red' bgcolor='blue' value='Submit'/><br />
      <Button abc='aqua' value='Login'/><br />
      <Button abc='green' value='Logout'/><br /> */}
      {/* </header> */}
    </div>
  );
}

export default App;
