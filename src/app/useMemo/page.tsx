"use client";

import { NextPage } from "next";
import { useEffect, useMemo, useState } from "react";

enum FOOD_ENUM {
    fast_food = 'FAST_FOOD',
    korean = 'KOREAN',
    japanese = 'JAPANESE',
    chinese = 'CHINESE_FOOD'
}

interface FoodType  {
    id: number,
    name: string,
    type: FOOD_ENUM;
}

const Index:NextPage = () => {
    const [number, setNumber] = useState(1);
    const foods = useMemo(() => {
        return [
            {
                id: 0,
                name: '김밥',
                type: FOOD_ENUM.korean,
            },
            {
                id: 1,
                name: '김치찌개',
                type: FOOD_ENUM.korean,
            },
            {
                id: 2,
                name: '된장찌개',
                type: FOOD_ENUM.korean,
            },
            {
                id: 3,
                name: '돈부리',
                type: FOOD_ENUM.japanese,
            },
            {
                id: 4,
                name: '초밥',
                type: FOOD_ENUM.japanese,
            },
            {
                id: 5,
                name: '짜장면',
                type: FOOD_ENUM.chinese,
            }, 
            {
                id: 6,
                name: '탕수육',
                type: FOOD_ENUM.chinese,
            },
            {
                id: 7,
                name: '피자',
                type: FOOD_ENUM.fast_food,
            },
            {
                id: 8,
                name: '햄버거',
                type: FOOD_ENUM.fast_food,
            },
        ]
    }, []);
    

    useEffect(() => {
        console.log('foods 재 호출');
    },[foods]);
    return(
        <>
            <h2>숫자 증가</h2>
            <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
            <h2>객체 표시</h2>
            {
                foods && foods.map((food:FoodType) => 
                    <p key={`food-${food.id}`}>[{food.type}] {food.name}</p>
                )
            }
      </>
    );
};

export default Index;