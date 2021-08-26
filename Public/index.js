// https://stackoverflow.com/a/55926067
// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo#examples
// https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers#using_onevent_properties
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

const btn = document.querySelector("button#scroll-top-button");

function smoothScroll() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

btn.onclick = smoothScroll;
