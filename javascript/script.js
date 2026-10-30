console.log("My JS file is connected!");
const flavorSelect = document.getElementById("flavor-select");
const flavorResult = document.getElementById("flavor-result");

// object using titles and descriptions
const seasonalTreats = {
    "horchata": {
        title: "Horchata Cinnamon Roll",
        desc: "Baked fresh daily with ground cinnamon and sweet vanilla horchata icing."
    },
    "pumpkin-maple": {
        title: "Pumpkin Maple Scone",
        desc: "Cozy spiced pumpkin flavor drizzled with real maple glaze and sanding sugar."
    },
    "cranberry-orange": {
        title: "Cranberry Orange Tart",
        desc: "Gooey citrus filling paired with tart cranberries in a buttery crust."
    },
    "lemon-bar": {
        title: "Luxe Meyer Lemon Bar",
        desc: "A buttery shortbread crust filled with pillowy, tart lemon curd and dusted with powdered sugar."
    }
};

// The Event Listener looks up the flavor 
flavorSelect.addEventListener("change", function() {
    const selected = flavorSelect.value;
    
    if (seasonalTreats[selected]) {
        flavorResult.innerHTML = `<h3>${seasonalTreats[selected].title}</h3><p>${seasonalTreats[selected].desc}</p>`;
    } else {
        flavorResult.innerHTML = ""; // clears the box if "-- Choose a Flavor --" is selected
    }
});
const savedFlavor = localStorage.getItem("userFlavor");
if (savedFlavor) {
    flavorSelect.value = savedFlavor;
    if (seasonalTreats[savedFlavor]) {
        flavorResult.innerHTML = `<h3>${seasonalTreats[savedFlavor].title}</h3><p>${seasonalTreats[savedFlavor].desc}</p>`;
    }
}

// 3. EVENT LISTENER: Update the page and save the choice to localStorage when changed
flavorSelect.addEventListener("change", function() {
    const selected = flavorSelect.value;
    
    if (seasonalTreats[selected]) {
        flavorResult.innerHTML = `<h3>${seasonalTreats[selected].title}</h3><p>${seasonalTreats[selected].desc}</p>`;
        
        // save the selection into browser's memory
        localStorage.setItem("userFlavor", selected);
    } else {
        flavorResult.innerHTML = "";
        
        // remove from storage if they pick "-- Choose a Flavor --"
        localStorage.removeItem("userFlavor");
    }
});
