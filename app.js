// Application data
const dreamData = {
  "dreams": [
    {
      "id": 1,
      "title": "Echoes of Forgotten Memories",
      "description": "A nostalgic journey through childhood memories, where every corner holds a piece of your past waiting to be rediscovered.",
      "price": "$89.99",
      "rating": 4.7,
      "category": "nostalgic",
      "seller": "MemoryWeaver",
      "lucidity": "Medium"
    },
    {
      "id": 2,
      "title": "The Infinite Library",
      "description": "Books that write themselves in real-time, containing stories from parallel universes and unwritten histories.",
      "price": "$156.50",
      "rating": 4.9,
      "category": "surreal",
      "seller": "BookDreamer",
      "lucidity": "High"
    },
    {
      "id": 3,
      "title": "Dancing with Shadows",
      "description": "A mystical waltz with your deepest fears, transforming anxiety into graceful movements of self-discovery.",
      "price": "$112.75",
      "rating": 4.2,
      "category": "transformative",
      "seller": "ShadowDancer",
      "lucidity": "Low"
    },
    {
      "id": 4,
      "title": "Crystal Cave Visions",
      "description": "Geometric patterns of pure consciousness unfold in caverns made of living crystal and light.",
      "price": "$203.25",
      "rating": 4.8,
      "category": "spiritual",
      "seller": "CrystalSeer",
      "lucidity": "High"
    },
    {
      "id": 5,
      "title": "Time-Traveling Teacup",
      "description": "Alice's adventures in temporal loops, where every sip of tea transports you to a different era.",
      "price": "$134.99",
      "rating": 4.6,
      "category": "adventure",
      "seller": "WonderlandGuide",
      "lucidity": "Medium"
    },
    {
      "id": 6,
      "title": "Ocean of Liquid Stars",
      "description": "Swimming through space where stars flow like water and gravity becomes your playground.",
      "price": "$167.80",
      "rating": 4.5,
      "category": "cosmic",
      "seller": "StarSwimmer",
      "lucidity": "High"
    }
  ],
  "dreamTypes": [
    {
      "name": "Lucid Dreams",
      "description": "Control your destiny within the dream realm",
      "icon": "🌟",
      "features": ["Full consciousness", "Dream control", "Skill practice"]
    },
    {
      "name": "Nightmares",
      "description": "Confront your deepest fears safely",
      "icon": "🌙",
      "features": ["Safe exploration", "Fear processing", "Therapeutic value"]
    },
    {
      "name": "Prophetic Dreams",
      "description": "Glimpses of potential futures",
      "icon": "🔮",
      "features": ["Future insights", "Intuitive guidance", "Symbolic messages"]
    },
    {
      "name": "Flying Dreams",
      "description": "Experience boundless freedom",
      "icon": "🕊️",
      "features": ["Limitless movement", "Perspective shifts", "Liberation feeling"]
    },
    {
      "name": "Water Dreams",
      "description": "Dive into emotional depths",
      "icon": "🌊",
      "features": ["Emotional cleansing", "Subconscious exploration", "Healing waters"]
    },
    {
      "name": "Recurring Dreams",
      "description": "Messages your subconscious repeats",
      "icon": "🔄",
      "features": ["Important messages", "Unresolved issues", "Pattern recognition"]
    }
  ],
  "lucidDreamers": [
    {
      "name": "Dr. Luna Silverstream",
      "specialty": "Dream Architecture",
      "achievements": "Built 1,247 dream worlds",
      "rating": 4.9,
      "description": "Master architect of impossible structures and gravity-defying landscapes in the dream realm."
    },
    {
      "name": "Marcus Nightweaver",
      "specialty": "Shadow Realm Guardian",
      "achievements": "Protected 5,000+ dreamers",
      "rating": 4.8,
      "description": "Expert in navigating sleep paralysis and transforming nightmare encounters into empowering experiences."
    },
    {
      "name": "Aria Mindbridge",
      "specialty": "Therapeutic Dreaming",
      "achievements": "Healed 2,300+ trauma cases",
      "rating": 4.7,
      "description": "Renowned for using lucid dreaming techniques to facilitate emotional healing and personal growth."
    }
  ],
  "dreamObjects": [
    {
      "name": "Dreamcatcher",
      "meaning": "Protection from nightmares, filtering negative dreams",
      "origin": "Native American tradition",
      "power": "Dream filtering and protection"
    },
    {
      "name": "Cheshire Cat",
      "meaning": "Wisdom through riddles, embracing paradox",
      "origin": "Alice in Wonderland",
      "power": "Revealing hidden truths through mystery"
    },
    {
      "name": "Pocket Watch",
      "meaning": "Time consciousness, urgency, life transitions",
      "origin": "Universal symbol",
      "power": "Temporal awareness and timing"
    },
    {
      "name": "Mirror",
      "meaning": "Self-reflection, truth revelation, inner wisdom",
      "origin": "Ancient symbolism",
      "power": "Showing hidden aspects of self"
    },
    {
      "name": "Spiral Staircase",
      "meaning": "Spiritual ascension, personal growth journey",
      "origin": "Architectural mysticism",
      "power": "Facilitating consciousness elevation"
    },
    {
      "name": "Mad Hatter's Hat",
      "meaning": "Creative madness, unconventional thinking",
      "origin": "Alice in Wonderland",
      "power": "Unlocking creative potential"
    }
  ],
  "dreamFacts": [
    "The average person spends 6 years of their life dreaming",
    "You can only dream about faces you've already seen in real life",
    "Blind people dream with enhanced sounds, smells, and touch sensations",
    "Dreams help consolidate memories and process emotions",
    "REM sleep increases creativity and problem-solving abilities by 60%",
    "Most dreams are forgotten within 5 minutes of waking up",
    "Dreams occur in 90-minute cycles throughout the night",
    "Lucid dreaming can be learned and practiced like any skill",
    "Dreams in black and white are rare; most people dream in color",
    "Animals also experience REM sleep and likely dream",
    "Nightmares often occur during times of stress or anxiety",
    "Dreams can last anywhere from a few seconds to 45 minutes",
    "The brain is more active during REM sleep than when awake",
    "Dreams may help process traumatic experiences safely",
    "Some people can control their dreams through lucid dreaming techniques"
  ],
  "symbolInterpretations": [
    {
      "symbol": "Water",
      "meanings": ["Emotions and feelings", "Subconscious mind", "Purification and cleansing", "Life transitions"]
    },
    {
      "symbol": "Flying",
      "meanings": ["Freedom and liberation", "Rising above problems", "Spiritual ascension", "Ambition and goals"]
    },
    {
      "symbol": "Falling",
      "meanings": ["Loss of control", "Anxiety and fear", "Letting go", "Life changes"]
    },
    {
      "symbol": "Animals",
      "meanings": ["Instinctual wisdom", "Natural behaviors", "Spiritual guides", "Repressed emotions"]
    },
    {
      "symbol": "Death",
      "meanings": ["Transformation", "End of a phase", "Rebirth", "Fear of change"]
    },
    {
      "symbol": "House",
      "meanings": ["The self or psyche", "Security and comfort", "Family relationships", "Personal growth"]
    }
  ]
};

// Application state
let cart = [];
let currentDreams = dreamData.dreams;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    renderDreams();
    renderDreamTypes();
    renderLucidDreamers();
    renderDreamObjects();
    renderSymbolInterpretations();
    setupEventListeners();
    setupScrollAnimations();
    startRandomGlitches();
    updateCartDisplay();
});

// Render dreams in marketplace
function renderDreams(dreams = dreamData.dreams) {
    const dreamsGrid = document.getElementById('dreamsGrid');
    if (!dreamsGrid) return;
    
    dreamsGrid.innerHTML = '';
    currentDreams = dreams;

    dreams.forEach(dream => {
        const dreamCard = createDreamCard(dream);
        dreamsGrid.appendChild(dreamCard);
    });
}

// Create dream card element
function createDreamCard(dream) {
    const card = document.createElement('div');
    card.className = 'dream-card fade-in';
    
    const stars = generateStars(dream.rating);
    
    card.innerHTML = `
        <div class="dream-card__content">
            <h3 class="dream-card__title">${dream.title}</h3>
            <p class="dream-card__description">${dream.description}</p>
            <div class="dream-card__meta">
                <span class="dream-card__price">${dream.price}</span>
                <div class="dream-rating">
                    <span class="rating-stars">${stars}</span>
                    <span>${dream.rating}</span>
                </div>
            </div>
            <div class="dream-card__seller">Seller: ${dream.seller}</div>
            <div class="dream-card__lucidity">Lucidity: ${dream.lucidity}</div>
            <div class="dream-card__actions">
                <button class="btn btn--dream" onclick="viewDreamDetails(${dream.id})">View Details</button>
                <button class="btn btn--dream" onclick="addToCart(${dream.id})">Add to Cart</button>
            </div>
        </div>
    `;
    
    return card;
}

// Generate star rating display
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '⭐';
    }
    if (hasHalfStar) {
        stars += '✨';
    }
    
    return stars;
}

// Render dream types
function renderDreamTypes() {
    const dreamTypesGrid = document.getElementById('dreamTypesGrid');
    if (!dreamTypesGrid) return;
    
    dreamTypesGrid.innerHTML = '';

    dreamData.dreamTypes.forEach(type => {
        const card = document.createElement('div');
        card.className = 'dream-type-card fade-in';
        
        const featuresHTML = type.features.map(feature => `<li>${feature}</li>`).join('');
        
        card.innerHTML = `
            <div class="dream-type-card__icon">${type.icon}</div>
            <h3 class="dream-type-card__title">${type.name}</h3>
            <p class="dream-type-card__description">${type.description}</p>
            <ul class="dream-type-card__features">${featuresHTML}</ul>
        `;
        
        dreamTypesGrid.appendChild(card);
    });
}

// Render lucid dreamers
function renderLucidDreamers() {
    const dreamersGrid = document.getElementById('dreamersGrid');
    if (!dreamersGrid) return;
    
    dreamersGrid.innerHTML = '';

    dreamData.lucidDreamers.forEach(dreamer => {
        const card = document.createElement('div');
        card.className = 'dreamer-card fade-in';
        
        const stars = generateStars(dreamer.rating);
        
        card.innerHTML = `
            <h3 class="dreamer-card__name">${dreamer.name}</h3>
            <div class="dreamer-card__specialty">${dreamer.specialty}</div>
            <p class="dreamer-card__description">${dreamer.description}</p>
            <div class="dreamer-card__achievements">${dreamer.achievements}</div>
            <div class="dream-rating">
                <span class="rating-stars">${stars}</span>
                <span>${dreamer.rating}</span>
            </div>
        `;
        
        dreamersGrid.appendChild(card);
    });
}

// Render dream objects
function renderDreamObjects() {
    const objectsGrid = document.getElementById('objectsGrid');
    if (!objectsGrid) return;
    
    objectsGrid.innerHTML = '';

    dreamData.dreamObjects.forEach(object => {
        const card = document.createElement('div');
        card.className = 'object-card fade-in';
        
        card.innerHTML = `
            <h3 class="object-card__name">${object.name}</h3>
            <div class="object-tooltip">
                <strong>Meaning:</strong> ${object.meaning}<br>
                <strong>Origin:</strong> ${object.origin}<br>
                <strong>Power:</strong> ${object.power}
            </div>
        `;
        
        objectsGrid.appendChild(card);
    });
}

// Render symbol interpretations
function renderSymbolInterpretations() {
    const symbolsGrid = document.getElementById('symbolsGrid');
    if (!symbolsGrid) return;
    
    symbolsGrid.innerHTML = '';

    dreamData.symbolInterpretations.forEach(symbol => {
        const card = document.createElement('div');
        card.className = 'symbol-card fade-in';
        
        const meaningsHTML = symbol.meanings.map(meaning => `<li>${meaning}</li>`).join('');
        
        card.innerHTML = `
            <h3 class="symbol-card__name">${symbol.symbol}</h3>
            <ul class="symbol-card__meanings">${meaningsHTML}</ul>
        `;
        
        symbolsGrid.appendChild(card);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Filter event listeners
    const categoryFilter = document.getElementById('categoryFilter');
    const lucidityFilter = document.getElementById('lucidityFilter');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterDreams);
    }
    if (lucidityFilter) {
        lucidityFilter.addEventListener('change', filterDreams);
    }
    
    // Random fact generator
    const generateFactBtn = document.getElementById('generateFactBtn');
    if (generateFactBtn) {
        generateFactBtn.addEventListener('click', generateRandomFact);
    }
    
    // Symbol search
    const searchBtn = document.getElementById('searchBtn');
    const symbolSearch = document.getElementById('symbolSearch');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', searchSymbols);
    }
    if (symbolSearch) {
        symbolSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchSymbols();
            }
        });
    }
    
    // Cart button
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', openCart);
    }
    
    // Navigation links smooth scrolling
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Easter egg: typing 'dream' sequence
    let easterEggSequence = [];
    document.addEventListener('keydown', function(e) {
        easterEggSequence.push(e.key.toLowerCase());
        if (easterEggSequence.length > 5) {
            easterEggSequence.shift();
        }
        
        if (easterEggSequence.join('') === 'dream') {
            triggerEasterEgg();
            easterEggSequence = [];
        }
    });
}

// Filter dreams
function filterDreams() {
    const categoryFilter = document.getElementById('categoryFilter');
    const lucidityFilter = document.getElementById('lucidityFilter');
    
    if (!categoryFilter || !lucidityFilter) return;
    
    const categoryValue = categoryFilter.value;
    const lucidityValue = lucidityFilter.value;
    
    let filteredDreams = dreamData.dreams.filter(dream => {
        const categoryMatch = !categoryValue || dream.category === categoryValue;
        const lucidityMatch = !lucidityValue || dream.lucidity === lucidityValue;
        return categoryMatch && lucidityMatch;
    });
    
    renderDreams(filteredDreams);
    triggerScrollAnimations();
}

// Generate random dream fact
function generateRandomFact() {
    const factText = document.getElementById('factText');
    const generateFactBtn = document.getElementById('generateFactBtn');
    
    if (!factText || !generateFactBtn) return;
    
    // Disable button during animation
    generateFactBtn.disabled = true;
    generateFactBtn.textContent = 'Generating...';
    
    // Clear previous fact
    factText.textContent = '';
    factText.className = 'fact-text';
    
    // Get random fact
    const randomFact = dreamData.dreamFacts[Math.floor(Math.random() * dreamData.dreamFacts.length)];
    
    // Add typing animation
    setTimeout(() => {
        factText.className = 'fact-text typing-animation';
        factText.textContent = randomFact;
        
        setTimeout(() => {
            factText.className = 'fact-text';
            generateFactBtn.disabled = false;
            generateFactBtn.textContent = 'Generate Random Dream Fact';
        }, 3000);
    }, 500);
}

// Search symbols
function searchSymbols() {
    const symbolSearch = document.getElementById('symbolSearch');
    if (!symbolSearch) return;
    
    const searchTerm = symbolSearch.value.toLowerCase().trim();
    
    if (!searchTerm) {
        renderSymbolInterpretations();
        return;
    }
    
    const filteredSymbols = dreamData.symbolInterpretations.filter(symbol =>
        symbol.symbol.toLowerCase().includes(searchTerm) ||
        symbol.meanings.some(meaning => meaning.toLowerCase().includes(searchTerm))
    );
    
    const symbolsGrid = document.getElementById('symbolsGrid');
    if (!symbolsGrid) return;
    
    symbolsGrid.innerHTML = '';
    
    if (filteredSymbols.length === 0) {
        symbolsGrid.innerHTML = '<p class="no-results" style="text-align: center; padding: 40px; font-size: 18px; color: #666;">No symbols found. Try a different search term.</p>';
        return;
    }
    
    filteredSymbols.forEach(symbol => {
        const card = document.createElement('div');
        card.className = 'symbol-card fade-in';
        
        const meaningsHTML = symbol.meanings.map(meaning => `<li>${meaning}</li>`).join('');
        
        card.innerHTML = `
            <h3 class="symbol-card__name">${symbol.symbol}</h3>
            <ul class="symbol-card__meanings">${meaningsHTML}</ul>
        `;
        
        symbolsGrid.appendChild(card);
    });
    
    triggerScrollAnimations();
}

// View dream details
function viewDreamDetails(dreamId) {
    const dream = dreamData.dreams.find(d => d.id === dreamId);
    const dreamModal = document.getElementById('dreamModal');
    
    if (!dream || !dreamModal) return;
    
    const modalTitle = document.getElementById('dreamModalTitle');
    const modalBody = document.getElementById('dreamModalBody');
    
    if (modalTitle) modalTitle.textContent = dream.title;
    if (modalBody) {
        modalBody.innerHTML = `
            <div class="dream-details">
                <p class="dream-description" style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">${dream.description}</p>
                <div class="dream-meta" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
                    <div class="meta-item">
                        <strong>Price:</strong> ${dream.price}
                    </div>
                    <div class="meta-item">
                        <strong>Rating:</strong> ${generateStars(dream.rating)} ${dream.rating}
                    </div>
                    <div class="meta-item">
                        <strong>Category:</strong> ${dream.category}
                    </div>
                    <div class="meta-item">
                        <strong>Seller:</strong> ${dream.seller}
                    </div>
                    <div class="meta-item">
                        <strong>Lucidity Level:</strong> ${dream.lucidity}
                    </div>
                </div>
                <div class="dream-actions" style="margin-top: 20px;">
                    <button class="btn btn--primary" onclick="addToCart(${dream.id}); closeDreamModal();">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
    }
    
    dreamModal.classList.remove('hidden');
}

// Close dream modal
function closeDreamModal() {
    const dreamModal = document.getElementById('dreamModal');
    if (dreamModal) {
        dreamModal.classList.add('hidden');
    }
}

// Add to cart
function addToCart(dreamId) {
    const dream = dreamData.dreams.find(d => d.id === dreamId);
    if (!dream) return;
    
    // Check if already in cart
    const existingItem = cart.find(item => item.id === dreamId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...dream, quantity: 1 });
    }
    
    updateCartDisplay();
    showAddToCartAnimation();
}

// Update cart display
function updateCartDisplay() {
    const cartCount = document.getElementById('cartCount');
    if (!cartCount) return;
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (totalItems > 0) {
        cartCount.style.display = 'block';
    } else {
        cartCount.style.display = 'none';
    }
}

// Show add to cart animation
function showAddToCartAnimation() {
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.classList.add('glitch');
        setTimeout(() => {
            cartBtn.classList.remove('glitch');
        }, 200);
    }
}

// Open cart
function openCart() {
    const cartModal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartModal || !cartItems || !cartTotal) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 40px; font-size: 16px;">Your dream cart is empty. Start exploring!</p>';
        cartTotal.textContent = 'Total: $0.00';
    } else {
        let total = 0;
        cartItems.innerHTML = cart.map(item => {
            const price = parseFloat(item.price.replace('$', ''));
            total += price * item.quantity;
            
            return `
                <div class="cart-item" style="border-bottom: 1px solid #eee; padding: 15px 0;">
                    <h4 style="margin: 0 0 10px 0;">${item.title}</h4>
                    <p style="margin: 0 0 10px 0;">Price: ${item.price} x ${item.quantity}</p>
                    <div class="cart-item-actions" style="display: flex; gap: 10px; align-items: center;">
                        <button class="btn btn--outline btn--sm" onclick="updateCartItemQuantity(${item.id}, -1)">-</button>
                        <span style="min-width: 20px; text-align: center;">${item.quantity}</span>
                        <button class="btn btn--outline btn--sm" onclick="updateCartItemQuantity(${item.id}, 1)">+</button>
                        <button class="btn btn--outline btn--sm" onclick="removeFromCart(${item.id})" style="margin-left: auto;">Remove</button>
                    </div>
                </div>
            `;
        }).join('');
        
        cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    }
    
    cartModal.classList.remove('hidden');
}

// Close cart
function closeCart() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.classList.add('hidden');
    }
}

// Update cart item quantity
function updateCartItemQuantity(dreamId, change) {
    const item = cart.find(item => item.id === dreamId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(dreamId);
    } else {
        updateCartDisplay();
        openCart(); // Refresh cart display
    }
}

// Remove from cart
function removeFromCart(dreamId) {
    cart = cart.filter(item => item.id !== dreamId);
    updateCartDisplay();
    openCart(); // Refresh cart display
}

// Setup scroll animations
function setupScrollAnimations() {
    if (!window.IntersectionObserver) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
}

// Trigger scroll animations for dynamically added elements
function triggerScrollAnimations() {
    setTimeout(() => {
        setupScrollAnimations();
    }, 100);
}

// Start random glitch effects
function startRandomGlitches() {
    function randomGlitch() {
        const elements = document.querySelectorAll('.rating-stars, .logo, .section-title');
        const randomElement = elements[Math.floor(Math.random() * elements.length)];
        
        if (randomElement) {
            randomElement.classList.add('glitch');
            setTimeout(() => {
                randomElement.classList.remove('glitch');
            }, 200);
        }
        
        // Schedule next glitch
        setTimeout(randomGlitch, Math.random() * 15000 + 10000); // 10-25 seconds
    }
    
    // Start the glitch cycle
    setTimeout(randomGlitch, 5000);
}

// Easter egg function
function triggerEasterEgg() {
    // Create sparkle effect
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createSparkle();
        }, i * 100);
    }
    
    // Show message
    const message = document.createElement('div');
    message.className = 'easter-egg-message';
    message.textContent = '✨ You found the secret dream sequence! ✨';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #B8A9DC, #A8C090);
        color: white;
        padding: 20px 40px;
        border-radius: 50px;
        font-size: 18px;
        font-weight: bold;
        z-index: 3000;
        animation: fadeInUp 1s ease-out;
        box-shadow: 0 10px 30px rgba(139, 126, 200, 0.5);
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
}

// Create sparkle effect
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.textContent = '✨';
    sparkle.style.cssText = `
        position: fixed;
        top: ${Math.random() * 100}vh;
        left: ${Math.random() * 100}vw;
        font-size: 24px;
        pointer-events: none;
        z-index: 2500;
        animation: sparkle 2s ease-out forwards;
    `;
    
    // Add sparkle animation if not already added
    if (!document.querySelector('#sparkle-animation')) {
        const style = document.createElement('style');
        style.id = 'sparkle-animation';
        style.textContent = `
            @keyframes sparkle {
                0% { opacity: 1; transform: scale(0) rotate(0deg); }
                50% { opacity: 1; transform: scale(1) rotate(180deg); }
                100% { opacity: 0; transform: scale(0) rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.remove();
        }
    }, 2000);
}

// Make functions globally available for onclick handlers
window.viewDreamDetails = viewDreamDetails;
window.closeDreamModal = closeDreamModal;
window.addToCart = addToCart;
window.openCart = openCart;
window.closeCart = closeCart;
window.updateCartItemQuantity = updateCartItemQuantity;
window.removeFromCart = removeFromCart;