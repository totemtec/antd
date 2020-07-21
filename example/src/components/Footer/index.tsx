import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => (
  <DefaultFooter
    copyright="2020 图腾泰科"
    links={[
      {
        key: 'Ant Design Pro',
        title: 'Ant Design Pro V5',
        href: 'https://pro.ant.design',
        blankTarget: true,
      },
      {
        key: 'github',
        title: <GithubOutlined />,
        href: 'https://github.com/ant-design/ant-design-pro',
        blankTarget: true,
      },
      {
        key: 'Ant Design',
        title: 'Ant Design V4.3',
        href: 'https://ant.design',
        blankTarget: true,
      },
    ]}
  />
);
