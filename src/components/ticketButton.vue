<template>
  <button
    class="btn btn--color-primary btn--center"
    id="eventbrite-widget-modal-trigger-92799043437"
    type="button"
  >
    Tickets
  </button>
</template>

<script>
  import eventbrite from '../assets/utils/eventbrite';

  const exampleCallback = function() {
    console.log('Order complete!');
  };

  const checkout = window.EBWidgets.createWidget({
    widgetType: 'checkout',
    eventId: '92799043437',
    modal: true,
    modalTriggerElementId: 'eventbrite-widget-modal-trigger-92799043437',
    onOrderComplete: exampleCallback
  });

  export default {
    eventbrite,
    checkout
  };
</script>
<style scoped lang="scss"></style>
