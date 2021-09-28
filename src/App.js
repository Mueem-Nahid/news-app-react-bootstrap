import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import './App.css';
import MyNav from './components/MyNav/MyNav';
import News from './components/News/News';

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=efbc201698f74321aa22629c02fe5ef8')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  },[]);

  return (
    <div className="App">
      <MyNav></MyNav>
      <Container>
      {
        //conditional formatting
        news.length === 0 ? <Spinner animation="border" variant="primary" /> : <Row xs={1} md={3} className="g-4">
        {
          news.map( single_news => <News news={single_news}></News>) //sending single_news as news to News component
        }
        </Row>
      }
      </Container>
    </div>
  );
}

export default App;
