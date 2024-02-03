import { Anchor, ConfigProvider } from 'antd';
// import logo from '../../assets/icons/logo/logo-MN.png';

import datas from '../../assets/datas.json';

function Header() {
  return (
    <header>
      <img src={datas.logo} alt="icône Maelle Nioche" width="40" height="40" />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#6C63FF',
            colorText: 'black',
            fontFamily: 'Roboto, sans-serif, Arial',
            fontSize: '1rem',
            lineWidth: 2,
            padding: '1.5rem',
          },
        }}
      >
        <Anchor
          type="primary"
          direction="horizontal"
          targetOffset="70"
          items={[
            { key: 'about-me-1', href: '#about-me', title: 'A propos' },
            {
              key: 'my-projects-1',
              href: '#my-projects',
              title: 'Mes projets',
            },
            { key: 'contact-1', href: '#contact', title: 'Contact' },
          ]}
        />
      </ConfigProvider>
    </header>
  );
}

export default Header;
