var exampleCallback = function() {
  console.log('Order complete!');
};

function created() {
  let ckeditor = document.createElement('script');
  ckeditor.setAttribute(
    'src',
    'https://www.eventbrite.com/static/widgets/eb_widgets.js'
  );
  document.head.appendChild(ckeditor);
}
created();
window.EBWidgets.createWidget({
  // Required
  widgetType: 'checkout',
  eventId: '92799043437',
  iframeContainerId: 'eventbrite-widget-container-92799043437',

  // Optional
  iframeContainerHeight: 425, // Widget height in pixels. Defaults to a minimum of 425px if not provided
  onOrderComplete: exampleCallback // Method called when an order has successfully completed
});
