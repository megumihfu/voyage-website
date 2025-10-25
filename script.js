// informations des pays 
const countries = {
    "France": {
        background: "https://images6.alphacoders.com/337/thumb-1920-337623.jpg",
        video: "https://youtu.be/e2wm_VRROvA?si=L8pLicUVHkXJOBgU",
        images: [
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
            "https://images.unsplash.com/photo-1628285477029-e98c852cfb63?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
            "https://images.unsplash.com/photo-1738684652279-0476053007a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
        ],
        categories: {
            "Monuments": ["Tour Eiffel", "Louvre", "Mont Saint-Michel"],
            "Activités": ["Croisière sur la Seine", "Randonnée dans les Alpes", "Visite des vignobles"],
            "Plats à goûter": ["Baguette", "Croissant", "Ratatouille", "Fromage"],
            "Endroits naturels": ["Gorges du Verdon", "Dune du Pilat", "Parc national des Écrins"]
        }
    },
    "Italie": {
        background: "https://images.unsplash.com/photo-1551801319-ca06060f3fcc?auto=format&fit=crop&q=80&w=1170",
        video: "https://youtu.be/zS4AP0Q8L8g?si=pDZVbECEMocYXd4B",
        images: [
            "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=800",
            "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800",
            "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800",
            "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800"
        ],
        categories: {
            "Monuments": ["Colisée", "Tour de Pise", "Vatican"],
            "Activités": ["Balade à Venise", "Dégustation de vins en Toscane", "Visite de musées"],
            "Plats à goûter": ["Pizza", "Pasta", "Gelato"],
            "Endroits naturels": ["Côte Amalfitaine", "Dolomites", "Vésuve"]
        }
    },
    "Japon": {
        background: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80&w=1192",
        video: "https://youtu.be/WLIv7HnZ_fE?si=9c30L98qnc40bul1",
        images: [
            "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800",
            "https://images.unsplash.com/photo-1532236204992-f5e85c024202?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1195",
            "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800",
            "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800"
        ],
        categories: {
            "Monuments": ["Temple Kiyomizu", "Château de Himeji", "Torii de Miyajima"],
            "Activités": ["Cerisiers en fleurs", "Onsen", "Sumo", "Karaoké"],
            "Plats à goûter": ["Sushi", "Ramen", "Okonomiyaki", "Matcha"],
            "Endroits naturels": ["Mont Fuji", "Bambouseraie d'Arashiyama", "Îles Okinawa"]
        }
    },
    "USA": {
        background: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1470&q=80",
        video: "https://youtu.be/JUfybRQc_1o?si=3VEfmLpn0RL3IP6N",
        images: [
            "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800",
            "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800",
            "https://images.unsplash.com/photo-1422464804701-7d8356b3a42f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
            "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?w=800"
        ],
        categories: {
            "Monuments": ["Statue de la Liberté", "Grand Canyon", "Hollywood Sign"],
            "Activités": ["Road trip Route 66", "Visite des musées", "Concerts à New York"],
            "Plats à goûter": ["Burgers", "BBQ", "Pancakes"],
            "Endroits naturels": ["Yosemite", "Yellowstone", "Everglades"]
        }
    },
    "Espagne": {
        background: "https://wallpapers.com/images/high/spain-seville-plaza-de-espana-2furryism2gihnyv.webp",
        video: "https://youtu.be/PNK0HCyUx8Y?si=cAgLWvWTj5AgF7Ws",
        images: [
            "https://images.unsplash.com/photo-1558642084-fd07fae5282e?w=800",
            "https://images.unsplash.com/photo-1512753360435-329c4535a9a7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            "https://images.unsplash.com/photo-1531649755688-af9ee584c794?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
            "https://images.unsplash.com/photo-1565352336881-dc2c1f7d2d5b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735"
        ],
        categories: {
            "Monuments": ["Sagrada Familia", "Alhambra", "Plaza Mayor"],
            "Activités": ["Flamenco", "Tapas tour", "Plages de Barcelone"],
            "Plats à goûter": ["Paella", "Churros", "Tortilla Española"],
            "Endroits naturels": ["Parc national de Picos de Europa", "Costa Brava", "Îles Baléares"]
        }
    },
    "Australie": {
        background: "https://images5.alphacoders.com/555/thumb-1920-555090.jpg",
        video: "https://youtu.be/kLuqCtnKr_8?si=8-6xfWyrfPC8h04q",
        images: [
            "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800",
            "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800",
            "https://images.unsplash.com/photo-1605235904827-2fc511a86dd0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
            "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800"
        ],
        categories: {
            "Monuments": ["Opéra de Sydney", "Harbour Bridge", "Twelve Apostles"],
            "Activités": ["Plongée à la Grande Barrière", "Surf", "Safari animalier"],
            "Plats à goûter": ["Meat Pie", "Lamingtons", "Vegemite", "Barramundi"],
            "Endroits naturels": ["Uluru", "Blue Mountains", "Great Ocean Road"]
        }
    },
    "Brésil": {
        background: "https://images8.alphacoders.com/501/thumb-1920-501463.jpg",
        video: "https://youtu.be/dJJUNLxDIok?si=7hziNMWrmGcKbYLk",
        images: [
            "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800",
            "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=800",
            "https://images.unsplash.com/photo-1621693247912-767f47a3c382?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
            "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=800"
        ],
        categories: {
            "Monuments": ["Christ Rédempteur", "Stade Maracanã", "Theatro Municipal"],
            "Activités": ["Carnaval de Rio", "Plage de Copacabana", "Samba", "Capoeira"],
            "Plats à goûter": ["Feijoada", "Pão de queijo", "Açaí", "Churrasco"],
            "Endroits naturels": ["Amazonie", "Iguaçu Falls", "Pantanal"]
        }
    },
    "Grèce": {
        background: "https://images5.alphacoders.com/110/thumb-1920-1108672.jpg",
        video: "https://youtu.be/PlCPx9yETCo?si=IjNX6PZXtwAu0L-W",
        images: [
            "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800",
            "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800",
            "https://images.unsplash.com/photo-1504714146340-959ca07e1f38?w=800",
            "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800"
        ],
        categories: {
            "Monuments": ["Acropole", "Temple de Zeus", "Parthénon", "Delphes"],
            "Activités": ["Croisière dans les Cyclades", "Visite de musées", "Plages des îles"],
            "Plats à goûter": ["Moussaka", "Souvlaki", "Tzatziki", "Baklava"],
            "Endroits naturels": ["Santorin", "Météores", "Plage de Navagio"]
        }
    },
    "Égypte": {
        background: "https://picfiles.alphacoders.com/286/thumb-1920-286193.jpg",
        video: "https://youtu.be/BapSQFJPMM0?si=UOp7PT3I257t0pSr",
        images: [
            "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800",
            "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800",
            "https://images.unsplash.com/photo-1502640403806-cf2ac7a5d37a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800"
        ],
        categories: {
            "Monuments": ["Pyramides de Gizeh", "Sphinx", "Vallée des Rois", "Temple de Karnak"],
            "Activités": ["Croisière sur le Nil", "Safari dans le désert", "Plongée en Mer Rouge"],
            "Plats à goûter": ["Koshari", "Ful Medames", "Falafel", "Mahshi"],
            "Endroits naturels": ["Oasis de Siwa", "Désert blanc", "Mer Rouge"]
        }
    },
    "Thaïlande": {
        background: "https://images8.alphacoders.com/522/thumb-1920-522015.jpg",
        video: "https://youtu.be/Q6Vztf2X8yc?si=cE2zgufkWDceHCQ4",
        images: [
            "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800",
            "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800",
            "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?w=800",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
        ],
        categories: {
            "Monuments": ["Grand Palais", "Wat Pho", "Wat Arun", "Temple Blanc"],
            "Activités": ["Marchés flottants", "Cours de cuisine thaï", "Massage traditionnel", "Full Moon Party"],
            "Plats à goûter": ["Pad Thai", "Tom Yum", "Mango Sticky Rice", "Som Tam"],
            "Endroits naturels": ["Phuket", "Chiang Mai montagnes", "Îles Phi Phi", "Baie de Phang Nga"]
        }
    }
};

const select = document.getElementById('country-select');
const blocksContainer = document.getElementById('blocks-container');
const gallerySection = document.getElementById('gallery-section');
const galleryGrid = document.getElementById('gallery-grid');
const videoContainer = document.getElementById('video-container');
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const modalClose = document.querySelector('.modal-close');
const videoFrame = document.getElementById('travel-video');

// affiche le choix en fonction du pays choisi
Object.keys(countries).forEach(country => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    select.appendChild(option);
});

// changement de pays
select.addEventListener('change', (e) => {
    const country = e.target.value;
    if (country) {
        updateCountry(country);
    } else {
        blocksContainer.innerHTML = '';
        gallerySection.style.display = 'none';
        videoContainer.style.display = 'none';
        document.body.style.backgroundImage = "url('https://images6.alphacoders.com/737/thumb-1920-737288.jpg')";
    }
});

function updateCountry(country) {
    const data = countries[country];
    
    // change le fond
    document.body.style.backgroundImage = `url('${data.background}')`;
    
    // met à jour la vidéo - url differente
    videoFrame.src = data.video;
    videoContainer.style.display = 'block';
    
    // créer les notes
    blocksContainer.innerHTML = '';
    const categoriesToShow = Object.keys(data.categories);
    
    categoriesToShow.forEach((category, index) => {
        const block = createNoteBlock(category, data.categories[category]);
        setTimeout(() => blocksContainer.appendChild(block), index * 100);
    });
    
    // afficher la galerie
    displayGallery(data.images);
}


function createNoteBlock(title, items) {
    const block = document.createElement('div');
    block.className = 'note-block';
    
    const inner = document.createElement('div');
    inner.className = 'note-block-inner';
    
    const front = document.createElement('div');
    front.className = 'note-block-front';
    front.innerHTML = `
        <h3>${title}</h3>
        <ul>
            ${items.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
    
    inner.appendChild(front);
    block.appendChild(inner);
    
    return block;
}

//affiche la galerie (et toutes les images pour chaque pays)
function displayGallery(images) {
    galleryGrid.innerHTML = '';
    gallerySection.style.display = 'block';
    
    images.forEach((imgUrl, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = imgUrl;
        img.alt = `Photo ${index + 1}`;
        img.loading = 'lazy';
        
        item.appendChild(img);
        item.addEventListener('click', () => openModal(imgUrl));
        
        setTimeout(() => galleryGrid.appendChild(item), index * 50);
    });
}

// ouvre l'image dans une fenetre externe
function openModal(imgUrl) {
    modal.style.display = 'block';
    modalImg.src = imgUrl;
}

// ferme la fenetre si on clique sur la croix
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

//ferme la fenetre si on clique en dehors
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// infos survol souris
const tooltip = document.getElementById('tooltip');
document.addEventListener('mousemove', (e) => {
    const target = e.target.closest('li');
    if (target && target.closest('.note-block')) {
        tooltip.textContent = target.textContent;
        tooltip.style.display = 'block';
        tooltip.style.left = e.pageX + 15 + 'px';
        tooltip.style.top = e.pageY + 15 + 'px';
    } else {
        tooltip.style.display = 'none';
    }
});