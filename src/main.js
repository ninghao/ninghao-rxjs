import { Observable } from 'rxjs/Observable'

const fruitsObservable = Observable.create(observer => {
  observer.next('🍎')
  observer.next('🍊')
  observer.error(new Error('😭 someone took my fruit.'))
  observer.complete()
  observer.next('🍋')
})

const fruitsObserver = {
  next: data => console.log(data),
  error: error => console.log(error.message),
  complete: () => console.log('done!')
}

fruitsObservable.subscribe(fruitsObserver)
