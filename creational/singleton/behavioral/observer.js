"use strict";
class Publisher {
    constructor() {
        this.news = ['some news', 'good news'];
        this.observers = [];
        setTimeout(() => {
            this.notify();
        }, 2500);
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        this.observers = this.observers.filter((currentObserver) => currentObserver !== observer);
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
class User {
    constructor(subject, name) {
        this.publisher = subject;
        this.publisher.subscribe(this);
        this.userName = name;
    }
    update(news) {
        console.log(news);
    }
}
const newspaper = new Publisher();
const userReader = new User(newspaper, 'Pesho');
const userReader2 = new User(newspaper, 'Gosho');
