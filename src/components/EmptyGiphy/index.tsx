import { Empty } from 'antd';

type EmptyGiphyProps = {
  listIsEmpty: any;
  positionTop: number;
  message: string;
  color: string;
}

function EmptyGiphy({ 
  listIsEmpty, 
  positionTop, 
  message, 
  color 
}: EmptyGiphyProps) {
  return (
    <>
      {!listIsEmpty.length && (
        <Empty 
          style={{ marginTop: positionTop }}
          imageStyle={{
            height: 160,
          }}
          description={
            <span style={{ color: color, fontSize: 30 }}>
              {message}
            </span>
          } 
        />
      )}
    </>
  )
}

export { EmptyGiphy }