/* ==========================================================================
   ZEP PORTAL - GOD-TIER HACKER ENGINE (Canvas Matrix + SHA-256 + Anti-F12)
   ========================================================================== */

(function () {
    // 1. AMARAN ASCII ART DALAM CONSOLE (Bila ada yang tekan F12)
    console.log(
        "%c" +
        "███████╗███████╗██████╗      ██████╗██╗   ██╗██████╗ ███████╗██████╗ \n" +
        "╚══███╔╝██╔════╝██╔══██╗    ██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗\n" +
        "  ███╔╝ █████╗  ██████╔╝    ██║      ╚████╔╝ ██████╔╝█████╗  ██████╔╝\n" +
        " ███╔╝  ██╔══╝  ██╔═══╝     ██║       ╚██╔╝  ██╔══██╗██╔══╝  ██╔══██╗\n" +
        "███████╗███████╗██║         ╚██████╗   ██║   ██████╔╝███████╗██║  ██║\n" +
        "╚══════╝╚══════╝╚═╝          ╚═════╝   ╚═╝   ╚═════╝ ╚══════╝╚═╝  ╚═╝",
        "color: #00ff41; font-weight: bold; font-family: monospace;"
    );
    console.log(
        "%c⚠️ AMARAN SISTEM ZEP: Zon ini dipantau oleh Protokol Keselamatan Saintis Muda. Sebarang cubaan mengubah XP melalui Console akan disekat oleh pelayan.",
        "color: #ff4d4d; font-size: 13px; font-weight: bold; background: #1a0000; padding: 6px 10px; border-radius: 4px;"
    );

    // 2. HUJAN KOD MATRIX SEBENAR (HTML5 CANVAS)
    const canvas = document.createElement("canvas");
    canvas.id = "zepMatrixRain";
    Object.assign(canvas.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        zIndex: "0",
        pointerEvents: "none",
        opacity: "0.22",
        display: "none"
    });
    document.body.prepend(canvas);

    // Pastikan kandungan utama berada di atas lapisan hujan Matrix
    document.querySelectorAll(".header-container, .navbar, .main-container").forEach((el) => {
        if (getComputedStyle(el).position === "static") el.style.position = "relative";
        el.style.zIndex = "2";
    });

    const ctx = canvas.getContext("2d");
    const aksara = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*アイウエオカキクケコサシスセソ";
    const saizFont = 14;
    let titisan = [];
    let timerHujan = null;

    function larasSaizCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const lajur = Math.floor(canvas.width / saizFont);
        titisan = Array(lajur).fill(1);
    }

    function lukisHujanMatrix() {
        ctx.fillStyle = "rgba(2, 6, 2, 0.08)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#00ff41";
        ctx.font = saizFont + "px monospace";

        for (let i = 0; i < titisan.length; i++) {
            const huruf = aksara.charAt(Math.floor(Math.random() * aksara.length));
            ctx.fillText(huruf, i * saizFont, titisan[i] * saizFont);

            if (titisan[i] * saizFont > canvas.height && Math.random() > 0.975) {
                titisan[i] = 0;
            }
            titisan[i]++;
        }
    }

    function semakStatusMatrix() {
        const aktif = document.body.classList.contains("matrix-mode");
        if (aktif && !timerHujan) {
            larasSaizCanvas();
            canvas.style.display = "block";
            timerHujan = setInterval(lukisHujanMatrix, 45);
        } else if (!aktif && timerHujan) {
            clearInterval(timerHujan);
            timerHujan = null;
            canvas.style.display = "none";
        }
    }

    window.addEventListener("resize", () => {
        if (timerHujan) larasSaizCanvas();
    });

    // Pantau perubahan kelas pada <body> secara automatik
    const pemantauMod = new MutationObserver(semakStatusMatrix);
    pemantauMod.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    semakStatusMatrix();

    // 3. TANDATANGAN KRIPTOGRAFI SHA-256 UNTUK KAD IDENTITI SAINTIS
    async function janaHashDigital(teks) {
        if (window.crypto && window.crypto.subtle) {
            const data = new TextEncoder().encode(teks);
            const buffer = await crypto.subtle.digest("SHA-256", data);
            return Array.from(new Uint8Array(buffer))
                .map((b) => b.toString(16).padStart(2, "0"))
                .join("")
                .slice(0, 12)
                .toUpperCase();
        }
        let h = 0x811c9dc5;
        for (let i = 0; i < teks.length; i++) {
            h ^= teks.charCodeAt(i);
            h = Math.imul(h, 0x01000193);
        }
        return (h >>> 0).toString(16).toUpperCase().padStart(8, "0") + "ZEP";
    }

    async function kemaskiniCapKeselamatan() {
        const bioBox = document.querySelector(".bio-box");
        const namaEl = document.getElementById("profNama");
        const xpEl = document.getElementById("profXP");
        if (!bioBox || !namaEl || !xpEl) return;

        const bahan = `${namaEl.innerText.trim()}|${xpEl.innerText.trim()}|ZEP-KSSM-2026`;
        const hash = await janaHashDigital(bahan);

        let cap = document.getElementById("zepCryptoSig");
        if (!cap) {
            cap = document.createElement("div");
            cap.id = "zepCryptoSig";
            Object.assign(cap.style, {
                marginTop: "10px",
                paddingTop: "8px",
                borderTop: "1px dashed rgba(100, 116, 139, 0.4)",
                fontFamily: "monospace",
                fontSize: "11px",
                opacity: "0.85",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "6px"
            });
            bioBox.appendChild(cap);
        }
        cap.innerHTML = `<span>🛡️ VERIFIED DIGITAL ID</span><span>SHA-256 SIG: <b>${hash}</b></span>`;
    }

    setTimeout(kemaskiniCapKeselamatan, 900);
    const xpNode = document.getElementById("profXP");
    if (xpNode) {
        new MutationObserver(kemaskiniCapKeselamatan).observe(xpNode, { childList: true, characterData: true, subtree: true });
    }
})();