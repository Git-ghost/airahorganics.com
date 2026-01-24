// Header Scroll Effect
const header = document.querySelector('.site-header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Scroll to Top visibility
        const scrollBtn = document.querySelector('.scroll-to-top');
        if (scrollBtn) {
            if (window.scrollY > 300) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        }
    });
}



/* =========================================
   CART LOGIC
   ========================================= */

function getCart() {
    const saved = localStorage.getItem('airah_cart');
    return saved ? JSON.parse(saved) : [];
}

function saveCart(cart) {
    localStorage.setItem('airah_cart', JSON.stringify(cart));
}

function addToCart(productId) {
    const cart = getCart();
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.qty += 1;
    } else {
        // Find product details
        if (typeof products !== 'undefined') {
            const product = products.find(p => p.id === productId);
            if (product) {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    qty: 1
                });
            }
        }
    }

    saveCart(cart);
    showToast("Produkti u shtua në shportë!");
    updateCartIcon();
    // Trigger confetti on the cart icon
    createConfetti(document.querySelector('.header-actions a[href="cart.html"]'));
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    renderCartPage();
}

function updateQty(productId, change) {
    const cart = getCart();
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.qty += change;
        if (item.qty <= 0) {
            removeFromCart(productId);
            return;
        }
    }
    saveCart(cart);
    renderCartPage();
}

function renderCartPage() {
    const cart = getCart();
    const tbody = document.getElementById('cart-items-body');
    const emptyMsg = document.getElementById('empty-cart-msg');
    const cartContent = document.getElementById('cart-content');
    const subtotalEl = document.getElementById('cart-subtotal');
    const totalEl = document.getElementById('cart-total');

    function escapeHtml(text) {
        if (text == null) return '';
        return text.toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    if (!tbody) return; // Not on cart page

    if (cart.length === 0) {
        if (cartContent) cartContent.style.display = 'none';
        if (emptyMsg) emptyMsg.style.display = 'block';
        return;
    }

    if (emptyMsg) emptyMsg.style.display = 'none';
    if (cartContent) cartContent.style.display = 'block';

    tbody.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <div class="flex items-center gap-4">
                    <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" class="cart-item-img">
                    <span style="font-weight: 500;">${escapeHtml(item.name)}</span>
                </div>
            </td>
            <td data-label="Çmimi">${item.price.toFixed(2)}€</td>
            <td data-label="Sasia">
                <div class="qty-controls flex items-center gap-2">
                    <button onclick="updateQty(${item.id}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button onclick="updateQty(${item.id}, 1)">+</button>
                </div>
            </td>
            <td data-label="Totali">${itemTotal.toFixed(2)}€</td>
            <td>
                <button onclick="removeFromCart(${item.id})" style="color: #666;"><i data-lucide="trash-2" style="width:16px;"></i></button>
            </td>
        `;
        tbody.appendChild(row);
    });

    if (subtotalEl) subtotalEl.innerText = total.toFixed(2) + "€";
    if (totalEl) totalEl.innerText = total.toFixed(2) + "€";

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function updateCartIcon() {
    const cart = getCart();
    const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
    const badges = document.querySelectorAll('.cart-badge');

    badges.forEach(badge => {
        badge.innerText = totalItems;
        badge.style.display = totalItems > 0 ? 'flex' : 'none';
    });
}

/* =========================================
   TOAST NOTIFICATION
   ========================================= */

function showToast(message) {
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <div class="toast-content">
            <i data-lucide="check-circle" style="width:18px; color: var(--color-primary);"></i>
            <span>${message}</span>
        </div>
    `;

    toastContainer.appendChild(toast);
    if (typeof lucide !== 'undefined') lucide.createIcons();

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);

    // Remove after 4s
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

/* =========================================
   CHECKOUT LOGIC (INSTAGRAM)
   ========================================= */

function copyCartToClipboard() {
    const cart = getCart();
    if (cart.length === 0) {
        showToast("Shporta juaj është bosh!");
        return;
    }

    let message = "Përshëndetje Airah Organics! Do të dëshiroja të bëja një porosi:\n\n";
    let total = 0;

    cart.forEach(item => {
        message += `- ${item.name} x${item.qty} (${(item.price * item.qty).toFixed(2)}€)\n`;
        total += item.price * item.qty;
    });

    message += `\nTotali: ${total.toFixed(2)}€\n`;
    message += "\nJu lutem më tregoni si mund të kryej pagesën. Faleminderit!";

    // Copy to clipboard
    navigator.clipboard.writeText(message).then(() => {
        showToast("Shporta u kopjua! Dërgojeni në Instagram @airah_organics");
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        showToast("Ndodhi një gabim gjatë kopjimit.");
    });
}

/**
 * Global Initialization
 */
function initGlobal() {
    // Inject Floating Actions if not present
    if (!document.querySelector('.floating-actions')) {
        const container = document.createElement('div');
        container.className = 'floating-actions';

        // Instagram
        const ig = document.createElement('a');
        ig.href = 'https://instagram.com/airah_organics';
        ig.target = '_blank';
        ig.className = 'floating-btn';
        ig.innerHTML = '<i data-lucide="instagram"></i>';
        ig.setAttribute('aria-label', 'Follow on Instagram');

        // Facebook
        const fb = document.createElement('a');
        fb.href = 'https://facebook.com/LeJardinDAirah';
        fb.target = '_blank';
        fb.className = 'floating-btn';
        fb.innerHTML = '<i data-lucide="facebook"></i>';
        fb.setAttribute('aria-label', 'Follow on Facebook');

        // Scroll Top
        const scrollBtn = document.createElement('button');
        scrollBtn.className = 'floating-btn scroll-to-top';
        scrollBtn.innerHTML = '<i data-lucide="arrow-up"></i>';
        scrollBtn.setAttribute('aria-label', 'Scroll to top');
        scrollBtn.onclick = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        container.appendChild(ig);
        container.appendChild(fb);
        container.appendChild(scrollBtn);
        document.body.appendChild(container);

        if (typeof lucide !== 'undefined') lucide.createIcons();
    }

    // Initialize Mobile Menu
    initMobileMenu();

    // Initialize Back Button
    initBackButton();
}

function initBackButton() {
    // Only add if not already present
    if (document.querySelector('.floating-back-btn-container')) return;

    // Don't show on index.html
    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('\/');
    if (isHomePage) return;

    const container = document.createElement('div');
    container.className = 'floating-back-btn-container';

    const btn = document.createElement('button');
    btn.className = 'floating-back-btn';
    btn.setAttribute('aria-label', 'Shko mbrapa');
    btn.innerHTML = '<i data-lucide="arrow-left"></i>';

    btn.onclick = () => {
        window.history.back();
    };

    container.appendChild(btn);
    document.body.appendChild(container);

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function initMobileMenu() {
    // Prevent duplicate init
    if (document.querySelector('.mobile-menu-btn')) return;

    const headerContainer = document.querySelector('.site-header .container');
    if (!headerContainer) return;

    // Create Toggle Button
    const btn = document.createElement('button');
    btn.className = 'mobile-menu-btn';
    btn.innerHTML = '<i data-lucide="menu" style="width: 28px; height: 28px; color: #000;"></i>';

    // Create Menu Container
    const mobileNav = document.createElement('div');
    mobileNav.className = 'mobile-nav';

    // Clone Links
    const mainNav = document.querySelector('.main-nav');
    let linksHtml = '';
    if (mainNav) {
        linksHtml = mainNav.innerHTML;
    }

    mobileNav.innerHTML = `
        <div class="mobile-nav-header">
            <span class="logo mobile-logo">Le Jardin d'Airah</span>
            <button class="mobile-close-btn" style="background:none; border:none; cursor:pointer;"><i data-lucide="x" style="width: 24px;"></i></button>
        </div>
        <nav class="mobile-nav-links">
            ${linksHtml}
        </nav>
    `;

    // Overlay
    const overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';

    // Insert into DOM
    headerContainer.insertBefore(btn, headerContainer.querySelector('.header-actions'));
    document.body.appendChild(overlay);
    document.body.appendChild(mobileNav);

    // Event Listeners
    function toggleMenu() {
        document.body.classList.toggle('mobile-nav-open');
    }

    btn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
    mobileNav.querySelector('.mobile-close-btn').addEventListener('click', toggleMenu);

    // Re-initialize icons for the new elements
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function createConfetti(element) {
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const count = 30;
    const colors = ['#C5A267', '#D4AF37', '#E5C48E', '#F3E5AB', '#ffffff'];

    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'confetti-piece';
        document.body.appendChild(p);

        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 150 + 50;
        const xDir = Math.cos(angle) * velocity;
        const yDir = Math.sin(angle) * velocity;
        const size = Math.random() * 8 + 4;

        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${rect.left + rect.width / 2}px`;
        p.style.top = `${rect.top + rect.height / 2}px`;
        p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        p.style.transition = 'all 0.8s cubic-bezier(0.1, 0.5, 0.5, 1)';

        requestAnimationFrame(() => {
            p.style.transform = `translate(${xDir}px, ${yDir}px) rotate(${Math.random() * 720}deg)`;
            p.style.opacity = '0';
        });

        setTimeout(() => p.remove(), 800);
    }
}

/* =========================================
   COOKIE CONSENT
   ========================================= */
function initCookieConsent() {
    if (localStorage.getItem('airah_cookie_consent')) return;

    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.innerHTML = `
        <div class="cookie-content">
            <p>Kjo uebfaqe përdor cookies për të përmirësuar përvojën tuaj. Duke vazhduar lundrimin, ju pranoni përdorimin tonë të cookies.</p>
            <div class="cookie-actions">
                <button id="accept-cookies">Prano</button>
                <a href="privacy.html">Mësoni më shumë</a>
            </div>
        </div>
    `;

    // Inline CSS for the banner
    const style = document.createElement('style');
    style.innerHTML = `
        .cookie-banner {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background: #fff;
            box-shadow: 0 -4px 20px rgba(0,0,0,0.1);
            padding: 1rem 0;
            z-index: 10000;
            animation: slideUp 0.5s ease;
            border-top: 1px solid #eee;
        }
        .cookie-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
        }
        .cookie-content p {
            font-size: 0.9rem;
            color: #666;
            margin: 0;
        }
        .cookie-actions {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        #accept-cookies {
            background: var(--color-primary, #CBB700);
            color: #fff;
            border: none;
            padding: 0.5rem 1.5rem;
            border-radius: 50px;
            cursor: pointer;
            font-size: 0.9rem;
            font-weight: 500;
            transition: opacity 0.3s;
        }
        #accept-cookies:hover {
            opacity: 0.9;
        }
        .cookie-actions a {
            color: #666;
            font-size: 0.85rem;
            text-decoration: underline;
        }
        @keyframes slideUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
        }
        @media (max-width: 768px) {
            .cookie-content {
                flex-direction: column;
                text-align: center;
            }
        }
    `;

    document.head.appendChild(style);
    document.body.appendChild(banner);

    document.getElementById('accept-cookies').addEventListener('click', () => {
        localStorage.setItem('airah_cookie_consent', 'true');
        banner.style.opacity = '0';
        banner.style.transform = 'translateY(100%)';
        banner.style.transition = 'all 0.5s ease';
        setTimeout(() => banner.remove(), 500);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initGlobal();
    initCookieConsent();
    updateCartIcon();
    if (document.getElementById('cart-items-body')) {
        renderCartPage();
    }
});
