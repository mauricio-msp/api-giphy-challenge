import { Spin } from 'antd';

type LoaderProps = {
  isLoad: boolean;
}

function Loader({ isLoad }: LoaderProps) {
  return (
    <>
      {isLoad && (
        <Spin 
          size="large" 
          tip="Loading..." 
          style={{ marginTop: 20 }}
        />
      )}
    </>
  )
}

export { Loader }