import { Suspense } from "react";
import User from "../components/User-Use-Hook";
import ErrorBoundary from "../error-boundary";

export const App = () => {
  return (
    <>
      <h1>Use hook</h1>

      <ErrorBoundary fallback={<p>Error!</p>}>
        <Suspense fallback={<p>Loading...</p>}>
          <User />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
