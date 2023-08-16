"use strict";

const ANIMATION_DURATION = 2000;

export const windowLoad = () => {
  const digitsCounterInit = (digitsCountersItems) => {
    let digitsCounters = digitsCountersItems
      ? digitsCountersItems
      : document.querySelectorAll("[data-digits-coutter]");

    if (digitsCounters) {
      digitsCounters.forEach((digitsCounter) => {
        digitsCountersAnimate(digitsCounter);
      });
    }
  };

  const digitsCountersAnimate = (digitsCounter) => {
    let startTimestamp = null;

    const startValue = parseInt(digitsCounter.innerHTML);
    const startPosition = 0;

    const step = (timestamp) => {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTimestamp) / ANIMATION_DURATION,
        1
      );
      digitsCounter.innerHTML = Math.floor(
        progress * (startPosition + startValue)
      );

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  let options = {
    threshold: 0.8,
  };

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const targetElement = entry.target;
        const digitsCountersItems = targetElement.querySelectorAll(
          "[data-digits-coutter]"
        );

        if (digitsCountersItems.length) {
          digitsCounterInit(digitsCountersItems);
        }

        observer.unobserve(targetElement);
      }
    });
  }, options);

  let sections = document.querySelector(".revolutionary_editor");
  observer.observe(sections);
};
