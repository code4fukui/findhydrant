import { getCallbackMethod } from "./getCallbackMethod.js";
import { jsonp } from "./jsonp.js";

// odp
export const querySPARQL = function(q, callback) {
	var baseurl = "https://sparql.odp.jig.jp/data/sparql";
	var url = baseurl + "?query=" + encodeURIComponent(q) + "&output=json";
	url += "&callback=" + getCallbackMethod(callback);
	jsonp(url);
};
export const queryItemSPARQL = function(uri, callback) {
	querySPARQL("select * { <" + uri + "> ?p ?o }", callback);
};
