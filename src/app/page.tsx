import React from 'react';
import { Suspense } from 'react';

import Banner from '@/components/Banner'

import Card from '@/components/Card'
import LibrarySkeleton from '@/components/LibrarySkeleton'


const page = () => {
  return (
    <>

    <Banner />
    <Suspense fallback={<LibrarySkeleton />}>
      <Card />
    </Suspense>
    

    



    </>
  );
};

export default page;