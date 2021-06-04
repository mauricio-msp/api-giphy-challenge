import { Link } from 'react-router-dom';

import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

function BackHome() {
  return (
    <Link to="/" style={{ marginBottom: 20 }}>
      <Button 
        type="primary" 
        size="large"
        icon={<ArrowLeftOutlined />} 
      >
        Voltar
      </Button>
    </Link>
  );
}

export { BackHome }