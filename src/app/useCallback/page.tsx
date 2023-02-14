"use client";

import { useCallback, useEffect, useState } from 'react';

interface Props {
  getCount: () => number;
}

const ChildComponent = ({ getCount }: Props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(getCount());
    console.log('랜더링');
  }, [getCount]);

  return <p>{count}</p>;
};

const ParentComponent = () => {
  const [dartMode, setDartMode] = useState(false);

  const returnCount = (): number => {
    return 1000;
  };

  const getCount = useCallback(() => {
   return 1000;
  }, []);

  return (
    <>
      <p>다크 모드 : {dartMode ? '다크 모드' : '그냥 모드'}</p>
      <input type="button" onClick={() => setDartMode(!dartMode)} />
      {/* <ChildComponent getCount={returnCount}></ChildComponent>  */}
      <ChildComponent getCount={getCount}></ChildComponent>
    </>
  );
};

export default ParentComponent;