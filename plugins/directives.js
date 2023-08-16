export default defineNuxtPlugin(({vueApp}) => {

    vueApp.directive('randomColor', {
      mounted(el, binding) {
        el.style.color = '#' + Math.random().toString().slice(2, 8)
      },
    });
  });