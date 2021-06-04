import { useState, useEffect, useRef } from 'react';

import { Input, Button, notification } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { ListGiphys } from '../../components/ListGiphys';
import { EmptyGiphy } from '../../components/EmptyGiphy';
import { EyeListSaved } from '../../components/EyeListSaved';
import { Loader } from '../../components/Loader';

import { api } from '../../services/api';
import styles from './home.module.scss';

function Home() {
  const containerRef = useRef<any>();

  const [giphys, setGiphys] = useState<any>([]);
  const [limit, setLimit] = useState(11);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function searchGif() {
    if (!search) {
      notification.warn({
        message: 'Campo vazio',
        description: 'Por favor, preencha o campo de pesquisa.',
        placement: 'topRight',
        duration: 5
      });

      return;
    }

    setIsLoading(false);

    const response = await api.get('/search', { 
      params: {
        api_key: '7NNL9ZTo7iBtRx1wbSzZzCLL8NHyEFAx',
        q: search
      } 
    });

    const { data } = response.data;

    setGiphys(data);
  }

  async function listGiphys(limitGif: number) {
    const response = await api.get('/trending', { 
      params: {
        api_key: '7NNL9ZTo7iBtRx1wbSzZzCLL8NHyEFAx',
        limit: limitGif
      } 
    });

    const { data } = response.data;

    setGiphys(data);
    setIsLoading(true);
  }

  function fetchMore() {
    setLimit(limit => limit + 5);
  }

  useEffect(() => {
    if (!search) {
      listGiphys(limit);
    }
  }, [limit, search])

  useEffect(() => {
    listGiphys(limit);
  }, [limit])

  useEffect(() => {
    if (isLoading) {
      const observer = new IntersectionObserver(([entries]) => {
        if (entries.isIntersecting) {
          setTimeout(() => {
            fetchMore();
          }, 1300)
        }
      }, { threshold: 1.0 });

      observer.observe(containerRef.current);
    }
  }, [isLoading])

  return (
    <div className={styles.giphyContainer}>
      <div className={styles.spaceContainer}>
        <Input 
          placeholder="Pesquise por um gif ou meme" 
          size="large"
          value={search}
          onChange={e => setSearch(e.target.value)} 
        />
        <Button 
          type="primary" 
          size="large"
          icon={<SearchOutlined />} 
          onClick={() => searchGif()}
        >
          Pesquisar
        </Button>
      </div>

      <EmptyGiphy 
        listIsEmpty={giphys} 
        positionTop={80} 
        color="#11121e" 
        message="Nenhum gif/meme foi encontrado" 
      />

      <ListGiphys giphys={giphys} />

      <Loader isLoad={isLoading} />

      <EyeListSaved />
      
      {isLoading && <div ref={containerRef} />}
    </div>
  );
}

export { Home }