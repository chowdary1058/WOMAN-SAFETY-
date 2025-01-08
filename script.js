let lastTap = 0;

// Detecting both touch and click events for compatibility
document.getElementById('alertArea').addEventListener('click', handleTap);
document.getElementById('alertArea').addEventListener('touchend', handleTap);

function handleTap() {
    const currentTime = new Date().getTime();
    const tapGap = currentTime - lastTap;

    // Detect double-tap (time gap < 300ms)
    if (tapGap < 300 && tapGap > 0) {
        console.log("Double-tap detected.");
        triggerSafetyAlert();
    } else {
        console.log("Single tap detected. Waiting for double-tap.");
    }
    lastTap = currentTime;
}

// Trigger safety alert
async function triggerSafetyAlert() {
    alert("Safety Alert Triggered! Gathering information...");

    try {
        // Get geolocation
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser.");
            return;
        }

        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;

            // Simulate sending the data
            const alertData = {
                location: { latitude, longitude },
                timestamp: new Date().toISOString(),
                nearbyDevices: await mockGetNearbyDevices(),
            };

            console.log("Sending alert data:", alertData);

            // Simulate sending data to server (e.g., police station or nearby users)
            await mockSendAlert(alertData);

            alert("Alert sent successfully!");
        });
    } catch (error) {
        console.error("Error triggering safety alert:", error);
        alert("Failed to send alert.");
    }
}

// Mock function to get nearby devices (this would require backend/server implementation)
async function mockGetNearbyDevices() {
    // Simulating nearby devices (this requires Bluetooth, WiFi, or specific APIs in real implementations)
    return [
        { phone: "123-456-7890", ip: "192.168.1.2" },
        { phone: "987-654-3210", ip: "192.168.1.3" },
    ];
}

// Mock function to send alert
async function mockSendAlert(data) {
    console.log("Mock sending alert to server...");
    return new Promise((resolve) => setTimeout(resolve, 1000));
}
