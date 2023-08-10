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
      {/* <Route index lazy={() => import('./home/Home')} /> */}
      {/* <Route path=":id" lazy={() => import('./home/Home')} />
      <Route path="*" lazy={() => import('./home/Home')} /> */}
    </Route>,
  ),
);

export default router;
