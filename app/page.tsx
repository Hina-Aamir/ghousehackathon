
import Header from "./components/Header"
import Card from "./components/Card"
import Footer from "./components/Footer"
export default function Home() {
  return (
    <div className="bg-gray-200">
    <Header text="Cards"></Header>
    <Card model="CR  - V" brand="SUV" miles="80" type="Manual" sitting="6" price="80.00"> 
      
    </Card>
<Footer/>
   </div>

  );
}
