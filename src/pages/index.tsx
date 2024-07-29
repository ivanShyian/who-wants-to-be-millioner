import React, {ReactElement} from 'react';
import {IndexPage} from '@/components/pages';
import {DefaultLayout} from '@/layouts';

function Index() {
  return <IndexPage/>;
}

Index.getLayout = function getLayout(page: ReactElement) {
  return (
      <DefaultLayout>{page}</DefaultLayout>
  );
};

export default Index;