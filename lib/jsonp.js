export const jsonp = function(url) {
  const head = document.getElementsByTagName("head")[0];
  const script = document.createElement("script");
  script.setAttribute("src", url);
  script.setAttribute("type", "text/javascript");
  //	script.setAttribute("id", 'jsonp');
  head.appendChild(script);
};
