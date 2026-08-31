/* Mission data */

const destinations = [
    {
        id: "europa",
        name: "Europa",
        image:
            "https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA01295.jpg",
        imageCredit: "NASA/JPL/University of Arizona",
        alt: "Two global color views of Europa against black space",
        description:
            "An ice-covered moon selected for a short robotic survey of fractured surface terrain.",
        distance: 12480,
        circumference: 9807,
        environment: "Ice / fractured plains",
        basePower: 7,
        baseFlux: 3,
        quantum: true,
        polarity: false,
        relay: true,
        survey: [
            { coordinate: "B2", terrain: "rock" },
            { coordinate: "E2", terrain: "ruins" },
            { coordinate: "C3", terrain: "water" },
            { coordinate: "D3", terrain: "water" },
            { coordinate: "B5", terrain: "grass" },
            { coordinate: "E5", terrain: "grass" }
        ],
        sightings: [
            {
                species: "Glasswing Grazer",
                count: 24,
                sector: "north",
                diet: "Herbivore"
            },
            { species: "Riverback", count: 8, sector: "river", diet: "Herbivore" },
            { species: "Rift Stalker", count: 3, sector: "south", diet: "Carnivore" },
            { species: "Amber Glider", count: 11, sector: "north", diet: "Omnivore" }
        ],
        targetSector: "river",
        targetSpecies: "Riverback"
    },
    {
        id: "mars",
        name: "Mars",
        image:
            "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/mars/downloadable_items/3/7/37983_mars-globe-valles-marineris-enhanced.jpg?crop=faces%2Cfocalpoint&fit=clip&h=1200&w=1200",
        imageCredit: "NASA/JPL-Caltech",
        alt: "Global view of Mars showing Valles Marineris",
        description:
            "A dry survey corridor along the edge of Valles Marineris with several anomalous subsurface readings.",
        distance: 7800,
        circumference: 21344,
        environment: "Dust / canyon terrain",
        basePower: 6,
        baseFlux: 4,
        quantum: false,
        polarity: true,
        relay: true,
        survey: [
            { coordinate: "A2", terrain: "rock" },
            { coordinate: "D2", terrain: "rock" },
            { coordinate: "C3", terrain: "ruins" },
            { coordinate: "F3", terrain: "rock" },
            { coordinate: "B5", terrain: "water" },
            { coordinate: "E5", terrain: "grass" }
        ],
        sightings: [
            { species: "Dust Skimmer", count: 17, sector: "ridge", diet: "Omnivore" },
            {
                species: "Basin Burrower",
                count: 6,
                sector: "basin",
                diet: "Herbivore"
            },
            {
                species: "Redcrest Hunter",
                count: 2,
                sector: "south",
                diet: "Carnivore"
            },
            {
                species: "Canyon Mite",
                count: 41,
                sector: "ridge",
                diet: "Detritivore"
            }
        ],
        targetSector: "basin",
        targetSpecies: "Basin Burrower"
    },
    {
        id: "titan",
        name: "Titan",
        image:
            "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia14/pia14909/PIA14909.jpg?crop=faces%2Cfocalpoint&fit=clip&h=1017&w=993",
        imageCredit: "NASA/JPL-Caltech/Space Science Institute",
        alt: "Titan passing in front of Saturn and its rings",
        description:
            "A hazy outer-system destination where the station has detected unusual activity near a dune field.",
        distance: 18800,
        circumference: 16177,
        environment: "Haze / hydrocarbon dunes",
        basePower: 8,
        baseFlux: 2,
        quantum: true,
        polarity: false,
        relay: true,
        survey: [
            { coordinate: "B1", terrain: "rock" },
            { coordinate: "E2", terrain: "water" },
            { coordinate: "C3", terrain: "grass" },
            { coordinate: "D4", terrain: "ruins" },
            { coordinate: "B5", terrain: "rock" },
            { coordinate: "F5", terrain: "water" }
        ],
        sightings: [
            { species: "Dune Strider", count: 12, sector: "dune", diet: "Omnivore" },
            {
                species: "Methane Floater",
                count: 7,
                sector: "lake",
                diet: "Filter feeder"
            },
            { species: "Haze Finch", count: 28, sector: "north", diet: "Herbivore" },
            {
                species: "Shore Crawler",
                count: 9,
                sector: "lake",
                diet: "Detritivore"
            }
        ],
        targetSector: "dune",
        targetSpecies: "Dune Strider"
    }
];

const ships = [
    {
        id: "scout",
        name: "Scout XR",
        speed: 980,
        energyRate: 0.72,
        powerOffset: -1,
        fluxOffset: 1,
        note: "Lowest energy use"
    },
    {
        id: "voyager",
        name: "Voyager NX",
        speed: 860,
        energyRate: 0.95,
        powerOffset: 0,
        fluxOffset: 0,
        note: "Balanced research vessel"
    },
    {
        id: "titan-hauler",
        name: "Titan Hauler",
        speed: 1120,
        energyRate: 1.28,
        powerOffset: 1,
        fluxOffset: -1,
        note: "Fastest route time"
    }
];

const equipment = [
    {
        id: "vector-boots",
        name: "Vector Boots",
        icon: "VB",
        price: 110,
        category: "mobility",
        summary: "Low-gravity movement system",
        specs: ["Jump assist: +42%", "Magnetic sole lock", "Mass: 3.8 kg"]
    },
    {
        id: "survey-drone",
        name: "Survey Drone",
        icon: "SD",
        price: 145,
        category: "scan",
        summary: "Autonomous terrain scanner",
        specs: ["Range: 4 km", "Flight time: 38 min", "Multispectral camera"]
    },
    {
        id: "hand-scanner",
        name: "Field Scanner",
        icon: "FS",
        price: 90,
        category: "scan",
        summary: "Portable sample analyzer",
        specs: ["Range: 40 m", "Bio / mineral modes", "Mass: 1.2 kg"]
    },
    {
        id: "phase-shield",
        name: "Phase Shield",
        icon: "PS",
        price: 135,
        category: "protection",
        summary: "Single-impact field generator",
        specs: ["One full impact", "Recharge: 6 h", "Auto-deploy sensor"]
    },
    {
        id: "med-pack",
        name: "Med Pack",
        icon: "MP",
        price: 55,
        category: "medical",
        summary: "Compact field medical kit",
        specs: ["Trauma sealant", "Vitals monitor", "Two-use capacity"]
    }
];

const materials = [
    { name: "Ferrite Shard", type: "conductive mineral" },
    { name: "Phase Gel", type: "stabilizing gel" },
    { name: "Biofiber", type: "organic weave" },
    { name: "Coolant Salt", type: "thermal compound" }
];

const battleDeck = [
    { name: "Solar Lance", type: "plasma", power: 7 },
    { name: "Arc Needle", type: "plasma", power: 5 },
    { name: "Cryo Wave", type: "cryo", power: 8 },
    { name: "Frost Byte", type: "cryo", power: 4 },
    { name: "Vine Walker", type: "organic", power: 7 },
    { name: "Spore Titan", type: "organic", power: 5 },
    { name: "Rift Pulse", type: "quantum", power: 8 },
    { name: "Void Prism", type: "quantum", power: 6 }
];

const typeAdvantages = {
    plasma: "organic",
    organic: "cryo",
    cryo: "plasma",
    quantum: "plasma"
};

const terrainLabels = {
    rock: "Rock",
    water: "Water",
    grass: "Vegetation",
    ruins: "Ruins",
    empty: "Unmapped"
};

const temporalSignatures = [
    {
        title: "Fortified stone settlement",
        hint:
            "No electrical grid is visible. Masonry walls, towers, and defensive structures dominate the scan.",
        instruction: "Enter any plausible year between 900 and 1399.",
        valid: (year) => year >= 900 && year < 1400,
        classification: "Medieval fortified settlement",
        image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Morella%2C_Spain._Medieval_Castle._OC.jpg",
        alt: "Medieval stone castle in Morella, Spain",
        credit: "Pabernosmatao / Wikimedia Commons / CC0"
    },
    {
        title: "Early space-age launch complex",
        hint:
            "Large chemical rockets, analog flight computers, and early mission-control systems appear throughout the scan.",
        instruction: "Enter any plausible year from 1950 through 1970.",
        valid: (year) => year >= 1950 && year <= 1970,
        classification: "Early space-age launch infrastructure",
        image:
            "https://www.nasa.gov/wp-content/uploads/2023/03/s69-39529orig.jpg?w=1041",
        alt: "Apollo 11 Saturn V launching from Kennedy Space Center",
        credit: "NASA"
    },
    {
        title: "Dense autonomous megacity",
        hint:
            "Vertical transportation, autonomous vehicles, and unfamiliar energy infrastructure dominate the skyline.",
        instruction: "Enter any plausible future year between 2110 and 2300.",
        valid: (year) => year >= 2110 && year <= 2300,
        classification: "Projected autonomous megacity",
        image:
            "https://images.unsplash.com/photo-1556379092-dca659792591?auto=format&fit=crop&w=1400&q=80",
        alt: "Modern city skyline illuminated at night",
        credit: "Unsplash"
    }
];

const fallbackQuestions = [
    {
        question: "Which planet is the largest in our Solar System?",
        correct_answer: "Jupiter",
        incorrect_answers: ["Mars", "Earth", "Neptune"]
    },
    {
        question: "What gas do plants primarily absorb during photosynthesis?",
        correct_answer: "Carbon dioxide",
        incorrect_answers: ["Oxygen", "Helium", "Nitrogen"]
    },
    {
        question: "What is the name of the galaxy containing our Solar System?",
        correct_answer: "The Milky Way",
        incorrect_answers: ["Andromeda", "Triangulum", "Sombrero"]
    }
];

const reportTemplates = [
    "Field report from [DESTINATION]. Explorer [EXPLORER], aboard the [SHIP], described first contact as [ADJECTIVE]. The confirmed [SPECIES] moved [ADVERB] while [VERBING] near the [NOUN]. A [COLOR] signal appeared shortly after the encounter.[OBSERVATIONS]",

    "Mission Control transmission: the [SHIP] survey at [DESTINATION] has confirmed [SPECIES] activity. Explorer [EXPLORER] reported a [ADJECTIVE] encounter. The organism moved [ADVERB] while [VERBING] near the [NOUN]. Instruments also recorded a [COLOR] signal.[OBSERVATIONS]",

    "Expedition note — [DESTINATION]. Explorer [EXPLORER] observed the [SPECIES] [VERBING] near the [NOUN]. It moved [ADVERB] through the survey sector. The encounter was classified as [ADJECTIVE], and a [COLOR] signal remains under review.[OBSERVATIONS]"
];

/* Saved state */

function createDefaultState() {
    return {
        explorerName: "",
        systems: {
            navigation: false,
            research: false,
            communications: false
        },
        navigation: {
            destinationIndex: 0,
            shipId: null,
            analyzed: false,
            settings: null
        },
        research: {
            surveyMap: {},
            surveyComplete: false,
            targetSpecies: "",
            scannerComplete: false
        },
        communications: {
            lastReport: ""
        },
        missionLaunched: false,
        labs: {
            engineeringLoadoutApproved: false,
            engineeringComplete: false,
            engineeringSelection: [],
            inventory: [],
            craftedUpgrade: null,
            tacticalComplete: false,
            temporalStep: 0,
            temporalReview: false,
            temporalLastYear: null,
            temporalComplete: false,
            knowledgeComplete: false
        }
    };
}

let state = createDefaultState();
let archiveAnimating = false;
let memoryState = { first: null, second: null, locked: false, matches: 0 };
let observationCount = 0;
let fabricatorSlots = [];
let battleState = { player: 0, guardian: 0, busy: false };
let launchTimers = [];

const STORAGE_KEY = "expeditionNexusCapstone";

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return false;

    try {
        const parsed = JSON.parse(saved);
        const defaults = createDefaultState();
        state = {
            ...defaults,
            ...parsed,
            systems: { ...defaults.systems, ...(parsed.systems || {}) },
            navigation: { ...defaults.navigation, ...(parsed.navigation || {}) },
            research: { ...defaults.research, ...(parsed.research || {}) },
            communications: {
                ...defaults.communications,
                ...(parsed.communications || {})
            },
            labs: { ...defaults.labs, ...(parsed.labs || {}) }
        };
        return true;
    } catch {
        localStorage.removeItem(STORAGE_KEY);
        return false;
    }
}

function shakeElement(id) {
    const element = document.getElementById(id);
    if (!element) return;

    element.classList.remove("shake");
    // Force a reflow so the same element can restart the animation.
    void element.offsetWidth;
    element.classList.add("shake");

    setTimeout(() => {
        element.classList.remove("shake");
    }, 360);
}

function showReturnAction(afterElementId, message) {
    const target = document.getElementById(afterElementId);
    if (!target) return;

    const existing = target.parentElement.querySelector(".completion-action");
    if (existing) existing.remove();

    const action = document.createElement("div");
    action.className = "completion-action";

    if (message) {
        const text = document.createElement("span");
        text.textContent = message;
        action.appendChild(text);
    }

    const button = document.createElement("button");
    button.type = "button";
    button.className = "button button-primary";
    button.dataset.screen = "mission-screen";
    button.textContent = "Return to Mission Control →";

    action.appendChild(button);
    target.insertAdjacentElement("afterend", action);
}

/* Screen routing and shared helpers */

const screens = document.querySelectorAll(".screen");
const appHeader = document.getElementById("app-header");
const screenRenderers = {
    "mission-screen": renderMissionControl,
    "navigation-screen": renderNavigation,
    "research-screen": renderResearch,
    "communications-screen": renderCommunications,
    "debrief-screen": renderDebrief,
    "engineering-screen": renderEngineering,
    "tactical-screen": renderTactical,
    "temporal-screen": renderTemporal,
    "knowledge-screen": renderKnowledge
};

function showScreen(screenId) {
    if (screenId !== "launch-screen" && launchTimers.length) {
        launchTimers.forEach(clearTimeout);
        launchTimers = [];
    }

    const blocked = {
        "research-screen": !state.systems.navigation,
        "communications-screen": !state.systems.research
    };

    if (blocked[screenId]) screenId = "mission-screen";

    screens.forEach((screen) => {
        screen.classList.toggle("hidden", screen.id !== screenId);
    });

    appHeader.classList.toggle("hidden", screenId === "access-screen");
    window.scrollTo({ top: 0, behavior: "smooth" });
    renderForScreen(screenId);
    updateHeader();
}

function renderForScreen(screenId) {
    const render = screenRenderers[screenId];
    if (render) render();
}

function updateHeader() {
    const onlineCount = Object.values(state.systems).filter(Boolean).length;
    document.getElementById("header-explorer").textContent =
        state.explorerName || "Explorer";
    document.getElementById(
        "header-progress"
    ).textContent = `${onlineCount} / 3 systems online`;
}

function currentDestination() {
    return destinations[state.navigation.destinationIndex];
}

function currentShip() {
    return ships.find((ship) => ship.id === state.navigation.shipId) || null;
}

function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}

function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function bindImageFallback(root = document) {
    root.querySelectorAll("img[data-fallback]").forEach((img) => {
        const fallback = img.parentElement.querySelector(".image-fallback");

        if (!fallback || img.dataset.fallbackBound === "true") return;

        img.dataset.fallbackBound = "true";

        function showImage() {
            img.hidden = false;
            fallback.classList.remove("is-visible");
        }

        function showFallback() {
            img.hidden = true;
            fallback.classList.add("is-visible");
        }

        img.addEventListener("load", showImage);
        img.addEventListener("error", showFallback);

        if (img.complete) {
            if (img.naturalWidth > 0) {
                showImage();
            } else {
                showFallback();
            }
        }
    });
}

document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-screen]");
    if (!target || target.disabled) return;
    showScreen(target.dataset.screen);
});

/* Session entry */

const savedSession = loadState();
const continueSession = document.getElementById("continue-session");

if (savedSession && state.explorerName) {
    continueSession.textContent = `Continue as ${state.explorerName}`;
    continueSession.classList.remove("hidden");
}

document.getElementById("access-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("explorerName").trim();
    const error = document.getElementById("access-error");

    if (!name) {
        error.textContent = "Enter an explorer name.";
        error.className = "form-message error";
        return;
    }

    state = createDefaultState();
    state.explorerName = name;
    saveState();
    showScreen("mission-screen");
});

continueSession.addEventListener("click", () => showScreen("mission-screen"));

/* Mission Control */

function renderMissionControl() {
    const onlineCount = Object.values(state.systems).filter(Boolean).length;
    const percent = Math.round((onlineCount / 3) * 100);

    document.getElementById(
        "station-readiness"
    ).textContent = `Recovery ${percent}%`;

    setSystemNode(
        "nav-system-card",
        "nav-system-status",
        state.systems.navigation,
        true
    );
    setSystemNode(
        "research-system-card",
        "research-system-status",
        state.systems.research,
        state.systems.navigation
    );
    setSystemNode(
        "comms-system-card",
        "comms-system-status",
        state.systems.communications,
        state.systems.research
    );

    const launchButton = document.getElementById("launch-button");
    const launchStrip = document.getElementById("launch-strip");
    const launchReady = onlineCount === 3;

    launchButton.disabled = !launchReady;
    launchStrip.classList.toggle("ready", launchReady);

    document.getElementById("launch-status").textContent = launchReady
        ? "Granted — all systems verified"
        : `Denied — restore ${3 - onlineCount} system${3 - onlineCount === 1 ? "" : "s"
        }`;

    renderArchive();
    renderLabBadges();
}

function setSystemNode(cardId, statusId, online, available) {
    const card = document.getElementById(cardId);
    const status = document.getElementById(statusId);
    card.classList.toggle("online", online);
    card.disabled = !available;

    if (online) status.textContent = "Online";
    else if (available) status.textContent = "Available";
    else status.textContent = "Locked";
}

function renderArchive() {
    const track = document.getElementById("archive-track");
    if (track.children.length) return;

    destinations.forEach((destination) => {
        const card = document.createElement("article");
        card.className = "archive-card";
        card.innerHTML = `
      <div class="archive-media">
        <div class="image-fallback">${destination.name}</div>
        <img src="${destination.image}" alt="${destination.alt}" data-fallback>
      </div>
      <div class="archive-copy">
        <h3>${destination.name}</h3>
        <p>${destination.environment}</p>
        <small>Image: ${destination.imageCredit}</small>
      </div>
    `;
        track.appendChild(card);
    });

    bindImageFallback(track);
}

function renderLabBadges() {
    const badges = [
        ["engineering-badge", state.labs.engineeringComplete, "Upgrade fabricated"],
        ["tactical-badge", state.labs.tacticalComplete, "Simulation cleared"],
        ["temporal-badge", state.labs.temporalComplete, "Archive resolved"],
        ["knowledge-badge", state.labs.knowledgeComplete, "Certified"]
    ];

    badges.forEach(([id, completed, completeLabel]) => {
        const badge = document.getElementById(id);
        const card = badge.closest(".lab-link");
        badge.textContent = completed ? completeLabel : "Not completed";
        card.classList.toggle("completed", completed);
    });
}

document.getElementById("archive-next").addEventListener("click", () => {
    if (archiveAnimating) return;
    const track = document.getElementById("archive-track");
    const cards = Array.from(track.children);
    if (cards.length < 2) return;

    archiveAnimating = true;
    const distance = cards[0].getBoundingClientRect().width + 12;
    cards.forEach((card) => {
        card.style.transform = `translateX(-${distance}px)`;
    });

    setTimeout(() => {
        // Move the first card to the end, then restore transitions for the next click.
        cards.forEach((card) => {
            card.style.transition = "none";
            card.style.transform = "translateX(0)";
        });
        track.appendChild(cards[0]);
        requestAnimationFrame(() => {
            cards.forEach((card) => {
                card.style.transition = "transform 0.4s ease";
            });
            archiveAnimating = false;
        });
    }, 400);
});

document.getElementById("launch-button").addEventListener("click", () => {
    if (!Object.values(state.systems).every(Boolean)) return;
    showScreen("launch-screen");
    startLaunchSequence();
});

document.getElementById("reset-progress").addEventListener("click", () => {
    if (!confirm("Reset all saved Expedition Nexus progress?")) return;

    localStorage.removeItem(STORAGE_KEY);

    state = createDefaultState();

    archiveAnimating = false;
    memoryState = {
        first: null,
        second: null,
        locked: false,
        matches: 0
    };
    observationCount = 0;
    fabricatorSlots = [];
    battleState = {
        player: 0,
        guardian: 0,
        busy: false
    };

    launchTimers.forEach(clearTimeout);
    launchTimers = [];

    document
        .querySelectorAll(".completion-action")
        .forEach((action) => action.remove());

    document.getElementById("access-form").reset();

    const accessError = document.getElementById("access-error");
    accessError.textContent = "";
    accessError.className = "form-message";

    continueSession.classList.add("hidden");
    continueSession.textContent = "";

    showScreen("access-screen");
});

/* Navigation system */

function renderNavigation() {
    renderDestination();
    renderShips();
    renderRouteAnalysis();

    const locked = state.systems.navigation;
    document.getElementById("destination-prev").disabled = locked;
    document.getElementById("destination-next").disabled = locked;
    document.getElementById("analyze-route").disabled = locked;
}

function renderDestination() {
    const destination = currentDestination();
    const card = document.getElementById("destination-card");
    card.innerHTML = `
    <div class="destination-media">
      <div class="image-fallback">${destination.name} / archive image</div>
      <img src="${destination.image}" alt="${destination.alt}" data-fallback>
    </div>
    <div class="destination-copy">
      <p class="panel-label">Target ${String(
        state.navigation.destinationIndex + 1
    ).padStart(2, "0")}</p>
      <h3>${destination.name}</h3>
      <p>${destination.description}</p>
      <div class="destination-stats">
        <div><span>Route distance</span><strong>${destination.distance.toLocaleString()} km</strong></div>
        <div><span>Circumference</span><strong>${destination.circumference.toLocaleString()} km</strong></div>
        <div><span>Environment</span><strong>${destination.environment
        }</strong></div>
        <div><span>Image</span><strong>${destination.imageCredit}</strong></div>
      </div>
    </div>
  `;
    bindImageFallback(card);
}

function renderShips() {
    const container = document.getElementById("ship-options");
    container.innerHTML = "";

    ships.forEach((ship) => {
        const button = document.createElement("button");
        button.className = `ship-card${state.navigation.shipId === ship.id ? " selected" : ""
            }`;
        button.disabled = state.systems.navigation;
        button.innerHTML = `
      <div>
        <p class="panel-label">${ship.id.toUpperCase()}</p>
        <h3>${ship.name}</h3>
        <small>${ship.note}</small>
      </div>
      <div class="ship-metrics"><span>${ship.speed
            } km/h</span><span>${ship.energyRate.toFixed(2)} energy/km</span></div>
    `;
        button.addEventListener("click", () => {
            if (state.systems.navigation) return;
            state.navigation.shipId = ship.id;
            invalidateRoute();
            renderShips();
        });
        container.appendChild(button);
    });
}

function shiftDestination(direction) {
    if (state.systems.navigation) return;
    const count = destinations.length;
    state.navigation.destinationIndex =
        (state.navigation.destinationIndex + direction + count) % count;
    invalidateRoute();
    renderDestination();
}

function invalidateRoute() {
    state.navigation.analyzed = false;
    state.navigation.settings = null;
    powerSlider.value = 5;
    fluxSlider.value = 5;
    document.getElementById("power-readout").textContent = "5";
    document.getElementById("flux-readout").textContent = "5";
    document.getElementById("quantum-switch").checked = false;
    document.getElementById("polarity-switch").checked = false;
    document.getElementById("relay-switch").checked = false;
    saveState();
    document.getElementById("route-analysis-panel").classList.add("hidden");
    document.getElementById("navigation-feedback").textContent = "";
}

document
    .getElementById("destination-prev")
    .addEventListener("click", () => shiftDestination(-1));
document
    .getElementById("destination-next")
    .addEventListener("click", () => shiftDestination(1));

document.getElementById("analyze-route").addEventListener("click", () => {
    const ship = currentShip();
    if (!ship) {
        const panel = document.getElementById("route-analysis-panel");
        panel.classList.remove("hidden");
        document.getElementById("route-analysis").innerHTML =
            "<div class='analysis-cell'><span>Route status</span><strong>Select a vessel first.</strong></div>";
        return;
    }

    const destination = currentDestination();
    state.navigation.settings = {
        power: clamp(destination.basePower + ship.powerOffset, 1, 10),
        flux: clamp(destination.baseFlux + ship.fluxOffset, 1, 10),
        quantum: destination.quantum,
        polarity: destination.polarity,
        relay: destination.relay
    };
    state.navigation.analyzed = true;
    saveState();
    renderRouteAnalysis();
});

function renderRouteAnalysis() {
    const panel = document.getElementById("route-analysis-panel");
    if (
        !state.navigation.analyzed ||
        !state.navigation.settings ||
        !currentShip()
    ) {
        panel.classList.add("hidden");
        return;
    }

    panel.classList.remove("hidden");
    const destination = currentDestination();
    const ship = currentShip();
    const settings = state.navigation.settings;
    const time = (destination.distance / ship.speed).toFixed(1);
    const energy = Math.round(destination.distance * ship.energyRate);

    document.getElementById("route-analysis").innerHTML = `
    <div class="analysis-cell"><span>Travel time</span><strong>${time} hours</strong></div>
    <div class="analysis-cell"><span>Energy</span><strong>${energy.toLocaleString()} units</strong></div>
    <div class="analysis-cell"><span>Gate power</span><strong>${settings.power
        }</strong></div>
    <div class="analysis-cell"><span>Flux</span><strong>${settings.flux
        }</strong></div>
    <div class="analysis-cell"><span>Quantum / polarity</span><strong>${settings.quantum ? "ON" : "OFF"
        } / ${settings.polarity ? "ON" : "OFF"}</strong></div>
    <div class="analysis-cell"><span>Navigation relay</span><strong>${settings.relay ? "ON" : "OFF"
        }</strong></div>
  `;

    if (state.systems.navigation) {
        powerSlider.value = settings.power;
        fluxSlider.value = settings.flux;
        document.getElementById("power-readout").textContent = settings.power;
        document.getElementById("flux-readout").textContent = settings.flux;
        document.getElementById("quantum-switch").checked = settings.quantum;
        document.getElementById("polarity-switch").checked = settings.polarity;
        document.getElementById("relay-switch").checked = settings.relay;
        document.getElementById("route-label").textContent = "Navigation online";
        document.getElementById("route-label").classList.add("complete");
        document.getElementById("navigation-feedback").textContent =
            "Calibration accepted. Research is now available from Mission Control.";
        document.getElementById("navigation-feedback").className =
            "form-message success";
        document.getElementById("calibrate-navigation").disabled = true;
    } else {
        document.getElementById("route-label").textContent = "Calibration required";
        document.getElementById("route-label").classList.remove("complete");
        document.getElementById("calibrate-navigation").disabled = false;
    }
}

const powerSlider = document.getElementById("power-slider");
const fluxSlider = document.getElementById("flux-slider");
powerSlider.addEventListener(
    "input",
    () =>
        (document.getElementById("power-readout").textContent = powerSlider.value)
);
fluxSlider.addEventListener(
    "input",
    () => (document.getElementById("flux-readout").textContent = fluxSlider.value)
);

document
    .getElementById("calibrate-navigation")
    .addEventListener("click", () => {
        const settings = state.navigation.settings;
        if (!settings) return;

        const actual = {
            power: Number(powerSlider.value),
            flux: Number(fluxSlider.value),
            quantum: document.getElementById("quantum-switch").checked,
            polarity: document.getElementById("polarity-switch").checked,
            relay: document.getElementById("relay-switch").checked
        };

        const correct = Object.keys(settings).every(
            (key) => settings[key] === actual[key]
        );
        const feedback = document.getElementById("navigation-feedback");

        if (!correct) {
            feedback.textContent =
                "Calibration rejected. Compare the control panel with the route analysis values.";
            feedback.className = "form-message error";
            shakeElement("route-analysis-panel");
            return;
        }

        state.systems.navigation = true;
        saveState();
        feedback.textContent =
            "Calibration accepted. Navigation is online; Research is now unlocked.";
        feedback.className = "form-message success";
        renderNavigation();

        showReturnAction(
            "navigation-feedback",
            "Navigation restored. Research is now unlocked."
        );
    });

/* Research system */

function renderResearch() {
    if (!state.systems.navigation) return;

    const destination = currentDestination();
    document.getElementById(
        "research-intro"
    ).textContent = `Reconstruct the ${destination.name} probe survey, inspect its sightings, and confirm the target organism.`;
    renderSurveyBrief();
    renderTerrainGrid();
    updateSurveyState();

    if (state.research.surveyComplete) renderObservationPanel();
    else document.getElementById("observations-panel").classList.add("hidden");

    if (state.research.targetSpecies) renderScannerPanel();
    else document.getElementById("scanner-panel").classList.add("hidden");
}

function renderSurveyBrief() {
    const destination = currentDestination();
    document.getElementById("survey-brief").innerHTML = `
    <strong>Probe packet // ${destination.name}</strong>
    <p>Set the highlighted coordinates to match the recovered readings. Other cells are optional.</p>
    <ul class="survey-list">
      ${destination.survey
            .map(
                (item) =>
                    `<li><strong>${item.coordinate}</strong> — ${terrainLabel(
                        item.terrain
                    )}</li>`
            )
            .join("")}
    </ul>
  `;
}

function terrainLabel(terrain) {
    return terrainLabels[terrain];
}

function renderTerrainGrid() {
    const grid = document.getElementById("terrain-grid");
    grid.innerHTML = "<span class='grid-label'></span>";
    const columns = ["A", "B", "C", "D", "E", "F"];
    columns.forEach((column) =>
        grid.insertAdjacentHTML(
            "beforeend",
            `<span class="grid-label">${column}</span>`
        )
    );

    const required = new Set(
        currentDestination().survey.map((item) => item.coordinate)
    );

    for (let row = 1; row <= 6; row++) {
        grid.insertAdjacentHTML(
            "beforeend",
            `<span class="grid-label">${row}</span>`
        );
        columns.forEach((column) => {
            const coordinate = `${column}${row}`;
            const terrain = state.research.surveyMap[coordinate] || "empty";
            const button = document.createElement("button");
            button.type = "button";
            button.className = `terrain-tile terrain-${terrain}${required.has(coordinate) ? " required" : ""
                }`;
            button.dataset.coordinate = coordinate;
            button.dataset.terrain = terrain;
            button.textContent = coordinate;
            button.disabled = state.research.surveyComplete;
            button.addEventListener("click", () => cycleTerrain(button));
            grid.appendChild(button);
        });
    }
}

function cycleTerrain(button) {
    const order = ["empty", "rock", "water", "grass", "ruins"];
    const currentIndex = order.indexOf(button.dataset.terrain);
    const next = order[(currentIndex + 1) % order.length];
    button.className = button.className.replace(
        /terrain-(empty|rock|water|grass|ruins)/,
        `terrain-${next}`
    );
    button.dataset.terrain = next;
    state.research.surveyMap[button.dataset.coordinate] = next;
    saveState();
}

document.getElementById("analyze-survey").addEventListener("click", () => {
    const survey = currentDestination().survey;
    const matches = survey.filter(
        (item) => state.research.surveyMap[item.coordinate] === item.terrain
    ).length;
    const feedback = document.getElementById("survey-feedback");

    if (matches !== survey.length) {
        feedback.textContent = `${matches} of ${survey.length} required coordinates match the probe packet.`;
        feedback.className = "form-message error";

        shakeElement("terrain-grid");

        return;
    }

    state.research.surveyComplete = true;
    saveState();
    feedback.textContent =
        "Survey reconstructed. Biological observations have been recovered.";
    feedback.className = "form-message success";
    renderResearch();
});

function updateSurveyState() {
    const status = document.getElementById("survey-status");
    status.textContent = state.research.surveyComplete
        ? "Complete"
        : "Incomplete";
    status.classList.toggle("complete", state.research.surveyComplete);
    document.getElementById("analyze-survey").disabled =
        state.research.surveyComplete;
}

function renderObservationPanel() {
    const panel = document.getElementById("observations-panel");
    panel.classList.remove("hidden");
    const destination = currentDestination();
    document.getElementById(
        "target-prompt"
    ).innerHTML = `Scanner request: identify the organism recorded in the <strong>${destination.targetSector}</strong> sector, then send it to the biological scanner.`;

    const filter = document.getElementById("sector-filter");
    const currentValue = filter.value || "all";
    const sectors = [
        ...new Set(destination.sightings.map((sighting) => sighting.sector))
    ];
    filter.innerHTML = `<option value="all">All sectors</option>${sectors
        .map((sector) => `<option value="${sector}">${sector}</option>`)
        .join("")}`;
    filter.value = sectors.includes(currentValue) ? currentValue : "all";
    renderSightings();
}

function renderSightings() {
    const destination = currentDestination();
    const sector = document.getElementById("sector-filter").value;
    const body = document.getElementById("sightings-body");
    const visible = destination.sightings.filter(
        (sighting) => sector === "all" || sighting.sector === sector
    );

    body.innerHTML = visible
        .map(
            (sighting) => `
    <tr>
      <td>${sighting.species}</td>
      <td>${sighting.count}</td>
      <td>${sighting.sector}</td>
      <td>${sighting.diet}</td>
      <td><button class="table-select" data-species="${sighting.species}" type="button">Scan</button></td>
    </tr>
  `
        )
        .join("");
}

document
    .getElementById("sector-filter")
    .addEventListener("change", renderSightings);

document.getElementById("sightings-body").addEventListener("click", (event) => {
    const button = event.target.closest("[data-species]");
    if (!button) return;

    const destination = currentDestination();
    const feedback = document.getElementById("sighting-feedback");

    if (button.dataset.species !== destination.targetSpecies) {
        feedback.textContent =
            "That record does not match the requested sector. Filter the database and try again.";
        feedback.className = "form-message error";

        shakeElement("observations-panel");

        return;
    }

    state.research.targetSpecies = destination.targetSpecies;
    saveState();
    feedback.textContent = `${destination.targetSpecies} sample queued for confirmation.`;
    feedback.className = "form-message success";
    renderScannerPanel();
});

function renderScannerPanel() {
    const panel = document.getElementById("scanner-panel");
    const status = document.getElementById("scanner-status");
    panel.classList.remove("hidden");
    document.getElementById(
        "scanner-copy"
    ).textContent = `Match the three paired signals to confirm the ${state.research.targetSpecies} sample.`;

    if (state.research.scannerComplete) {
        status.textContent = "Confirmed";
        status.classList.add("complete");
        document.getElementById("start-scanner").disabled = true;
        document.getElementById(
            "memory-board"
        ).innerHTML = `<p class="form-message success">${state.research.targetSpecies} confirmed. Research is online.</p>`;
    } else {
        status.textContent = "3 pairs required";
        status.classList.remove("complete");
        document.getElementById("start-scanner").disabled = false;
    }
}

document
    .getElementById("start-scanner")
    .addEventListener("click", startMemoryGame);

function startMemoryGame() {
    const board = document.getElementById("memory-board");
    memoryState = { first: null, second: null, locked: false, matches: 0 };
    const values = shuffle([
        "DNA",
        "DNA",
        "TRACK",
        "TRACK",
        "THERMAL",
        "THERMAL"
    ]);
    board.innerHTML = "";

    values.forEach((value) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "memory-card";
        card.dataset.value = value;
        card.innerHTML = `
      <span class="memory-card-inner">
        <span class="memory-card-front">SIGNAL</span>
        <span class="memory-card-back">${value}</span>
      </span>
    `;
        card.addEventListener("click", () => flipMemoryCard(card));
        board.appendChild(card);
    });
}

function flipMemoryCard(card) {
    if (
        memoryState.locked ||
        card.classList.contains("flipped") ||
        card.classList.contains("matched")
    )
        return;
    card.classList.add("flipped");

    if (!memoryState.first) {
        memoryState.first = card;
        return;
    }

    memoryState.second = card;
    memoryState.locked = true;

    if (memoryState.first.dataset.value === memoryState.second.dataset.value) {
        setTimeout(() => {
            memoryState.first.classList.add("matched");
            memoryState.second.classList.add("matched");
            memoryState.matches++;
            resetMemoryTurn();
            if (memoryState.matches === 3) completeResearch();
        }, 350);
    } else {
        memoryState.first.classList.add("shake");
        memoryState.second.classList.add("shake");

        setTimeout(() => {
            memoryState.first.classList.remove("shake", "flipped");
            memoryState.second.classList.remove("shake", "flipped");
            resetMemoryTurn();
        }, 650);
    }
}

function resetMemoryTurn() {
    memoryState.first = null;
    memoryState.second = null;
    memoryState.locked = false;
}

function completeResearch() {
    state.research.scannerComplete = true;
    state.systems.research = true;

    saveState();
    renderScannerPanel();

    showReturnAction(
        "memory-board",
        "Research restored. Communications is now unlocked."
    );
}

/* Communications system */

function renderCommunications() {
    if (!state.systems.research) return;
    const destination = currentDestination();
    const ship = currentShip();

    document.getElementById("report-facts").innerHTML = `
    <div class="report-fact"><span>Explorer</span><strong>${state.explorerName}</strong></div>
    <div class="report-fact"><span>Destination</span><strong>${destination.name}</strong></div>
    <div class="report-fact"><span>Vessel</span><strong>${ship.name}</strong></div>
    <div class="report-fact"><span>Confirmed species</span><strong>${state.research.targetSpecies}</strong></div>
  `;

    const fields = document.getElementById("observation-fields");
    if (!fields.children.length) addObservationField();

    const panel = document.getElementById("transmission-panel");
    if (state.communications.lastReport) {
        panel.classList.remove("hidden");
        document.getElementById("transmission-text").textContent =
            state.communications.lastReport;
    } else {
        panel.classList.add("hidden");
    }

    const sendButton = document.getElementById("send-transmission");
    sendButton.disabled = state.systems.communications;
    document.getElementById("transmission-feedback").textContent = state.systems
        .communications
        ? "Transmission acknowledged. Communications is online."
        : "";
    document.getElementById("transmission-feedback").className = state.systems
        .communications
        ? "form-message success"
        : "form-message";
}

function addObservationField() {
    observationCount++;
    const wrapper = document.createElement("div");
    wrapper.className = "observation-field";
    wrapper.innerHTML = `
    <input name="observation-${observationCount}" type="text" placeholder="Optional observation ${observationCount}">
    <button type="button" aria-label="Remove observation">×</button>
  `;
    wrapper
        .querySelector("button")
        .addEventListener("click", () => wrapper.remove());
    document.getElementById("observation-fields").appendChild(wrapper);
}

document
    .getElementById("add-observation")
    .addEventListener("click", addObservationField);

document.getElementById("report-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const observations = Object.entries(data)
        .filter(([key, value]) => key.startsWith("observation-") && value.trim())
        .map(([, value]) => value.trim());

    const destination = currentDestination();
    const ship = currentShip();
    const template =
        reportTemplates[Math.floor(Math.random() * reportTemplates.length)];
    const observationText = observations.length
        ? ` Additional notes: ${observations.join("; ")}.`
        : "";

    const replacements = {
        "[DESTINATION]": destination.name,
        "[EXPLORER]": state.explorerName,
        "[SHIP]": ship.name,
        "[SPECIES]": state.research.targetSpecies,
        "[ADJECTIVE]": data.adjective.trim(),
        "[ADVERB]": data.adverb.trim(),
        "[VERBING]": data.verbIng.trim(),
        "[NOUN]": data.noun.trim(),
        "[COLOR]": data.color,
        "[OBSERVATIONS]": observationText
    };

    let report = template;
    Object.entries(replacements).forEach(([placeholder, value]) => {
        report = report.replace(placeholder, value);
    });

    state.communications.lastReport = report;
    saveState();
    document.getElementById("transmission-text").textContent = report;
    document.getElementById("transmission-panel").classList.remove("hidden");
    document
        .getElementById("transmission-panel")
        .scrollIntoView({ behavior: "smooth", block: "start" });
});

document.getElementById("regenerate-report").addEventListener("click", () => {
    document.getElementById("report-form").requestSubmit();
});

document.getElementById("send-transmission").addEventListener("click", () => {
    if (!state.communications.lastReport) return;

    state.systems.communications = true;
    saveState();

    const feedback = document.getElementById("transmission-feedback");

    feedback.textContent =
        "Transmission acknowledged. Communications is online; launch authorization is available at Mission Control.";

    feedback.className = "form-message success";

    document.getElementById("send-transmission").disabled = true;

    showReturnAction(
        "transmission-feedback",
        "Communications restored. Launch authorization is ready."
    );
});

/* Launch and debrief */

function startLaunchSequence() {
    launchTimers.forEach(clearTimeout);
    launchTimers = [];

    const destination = currentDestination();
    document.getElementById(
        "launch-destination"
    ).textContent = `${destination.name} route locked`;
    const log = document.getElementById("launch-log");
    const meter = document.getElementById("launch-meter-fill");
    const debriefButton = document.getElementById("debrief-button");
    log.innerHTML = "";
    meter.style.width = "0%";
    debriefButton.classList.add("hidden");

    if (state.missionLaunched) {
        log.innerHTML =
            "<p>Launch complete.</p><p>Expedition telemetry is stable.</p>";
        meter.style.width = "100%";
        debriefButton.classList.remove("hidden");
        return;
    }

    const steps = [
        ["Navigation solution verified.", 22],
        ["Research clearance attached.", 46],
        ["Communications handshake confirmed.", 68],
        ["Nexus gate charged.", 86],
        [`Expedition launched toward ${destination.name}.`, 100]
    ];

    steps.forEach(([message, progress], index) => {
        const timer = setTimeout(() => {
            log.insertAdjacentHTML("beforeend", `<p>&gt; ${message}</p>`);
            meter.style.width = `${progress}%`;
            if (index === steps.length - 1) {
                state.missionLaunched = true;
                saveState();
                debriefButton.classList.remove("hidden");
            }
        }, 420 + index * 520);
        launchTimers.push(timer);
    });
}

document
    .getElementById("debrief-button")
    .addEventListener("click", () => showScreen("debrief-screen"));

function renderDebrief() {
    const destination = currentDestination();
    const ship = currentShip();
    const settings = state.navigation.settings;
    const time = (destination.distance / ship.speed).toFixed(1);

    document.getElementById("debrief-summary").innerHTML = `
    <div class="debrief-item"><span>Explorer</span><strong>${state.explorerName}</strong></div>
    <div class="debrief-item"><span>Destination</span><strong>${destination.name}</strong></div>
    <div class="debrief-item"><span>Vessel</span><strong>${ship.name}</strong></div>
    <div class="debrief-item"><span>Estimated travel</span><strong>${time} hours</strong></div>
    <div class="debrief-item"><span>Species confirmed</span><strong>${state.research.targetSpecies}</strong></div>
    <div class="debrief-item"><span>Gate settings</span><strong>Power ${settings.power} / Flux ${settings.flux}</strong></div>
  `;
}

document.getElementById("restart-mission").addEventListener("click", () => {
    const explorerName = state.explorerName;
    const labs = state.labs;
    state = createDefaultState();
    state.explorerName = explorerName;
    state.labs = labs;
    document.getElementById("report-form").reset();
    document.getElementById("observation-fields").innerHTML = "";
    observationCount = 0;
    saveState();
    showScreen("mission-screen");
});

/* Engineering lab */

function renderEngineering() {
    renderEquipmentGrid();
    updateEngineeringTotal();

    const submitButton = document.getElementById("submit-loadout");

    submitButton.disabled = state.labs.engineeringLoadoutApproved;
    submitButton.textContent = state.labs.engineeringLoadoutApproved
        ? "Loadout approved"
        : "Submit loadout";

    document
        .getElementById("equipment-database")
        .classList.toggle("hidden", !state.labs.engineeringLoadoutApproved);

    document
        .getElementById("fabrication-panel")
        .classList.toggle("hidden", !state.labs.engineeringLoadoutApproved);

    if (state.labs.engineeringLoadoutApproved) {
        renderInventory();
        renderMaterials();
    }

    const fabricateButton = document.getElementById("fabricate-button");

    if (fabricateButton) {
        fabricateButton.disabled = state.labs.engineeringComplete;
        fabricateButton.textContent = state.labs.engineeringComplete
            ? "Upgrade fabricated"
            : "Fabricate";
    }
}

function renderEquipmentGrid() {
    const grid = document.getElementById("equipment-grid");
    grid.innerHTML = "";

    equipment.forEach((item) => {
        const selected = state.labs.engineeringSelection.includes(item.id);
        const button = document.createElement("button");
        button.type = "button";
        button.className = `equipment-card${selected ? " selected" : ""}`;
        button.disabled = state.labs.engineeringLoadoutApproved;
        button.innerHTML = `
      <span class="equipment-icon">${item.icon}</span>
      <div>
        <h3>${item.name}</h3>
        <small>${item.summary}</small>
      </div>
      <strong>${item.price} cr</strong>
    `;

        button.addEventListener("click", () => toggleEquipment(item.id));
        grid.appendChild(button);
    });
}

function toggleEquipment(id) {
    const selection = new Set(state.labs.engineeringSelection);

    if (selection.has(id)) {
        selection.delete(id);
    } else {
        selection.add(id);
    }

    state.labs.engineeringSelection = [...selection];

    saveState();
    renderEquipmentGrid();
    updateEngineeringTotal();
}

function updateEngineeringTotal() {
    const total = state.labs.engineeringSelection.reduce((sum, id) => {
        const item = equipment.find((entry) => entry.id === id);
        return sum + (item ? item.price : 0);
    }, 0);

    document.getElementById(
        "engineering-total"
    ).innerHTML = `Selected <strong>${total} cr</strong>`;
}

document.getElementById("submit-loadout").addEventListener("click", () => {
    const selectedItems = state.labs.engineeringSelection
        .map((id) => equipment.find((item) => item.id === id))
        .filter(Boolean);

    const total = selectedItems.reduce((sum, item) => sum + item.price, 0);
    const hasMobility = selectedItems.some(
        (item) => item.category === "mobility"
    );

    const hasScan = selectedItems.some((item) => item.category === "scan");
    const feedback = document.getElementById("loadout-feedback");

    if (total > 300) {
        feedback.textContent = `Loadout rejected: ${total} credits exceeds the 300-credit budget.`;
        feedback.className = "form-message error";

        shakeElement("equipment-grid");
        return;
    }

    if (!hasMobility || !hasScan) {
        feedback.textContent =
            "Loadout rejected: include at least one mobility item and one scanning item.";

        feedback.className = "form-message error";

        shakeElement("equipment-grid");
        return;
    }

    state.labs.engineeringLoadoutApproved = true;
    state.labs.inventory = [...state.labs.engineeringSelection];

    saveState();

    feedback.textContent = `Loadout approved at ${total} credits. Fabrication challenge unlocked below.`;
    feedback.className = "form-message success";

    renderEngineering();
});

function renderInventory() {
    const grid = document.getElementById("inventory-grid");
    grid.innerHTML = "";

    state.labs.inventory.forEach((id) => {
        const item = equipment.find((entry) => entry.id === id);
        if (!item) return;

        const card = document.createElement("button");
        card.type = "button";
        card.className = "inventory-card";
        card.innerHTML = `
      <span class="equipment-icon">${item.icon}</span>
      <h3>${item.name}</h3>
      <small>Inspect specifications</small>
      <div class="inventory-details">${item.specs
                .map((spec) => `<p>${spec}</p>`)
                .join("")}</div>
    `;

        card.addEventListener("click", () => {
            grid.querySelectorAll(".inventory-card").forEach((other) => {
                if (other !== card) {
                    other.classList.remove("active");
                }
            });

            card.classList.toggle("active");
        });

        grid.appendChild(card);
    });
}

function renderMaterials() {
    const container = document.getElementById("material-options");
    container.innerHTML = "";

    materials.forEach((material) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "material-button";
        button.textContent = `${material.name} — ${material.type}`;
        button.disabled = state.labs.engineeringComplete;
        button.addEventListener("click", () => {
            selectMaterial(material.name);
        });

        container.appendChild(button);
    });

    updateFabricatorSlots();

    if (state.labs.craftedUpgrade) {
        const feedback = document.getElementById("fabrication-feedback");
        feedback.textContent = `${state.labs.craftedUpgrade} is installed. It adds +1 power to your Tactical Simulator cards.`;
        feedback.className = "form-message success";
    }
}

function selectMaterial(name) {
    if (state.labs.engineeringComplete) return;
    if (fabricatorSlots.includes(name)) return;

    if (fabricatorSlots.length === 2) {
        fabricatorSlots = [];
    }

    fabricatorSlots.push(name);
    updateFabricatorSlots();
}

function updateFabricatorSlots() {
    document.getElementById("fabricator-slot-1").textContent =
        fabricatorSlots[0] || "Empty";
    document.getElementById("fabricator-slot-2").textContent =
        fabricatorSlots[1] || "Empty";
}

document.getElementById("fabricate-button").addEventListener("click", () => {
    const feedback = document.getElementById("fabrication-feedback");

    if (fabricatorSlots.length < 2) {
        feedback.textContent = "Load two different materials first.";
        feedback.className = "form-message error";

        shakeElement("fabricator");
        return;
    }

    const recipe = [...fabricatorSlots].sort().join("|");
    const correctRecipe = ["Ferrite Shard", "Phase Gel"].sort().join("|");

    if (recipe !== correctRecipe) {
        feedback.textContent =
            "Fabrication failed. The materials are stable, but the combination does not produce a usable upgrade.";

        feedback.className = "form-message error";

        shakeElement("fabricator");

        fabricatorSlots = [];
        updateFabricatorSlots();

        return;
    }

    state.labs.craftedUpgrade = "Overdrive Core";
    state.labs.engineeringComplete = true;

    saveState();

    fabricatorSlots = [];
    updateFabricatorSlots();

    renderEngineering();

    showReturnAction(
        "fabrication-feedback",
        "Engineering Lab complete. Overdrive Core installed."
    );
});

/* Tactical lab */

function renderTactical() {
    document.getElementById("upgrade-note").textContent = state.labs
        .craftedUpgrade
        ? `${state.labs.craftedUpgrade} active: +1 power on every explorer card.`
        : "No engineering upgrade installed. The simulation is still winnable.";

    if (
        !battleState.busy &&
        battleState.player === 0 &&
        battleState.guardian === 0
    )
        resetBattleVisuals();
}

function resetBattleVisuals() {
    battleState = { player: 0, guardian: 0, busy: false };
    document.getElementById("player-score").textContent = "0";
    document.getElementById("guardian-score").textContent = "0";
    document.getElementById("battle-feedback").textContent =
        "Draw cards to begin.";
    document.getElementById("draw-cards").classList.remove("hidden");
    document.getElementById("draw-cards").disabled = false;
    document.getElementById("reset-battle").classList.add("hidden");
    ["player-battle-card", "guardian-battle-card"].forEach((id) => {
        const card = document.getElementById(id);
        card.classList.remove("flipped", "winner");
        const front = card.querySelector(".card-front");
        front.className = "card-face card-front";
        front.innerHTML = "";
    });
}

document.getElementById("draw-cards").addEventListener("click", () => {
    if (battleState.busy) return;
    battleState.busy = true;
    document.getElementById("draw-cards").disabled = true;

    const playerCard = document.getElementById("player-battle-card");
    const guardianCard = document.getElementById("guardian-battle-card");
    playerCard.classList.remove("flipped", "winner");
    guardianCard.classList.remove("flipped", "winner");

    setTimeout(() => {
        const player = {
            ...battleDeck[Math.floor(Math.random() * battleDeck.length)]
        };
        const guardian = {
            ...battleDeck[Math.floor(Math.random() * battleDeck.length)]
        };
        if (state.labs.craftedUpgrade === "Overdrive Core") player.power += 1;

        renderBattleCard(playerCard, player);
        renderBattleCard(guardianCard, guardian);
        playerCard.classList.add("flipped");
        guardianCard.classList.add("flipped");

        setTimeout(() => resolveBattleRound(player, guardian), 600);
    }, 280);
});

function renderBattleCard(card, fighter) {
    const front = card.querySelector(".card-front");
    front.className = `card-face card-front ${fighter.type}`;
    front.innerHTML = `<span>${fighter.type}</span><strong>${fighter.name}</strong><span>Power ${fighter.power}</span>`;
}

function resolveBattleRound(player, guardian) {
    let winner = "draw";

    if (player.type === guardian.type) {
        if (player.power > guardian.power) winner = "player";
        else if (guardian.power > player.power) winner = "guardian";
    } else if (typeAdvantages[player.type] === guardian.type) {
        winner = "player";
    } else if (typeAdvantages[guardian.type] === player.type) {
        winner = "guardian";
    } else if (player.power > guardian.power) {
        winner = "player";
    } else if (guardian.power > player.power) {
        winner = "guardian";
    }

    if (winner === "player") {
        battleState.player++;
        document.getElementById("player-battle-card").classList.add("winner");
        document.getElementById("battle-feedback").textContent =
            "Explorer drone wins the round.";
    } else if (winner === "guardian") {
        battleState.guardian++;
        document.getElementById("guardian-battle-card").classList.add("winner");
        document.getElementById("battle-feedback").textContent =
            "Guardian wins the round.";
    } else {
        document.getElementById("battle-feedback").textContent =
            "Draw. No point awarded.";
    }

    document.getElementById("player-score").textContent = battleState.player;
    document.getElementById("guardian-score").textContent = battleState.guardian;
    battleState.busy = false;

    if (battleState.player >= 2 || battleState.guardian >= 2) {
        document.getElementById("draw-cards").classList.add("hidden");
        document.getElementById("reset-battle").classList.remove("hidden");

        if (battleState.player >= 2) {
            state.labs.tacticalComplete = true;
            saveState();
            document.getElementById("battle-feedback").textContent =
                "Simulation cleared. Tactical certification recorded.";

            showReturnAction("battle-feedback", "Tactical certification recorded.");
        } else {
            document.getElementById("battle-feedback").textContent =
                "Guardian wins the simulation. Run it again when ready.";
        }
    } else {
        document.getElementById("draw-cards").disabled = false;
    }
}

document
    .getElementById("reset-battle")
    .addEventListener("click", resetBattleVisuals);

/* Temporal lab */

function renderTemporal() {
    const step = state.labs.temporalStep;
    const signature = temporalSignatures[step];
    const label = document.getElementById("temporal-label");
    const target = document.getElementById("temporal-target");
    const hint = document.getElementById("temporal-hint");
    const instruction = document.getElementById("temporal-instruction");
    const controls = document.getElementById("temporal-controls");
    const scanButton = document.getElementById("scan-temporal");
    const nextButton = document.getElementById("next-temporal");
    const feedback = document.getElementById("temporal-feedback");
    const progress = document.getElementById("temporal-progress");

    if (state.labs.temporalReview) {
        setTemporalImage(signature);

        label.textContent = `Signature ${String(step + 1).padStart(
            2,
            "0"
        )} — Resolved`;

        target.textContent = "Temporal match confirmed";
        hint.textContent = `Estimated year: ${state.labs.temporalLastYear}`;
        instruction.textContent = `Classification: ${signature.classification}`;
        instruction.classList.remove("hidden");
        feedback.textContent = "Archive image unlocked.";
        feedback.className = "form-message success";
        progress.textContent = `${step + 1} / ${temporalSignatures.length
            } resolved`;

        controls.classList.add("hidden");
        nextButton.classList.remove("hidden");
        nextButton.textContent =
            step === temporalSignatures.length - 1
                ? "Complete archive"
                : "Analyze next signal";

        return;
    }

    if (state.labs.temporalComplete || step >= temporalSignatures.length) {
        const finalSignature = temporalSignatures[temporalSignatures.length - 1];

        setTemporalImage(finalSignature);

        label.textContent = "Temporal archive";
        target.textContent = "Archive certified";
        hint.textContent = "All three temporal signatures have been resolved.";
        instruction.textContent = "All temporal records certified.";
        instruction.classList.remove("hidden", "guidance");
        instruction.classList.add("complete");
        feedback.textContent = "Archive stability confirmed.";
        feedback.className = "form-message success";
        progress.textContent = `${temporalSignatures.length} / ${temporalSignatures.length} resolved`;
        progress.classList.add("complete");
        controls.classList.add("hidden");
        nextButton.classList.add("hidden");

        return;
    }

    clearTemporalImage();

    label.textContent = `Target signature ${String(step + 1).padStart(2, "0")}`;
    target.textContent = signature.title;
    hint.textContent = signature.hint;
    instruction.textContent = "";
    instruction.classList.add("hidden");
    feedback.textContent = "";
    feedback.className = "form-message";
    progress.textContent = `${step} / ${temporalSignatures.length} resolved`;
    progress.classList.remove("complete");
    controls.classList.remove("hidden");
    nextButton.classList.add("hidden");
    scanButton.disabled = false;
}

function clearTemporalImage() {
    const image = document.getElementById("temporal-image");
    const lock = document.getElementById("temporal-lock");
    const fallback = document.getElementById("temporal-image-fallback");
    image.classList.add("hidden");
    image.removeAttribute("src");
    image.alt = "";
    lock.classList.remove("hidden");
    fallback.classList.remove("is-visible");
    document.getElementById("temporal-credit").textContent = "";
}

function setTemporalImage(signature) {
    const image = document.getElementById("temporal-image");
    const lock = document.getElementById("temporal-lock");
    const fallback = document.getElementById("temporal-image-fallback");
    lock.classList.add("hidden");
    fallback.classList.remove("is-visible");
    image.classList.remove("hidden");
    image.src = signature.image;
    image.alt = signature.alt;
    document.getElementById(
        "temporal-credit"
    ).textContent = `Image: ${signature.credit}`;

    bindImageFallback(document.getElementById("temporal-screen"));
}

document.getElementById("scan-temporal").addEventListener("click", () => {
    if (state.labs.temporalComplete || state.labs.temporalReview) {
        return;
    }

    const input = document.getElementById("temporal-year");
    const year = Number(input.value);
    const signature = temporalSignatures[state.labs.temporalStep];
    const feedback = document.getElementById("temporal-feedback");

    if (input.value === "" || !signature.valid(year)) {
        feedback.textContent =
            "Temporal mismatch. Review the unlocked guidance and try again.";

        feedback.className = "form-message error";
        const instruction = document.getElementById("temporal-instruction");
        instruction.textContent = signature.instruction;
        instruction.classList.remove("hidden", "complete");
        instruction.classList.add("guidance");

        shakeElement("temporal-controls");
        return;
    }

    state.labs.temporalReview = true;
    state.labs.temporalLastYear = year;

    saveState();
    renderTemporal();
});

document.getElementById("next-temporal").addEventListener("click", () => {
    if (!state.labs.temporalReview) {
        return;
    }

    const finalSignal = state.labs.temporalStep === temporalSignatures.length - 1;
    state.labs.temporalReview = false;

    if (finalSignal) {
        state.labs.temporalComplete = true;
    } else {
        state.labs.temporalStep++;
        state.labs.temporalLastYear = null;
    }

    document.getElementById("temporal-year").value = "";

    saveState();
    renderTemporal();

    if (finalSignal) {
        showReturnAction("temporal-progress", "Temporal archive complete.");
    }
});

/* Knowledge lab */

function renderKnowledge() {
    const feedback = document.getElementById("knowledge-feedback");
    if (state.labs.knowledgeComplete) {
        feedback.textContent = "Academy certification earned.";
        feedback.className = "form-message success";
        document.getElementById("request-question").textContent =
            "Request another question";
    }
}

document
    .getElementById("request-question")
    .addEventListener("click", requestQuestion);

function requestQuestion() {
    const panel = document.getElementById("question-panel");
    const text = document.getElementById("question-text");
    panel.classList.remove("hidden");
    text.textContent = "Contacting Academy network…";
    document.getElementById("answer-options").innerHTML = "";
    document.getElementById("knowledge-feedback").textContent = "";

    fetch("https://opentdb.com/api.php?amount=1&category=17&type=multiple")
        .then((response) => {
            if (!response.ok) throw new Error("Network error");
            return response.json();
        })
        .then((data) => {
            if (data.response_code !== 0 || !data.results.length)
                throw new Error("No question");
            renderQuestion(data.results[0], "Academy network / Open Trivia DB");
        })
        .catch(() => {
            const fallback =
                fallbackQuestions[Math.floor(Math.random() * fallbackQuestions.length)];
            renderQuestion(fallback, "Local fallback question");
        });
}

function renderQuestion(question, source) {
    const correct = decodeEntities(question.correct_answer);
    const answers = shuffle([
        correct,
        ...question.incorrect_answers.map(decodeEntities)
    ]);
    document.getElementById("question-source").textContent = source;
    document.getElementById("question-text").textContent = decodeEntities(
        question.question
    );
    const options = document.getElementById("answer-options");
    options.innerHTML = "";

    answers.forEach((answer) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer-button";
        button.textContent = answer;
        button.addEventListener("click", () =>
            checkKnowledgeAnswer(answer, correct)
        );
        options.appendChild(button);
    });
}

function checkKnowledgeAnswer(answer, correct) {
    const feedback = document.getElementById("knowledge-feedback");
    const buttons = document.querySelectorAll("#answer-options .answer-button");
    buttons.forEach((button) => (button.disabled = true));

    if (answer === correct) {
        state.labs.knowledgeComplete = true;
        saveState();
        feedback.textContent = "Correct. Academy certification earned.";
        feedback.className = "form-message success";

        showReturnAction("knowledge-feedback", "Academy certification recorded.");
    } else {
        feedback.textContent = `Incorrect. The correct answer was ${correct}. Request another question to retry.`;
        feedback.className = "form-message error";

        shakeElement("question-panel");

        document.getElementById("request-question").textContent =
            "Request another question";
    }
}

function decodeEntities(value) {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = value;
    return textarea.value;
}

/* Restore the saved header on load */

if (savedSession && state.explorerName) {
    updateHeader();
}

showScreen("access-screen");