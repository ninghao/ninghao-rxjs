import { Observable } from 'rxjs/Observable'

const fruitsObservable = Observable.create(observer => {
  observer.next('🍎')
  observer.next('🍊')
  // observer.error(new Error('😭 someone took my fruit.'))
  setTimeout(() => {
    observer.next('🍋')
    observer.complete()
  }, 2000)
})

const fruitsObserver = {
  next: data => console.log(data),
  error: error => console.log(error.message),
  complete: () => console.log('done!')
}

console.log('--- before subscribe ---')
const fruitsSubscription = fruitsObservable.subscribe(fruitsObserver)
console.log('--- after subscribe ---')

setTimeout(() => {
  fruitsSubscription.unsubscribe()
}, 1000)
