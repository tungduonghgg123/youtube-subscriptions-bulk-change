function disableOption(option) {
    return new Promise(resolve => {
      setTimeout(() => {
        option.click();
        const options = document.getElementsByClassName(
          'style-scope ytd-menu-popup-renderer',
        );
        // options[3] = turn off
        // optionns[2] = only personalized videos
        // options [1] = all videos
        const disableOptions = options[3];
        disableOptions.click();
        resolve();
      }, 1000);
    });
  }

(async function() {
  const list = document.getElementsByClassName(
    'style-scope ytd-subscription-notification-toggle-button-renderer style-text size-default',
  );
  for (let i = 1; i < list.length; i++) {
    await disableOption(list[i]);
  }
})();
