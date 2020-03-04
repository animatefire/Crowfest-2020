<template>
  <header class="header">
    <button
      class="btn btn--color-primary btn--center"
      id="eventbrite-widget-modal-trigger-92799043437"
      type="button"
    >
      Get Tickets Now
    </button>
  </header>
</template>

<script>
  import eventbrite from '../assets/utils/eventbrite';
  var exampleCallback = function() {
    console.log('Order complete!');
  };

  window.EBWidgets.createWidget({
    widgetType: 'checkout',
    eventId: '92799043437',
    modal: true,
    modalTriggerElementId: 'eventbrite-widget-modal-trigger-92799043437',
    onOrderComplete: exampleCallback
  });

  export default {
    computed: {
      username() {
        // We will see what `params` is shortly
        return this.$route.params.username;
      }
    },
    methods: {
      goBack() {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/');
      }
    }
  };
</script>
