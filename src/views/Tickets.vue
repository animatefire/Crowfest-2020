<script type='text/javascript' src='../../config.js'></script>

<template>
  <div id=eventbrite-widget-container + EVENTBRIGHT_ID />
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
          const EVENTBRIGHT_ID = config.MY_ID;
          // Required
          widgetType: 'checkout',
          eventId: EVENTBRIGHT_ID,
          iframeContainerId: 'eventbrite-widget-container'+EVENTBRIGHT_ID,

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
