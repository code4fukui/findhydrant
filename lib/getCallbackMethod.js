export const getCallbackMethod = function(callback) {
  const scallback = "_cb_" + (Math.random() * 1000000 >> 0);
	window[scallback] = function(data) {
		window[scallback] = null;
		callback(data);
	};
	return scallback;
};
