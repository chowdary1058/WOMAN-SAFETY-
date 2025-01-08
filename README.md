Women's Safety App
A simple web application designed to help women in unsafe situations. The app allows users to double-tap the screen to trigger an alert that gathers geolocation data and simulates sending an emergency message to nearby devices and authorities.

Features
Double-tap for Help: Users can double-tap anywhere on the designated area to trigger an emergency alert.
Geolocation Tracking: Retrieves the user's current location (latitude and longitude).
Mock Nearby Devices Detection: Simulates discovering nearby devices (phone numbers and IP addresses).
Simulated Alert Sending: Logs alert data to the console, mimicking communication with emergency services or nearby users.
Technologies Used
HTML: For structuring the app interface.
CSS: For styling the app.
JavaScript: For implementing app logic, including event handling and geolocation functionality.
Setup and Usage
Clone or Download the Repository:

bash
Copy code
git clone https://github.com/your-repo/womens-safety-app.git
Open the App:

Open the index.html file in a web browser.
Test the Features:

Double-tap on the red area labeled "Double-tap for Help" to trigger the alert.
Allow location permissions when prompted by the browser.
Open the browser's Developer Tools (Console) to view the simulated alert data.
Folder Structure
graphql
Copy code
womens-safety-app/
│
├── index.html      # Main HTML file
├── styles.css      # Styling for the app
└── script.js       # JavaScript for app functionality
How It Works
Double-Tap Detection:

The app listens for click and touchend events to detect double-tap gestures.
If two taps occur within 300ms, an alert is triggered.
Geolocation:

The app uses the browser's navigator.geolocation API to get the user's location.
The location data (latitude and longitude) is included in the alert.
Mock Nearby Devices:

Nearby devices are simulated using a mock function. In a real app, this would use Bluetooth, Wi-Fi, or other protocols.
Simulated Alert Sending:

Alert data is logged to the console to simulate sending it to emergency services or nearby users.
Future Enhancements
Real Device Discovery: Use Bluetooth or Wi-Fi APIs to detect actual nearby devices.
Backend Integration: Send alert data securely to a server and notify emergency contacts or authorities.
Push Notifications: Notify nearby app users in real time.
Mobile App Support: Convert the app into a mobile app using frameworks like Flutter or React Native.
Disclaimer
This app is a proof of concept and is not intended for real-world emergency use without further development and integration. Handling sensitive data like geolocation requires compliance with privacy laws and security standards.

License
This project is licensed under the MIT License.











