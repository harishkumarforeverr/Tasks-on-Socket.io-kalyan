import { AppstoreOutlined, MailOutlined, RightOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Acs-Titles', 'sub1', null, [
    getItem('String-name', '1'),
    getItem('article-title', '2'),
    getItem('refsource', '3'),
    getItem('year', '4'),
    getItem('volume', '5'),
    getItem('fpage', '6'),
    getItem('ipage', '7'),
    getItem('issue', '8'),
    getItem('doi', '9'),
    getItem('e-location', '10'),
  ]),
  getItem('Citation', 'sub2', null, [
    getItem(<><RightOutlined className='leftIcon' />journal</>, '1'),
   
    getItem(<><RightOutlined className='leftIcon' />book</>, '2'),

    getItem(<><RightOutlined className='leftIcon' />thesis</>, '3'),
    getItem(<><RightOutlined className='leftIcon' />weblink</>, '4'),
    getItem(<><RightOutlined className='leftIcon' />patent</>, '5'),
    getItem(<><RightOutlined className='leftIcon' />coputer-program</>, '6'),
    
  ]),
  
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const MenuApp = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        width: 256,
      }}
      items={items}
    />
  );
};
export default MenuApp;