import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Tooltip, notification } from 'antd';
import { 
  CloseCircleOutlined, 
  EditOutlined
} from '@ant-design/icons';

import { EmptyGiphy } from '../EmptyGiphy';
import { GiphyCard } from '../GiphyCard';

import styles from './list.module.scss';

function ListGiphyCard() {
  const [listSaved, setListSaved] = useState<any>([]);

  useEffect(() => {
    const savedGiphys = localStorage.getItem('savedGiphys');

    if (savedGiphys) {
      const parsedGiphys = JSON.parse(savedGiphys);

      setListSaved(parsedGiphys);
    }
  }, [])

  function removeGiphy(giphyId: string) {
    const giphys = localStorage.getItem('savedGiphys');

    if (giphys) {
      const parsedGiphys = JSON.parse(giphys);
      const newGiphys = parsedGiphys.filter((pg: any) => pg.id !== giphyId);

      notification.success({ 
        message: 'Giphy Removido',
        description: 'você removeu um giphy da sua lista!',
        placement: 'topRight',
        duration: 5
      });

      setListSaved(newGiphys)
      localStorage.setItem('savedGiphys', JSON.stringify(newGiphys))
    }
  }

  return (
    <>
      <EmptyGiphy 
        listIsEmpty={listSaved} 
        positionTop={100} 
        color="#11121e" 
        message="Nenhum gif/meme foi encontrado" 
      />

      <div className={styles.listCards}>
        {listSaved.map((giphy: any) => { 
          return (
            <GiphyCard 
              key={giphy.id} 
              giphy={giphy} 
              cardWidth={300} 
              marginCard={16} 
              imgCardWidth="100%" 
              imgCardHeight={200} 
              actionsCard={[
                <Tooltip title="Remover giphy!" color="blue" placement="bottom">
                  <CloseCircleOutlined 
                    key="remove" 
                  style={{ fontSize: 22 }}
                    onClick={() => removeGiphy(giphy?.id)} 
                  />
                </Tooltip>,
                <Tooltip title="Editar giphy!" color="blue" placement="bottom">
                  <Link to={`/gifs/edit/${giphy?.id}`}>
                    <EditOutlined 
                      key="edit" 
                      style={{ fontSize: 22 }} 
                    /> 
                  </Link>
                </Tooltip>
              ]} 
            />
          )
        })}
      </div>
    </>
  )
}

export { ListGiphyCard }