import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { Button, Tooltip, Input, notification } from 'antd';
import { SyncOutlined, EyeOutlined } from '@ant-design/icons';

import { GiphyCard } from '../../components/GiphyCard';
import { BackHome } from '../../components/Back';

import styles from './edit.module.scss';

type ParamsProps = {
  id: string;
}

function EditGiphy() {
  const { id } = useParams<ParamsProps>();

  const [desc, setDesc] = useState('');
  const [giphy, setGiphy] = useState<any>(null);
  const [isAltered, setIsAltered] = useState(false);

  async function updateGiphy() {
    if (!desc) {
      notification.warn({
        message: 'Campo vazio',
        description: 'Por favor, preencha o campo.',
        placement: 'topRight',
        duration: 5
      });

      return;
    }

    setGiphy({ ...giphy, title: desc });
    setIsAltered(true);

    notification.success({ 
      message: 'Giphy atualizado',
      description: 'você atualizou um giphy da sua lista!',
      placement: 'topRight',
      duration: 5
    });

    setDesc('');
  }

  useEffect(() => {
    if (isAltered) {
      const storageGiphy = localStorage.getItem('savedGiphys');

      if (storageGiphy) {
        const parsedGiphys = JSON.parse(storageGiphy);
        const filteredGiphy = parsedGiphys.filter(
          (g: any) => g.id !== giphy.id
        );
        
        localStorage.setItem(
          'savedGiphys', 
          JSON.stringify([...filteredGiphy, giphy])
        );

        setIsAltered(false);
      }
    }
    
  }, [giphy, isAltered])

  useEffect(() => {
    const storageGiphy = localStorage.getItem('savedGiphys');

    if (storageGiphy) {
      const parsedGiphys = JSON.parse(storageGiphy);
      const [filteredGiphy] = parsedGiphys.filter((g: any) => g.id === id);

      setGiphy(filteredGiphy);
    }
  }, [id])

  return (
    <div className={styles.editContainer}>
      <BackHome />

      <div className={styles.inputContainer}>
        <Input 
          placeholder="altere a descrição do gif/meme" 
          size="large"
          value={desc}
          onChange={e => setDesc(e.target.value)} 
        />
        <Button 
          type="primary" 
          size="large"
          icon={<SyncOutlined />} 
          onClick={() => updateGiphy()}
        >
          Alterar
        </Button>
      </div>

      <GiphyCard 
        giphy={giphy} 
        cardWidth="100%" 
        imgCardWidth="100%" 
        imgCardHeight={500}  
        actionsCard={[
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

export { EditGiphy }