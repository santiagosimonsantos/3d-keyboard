"use client"
import React, { Suspense, useEffect } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function App() {


    useEffect(() => {
        function handleKeyDown(e) {
          e.preventDefault();
        console.log(e.key + " " + e.keyCode);
        }

        document.addEventListener('keydown', handleKeyDown);

        // Don't forget to clean up
        return function cleanup() {
          document.removeEventListener('keydown', handleKeyDown);
        }
      }, []);

  const handleKeyDown = (e) => {
    console.log(e.key);
    if (e.key === "Tab") {
      e.preventDefault();
      console.log("Se presionó la tecla tab");
      // Aquí puedes hacer lo que quieras cuando se presiona la tecla tab
    }
  };

  return (
    <main>
    <Suspense fallback={<div>Loading...</div>}>
        <Spline
        scene="https://prod.spline.design/p4yG3aeHgug7eZIF/scene.splinecode"
        onKeyDown={(e) => handleKeyDown(e)}
        className=' max-h-screen bg-zinc-800'
        />
    </Suspense>
    </main>
  );
}
