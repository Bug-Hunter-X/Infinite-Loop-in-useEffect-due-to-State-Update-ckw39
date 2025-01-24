```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Only execute this effect once
    const interval = setInterval(() => {
       setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <div>Count: {count}</div>;
}
```