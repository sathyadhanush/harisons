const { pathname } = window.location;
const routeList = ['/parts-supplies', '/spm', '/injection-molds', '/blow-molds', '/stamping-parts'];
if (routeList.includes(pathname)) {
  import('./app/screens/productList/index');
} else {
  import('./app/index');
}
