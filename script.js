document.getElementById("currentYear").textContent = new Date().getFullYear();

// All existing variables
const form = document.getElementById('orderForm');
const confirmationModal = document.getElementById('confirmationModal');
const successModal = document.getElementById('successModal');
const confirmYesBtn = document.getElementById('confirmYes');
const confirmNoBtn = document.getElementById('confirmNo');
const closeSuccessModalBtn = document.getElementById('closeSuccessModal');
const productsContainer = document.getElementById('selected-products-container');
const toggleListBtn = document.getElementById('toggle-products-list');
const productsListDropdown = document.getElementById('products-list-dropdown');
const toggleIcon = document.getElementById('toggle-icon');
const productListUL = document.getElementById('product-list-ul');
const totalPriceContainer = document.getElementById('total-price-container');
const totalPriceSpan = document.getElementById('total-price');
const productDetailsModal = document.getElementById('productDetailsModal');
const productDetailsBody = document.getElementById('product-details-body');
const closeProductDetailsModalBtn = document.getElementById('closeProductDetailsModal');
const productDetailsImage = document.getElementById('product-details-image');
const imageViewerModal = document.getElementById('imageViewerModal');
const modalImage = document.getElementById('modalImage');
const closeImageViewerBtn = document.getElementById('closeImageViewer');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const whatsappNumber = '201508259538';

const allProducts = {
    'SDF 1ml': { name: 'SDF 1ml', price: 400 }, 'SDF 4ml': { name: 'SDF 4ml', price: 1190 }, 'MTA 0.25g': { name: 'MTA 0.25 جرام', price: 50 }, 'HEMOSTATIC LIQUID 15ml': { name: 'HEMOSTATIC LIQUID 15 مل', price: 135 }, 'D-Seal 12g': { name: 'D-Seal 12 جرام', price: 395 }, 'D-Seal 8g': { name: 'D-Seal 8 جرام', price: 300 }, 'D-Seal 20g': { name: 'D-Seal 20 جرام', price: 495 }, 'Edta 5g': { name: 'Edta 5 جرام', price: 170 }, 'Porcelain Acid Etch 5g': { name: 'Porcelain Acid Etch 5 جرام', price: 170 }, 'Etch 5g': { name: 'Etch 5 جرام', price: 50 }, 'ROOT HEAL': { name: 'ROOT HEAL', price: 110 }, 'HOLDENT 20g': { name: 'HOLDENT 20 جرام', price: 155 }, 'باكدج': { name: 'باكدج', price: 260 }, 'Caries detector dye 4ml': { name: 'Caries detector dye 4 مل', price: 225 }, 'Offer 1: D-seal 8g + File mani 10': { name: 'عرض 1: D-seal 8g + File mani 10', price: 370 }, 'Offer 2: Caries dye 4ml + ever x capsule': { name: 'عرض 2: Caries detector 4ml + ever x capsule', price: 320 }, 'Offer 3: Caries dye 4ml + etch 5g + Bond bisco 0.5ml': { name: 'عرض 3: Caries detector 4ml + etch 5g + Bond bisco 0.5ml', price: 620 }, 'Offer 4: D-seal 20g + syringe tokuyma': { name: 'عرض 4: D-seal 20g + syringe tokuyma', price: 1300 }, 'Offer 5: D-seal 20g + gutta percha #25/4': { name: 'عرض 5: D-seal 20g + gutta percha #25/4', price: 550 }, 'Offer 6: Ever x capsule + D-seal 8 gm': { name: 'عرض 6: Ever x capsule + D-seal 8 gm', price: 400 },
};
const productImages = { 'SDF': 'sdf.png', 'MTA': 'mta.jpg', 'HEMOSTATIC LIQUID': 'beld-of.png', 'D-Seal': 'd-seal12.png', 'D-Seal 8g': 'd-seal 8.PNG', 'D-Seal 20g': 'D-Seal20.JPG', 'Edta': 'edta.png', 'Porcelain Acid Etch': 'porclean.png', 'Etch': 'etch.jpg', 'ROOT HEAL': 'root heal.png', 'HOLDENT': 'hole.PNG', 'Caries detector dye': 'cdd.jpg', 'باكدج': 'bakedg.png' };
const productDetails = {
    'SDF': { body: `<div class="space-y-4"><div dir="ltr" class="text-left"><h4 class="font-bold text-xl text-teal-700">🔹 What is SDF?</h4><ul class="list-disc list-inside space-y-2 mt-2 text-gray-400"><li>Silver Diamine Fluoride (SDF) is a topical cariostatic agent.</li><li>It is a colorless to blue liquid, strongly alkaline (pH ~10).</li><li>Approved for arresting dental caries and desensitizing dentin.</li></ul></div><div class="pt-4 mt-4 border-t border-gray-600" dir="rtl"><h4 class="font-bold text-xl text-teal-700">🔹 ما هو الـ SDF؟</h4><ul class="list-disc list-inside space-y-2 mt-2 text-gray-400"><li>فلوريد الفضة ثنائي الأمين (SDF) هو عامل موضعي مضاد للتسوس.</li><li>هو سائل عديم اللون إلى أزرق، شديد القلوية.</li><li>معتمد لإيقاف تسوس الأسنان وتقليل حساسية العاج.</li></ul></div></div>` },
    'MTA': { body: `<div class="space-y-4"><div dir="ltr" class="text-left"><h4 class="font-bold text-xl text-teal-700">🔹 What is MTA?</h4><p class="mt-2 text-gray-400">Mineral Trioxide Aggregate (MTA) is a bioactive endodontic material used for pulp therapy, perforation repair, and root-end filling.</p></div><div class="pt-4 mt-4 border-t border-gray-600" dir="rtl"><h4 class="font-bold text-xl text-teal-700">🔹 ما هو الـ MTA؟</h4><p class="mt-2 text-gray-400">MTA هو مادة حيوية تُستخدم في علاج لب الأسنان، وإصلاح ثقوب الجذور، وحشو نهاية الجذور.</p></div></div>` },
    'D-Seal': { body: `<div class="space-y-4"><div dir="ltr" class="text-left"><h4 class="font-bold text-xl text-teal-700">🔹 Properties</h4><ul class="list-disc list-inside space-y-2 mt-2 text-gray-400"><li>✅ Biocompatible & enhances healing.</li><li>✅ Low solubility.</li><li>✅ Good adhesion.</li><li>✅ Alkaline pH – antimicrobial.</li></ul></div><div class="pt-4 mt-4 border-t border-gray-600" dir="rtl"><h4 class="font-bold text-xl text-teal-700">🔹 الخصائص</h4><ul class="list-disc list-inside space-y-2 mt-2 text-gray-400"><li>✅ متوافق حيوياً ويعزز الشفاء.</li><li>✅ قابلية منخفضة للذوبان.</li><li>✅ التصاق جيد.</li><li>✅ درجة حموضة قلوية - مضاد للميكروبات.</li></ul></div></div>` },
    'D-Seal 8g': { body: `<div class="space-y-4"><div dir="ltr" class="text-left"><h4 class="font-bold text-xl text-teal-700">🔹 Properties</h4><ul class="list-disc list-inside space-y-2 mt-2 text-gray-400"><li>✅ Biocompatible & enhances healing.</li><li>✅ Low solubility.</li><li>✅ Good adhesion.</li><li>✅ Alkaline pH – antimicrobial.</li></ul></div><div class="pt-4 mt-4 border-t border-gray-600" dir="rtl"><h4 class="font-bold text-xl text-teal-700">🔹 الخصائص</h4><ul class="list-disc list-inside space-y-2 mt-2 text-gray-400"><li>✅ متوافق حيوياً ويعزز الشفاء.</li><li>✅ قابلية منخفضة للذوبان.</li><li>✅ التصاق جيد.</li><li>✅ درجة حموضة قلوية - مضاد للميكروبات.</li></ul></div></div>` },
    'D-Seal 20g': { body: `<div class="space-y-4"><div dir="ltr" class="text-left"><h4 class="font-bold text-xl text-teal-700">🔹 Properties</h4><ul class="list-disc list-inside space-y-2 mt-2 text-gray-400"><li>✅ Biocompatible & enhances healing.</li><li>✅ Low solubility.</li><li>✅ Good adhesion.</li><li>✅ Alkaline pH – antimicrobial.</li></ul></div><div class="pt-4 mt-4 border-t border-gray-600" dir="rtl"><h4 class="font-bold text-xl text-teal-700">🔹 الخصائص</h4><ul class="list-disc list-inside space-y-2 mt-2 text-gray-400"><li>✅ متوافق حيوياً ويعزز الشفاء.</li><li>✅ قابلية منخفضة للذوبان.</li><li>✅ التصاق جيد.</li><li>✅ درجة حموضة قلوية - مضاد للميكروبات.</li></ul></div></div>` },
    'Etch': { body: `<div class="space-y-4"><div dir="ltr" class="text-left"><h4 class="font-bold text-xl text-teal-700">🔹 What is Etch?</h4><ul class="list-disc list-inside space-y-2 mt-2 text-gray-400"><li>A 37% phosphoric acid gel.</li><li>Used to condition enamel and dentin before bonding.</li></ul></div><div class="pt-4 mt-4 border-t border-gray-600" dir="rtl"><h4 class="font-bold text-xl text-teal-700">🔹 ما هو جل الحفر (Etch)؟</h4><ul class="list-disc list-inside space-y-2 mt-2 text-gray-400"><li>جل يحتوي على 37% من حمض الفوسفوريك.</li><li>يُستخدم لتجهيز مينا الأسنان والعاج قبل وضع المواد اللاصقة.</li></ul></div></div>` },
    'Edta': { body: `<div class="space-y-4"><div dir="ltr" class="text-left"><h4 class="font-bold text-xl text-teal-700">🔹 What is EDTA Gel?</h4><ul class="list-disc list-inside space-y-2 mt-2 text-gray-400"><li>A 17% EDTA gel.</li><li>Used to remove the smear layer and aid in root canal instrumentation.</li></ul></div><div class="pt-4 mt-4 border-t border-gray-600" dir="rtl"><h4 class="font-bold text-xl text-teal-700">🔹 ما هو جل الـ EDTA؟</h4><ul class="list-disc list-inside space-y-2 mt-2 text-gray-400"><li>جل يحتوي على 17% من EDTA.</li><li>يُستخدم لإزالة الطبقة اللزجة وتسهيل تنظيف القناة.</li></ul></div></div>` },
    'Porcelain Acid Etch': { body: `<div class="space-y-4"><div dir="ltr" class="text-left"><h4 class="font-bold text-xl text-teal-700">🔹 What is Porcelain Etch?</h4><ul class="list-disc list-inside space-y-2 mt-2 text-gray-400"><li>A 9.5% hydrofluoric acid (HF) gel.</li><li>Used for etching porcelain and ceramic restorations before bonding.</li></ul></div><div class="pt-4 mt-4 border-t border-gray-600" dir="rtl"><h4 class="font-bold text-xl text-teal-700">🔹 ما هو جل حفر البورسلين؟</h4><ul class="list-disc list-inside space-y-2 mt-2 text-gray-400"><li>جل حفر بتركيز 9.5% من حمض الهيدروفلوريك.</li><li>يُستخدم لتحضير سطح الترميمات الخزفية قبل اللصق.</li></ul></div></div>` },
    'HEMOSTATIC LIQUID': { body: `<div class="space-y-4"><div dir="ltr" class="text-left"><h4 class="font-bold text-xl text-teal-700">🔹 What is Hemostatic Liquid?</h4><p class="mt-2 text-gray-400">Used to control bleeding during dental procedures, creating a clean, dry field.</p></div><div class="pt-4 mt-4 border-t border-gray-600" dir="rtl"><h4 class="font-bold text-xl text-teal-700">🔹 ما هو السائل القابض للنزيف؟</h4><p class="mt-2 text-gray-400">يُستخدم للسيطرة على النزيف، مما يساعد على الحصول على منطقة عمل نظيفة وجافة.</p></div></div>` },
    'ROOT HEAL': { body: `<div class="space-y-4"><div dir="ltr" class="text-left"><h4 class="font-bold text-xl text-teal-700">🔹 Rootheal – Intracanal Medicament</h4><p class="mt-2 text-gray-400">Used to disinfect the root canal between appointments and promotes healing.</p></div><div class="pt-4 mt-4 border-t border-gray-600" dir="rtl"><h4 class="font-bold text-xl text-teal-700">🔹 Rootheal – دواء داخل القناة</h4><p class="mt-2 text-gray-400">يستخدم لتعقيم قناة الجذر بين المواعيد ويعزز شفاء الأنسجة.</p></div></div>` },
    'HOLDENT': { body: `<div class="space-y-4"><div dir="ltr" class="text-left"><h4 class="font-bold text-xl text-teal-700">🔹 Holdent – Denture Adhesive</h4><p class="mt-2 text-gray-400">Designed to securely hold complete or partial dentures in place, providing comfort.</p></div><div class="pt-4 mt-4 border-t border-gray-600" dir="rtl"><h4 class="font-bold text-xl text-teal-700">🔹 Holdent – كريم تثبيت الأطقم</h4><p class="mt-2 text-gray-400">مصمم لتثبيت الأطقم بإحكام، مما يمنح المريض راحة وثقة.</p></div></div>` },
    'Caries detector dye': { body: `<div class="space-y-4"><div dir="ltr" class="text-left"><h4 class="font-bold text-xl text-teal-700">🔹 What is Caries Detector Dye?</h4><p class="mt-2 text-gray-400">A diagnostic aid to distinguish between infected and affected dentin, preserving healthy tooth structure.</p></div><div class="pt-4 mt-4 border-t border-gray-600" dir="rtl"><h4 class="font-bold text-xl text-teal-700">🔹 ما هو صبغة كاشف التسوس؟</h4><p class="mt-2 text-gray-400">أداة للمساعدة في التمييز بين العاج المصاب والمتأثر، للحفاظ على بنية السن السليمة.</p></div></div>` },
    'باكدج': { body: `<div class="space-y-4"><div dir="ltr" class="text-left"><h4 class="font-bold text-xl text-teal-700">🔹 What is the Package?</h4><p class="mt-2 text-gray-400">An economical option that combines our essential products: Etch, Edta, MTA, Resin sealer, and Caries detector.</p></div><div class="pt-4 mt-4 border-t border-gray-600" dir="rtl"><h4 class="font-bold text-xl text-teal-700">🔹 ما هو الباكدج؟</h4><p class="mt-2 text-gray-400">خيار اقتصادي يجمع منتجاتنا الأساسية: Etch, Edta, MTA, Resin sealer, و Caires detector.</p></div></div>` },
};
let selectedProducts = [];
// All existing functions (calculateTotal, renderSelectedProducts, addProductToCart, etc.)
function calculateTotal() { return selectedProducts.reduce((total, product) => total + (product.price * product.quantity), 0); }
function renderSelectedProducts() { productsContainer.innerHTML = ''; if (selectedProducts.length === 0) { productsContainer.innerHTML = `<p class="text-gray-500 text-sm" id="empty-cart-message">لم يتم اختيار أي منتجات بعد.</p>`; totalPriceContainer.classList.add('hidden'); } else { totalPriceContainer.classList.remove('hidden'); selectedProducts.forEach(product => { const productItem = document.createElement('div'); productItem.className = 'flex items-center justify-between bg-gray-700 p-4 rounded-xl shadow-sm border border-gray-600'; productItem.innerHTML = `<div class="flex-grow font-medium">${product.name}</div><div class="text-sm text-gray-400 ml-4">${product.price} ج.م</div><div class="flex items-center gap-2"><input type="number" value="${product.quantity}" min="1" data-product-name="${product.name}" class="w-16 text-center border border-gray-600 rounded-lg focus:ring-teal-500 focus:border-teal-500 bg-gray-800 text-white"><button type="button" class="remove-product-btn text-red-400 hover:text-red-500 transition-colors" data-product-name="${product.name}"><i class="fas fa-trash-alt"></i></button></div>`; productsContainer.appendChild(productItem); }); productsContainer.querySelectorAll('.remove-product-btn').forEach(button => button.addEventListener('click', (event) => { const productName = event.target.closest('button').dataset.productName; selectedProducts = selectedProducts.filter(p => p.name !== productName); renderSelectedProducts(); })); productsContainer.querySelectorAll('input[type="number"]').forEach(input => input.addEventListener('input', (event) => { const productName = event.target.dataset.productName; const newQuantity = parseInt(event.target.value, 10); const product = selectedProducts.find(p => p.name === productName); if (product && newQuantity > 0) product.quantity = newQuantity; renderSelectedProducts(); })); } totalPriceSpan.textContent = calculateTotal() + ' ج.م'; }
function addProductToCart(productKey) { const productInfo = allProducts[productKey]; if (!productInfo) return; const existingProduct = selectedProducts.find(p => p.name === productInfo.name); if (existingProduct) { existingProduct.quantity++; } else { selectedProducts.push({ name: productInfo.name, quantity: 1, price: productInfo.price }); } renderSelectedProducts(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }
document.querySelectorAll('a[href^="#"]').forEach(anchor => anchor.addEventListener('click', function(e) { e.preventDefault(); document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' }); }));
document.querySelectorAll('.view-details-btn').forEach(button => button.addEventListener('click', (event) => { const productKey = event.target.dataset.product; const details = productDetails[productKey]; const imageUrl = productImages[productKey]; if (details) { if (imageUrl) { productDetailsImage.src = imageUrl; productDetailsImage.classList.remove('hidden'); } else { productDetailsImage.classList.add('hidden'); } productDetailsBody.innerHTML = details.body; productDetailsModal.classList.add('is-open'); productDetailsBody.scrollTop = 0; } }));
closeProductDetailsModalBtn.addEventListener('click', () => productDetailsModal.classList.remove('is-open'));
productDetailsModal.addEventListener('click', (event) => { if (event.target === productDetailsModal) productDetailsModal.classList.remove('is-open'); });
function populateProductDropdown() { productListUL.innerHTML = ''; Object.keys(allProducts).forEach(key => { const li = document.createElement('li'); li.className = 'px-4 py-2 text-gray-200 hover:bg-gray-600 cursor-pointer transition-colors'; li.textContent = allProducts[key].name; li.dataset.product = key; li.addEventListener('click', (event) => { addProductToCart(event.target.dataset.product); productsListDropdown.classList.add('hidden'); toggleIcon.classList.remove('rotate-180'); }); productListUL.appendChild(li); }); }
populateProductDropdown();
document.querySelectorAll('.product-link').forEach(link => link.addEventListener('click', (event) => addProductToCart(event.target.dataset.product)));
toggleListBtn.addEventListener('click', () => { productsListDropdown.classList.toggle('hidden'); toggleIcon.classList.toggle('rotate-180'); });
document.addEventListener('click', (event) => { if (!toggleListBtn.contains(event.target) && !productsListDropdown.contains(event.target)) { productsListDropdown.classList.add('hidden'); toggleIcon.classList.remove('rotate-180'); } });
form.addEventListener('submit', function(event) { event.preventDefault(); if (selectedProducts.length === 0) { alert('الرجاء اختيار منتج واحد على الأقل قبل الإرسال.'); return; } const orderSummaryDiv = document.getElementById('order-summary'); let summaryHTML = '<ul>'; selectedProducts.forEach(p => { summaryHTML += `<li><strong>${p.name}</strong> - الكمية: ${p.quantity} - الإجمالي: ${p.price * p.quantity} ج.م</li>`; }); summaryHTML += `</ul><div class="mt-4 font-bold text-lg">الإجمالي الكلي: ${calculateTotal()} ج.م</div>`; orderSummaryDiv.innerHTML = summaryHTML; confirmationModal.classList.add('is-open'); });
confirmYesBtn.addEventListener('click', function() { confirmationModal.classList.remove('is-open'); const name = document.getElementById('name').value; const phone = document.getElementById('phone').value; const address = document.getElementById('address').value; let message = `*طلب جديد من موقع Dentleen*\n\n*الاسم:* ${name}\n*رقم الهاتف:* ${phone}\n*العنوان:* ${address}\n\n*المنتجات المطلوبة:*\n`; selectedProducts.forEach(p => { message += `- ${p.name} (الكمية: ${p.quantity}, الإجمالي: ${p.price * p.quantity} ج.م)\n`; }); message += `\n*الإجمالي الكلي:* ${calculateTotal()} ج.م`; const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`; window.open(whatsappUrl, '_blank'); successModal.classList.add('is-open'); form.reset(); selectedProducts = []; renderSelectedProducts(); });
confirmNoBtn.addEventListener('click', () => confirmationModal.classList.remove('is-open'));
closeSuccessModalBtn.addEventListener('click', () => successModal.classList.remove('is-open'));

document.addEventListener('DOMContentLoaded', () => {
    // Animated background logic
    const bgAnimation = document.getElementById('bg-animation');
    const icons = ['fa-tooth', 'fa-plus', 'fa-stethoscope', 'fa-heartbeat', 'fa-dna'];
    for (let i = 0; i < 20; i++) {
        const icon = document.createElement('i');
        icon.className = `fas ${icons[Math.floor(Math.random() * icons.length)]}`;
        icon.style.left = `${Math.random() * 100}vw`;
        icon.style.animationDuration = `${Math.random() * 15 + 10}s`;
        icon.style.animationDelay = `-${Math.random() * 25}s`;
        icon.style.fontSize = `${Math.random() * 20 + 20}px`;
        bgAnimation.appendChild(icon);
    }

    // Testimonial image click logic
    document.querySelectorAll('.testimonial-card').forEach(card => card.addEventListener('click', () => {
        modalImage.src = card.querySelector('img').src;
        imageViewerModal.classList.add('is-open');
    }));

    // NEW: Staggered animation for testimonials
    const testimonialCards = document.querySelectorAll('#testimonials .testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 50}ms`; // Apply a staggered delay
    });

    // Intersection Observer for all fade-in elements
    const animatedCards = document.querySelectorAll('.fade-in-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    animatedCards.forEach(card => observer.observe(card));
});

window.addEventListener('scroll', () => {
    scrollToTopBtn.classList.toggle('show', window.scrollY > 300);
});
scrollToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

function closeImageViewer() { imageViewerModal.classList.remove('is-open'); }
closeImageViewerBtn.addEventListener('click', closeImageViewer);
imageViewerModal.addEventListener('click', (event) => { if (event.target === imageViewerModal) closeImageViewer(); });

mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
mobileMenuLinks.forEach(link => link.addEventListener('click', () => { if (window.innerWidth < 768) mobileMenu.classList.add('hidden'); }));
