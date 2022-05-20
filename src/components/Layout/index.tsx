import React from 'react';

import Sidebar from '~/components/SideBar/index';
import * as S from './styles';

function Layout(props: any) {
  const { history, children } = props;
  return (
    <div>
      <S.ContainerContent>
        <Sidebar history={history} />
        <S.ContentChildren>{children}</S.ContentChildren>
      </S.ContainerContent>
    </div>
  );
}

export default Layout;
