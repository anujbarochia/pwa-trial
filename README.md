# Digital Governance System (DGS)

This is a Progressive Web App (PWA) project named Digital Governance System (DGS). The project is designed to provide a seamless and responsive user experience across various devices.

## Project Structure

- **index.html**: The main HTML file that includes the structure of the web app.
- **css/styles.css**: The CSS file for styling the web app.
- **js/main.js**: The main JavaScript file that registers the service worker.
- **js/service-worker.js**: The service worker file that handles caching and offline functionality.
- **manifest.json**: The web app manifest file that provides metadata about the app, such as its name, icons, and theme colors.
- **images/**: Directory containing icons and splash images for the PWA.
- **README.md**: This file.

## Service Worker

The service worker is implemented in [js/service-worker.js](js/service-worker.js). It handles the following events:
- `install`: Caches the specified resources.
- `fetch`: Serves cached resources when available, falling back to the network when not.
- `activate`: Cleans up old caches.

## Manifest

The web app manifest is defined in [manifest.json](manifest.json). It includes the app's name, short name, start URL, display mode, background color, theme color, and icons.

## Icons and Splash Images

Generated all icons and splash images with the help of [PWA Asset Generator](https://github.com/elegantapp/pwa-asset-generator).

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository.
2. Open `index.html` in your browser to view the app.
3. Ensure you have a web server running to register the service worker.

## License

This project is licensed under the MIT License.