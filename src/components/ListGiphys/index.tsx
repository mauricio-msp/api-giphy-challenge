import { Link } from 'react-router-dom';

import styles from './list.module.scss';

type GiphysProps = {
  giphys: any;
}

function ListGiphys({ giphys }: GiphysProps) {
  return (
    <div className={styles.listGiphys}>
      {giphys.map((giphy: any, index: number) => { 
        return (
          <Link 
            key={`${giphy.id}-${index}`} 
            to={`/gif/${giphy.id}`}
          >
            <img
              className={styles.imgGiphy} 
              src={giphy.images.fixed_height.url} 
              alt={giphy.title} 
            />
          </Link>
        )
      })}
    </div>
  )
}

export { ListGiphys }