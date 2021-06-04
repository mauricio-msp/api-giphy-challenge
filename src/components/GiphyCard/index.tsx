import { ReactNode } from 'react';
import { Card } from 'antd';

type GiphyCardProps = {
  giphy: any;
  cardWidth: number | string;
  marginCard?: number;
  imgCardWidth: number | string;
  imgCardHeight: number;
  actionsCard?: ReactNode[];
}

function GiphyCard({ 
  giphy, 
  cardWidth, 
  marginCard, 
  imgCardWidth, 
  imgCardHeight, 
  actionsCard, 
}: GiphyCardProps) {
  return (
    <Card
      key={giphy?.id}
      style={{ 
        width: cardWidth,
        marginRight: marginCard ?? 0,
        marginBottom: marginCard ?? 0
      }}
      hoverable
      cover={
        <img
          style={{ 
            width: imgCardWidth, 
            height: imgCardHeight,
            objectFit: 'cover' 
          }}
          src={giphy?.images?.fixed_height?.url} 
          alt={giphy?.title} 
        />
      }
      actions={actionsCard} 
    >
      <Card.Meta
        title={
          giphy?.title !== ' ' && giphy?.title !== '' 
            ? giphy?.title 
            : 'no description'
        }
        description={
          <div>
            <strong>tipo:</strong> <span>{giphy?.type}</span> <br />
            <strong>data:</strong> <span>{giphy?.import_datetime}</span>
          </div>
        }
      />
    </Card>
  );
}

export { GiphyCard }