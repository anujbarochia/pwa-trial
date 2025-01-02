if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/js/service-worker.js')
        .then((registration) => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch((error) => {
          console.log('ServiceWorker registration failed: ', error);
        });
    });
  }
  
  let deferredPrompt;
  
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event for triggering later
    deferredPrompt = e;
  
    // Optionally, show a custom UI to notify the user about installation
    const installButton = document.getElementById('install-button');
    installButton.style.display = 'block'; // Show the install button
  
    // Add a click event listener to trigger the prompt
    installButton.addEventListener('click', () => {
      showInstallPrompt();
    });
  });
  
  function showInstallPrompt() {
    if (deferredPrompt) {
      // Show the install prompt
      deferredPrompt.prompt();
  
      // Wait for the user's response
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null; // Reset the deferredPrompt variable
      });
    }
  }
  