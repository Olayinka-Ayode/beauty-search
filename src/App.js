import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import {useJsApiLoader, GoogleMap, Marker, Autocomplete} from '@react-google-maps/api'

function App() {
  const go = <FontAwesomeIcon icon={faPaperPlane} />

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })

  if(!isLoaded){
    return <h2>Loading</h2>
  }

  const center = {lat: 48.584, lng: 2.2945}

  return (
    <div className="App flex flex-col justify-center items-center bg-darkBlue">
      <h1 className='capitalize mb-20 font-bold text-white text-2xl'>Find beauty services in your city!</h1>
      <div className="form flex">
      <Autocomplete>
      <input type="text" className='md:w-96 border-solid border border-black rounded-l-xl py-3 pl-7' placeholder='Search Here . . .'/>
      </Autocomplete>

      {/* <input type="submit" value={go} className='rounded-r-xl bg-deepRed py-3 ml-1 px-7'/> */}
      <button className='rounded-r-xl bg-deepRed py-3 ml-1 px-7'><FontAwesomeIcon icon={faPaperPlane} className='text-xl'/></button>
      </div>
      {/* <GoogleMap center={center} zoom={15} mapContainerStyle={{width: '100%', height: '100%'}}>

      </GoogleMap> */}
    </div>
  );
}

export default App;
