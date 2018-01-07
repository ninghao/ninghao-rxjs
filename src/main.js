import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/from'

const observable = Observable.from(['🍎', '🍊', '🍋'])
observable.subscribe(data => console.log(data))
