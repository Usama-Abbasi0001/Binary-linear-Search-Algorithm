import { useState } from "react"; 

function linearSearch() {
  const [array] = useState(() => {
    const sortedArray = Array.from({ length: 1000 }, (_, i) => i * 1);
    return sortedArray;
  });
  const [target, setTarget] = useState(1000);
  const [result, setResult] = useState(null);
  const [steps, setSteps] = useState(0);

  const linearSearch = (array, target) => {
    let steps = 0;
    for (let i = 0; i < array.length; i++) {
      steps++;
      if (array[i] === target) {
        setSteps(steps);
        return i;
      }
    }
    setSteps(steps);
    return -1;
  };

  const handleSearch = () => {
    const searchResult = linearSearch(array, target);
    setResult(searchResult);
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Linear Search in React.js</h1>
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-1/2">
        <label className="mb-2 w-full">
          <span className="block text-gray-700">Search:</span>
          <input
            type="number"
            value={target}
            onChange={(e) => setTarget(Number(e.target.value))}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </label>
        <button
          onClick={handleSearch}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Search
        </button>
        {result !== null && (
          <div className="mt-4 w-full text-center">
            {result === -1 ? (
              <p className="text-red-500">Element not present in array</p>
            ) : (
              <p className="text-green-500">Element found at index: {result}</p>
            )}
            <p className="mt-2">Number of steps: {steps}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default linearSearch;
