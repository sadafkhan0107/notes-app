import './home.css';
import { Aside,Navbar, Input, OtherNotes, PinnedNotes,Footer } from '../../components';

export const Home = () =>{
  return (
    <>
      <Navbar />
      <div className="app">
        <Aside />
        <main className="main">
          <Input />
          <PinnedNotes />
          <OtherNotes />
        </main>
      </div> 
      <Footer />
    </>
  );
}
