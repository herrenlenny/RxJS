import { combineLatest, interval, Observable } from "rxjs";

var seconds = interval(1000)
var minutes = interval(60000)
var hours = interval(3600000)

combineLatest([seconds, minutes,hours]).subscribe(([second, minut, hour]) => console.log(String(hour) + ":" + String(minut) + ":" + String(second)))
