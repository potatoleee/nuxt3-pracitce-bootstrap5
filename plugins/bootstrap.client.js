import * as bootstrap from 'bootstrap';
const { Modal, Collapse } = bootstrap;

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      Modal,
      Collapse
    }
  };
});
