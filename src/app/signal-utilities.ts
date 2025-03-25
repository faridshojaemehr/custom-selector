import { Signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';

export function debounceSignal<T>(signal: Signal<T>, delay: number) {
  let debounceObservable$ = toObservable(signal).pipe(debounceTime(delay));
  return toSignal(debounceObservable$);
}
