import { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Page d-accueil</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Le compte est à {count}
        </button>
      </div>
    </>
  );
}

export default Home;
