import { toast } from 'react-hot-toast';

function notifySuccess(message) {
  toast(message);
}

function notifyError(message) {
  toast(message);
}

export { notifySuccess, notifyError };
