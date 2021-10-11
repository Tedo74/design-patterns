interface IObservable {
  subscribe(observer: ISubscriber): void;
  unsubscribe(observer: ISubscriber): void;
  notify(): void;
}

class Publisher implements IObservable {
  news: string[] = ['some news', 'good news'];
  observers: ISubscriber[] = [];

  constructor() {
    setTimeout(() => {
      this.notify();
    }, 2500);
  }

  subscribe(observer: ISubscriber) {
    this.observers.push(observer);
  }
  unsubscribe(observer: ISubscriber) {
    this.observers = this.observers.filter(
      (currentObserver) => currentObserver !== observer
    );
  }
  notify() {
    this.getNews();
  }

  getNews() {
    this.observers.forEach((obs) => {
      for (let i = 0; i < this.news.length; i++) {
        setTimeout(() => {
          obs.update(this.news[i]);
          console.log('Send to: ' + obs.userName);
        }, 1000 * (i + 1));
      }
    });
  }
}

interface ISubscriber {
  userName: string;
  update(news: string): void;
}

class User implements ISubscriber {
  publisher: IObservable;
  userName: string;
  constructor(subject: IObservable, name: string) {
    this.publisher = subject;
    this.publisher.subscribe(this);
    this.userName = name;
  }

  update(news: string): void {
    console.log(news);
  }
}

const newspaper = new Publisher();
const userReader = new User(newspaper, 'Pesho');
const userReader2 = new User(newspaper, 'Gosho');
