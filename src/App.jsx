import './App.css';
import { Header } from './components/Header';
import { ContentBlock } from './components/ContentBlock';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <div class="content">
        <ContentBlock
          title="About"
          description="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
        />
        <ContentBlock
          title="Interests"
          description="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek.
        Pop culture ninja. Coffee fanatic."
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
