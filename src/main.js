import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/operator/throttleTime'
import 'rxjs/add/operator/debounceTime'

const observable = Observable.fromEvent(
  document.getElementById('search'),
  'keyup'
)
// .throttleTime(1000)
.debounceTime(1000)

observable.subscribe(data => console.log('searching...'))
