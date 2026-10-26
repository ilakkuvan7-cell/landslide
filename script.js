function switchScreen(screenId) {
    document.querySelectorAll('.app-screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

const emergencyDetails = {
    Fire: {
        title: "Fire Emergency Protocol",
        body: "• Stay low to avoid heavy smoke inhalation.<br>• Cover mouth with a damp cloth.<br>• Nearest Fire Dispatch Unit: Sector 4 Station (Dispatched).<br>• Estimated Response Time: 4 mins."
    },
    Flood: {
        title: "Flood Evacuation Alert",
        body: "• Move immediately to higher ground levels.<br>• Avoid walking or driving through fast-flowing flood waters.<br>• Nearest High Ground Camp: Plot #42 Ridge.<br>• Water Level Status: Rising (+1.2ft)."
    },
    Earthquake: {
        title: "Earthquake Safety Guide",
        body: "• Drop, Cover, and Hold On under sturdy furniture.<br>• Stay away from glass windows and loose outer walls.<br>• Seismic tremor magnitude recorded: 4.2 Richter scale."
    },
    Crime: {
        title: "Security Threat Protocol",
        body: "• Lock all entry points and stay out of sight.<br>• Local patrol unit alerted with your live GPS coordinates.<br>• Police Control Room Connected."
    },
    Accident: {
        title: "Road Accident Assistance",
        body: "• Keep victims still and check for breathing passages.<br>• Ambulance Dispatch Unit #108 notified of Sector 4 junction crash.<br>• Traffic police diverted."
    },
    Landslide: {
        title: "SlopeSafe Landslide Protocol",
        body: "• Move away promptly from steep slopes and debris paths.<br>• Listen for unusual cracking sounds or rumbling.<br>• Soil Saturation Index: Critical.<br>• Evacuation Route: Clear via North Ridge Trail."
    }
};

function triggerEmergencyDetail(type) {
    const data = emergencyDetails[type];
    if (data) {
        document.getElementById('modalTitle').innerText = data.title;
        document.getElementById('modalBody').innerHTML = data.body;
        document.getElementById('active-emergency-text').innerText = type + " emergency active";
    }
    document.getElementById('infoModal').classList.add('open');
}

function closeModal() {
    document.getElementById('infoModal').classList.remove('open');
}

function confirmEmergencySOS() {
    closeModal();
    switchScreen('screen-sos-active');
}