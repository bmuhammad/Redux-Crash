import { useState } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/counterSlice";
import { useGetAllPostsQuery, useGetPostbyIdQuery } from "../redux/postSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  console.log(useGetAllPostsQuery());

  const { data, isLoading, isError } = useGetPostbyIdQuery(5);
  return (
    <div>
    
      <h1> Count is {count} </h1>
      <button onClick={() => dispatch(increment())}> Increment</button>
      <button onClick={() => dispatch(decrement())}> Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(20))}>
        {" "}
        Increment by amount
      </button>
    </div>
  );
}
