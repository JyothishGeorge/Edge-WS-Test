"use strict";
var edge = require('edge');

var ws = edge.func("WsProxy.cs");

ws( { wsdl: "http://wsf.cdyne.com/WeatherWS/Weather.asmx?wsdl",
	service: "Weather", 
	method: "GetCityForecastByZIP", 
	parameters: ["33431"]}, 

	function (err, result) {
	    if (err) throw err;
	    console.log(result);
});