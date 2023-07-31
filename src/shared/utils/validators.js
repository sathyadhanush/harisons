function isEmail(text) {
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(text);
}

function errorMessage(error) {
  const { responseText } = error.response.request;
  if (responseText) {
    try {
      return (JSON.parse(responseText).error.message);
    } catch { /* empty */ }
  }
}

export { isEmail, errorMessage };
