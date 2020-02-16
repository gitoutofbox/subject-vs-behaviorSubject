import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  private subject: Subject<any>;
  private behaviorSubject: BehaviorSubject<any>;  

  constructor() {
    this.subject = new Subject<any>();
    this.behaviorSubject = new BehaviorSubject<string>('Hello');
  }
  
  sendMessage (message:string) {
    console.log('sending message', message);
    this.subject.next(message);    
    this.behaviorSubject.next(message);    
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  getMessageBehavior(): Observable<any> {
    return this.behaviorSubject.asObservable();
  }
  
}
