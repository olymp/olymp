export default (url, timeout = 60 * 1000) => {
  return new Promise((yay, nay) => {
    const destroy = () => {
      clearTimeout(timeoutHandle);
      window.iframeDidLoad = null;
      document.body.removeChild(iframe);
    };

    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    window.iframeDidLoad = () => {
      const href = iframe.contentWindow.location.href;
      destroy();
      yay(href);
    };
    iframe.setAttribute('onLoad', 'iframeDidLoad();');
    iframe.setAttribute('src', url);

    const timeoutHandle = setTimeout(() => {
      destroy();
      nay();
    }, timeout);
  });
};
