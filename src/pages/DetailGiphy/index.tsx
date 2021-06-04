import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { Tooltip, notification } from 'antd';
import { SaveOutlined, EyeOutlined } from '@ant-design/icons';

import { GiphyCard } from '../../components/GiphyCard';
import { BackHome } from '../../components/Back';

import { api } from '../../services/api';
import styles from './detail.module.scss';

type ParamsProps = {
  id: string;
}

function DetailGiphy() {
  const { id } = useParams<ParamsProps>();

  const [giphy, setGiphy] = useState<any>(null);

  function saveGiphy() {
    const giphys = localStorage.getItem('savedGiphys');

    if (giphys) {
      const parsedGiphys = JSON.parse(giphys);
      
      if (parsedGiphys.some((g: any) => g.id === giphy.id)) {
        notification.warn({ 
          message: 'Giphy repetido',
          description: 'este giphy já foi salvo!',
          placement: 'topRight',
          duration: 5
        });
        
        return;
      }

      notification.success({ 
        message: 'Novo Giphy',
        description: 'um novo giphy foi adicionado!',
        placement: 'topRight',
        duration: 5
      });

      localStorage.setItem(
        'savedGiphys', 
        JSON.stringify([...parsedGiphys, giphy])
      );
    }
  }

  useEffect(() => {
    (async () => {
      const response = await api.get(`/${id}`, { 
        params: {
          api_key: '7NNL9ZTo7iBtRx1wbSzZzCLL8NHyEFAx',
        } 
      });
  
      const { data } = response.data;
  
      setGiphy(data);
    })()
  }, [id])

  return (
    <div className={styles.detailContainer}>
      <BackHome />

      <GiphyCard 
        giphy={giphy} 
        cardWidth="100%" 
        imgCardWidth="100%" 
        imgCardHeight={500} 
        actionsCard={[
          <Tooltip title="Salvar giphy!" color="blue" placement="bottom">
            <SaveOutlined 
              key="save" 
              style={{ fontSize: 22 }} 
              onClick={() => saveGiphy()} 
            />
          </Tooltip>,
          <Tooltip title="Ver lista" color="blue" placement="bottom">
            <Link to="/gifs/saved">
              <EyeOutlined key="eye" style={{ fontSize: 22 }} /> 
            </Link>
          </Tooltip>
        ]} 
      />
    </div>
  );
}

export { DetailGiphy }