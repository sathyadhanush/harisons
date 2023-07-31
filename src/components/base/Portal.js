import { createPortal } from 'react-dom';

const container = document.createElement('div');
container.id = 'ui-portal';
document.body.appendChild(container);

function Portal({ children }) {
  return createPortal(children, container);
}

export default Portal;
