import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./layout/Layout";
import Router from "./route/Router";
import "../styles.css";

export default function App() {
  return (
    <>
      {/* <ErrorBoundary> */}
      <Layout />
      <main>
        <Router />
      </main>
      {/* </ErrorBoundary> */}
    </>
  );
}
