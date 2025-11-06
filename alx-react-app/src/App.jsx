import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';   

import WelcomeMessage from './components/WelcomeMessage.jsx';
import MainContent from './components/MainContent.jsx';
import UserProfile from './components/UserProfile.jsx';
import Card from './components/Card.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Card>  <WelcomeMessage /> </Card>
      <Card>  <Header /> </Card>
      <Card title= "My Favorite Cities">  <MainContent /> </Card>
      <Card>  <UserProfile  name="Alice" age={25} bio="Loves hiking and photography" textColor="blue" /> </Card>
      <Card>  <Footer /> </Card>
    
     
     
      
    </div>
  )
}

export default App
