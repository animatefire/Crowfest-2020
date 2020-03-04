let initialized = !!window.EBWidgets;
//!! returns a truthy value...
let resolveInitPromise;
let rejectInitPromise;
// This promise handles the initialization
// status of the google maps script.
const initPromise = new Promise((resolve, reject) => {
  resolveInitPromise = resolve;
  rejectInitPromise = reject;
});

export default function init() {
  // If Google Maps already is initialized
  // the `initPromise` should get resolved
  // eventually.
  if (initialized) return initPromise;

  initialized = true;
  // The callback function is called by
  // the Google Maps script if it is
  // successfully loaded.

  const CALLBACK_NAME = 'exampleCallback';

  window[CALLBACK_NAME] = () => resolveInitPromise(window.EBWidgets);

  // We inject a new script tag into
  // the `<head>` of our HTML to load
  // the Google Maps script.

  const script = document.createElement('script');
  script.async = true;
  script.defer = true;
  script.src = 'https://www.eventbrite.com/static/widgets/eb_widgets.js';
  script.onerror = rejectInitPromise;
  document.querySelector('head').appendChild(script);

  return initPromise;
}
