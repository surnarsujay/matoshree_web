
import './App.css'

import Navbars from './components/Navbars';
import CardSlider from './components/CardSlider';
import HomeVideo from './components/HomeVideo';
import Service from './components/Service';
import Projects from './components/Projects';
import Slider from './components/Slider';
import ReviewSlider from './components/ReviewSlider';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';
import Floatingicon from './components/Floatingicon';
import Careers from './components/Careers';
import Contactus from './subcomponent/Contactus';
import Aboutus from './subcomponent/Aboutus';
import SubProjects from './subcomponent/SubProjects';
import Servicesweoffer from './subcomponent/Servicesweoffer';
import Gypsum from './subcomponent/Gypsum';
import Paintingwork from './subcomponent/PaintingWork';
import AluminiumWork from './subcomponent/AluminiumWork';
import GlassWork from './subcomponent/GlassWork';
import FlooringWork from './subcomponent/FlooringWork';
import CorianWork from './subcomponent/CorianWork';
import CarpentryWork from './subcomponent/CarpentryWork';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import ModularWork from './subcomponent/ModularWork';
import Tender from './subcomponent/Tender';
import Tenderimg from './subcomponent/Tenderimg';
import Estimatecosting from './subcomponent/Estimatecosting';
import Budget from './subcomponent/Budget';
import Events from './subcomponent/Events';
import News from './subcomponent/News';
import Gallary from './subcomponent/Gallery';
import AllPhotos from './subcomponent/AllPhotos';
import Staff from './subcomponent/Staff';
import Team from './subcomponent/Team';
import Office from './subcomponent/Office';
function App() {
  return (
    <div className="App">

        <Navbars/>
<Routes>
  <Route path='/' element={<Home/>}/>

  <Route path='aboutus' element={<Aboutus/>}/>

  <Route path='services' element={  <Servicesweoffer/>}/>
  
<Route path='services/gypsumwork' element ={<Gypsum/>}/>
<Route path='services/paintaingwork' element ={<Paintingwork/>}/>
<Route path='services/aluminiumwork' element ={<AluminiumWork/>}/>
<Route path='services/glasswork' element ={<GlassWork/>}/>
<Route path='services/flooringwork' element ={<FlooringWork/>}/>
<Route path='services/corianwork' element ={<CorianWork/>}/>
  <Route path='services/carpentrywork' element={<CarpentryWork/>}/>
  <Route path='services/furniturework' element={<ModularWork/>}/>
  <Route path='services/estimate' element={<Estimatecosting/>}/>
  <Route path='services/budget' element={<Budget/>}/>












  <Route path='projects' element ={  <SubProjects/>}/>
  <Route path='career' element ={  <Careers/>}/>
  <Route path='events' element={<Events/>}/>
  {/* <Route path='news' element={<News/>}/> */}
  <Route path='contactus' element={<Contactus/>}/>

<Route path='gallery' element={<Gallary/>}>
<Route index element={<AllPhotos />} />

<Route path='allphotos' element={<AllPhotos/>}/>

  <Route path='staff' element={<Staff/>}/>
  <Route path='team' element={<Team/>}/>
  <Route path='office' element={<Office/>}/>
</Route >

  <Route path='Tender' element={<Tender/>}/>
  <Route path='Tender/tenderinfo' element={<Tenderimg/>}/>
</Routes>
<Floatingicon/>

    </div>
  );
}

export default App;
