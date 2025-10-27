import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const BookPage = lazy(() => import("./pages/BookPage"));

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<BookPage />} />
          <Route path="/book/:ean" element={<BookPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
