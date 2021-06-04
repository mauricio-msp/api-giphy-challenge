import { ListGiphyCard } from '../../components/ListGiphyCard';
import { BackHome } from '../../components/Back';

import styles from './saved.module.scss';

function SavedGiphys() {
  return (
    <div className={styles.savedListContainer}>
      <BackHome />

      <ListGiphyCard />
    </div>
  );
}

export { SavedGiphys }