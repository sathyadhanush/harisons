const { pathname } = window.location;

if (pathname === '/parts-supplies') {
  import('./app/screens/parts-supplies/index');
} else {
  import('./app/index');
}
