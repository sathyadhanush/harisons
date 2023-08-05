import {
  Route,
  createHashRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import AppFrame from './AppFrame';

const router = createHashRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<AppFrame />}>
        <Route index lazy={() => import('./home/index')} />
      </Route>
    </Route>,
  ),
);

export default router;
