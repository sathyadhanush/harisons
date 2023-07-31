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
        {/* <Route path="about">
          <Route index lazy={() => import('./about/About')} />
        </Route>
        <Route path="contact">
          <Route index lazy={() => import('./contact/Contact')} />
        </Route>
        <Route path="products">
          <Route index lazy={() => import('./products/Products')} />
        </Route> */}
      </Route>
    </Route>,
  ),
);

export default router;
