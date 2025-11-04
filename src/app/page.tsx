import './page.css'

import { NavBar } from './components/NavBar';
import { Header } from "./components/Header";
import { About } from './components/About';
import { Gori } from './components/Gori';
import { Footer } from "./components/Footer";


export default function Home() {
  return (
    <div className='page-wrapper'>
      <NavBar />
      <Header />
      <About />
      <Gori />
      <Footer />
    </div>
  );
}
