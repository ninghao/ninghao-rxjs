import { Observable } from 'rxjs/Observable'

const fruitsObservable = Observable.create(observer => {
  observer.next('🍎')
  observer.next('🍊')
  observer.complete()
})

const fruitsObserver = {
  next: data => console.log(data),
  complete: () => console.log('done!')
}

fruitsObservable.subscribe(fruitsObserver)
