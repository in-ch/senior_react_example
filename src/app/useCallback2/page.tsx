"use client";

import React, { useCallback } from 'react';

const MyBigList = ({ term, onItemClick }) =>  {
  const items = getItems(term);
  const map = (item) => <div onClick={onItemClick}>{item}</div>;
  return <div>{items.map(map)}</div>;
}
export default React.memo(MyBigList);



export const MyParent = ({ term }) => {
  const onItemClick = useCallback(event => {
    console.log('You clicked ', event.currentTarget);
  }, [term]);

  return (
    <MyBigList
      term={term}
      onItemClick={onItemClick}
    />
  );
}