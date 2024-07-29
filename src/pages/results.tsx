import React, { ReactElement } from 'react';
import { DefaultLayout } from '@/layouts';
import { ResultsPage } from '@/components/pages';

function Results() {
  return <ResultsPage />;
}

Results.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>{page}</DefaultLayout>
  );
};

export default Results;
