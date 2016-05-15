import { Injectable } from '@angular/core';


@Injectable()
export class SmoothScroll {
  win;
  private offSet:number;

  constructor() {
    this.win = window;
  }
  scrollTo(yPoint: number, duration: number) {
    setTimeout(() => {
      this.win.scrollTo(0, yPoint)
    }, duration);
    return;
  }
  smoothScroll(eID) {

    function poll(fn, callback, errback, timeout, interval) {
      var endTime = Number(new Date()) + (timeout || 10000);
      interval = interval || 1000;

      (function p() {
        // If the condition is met, we're done!
        if(fn()) {
          callback();
        }
        // If the condition isn't met but the timeout hasn't elapsed, go again
        else if (Number(new Date()) < endTime) {
          setTimeout(p, interval);
        }
        // Didn't match and too much time, reject!
        else {
          errback(new Error('timed out for ' + fn + ': ' + arguments));
        }
      })();
    }

    var _self = this;
// Usage:  ensure element is visible
    poll(
      function() {
        return document.getElementById(eID);
      },
      function() {
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
          _self.win.scrollTo(0, stopY);
          return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 100);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
          for (var i = startY; i < stopY; i += step) {
            _self.scrollTo(leapY, timer * speed);
            leapY += step;
            if (leapY > stopY) leapY = stopY;
            timer++;
          }
          return;
        }
        for (var i = startY; i > stopY; i -= step) {
          _self.scrollTo(leapY, timer * speed);
          leapY -= step;
          if (leapY < stopY) leapY = stopY;
          timer++;
        }
      },
      function() {
        // Error, failure callback
      }
    );

  }
}

function currentYPosition() {
  // Firefox, Chrome, Opera, Safari
  if (self.pageYOffset) return self.pageYOffset;
  // Internet Explorer 6 - standards mode
  if (document.documentElement && document.documentElement.scrollTop)
    return document.documentElement.scrollTop;
  // Internet Explorer 6, 7 and 8
  if (document.body.scrollTop) return document.body.scrollTop;
  return 0;
}

function elmYPosition(eID) {
  var elm = document.getElementById(eID);
  console.log('document.documentElement.clientHeight', document.documentElement.clientHeight);
  console.log('elm.clientHeigh', elm.clientHeight);
  console.log('elm.getBoundingClientRect().top', elm.getBoundingClientRect().top);
  console.log('pageYOffset', pageYOffset);
  var y = elm.getBoundingClientRect().top + pageYOffset - (document.documentElement.clientHeight - elm.clientHeight)/2;
  console.log('y', y);
  return y;
}