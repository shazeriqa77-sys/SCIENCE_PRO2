// navbar.js - Sistem Menu Berpusat (Serasi file:/// & Web Hosting)

// 1. SUNTIK CSS SERAGAM 42PX TERUS KE DALAM <HEAD>
const navbarStyles = `
    .navbar, .navbar * { box-sizing: border-box; }
    .navbar {
        background-color: #1a2a6c !important;
        display: flex !important;
        justify-content: flex-start !important;
        align-items: center !important;
        flex-wrap: wrap !important;
        gap: 6px !important;
        padding: 8px 15px !important;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3) !important;
        position: sticky !important;
        top: 0 !important;
        z-index: 100 !important;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
    }

    .navbar > a, .navbar .dropdown > a {
        color: #e0e0e0 !important;
        text-decoration: none !important;
        padding: 0 16px !important;
        height: 42px !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        font-size: 14px !important;
        font-weight: bold !important;
        white-space: nowrap !important;
        border-radius: 8px !important;
        transition: background 0.3s, color 0.3s !important;
    }

    .navbar > a:hover, .navbar .dropdown > a:hover {
        background-color: #00c6ff !important;
        color: #0d1b2a !important;
    }

    .navbar a.active-link {
        background-color: #00c6ff !important;
        color: #0d1b2a !important;
        border-radius: 8px !important;
    }

    .navbar .dropdown {
        display: inline-flex !important;
        align-items: center !important;
        position: relative !important;
    }

    .navbar .dropdown-content {
        display: none;
        position: absolute !important;
        top: 100% !important;
        left: 0 !important;
        background-color: #ffffff !important;
        min-width: 280px !important;
        box-shadow: 0px 8px 16px rgba(0,0,0,0.2) !important;
        z-index: 101 !important;
        border-radius: 0 0 8px 8px !important;
        overflow: hidden !important;
        max-height: 400px !important;
        overflow-y: auto !important;
    }

    .navbar .dropdown-content a {
        color: #333333 !important;
        padding: 12px 16px !important;
        display: block !important;
        font-size: 14px !important;
        border-bottom: 1px solid #eeeeee !important;
        font-weight: normal !important;
        text-align: left !important;
        height: auto !important;
        border-radius: 0 !important;
        text-decoration: none !important;
        white-space: nowrap !important;
    }

    .navbar .dropdown-content a:hover {
        background-color: #e3f2fd !important;
        padding-left: 24px !important;
        color: #0052D4 !important;
        font-weight: bold !important;
    }

    .navbar .dropdown-content a.current-chap {
        background-color: #e3f2fd !important;
        color: #0052D4 !important;
        font-weight: bold !important;
        border-left: 4px solid #0052D4 !important;
    }

    .navbar .dropdown:hover .dropdown-content { display: block !important; }

    .btn-dark-toggle {
        background-color: #334155 !important;
        color: #ffffff !important;
        border: 2px solid #00c6ff !important;
        height: 42px !important;
        padding: 0 16px !important;
        border-radius: 8px !important;
        font-weight: bold !important;
        font-size: 14px !important;
        cursor: pointer !important;
        transition: 0.3s !important;
        margin: 0 !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        white-space: nowrap !important;
    }

    .btn-dark-toggle:hover {
        background-color: #00c6ff !important;
        color: #0d1b2a !important;
    }

    .nav-right-user {
        margin-left: auto !important;
        position: relative !important;
        display: flex !important;
        align-items: center !important;
    }

    .avatar-btn-pandai {
        background: linear-gradient(135deg, #00c6ff, #0052D4) !important;
        color: #ffffff !important;
        border: 2px solid #ffffff !important;
        border-radius: 25px !important;
        padding: 4px 14px !important;
        height: 42px !important;
        display: flex !important;
        align-items: center !important;
        gap: 8px !important;
        cursor: pointer !important;
        font-weight: bold !important;
        font-size: 13px !important;
        white-space: nowrap !important;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2) !important;
        transition: transform 0.2s, box-shadow 0.2s !important;
    }

    .avatar-btn-pandai:hover {
        transform: scale(1.03) !important;
        box-shadow: 0 4px 12px rgba(0, 198, 255, 0.4) !important;
    }

    .user-dropdown-menu {
        display: none;
        position: absolute !important;
        top: 115% !important;
        right: 0 !important;
        background: #ffffff !important;
        min-width: 230px !important;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2) !important;
        border-radius: 12px !important;
        overflow: hidden !important;
        z-index: 1000 !important;
        border: 1px solid #e2e8f0 !important;
        animation: zepFadeIn 0.2s ease-in-out !important;
    }

    .user-dropdown-menu.show { display: block !important; }

    .user-dropdown-header {
        background: linear-gradient(135deg, #1a2a6c, #0052D4) !important;
        color: white !important;
        padding: 14px !important;
        font-size: 13px !important;
        text-align: left !important;
    }

    .user-dropdown-item {
        display: flex !important;
        align-items: center !important;
        gap: 10px !important;
        padding: 12px 16px !important;
        color: #333333 !important;
        text-decoration: none !important;
        font-size: 13px !important;
        font-weight: 500 !important;
        transition: background 0.2s, color 0.2s !important;
        cursor: pointer !important;
        border-bottom: 1px solid #f1f5f9 !important;
        height: auto !important;
        border-radius: 0 !important;
    }

    .user-dropdown-item:hover {
        background-color: #e3f2fd !important;
        color: #0052D4 !important;
    }

    .user-dropdown-divider {
        height: 1px !important;
        background-color: #e2e8f0 !important;
        margin: 4px 0 !important;
    }

    body.dark-mode .navbar .dropdown-content { background-color: #1e293b !important; }
    body.dark-mode .navbar .dropdown-content a { color: #f1f5f9 !important; border-bottom: 1px solid #334155 !important; }
    body.dark-mode .navbar .dropdown-content a:hover { background-color: #334155 !important; color: #38bdf8 !important; }
    body.dark-mode .navbar .dropdown-content a.current-chap { background-color: #0f172a !important; color: #38bdf8 !important; border-left-color: #38bdf8 !important; }
    body.dark-mode .user-dropdown-menu { background-color: #1e293b !important; border-color: #334155 !important; }
    body.dark-mode .user-dropdown-item { color: #f1f5f9 !important; border-color: #334155 !important; }
    body.dark-mode .user-dropdown-item:hover { background-color: #334155 !important; color: #38bdf8 !important; }

    #zep-toast-container { position: fixed; bottom: 20px; right: 20px; z-index: 9999; display: flex; flex-direction: column; gap: 10px; }
    .zep-toast-msg { background: #fff; color: #333; padding: 12px 18px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); font-size: 14px; font-weight: bold; display: flex; align-items: center; border-left: 5px solid #00c6ff; }
    .zep-toast-msg.success { border-left-color: #28a745; }
    .zep-toast-msg.error { border-left-color: #dc3545; }
    .zep-toast-msg.info { border-left-color: #0052D4; }

    @keyframes zepFadeIn {
        from { opacity: 0; transform: translateY(-6px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;

if (!document.getElementById("zep-shared-navbar-css")) {
    const styleEl = document.createElement("style");
    styleEl.id = "zep-shared-navbar-css";
    styleEl.textContent = navbarStyles;
    document.head.appendChild(styleEl);
}

// 2. BINA HTML NAVBAR & KESAN HALAMAN AKTIF SECARA AUTOMATIK
const zepChapters = [
    { file: "science_chap1.html", title: "Chapter 1: Biodiversity" },
    { file: "science_chap2.html", title: "Chapter 2: Ecosystem" },
    { file: "science_chap3.html", title: "Chapter 3: Nutrition" },
    { file: "science_chap4.html", title: "Chapter 4: Human Health" },
    { file: "science_chap5.html", title: "Chapter 5: Water and Solution" },
    { file: "science_chap6.html", title: "Chapter 6: Acids and Alkalis" },
    { file: "science_chap7.html", title: "Chapter 7: Electricity and Magnetism" },
    { file: "science_chap8.html", title: "Chapter 8: Force and Motion" },
    { file: "science_chap9.html", title: "Chapter 9: Heat" },
    { file: "science_chap10.html", title: "Chapter 10: Sound Waves" },
    { file: "science_chap11.html", title: "Chapter 11: Stars and Galaxies" },
    { file: "science_chap12.html", title: "Chapter 12: The Solar System" },
    { file: "science_chap13.html", title: "Chapter 13: Meteoroid, Asteroid and Comet" }
];

function renderSharedNavbar() {
    const currentPage = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    const isChapterPage = /^science_chap\d+\.html$/.test(currentPage);
    const isDark = localStorage.getItem("theme") === "dark";
    const cachedName = sessionStorage.getItem("saintis_nickname");

    if (isDark) document.body.classList.add("dark-mode");

    const chapterLinksHTML = zepChapters.map(ch => {
        const activeChapClass = currentPage === ch.file ? 'class="current-chap"' : '';
        return `<a href="${ch.file}" ${activeChapClass}>${ch.title}</a>`;
    }).join("");

    const initialName = cachedName || "Saintis";
    const initialHeaderName = (cachedName || "SAINTIS ZEP").toUpperCase();
    const initialAuthHTML = cachedName
        ? `<a href="javascript:void(0);" class="user-dropdown-item" style="color: #dc3545;" onclick="tutupDropdownUser(); logOutUser();">
               <span>🚪</span> Log Keluar (Logout)
           </a>`
        : `<a href="login.html" class="user-dropdown-item" style="color: #28a745;" onclick="tutupDropdownUser();">
               <span>🔑</span> Log Masuk / Daftar Akaun
           </a>`;

    const navbarHTML = `
        <nav class="navbar">
            <a href="index.html" class="${currentPage === 'index.html' ? 'active-link' : ''}">Main Lab</a>
            <a href="ruang_ilmu.html" class="${currentPage === 'ruang_ilmu.html' ? 'active-link' : ''}">Ruang Ilmu 📚</a>
            <a href="videos.html" class="${currentPage === 'videos.html' ? 'active-link' : ''}">Student Videos 📹</a>
            
            <div class="dropdown">
                <a href="#" class="${isChapterPage ? 'active-link' : ''}">Science Form 2 ▼</a>
                <div class="dropdown-content">
                    ${chapterLinksHTML}
                </div>
            </div>

            <a href="interactive_lab.html" class="${currentPage === 'interactive_lab.html' ? 'active-link' : ''}">Interactive Lab</a>
            <a href="performance.html" class="${currentPage === 'performance.html' ? 'active-link' : ''}">Scientist Analytics</a>
            <a href="contact.html" class="${currentPage === 'contact.html' ? 'active-link' : ''}">Ask a Teacher</a>

            <button onclick="toggleDarkMode()" class="btn-dark-toggle" id="btnDarkMode">
                ${isDark ? "☀️ Mod Terang" : "🌙 Mod Gelap"}
            </button>

            <div class="nav-right-user">
                <button class="avatar-btn-pandai" onclick="toggleUserDropdown(event)">
                    <span id="navUserAvatar" style="font-size: 16px;">🔬</span>
                    <span id="navUserName">${initialName}</span>
                    <span style="font-size: 10px;">▼</span>
                </button>

                <div class="user-dropdown-menu" id="userDropdownMenu">
                    <div class="user-dropdown-header">
                        <div style="font-weight: bold; font-size: 14px;" id="dropHeaderNama">${initialHeaderName}</div>
                        <div style="font-size: 11px; opacity: 0.9; margin-top: 2px;" id="dropHeaderXP">⭐ 0 XP</div>
                    </div>
                    
                    <a href="profile.html" class="user-dropdown-item" onclick="tutupDropdownUser()">
                        <span>👤</span> My Profile (Profil Saya)
                    </a>
                    
                    <a href="badge.html" class="user-dropdown-item" onclick="tutupDropdownUser()">
                        <span>🔥</span> Badges & XP
                    </a>
                    
                    <a href="certificate.html" class="user-dropdown-item" onclick="tutupDropdownUser()">
                        <span>📜</span> Sijil Digital ZEP
                    </a>
                    
                    <div class="user-dropdown-divider"></div>
                    
                    <div id="bekasStatusAuth">
                        ${initialAuthHTML}
                    </div>
                </div>
            </div>
        </nav>
    `;

    const existingNav = document.querySelector("nav.navbar");
    const placeholder = document.getElementById("navbar-placeholder");
    const header = document.querySelector(".header-container");

    if (existingNav) {
        existingNav.outerHTML = navbarHTML;
    } else if (placeholder) {
        placeholder.innerHTML = navbarHTML;
    } else if (header) {
        header.insertAdjacentHTML("afterend", navbarHTML);
    } else {
        document.body.insertAdjacentHTML("afterbegin", navbarHTML);
    }

    if (!document.getElementById("zep-toast-container")) {
        document.body.insertAdjacentHTML("beforeend", '<div id="zep-toast-container"></div>');
    }
}

// 3. FUNGSI INTERAKTIF NAVBAR & MOD GELAP
window.toggleDarkMode = function() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    const btn = document.getElementById("btnDarkMode");
    if (btn) btn.innerText = isDark ? "☀️ Mod Terang" : "🌙 Mod Gelap";
};

window.toggleUserDropdown = function(event) {
    if (event) event.stopPropagation();
    const menu = document.getElementById("userDropdownMenu");
    if (menu) menu.classList.toggle("show");
};

window.tutupDropdownUser = function() {
    const menu = document.getElementById("userDropdownMenu");
    if (menu) menu.classList.remove("show");
};

window.addEventListener("click", () => window.tutupDropdownUser());

window.showToast = window.showToast || function(message, type = 'info') {
    const container = document.getElementById("zep-toast-container") || document.getElementById("toast-container");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = `zep-toast-msg toast-msg ${type}`;
    toast.innerText = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
};

window.kemaskiniNavbarAvatar = function(nama, avatar, xp) {
    const elemAvatar = document.getElementById("navUserAvatar");
    const elemNama = document.getElementById("navUserName");
    const dropNama = document.getElementById("dropHeaderNama");
    const dropXP = document.getElementById("dropHeaderXP");

    if (elemAvatar) elemAvatar.innerText = avatar || "🔬";
    if (elemNama) elemNama.innerText = nama || "Saintis ZEP";
    if (dropNama) dropNama.innerText = (nama || "Saintis ZEP").toUpperCase();
    if (dropXP) dropXP.innerText = `⭐ ${xp || 0} XP`;
};

window.kemaskiniMenuAuth = function(sudahLogMasuk) {
    const bekas = document.getElementById("bekasStatusAuth");
    if (!bekas) return;

    if (sudahLogMasuk) {
        bekas.innerHTML = `
            <a href="javascript:void(0);" class="user-dropdown-item" style="color: #dc3545;" onclick="tutupDropdownUser(); logOutUser();">
                <span>🚪</span> Log Keluar (Logout)
            </a>`;
    } else {
        bekas.innerHTML = `
            <a href="login.html" class="user-dropdown-item" style="color: #28a745;" onclick="tutupDropdownUser();">
                <span>🔑</span> Log Masuk / Daftar Akaun
            </a>`;
    }
};

// Fungsi sandaran logOutUser sebelum modul Firebase selesai dimuatkan
window.logOutUser = window.logOutUser || function() {
    if (confirm("Adakah anda pasti mahu log keluar?")) {
        sessionStorage.clear();
        window.location.href = "login.html";
    }
};

// Papar navbar serta-merta
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderSharedNavbar);
} else {
    renderSharedNavbar();
}

// 4. SEGERAKKAN PROFIL FIREBASE SECARA DINAMIK
async function initFirebaseNavbar() {
    try {
        const { initializeApp, getApps, getApp } = await import("https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js");
        const { getDatabase, ref, onValue, set } = await import("https://www.gstatic.com/firebasejs/13.1.0/firebase-database.js");
        const { getAuth, onAuthStateChanged, signOut } = await import("https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js");

        const firebaseConfig = {
            apiKey: "AIzaSyBAtbX6wmdNwmXkgUvewnfRRXRTfyq5IZ8",
            authDomain: "jejak-sejarah-tingkatan-2.firebaseapp.com",
            projectId: "jejak-sejarah-tingkatan-2",
            storageBucket: "jejak-sejarah-tingkatan-2.firebasestorage.app",
            messagingSenderId: "92872994798",
            appId: "1:92872994798:web:9c205538a5eb8f388e68ff",
            measurementId: "G-8RZ21D4FXY"
        };

        const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
        const db = getDatabase(app);
        const auth = getAuth(app);

        function getSafeKey(nama) {
            if (!nama) return "guest";
            return nama.trim().toLowerCase().replace(/[.#$\[\]\/ ]/g, "_");
        }

        window.logOutUser = function() {
            if (confirm("Adakah anda pasti mahu log keluar?")) {
                const safeKey = window.safeKeySaya || sessionStorage.getItem("saintis_key");
                if (safeKey) {
                    set(ref(db, "kawan_sistem_v2/" + safeKey + "/status_online"), false);
                }
                signOut(auth).then(() => {
                    sessionStorage.clear();
                    window.showToast("Berjaya log keluar!", "success");
                    setTimeout(() => { window.location.href = "login.html"; }, 800);
                }).catch(() => {
                    sessionStorage.clear();
                    window.location.href = "login.html";
                });
            }
        };

        let unsubscribeNavProfile = null;

        function segerakProfilNavbar(namaSahih, safeKey) {
            window.namaPemainSaya = namaSahih;
            window.safeKeySaya = safeKey;
            window.kemaskiniNavbarAvatar(namaSahih, "🔬", 0);

            if (unsubscribeNavProfile) unsubscribeNavProfile();

            unsubscribeNavProfile = onValue(ref(db, "kawan_sistem_v2/" + safeKey), (snap) => {
                const u = snap.val() || {};
                const namaPaparan = u.nama_asal || namaSahih;
                const avatarPaparan = u.avatar || "🔬";
                const xpPaparan = u.xp || 0;
                window.kemaskiniNavbarAvatar(namaPaparan, avatarPaparan, xpPaparan);
            });
        }

        onAuthStateChanged(auth, (user) => {
            if (user) {
                window.kemaskiniMenuAuth(true);
                const defaultName = user.displayName || (user.email ? user.email.split('@')[0] : "Saintis");
                const cachedKey = sessionStorage.getItem("saintis_key");
                const savedName = (cachedKey === user.uid && sessionStorage.getItem("saintis_nickname")) || defaultName;
                
                sessionStorage.setItem("saintis_nickname", savedName);
                sessionStorage.setItem("saintis_key", user.uid);
                segerakProfilNavbar(savedName, user.uid);
            } else {
                if (unsubscribeNavProfile) {
                    unsubscribeNavProfile();
                    unsubscribeNavProfile = null;
                }
                const savedName = sessionStorage.getItem("saintis_nickname");
                const savedKey = sessionStorage.getItem("saintis_key");
                if (savedName) {
                    window.kemaskiniMenuAuth(true);
                    segerakProfilNavbar(savedName, savedKey || getSafeKey(savedName));
                } else {
                    window.kemaskiniMenuAuth(false);
                }
            }
        });

    } catch (err) {
        const savedName = sessionStorage.getItem("saintis_nickname");
        if (savedName) {
            window.kemaskiniMenuAuth(true);
            window.kemaskiniNavbarAvatar(savedName, "🔬", 0);
        }
    }
}

initFirebaseNavbar();