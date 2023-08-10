const { pathname } = window.location;
// const pathname = window.location.pathname.split('/')[0];
// console.log('pathname', pathname);
// location.pathname.split('/')
// const routeList = ['/parts-supplies', '/spm', '/injection-molds', '/blow-molds', '/stamping-parts'];
const routeList = ['/cnc-machining'];
if (routeList.includes(pathname)) {
  import('./app/screens/productList/index');
} else {
  import('./app/index');
}
// import('./app/index');
