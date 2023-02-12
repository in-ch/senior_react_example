"use client";

import { NextPage } from 'next';
import { useMemo, useState } from 'react';

const expensiveCalculation = (num:number) => {
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

const Index: NextPage = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  // const calculation = expensiveCalculation(count); // (1)
  const calculation = useMemo(() => expensiveCalculation(count), [count]); // (2)

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => {
        return [...t, '새로운 할일'];
    });
  };

  return (
    <div>
      <div>
        <h2>할 일</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>할 일 더하기</button>
      </div>
      <div>
        숫자: {count}
        <button onClick={increment}>+</button>
        <h2>계산 결과</h2>
        {calculation}
      </div>
    </div>
  );
};

export default Index;