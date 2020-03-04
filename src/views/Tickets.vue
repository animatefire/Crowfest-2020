<template>
  <div id="eventbrite-widget-container-92799043437" />
</template>

<script>
  import eventbrite from '../assets/utils/eventbrite';
  import eventbriteInit from '../assets/utils/eventbriteInit';

  export default {
    name: 'eventbrite',
    async created() {
      try {
        const eventbrite = await eventbriteInit();

        const createWidget = eventbrite.createWidget({
          // Required
          widgetType: 'checkout',
          eventId: '92799043437',
          iframeContainerId: 'eventbrite-widget-container-92799043437',

          // Optional
          iframeContainerHeight: 500 // Widget height in pixels. Defaults to a minimum of 425px if not provided
          //onOrderComplete: exampleCallback // Method called when an order has successfully completed
        });
      } catch (error) {
        console.error(error);
      }
      //createWidget;
    }
  };
</script>
