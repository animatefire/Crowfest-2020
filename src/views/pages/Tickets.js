let Tickets = {
  render: () => {
    const markup = `
    
      <section class="content--tickets">
        <div id="example-widget-trigger"></div>

        <script src="https://www.eventbrite.com/static/widgets/eb_widgets.js"></script>
        
        <script type="text/javascript">
          var exampleCallback = function() {
            console.log("Order complete!");
          };
        
          window.EBWidgets.createWidget({
            widgetType: "checkout",
            eventId: "92799043437",
            iframeContainerId: "example-widget-trigger",
            iframeContainerHeight: 425,
            onOrderComplete: exampleCallback
          });
        </script>
      </section>
    
    `;
    return markup;
  }
};

export default Tickets;
