import { useRoutes } from 'react-router-dom';
import router from './router';
import { Suspense } from 'react';

const App = () => {
  const outlet = useRoutes(router);
  return (
    <>
      <Suspense>
        {outlet}
      </Suspense>
    </>
  );
};

export default App;
