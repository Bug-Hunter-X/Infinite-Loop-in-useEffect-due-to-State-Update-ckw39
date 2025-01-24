# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: causing an infinite loop by updating the state variable within the `useEffect`'s callback function, leading to an uncontrolled cycle of updates.

## Bug Description:
The `useEffect` hook is designed to perform side effects based on changes in state or props. However, if the state variable is modified within the `useEffect` callback without proper condition checks or dependency array management, it creates a loop.  This example showcases an infinite loop because `setCount(count + 1)` within the `useEffect` causes a re-render, leading to the `useEffect` being called again and again.