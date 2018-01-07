import { Observable } from 'rxjs/Observable'

const fruitsObservable = Observable.create(observer => {
  observer.next('🍎')
  observer.complete()
})
