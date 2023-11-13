"use client"
import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function App() {
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
