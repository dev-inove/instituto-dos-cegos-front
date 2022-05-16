import React from 'react';

import Sidebar from '~/components/SideBar/index';

function Layout(props: any) {
  const { history, children } = props;

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Sidebar history={history} />
        <div style={{ marginLeft: '16rem' }}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
