import { Link } from 'react-router-dom';

import { Button, Tooltip } from 'antd';
import { EyeOutlined } from '@ant-design/icons';

function EyeListSaved() {
  return (
    <div style={{ position: 'fixed', right: 50, bottom: 60 }}>
      <Link to="/gifs/saved">
        <Tooltip title="Ver lista salva" placement="left">
          <Button 
            type="primary" 
            shape="circle" 
            size="large" 
            icon={<EyeOutlined style={{ fontSize: 40, marginTop: 4 }} />} 
            style={{ width: 80, height: 80 }}
          />
        </Tooltip>
      </Link>
    </div>
  )
}

export { EyeListSaved }