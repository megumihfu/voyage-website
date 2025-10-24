const defaultBg = "url('https://images6.alphacoders.com/737/thumb-1920-737288.jpg')";
document.body.style.backgroundImage = defaultBg;

const countries = [
    {
        name: "France",
        code: "france",
        bg: "url('https://images6.alphacoders.com/337/thumb-1920-337623.jpg')",
        color: "#FFF8DC",
        info: {
            "Présentation": ["La France est célèbre pour sa culture, sa gastronomie et ses monuments historiques."],
            "Monuments": ["Tour Eiffel", "Louvre", "Mont Saint-Michel"],
            "Activités": ["Croisière sur la Seine", "Randonnée dans les Alpes", "Visite des vignobles"],
            "Plats à goûter": ["Baguette", "Croissant", "Ratatouille", "Foie gras"],
            "Endroits naturels": ["Gorges du Verdon", "Dune du Pilat", "Parc national des Écrins"]
        }
    },
    {
        name: "Italie",
        code: "italy",
        bg: "url('https://images.unsplash.com/photo-1551801319-ca06060f3fcc?auto=format&fit=crop&q=80&w=1170')",
        color: "#FFFACD",
        info: {
            "Présentation": ["L'Italie est connue pour son art, son architecture et sa cuisine exquise."],
            "Monuments": ["Colisée", "Tour de Pise", "Vatican"],
            "Activités": ["Balade à Venise", "Dégustation de vins en Toscane", "Visite de musées"],
            "Plats à goûter": ["Pizza", "Pasta", "Gelato"],
            "Endroits naturels": ["Côte Amalfitaine", "Dolomites", "Vésuve"]
        }
    },
    {
        name: "Japon",
        code: "japan",
        bg: "url('https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80&w=1192')",
        color: "#FFFAF0",
        info: {
            "Présentation": ["Le Japon mélange tradition et modernité, avec ses temples, sa cuisine et ses technologies."],
            "Monuments": ["Temple Kiyomizu", "Château de Himeji", "Torii de Miyajima"],
            "Activités": ["Cerisiers en fleurs", "Onsen", "Sumo", "Karaoké"],
            "Plats à goûter": ["Sushi", "Ramen", "Okonomiyaki", "Matcha"],
            "Endroits naturels": ["Mont Fuji", "Bambouseraie d'Arashiyama", "Îles Okinawa"]
        }
    },
    {
        name: "USA",
        code: "usa",
        bg: "url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1470&q=80')",
        color: "#F0FFF0",
        info: {
            "Présentation": ["Les USA sont connus pour leurs paysages variés et leur culture pop."],
            "Monuments": ["Statue de la Liberté", "Grand Canyon", "Hollywood Sign"],
            "Activités": ["Road trip Route 66", "Visite des musées", "Concerts à New York"],
            "Plats à goûter": ["Burgers", "BBQ", "Pancakes"],
            "Endroits naturels": ["Yosemite", "Yellowstone", "Everglades"]
        }
    },
    {
        name: "Espagne",
        code: "spain",
        bg: "url('https://wallpapers.com/images/high/spain-seville-plaza-de-espana-2furryism2gihnyv.webp')",
        color: "#FFE4E1",
        info: {
            "Présentation": ["L’Espagne est riche en histoire, culture et gastronomie méditerranéenne."],
            "Monuments": ["Sagrada Familia", "Alhambra", "Plaza Mayor"],
            "Activités": ["Flamenco", "Tapas tour", "Plages de Barcelone"],
            "Plats à goûter": ["Paella", "Churros", "Tortilla Española"],
            "Endroits naturels": ["Parc national de Picos de Europa", "Costa Brava", "Îles Baléares"]
        }
    },
    {
        name: "Australie",
        code: "australia",
        bg: "url('https://images5.alphacoders.com/555/thumb-1920-555090.jpg')",
        color: "#E0FFFF",
        info: {
            "Présentation": ["L’Australie est célèbre pour sa faune unique et ses paysages naturels."],
            "Monuments": ["Opéra de Sydney", "Harbour Bridge"],
            "Activités": ["Plongée à la Grande Barrière de Corail", "Surf"],
            "Plats à goûter": ["Meat Pie", "Lamingtons"],
            "Endroits naturels": ["Uluru", "Blue Mountains", "Great Ocean Road"]
        }
    },
    {
        name: "Brésil",
        code: "brazil",
        bg: "url('https://images8.alphacoders.com/501/thumb-1920-501463.jpg')",
        color: "#FFF0F5",
        info: {
            "Présentation": ["Le Brésil est vibrant, avec des plages célèbres et le carnaval de Rio."],
            "Monuments": ["Christ Rédempteur", "Stade Maracanã"],
            "Activités": ["Carnaval de Rio", "Plage de Copacabana"],
            "Plats à goûter": ["Feijoada", "Pão de queijo"],
            "Endroits naturels": ["Amazonie", "Iguaçu Falls", "Pantanal"]
        }
    },
    {
        name: "Grèce",
        code: "greece",
        bg: "url('https://images5.alphacoders.com/110/thumb-1920-1108672.jpg')",
        color: "#FFFACD",
        info: {
            "Présentation": ["La Grèce est le berceau de la civilisation occidentale avec de magnifiques îles."],
            "Monuments": ["Acropole", "Temple de Zeus"],
            "Activités": ["Croisière dans les Cyclades", "Visite de musées"],
            "Plats à goûter": ["Moussaka", "Souvlaki"],
            "Endroits naturels": ["Santorin", "Météores"]
        }
    },
    {
        name: "Égypte",
        code: "egypt",
        bg: "url('https://picfiles.alphacoders.com/286/thumb-1920-286193.jpg')",
        color: "#FFEFD5",
        info: {
            "Présentation": ["L’Égypte est célèbre pour ses pyramides et son histoire antique."],
            "Monuments": ["Pyramides de Gizeh", "Sphinx"],
            "Activités": ["Croisière sur le Nil", "Safari dans le désert"],
            "Plats à goûter": ["Koshari", "Ful Medames"],
            "Endroits naturels": ["Oasis de Siwa", "Désert blanc"]
        }
    },
    {
        name: "Thaïlande",
        code: "thailand",
        bg: "url('https://images8.alphacoders.com/522/thumb-1920-522015.jpg')",
        color: "#F0FFF0",
        info: {
            "Présentation": ["La Thaïlande est réputée pour ses temples, plages et cuisine délicieuse."],
            "Monuments": ["Grand Palais", "Wat Pho"],
            "Activités": ["Marchés flottants", "Cours de cuisine thaïe"],
            "Plats à goûter": ["Pad Thai", "Tom Yum", "Mango Sticky Rice"],
            "Endroits naturels": ["Phuket", "Chiang Mai montagnes"]
        }
    }
];


// DOM
const select = document.getElementById("country-select");
const container = document.getElementById("blocks-container");

const tooltip = document.createElement("div");
tooltip.id = "tooltip";
tooltip.style.position = "absolute";
tooltip.style.padding = "8px 12px";
tooltip.style.background = "rgba(0,0,0,0.8)";
tooltip.style.color = "#fff";
tooltip.style.borderRadius = "5px";
tooltip.style.pointerEvents = "none";
tooltip.style.display = "none";
tooltip.style.zIndex = "1000";
tooltip.style.transition = "opacity 0.2s ease";
document.body.appendChild(tooltip);

// remplir le select
countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country.code;
    option.textContent = country.name;
    select.appendChild(option);
});

// fonction pour créer blocs
function showCountryBlocks(code) {
    container.innerHTML = "";
    const country = countries.find(c => c.code === code);
    if (!country) return;

    document.body.style.backgroundImage = country.bg;

    for (let category in country.info) {
        const block = document.createElement("div");
        block.className = "note-block";
        block.style.backgroundColor = country.color;

        const title = document.createElement("h3");
        title.textContent = category;

        const ul = document.createElement("ul");
        country.info[category].forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;

            li.addEventListener("click", (e) => {
                tooltip.style.display = "block";
                tooltip.style.left = e.pageX + 10 + "px";
                tooltip.style.top = e.pageY + 10 + "px";
                tooltip.textContent = `Infos ou image sur ${item}`;
            });

            ul.appendChild(li);
        });

        block.appendChild(title);
        block.appendChild(ul);
        container.appendChild(block);
    }
}

// cacher tooltip quand on clique ailleurs
document.addEventListener("click", e => {
    if (!e.target.closest(".note-block ul li")) {
        tooltip.style.display = "none";
    }
});

select.addEventListener("change", (e) => showCountryBlocks(e.target.value));