// Задача на rxjs чтобы показывать нотификейшен 3 секунды и он пропадал
import {
  Subject,
  delay,
  distinct,
  distinctUntilChanged,
  pairwise,
  concatMap,
  tap,
  of,
  mergeMap,
} from "rxjs";

class Notification {
  q = new Subject();

  constructor() {
    this.$q = this.q
      .pipe(
        distinctUntilChanged(),
        concatMap((n) =>
          of(n).pipe(
            tap((n) => this.show(n)),
            delay(3000),
            tap((n) => this.push(null))
          )
        )
      )
      .subscribe();
  }

  push(n) {
    this.q.next(n);
  }

  show(n) {
    console.log(n);
  }
}

const n = new Notification();

n.push({
  title: "ReferenceError: Subject1 is not defined",
});
n.push({
  title: "ReferenceError: Subject2 is not defined",
});

n.push({
  title: "ReferenceError: Subject3 is not defined",
});
