const { pathname } = window.location;
if (pathname === '/services') {
  import('./app/screens/services/index');
} else {
  import('./app/index');
}
