class Remote {
  /**
   * Creates a remote object
   * @param {string} url 
   * @param {string} method 
   * @param {string} body 
   */

  /**
   * Creates a promise to interact with server
   */
  static createPromise(url, method='get', body='') {
    return fetch(url, {
      method: method,
      body: body,
      headers: {
        "Content-type": "application/json"
      },
      mode: 'cors'
    });
  };
}

module.exports = Remote;