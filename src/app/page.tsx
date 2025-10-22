import './page.css'

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Gori } from './components/Gori';

export default function Home() {
  return (
    <div className='page-wrapper'>
      <Header />
      <Gori />
      <Footer />
    </div>
  );
}
