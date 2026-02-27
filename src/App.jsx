import Body from "./pages/Body"
import Contact from "./pages/Contact"
import Home from "./pages/Home/Home"
import { Route, Routes } from "react-router-dom"
import Services from "./pages/Services"
import AboutUs from "./pages/AboutUs"
import Seo from "./pages/services/Seo"
import Ppc from "./pages/services/Ppc"
import SocialMedia from "./pages/services/SocialMedia"
import Content from "./pages/services/Content"
import WebDesign from "./pages/services/WebDesign"
import Brand from "./pages/services/Brand"
import ScrollToTop from "./pages/ScrollToTop"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Body/>}>
      <Route index element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/aboutUs" element={<AboutUs/>}/>
      <Route path="/services/seo" element={<Seo/>}/>
      <Route path="/services/ppc" element={<Ppc/>}/>
      <Route path="/services/social-media-marketing" element={<SocialMedia/>}/>
      <Route path="/services/content-marketing" element={<Content/>}/>
      <Route path="/services/web" element={<WebDesign/>}/>
      <Route path="/services/brand" element={<Brand/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App
