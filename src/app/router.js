/* eslint-disable import/no-cycle */
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
        <Route index lazy={() => import('./screens/productList/ProductList')} />
      </Route>
    </Route>,
  ),
);

export default router;
