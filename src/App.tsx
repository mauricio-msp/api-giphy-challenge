import { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { DetailGiphy } from './pages/DetailGiphy';
import { SavedGiphys } from './pages/SaveGiphy';
import { EditGiphy } from './pages/EditGiphy';

import 'antd/dist/antd.css';
import './styles/global.scss';

function App() {
  useEffect(() => {
    const isExisted = localStorage.getItem('savedGiphys');

    if (!isExisted) {
      localStorage.setItem('savedGiphys', JSON.stringify([]));
    }
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/gif/:id" component={DetailGiphy} />
        <Route path="/gifs/saved" component={SavedGiphys} />
        <Route path="/gifs/edit/:id" component={EditGiphy} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
