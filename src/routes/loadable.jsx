import { lazy, Suspense } from "react";
// import LoadingScreen from "../components/Loading";

const Loadable = ({ loader }) => {
  const Component = lazy(loader);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

export default Loadable;
