(function () {
    const tasks = [
        ["رسالة ترحيب تفاعلية", "Introduction and Fundamentals", "fa-comment-dots", "#06b6d4"],
        ["آلة حاسبة تفاعلية", "Operators and String Methods", "fa-calculator", "#10b981"],
        ["مخطط أيام الأسبوع", "Conditional Logic and Comparisons", "fa-calendar-days", "#f59e0b"],
        ["قائمة المهام", "Arrays and Data Management", "fa-list-check", "#8b5cf6"],
        ["عرض المنتجات", "Loops and Iterations", "fa-boxes-stacked", "#06b6d4"],
        ["حاسبة الأسعار", "Functions and Reusability", "fa-percent", "#10b981"],
        ["فلترة المنتجات", "Higher-Order Functions and Scope", "fa-filter", "#f59e0b"],
        ["نظام المكتبة", "Advanced HOFs and Objects", "fa-book-open", "#8b5cf6"],
        ["قائمة المنتجات", "DOM Basics and Dynamic Content", "fa-layer-group", "#06b6d4"],
        ["إدارة المستخدمين", "Advanced DOM Manipulation", "fa-users-gear", "#10b981"],
        ["الساعة والرابط", "BOM and Advanced DOM", "fa-clock", "#f59e0b"],
        ["ألوان الخلفية", "Storage and History", "fa-palette", "#8b5cf6"],
        ["عرض الملف الشخصي", "Destructuring and Objects", "fa-id-card", "#06b6d4"],
        ["تتبع المنتجات", "Sets and Maps", "fa-map-location-dot", "#10b981"],
        ["التحقق من النماذج", "Regular Expressions", "fa-spell-check", "#f59e0b"],
        ["نموذج تسجيل الدخول", "Advanced Regex", "fa-shield-halved", "#8b5cf6"],
        ["مُنشئ المستخدم", "OOP Constructor", "fa-user-plus", "#06b6d4"],
        ["إدارة الكتب", "Advanced OOP Concepts", "fa-book", "#10b981"],
        ["العد التنازلي", "Dates and Descriptors", "fa-hourglass-half", "#f59e0b"],
        ["مولد الأرقام", "Generators and Modules", "fa-dice", "#8b5cf6"],
        ["JSON و API", "JSON and APIs", "fa-code-branch", "#06b6d4"],
        ["تطبيق الطقس", "Promises and AJAX", "fa-cloud-sun", "#10b981"]
    ];

    function injectStyles() {
        const style = document.createElement("style");
        style.textContent = `
            @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;800;900&family=Inter:wght@400;600;800&display=swap');

            :root {
                --app-bg: #020617;
                --app-panel: rgba(15, 23, 42, 0.76);
                --app-line: rgba(148, 163, 184, 0.16);
                --app-text: #e2e8f0;
                --app-muted: #94a3b8;
                --app-cyan: #06b6d4;
                --app-blue: #3b82f6;
                --app-green: #10b981;
                --app-amber: #f59e0b;
                --app-purple: #8b5cf6;
            }

            html,
            body {
                background: var(--app-bg) !important;
                color: var(--app-text) !important;
                font-family: 'Cairo', 'Tajawal', sans-serif !important;
            }

            body {
                background:
                    radial-gradient(circle at 18% 4%, rgba(6, 182, 212, 0.18), transparent 28%),
                    radial-gradient(circle at 82% 12%, rgba(139, 92, 246, 0.16), transparent 30%),
                    linear-gradient(180deg, #020617 0%, #070b18 48%, #0f172a 100%) !important;
            }

            header {
                height: 72px !important;
                padding: 0 24px !important;
                background: rgba(2, 6, 23, 0.72) !important;
                backdrop-filter: blur(18px);
                -webkit-backdrop-filter: blur(18px);
                border-bottom: 1px solid var(--app-line);
                box-shadow: none !important;
            }

            header h1 {
                font-size: 1rem !important;
                letter-spacing: 0 !important;
            }

            header h1::before {
                content: "JS";
                display: inline-grid;
                place-items: center;
                width: 36px;
                height: 36px;
                margin-left: 10px;
                border-radius: 12px;
                background: linear-gradient(135deg, var(--app-cyan), var(--app-blue));
                color: #fff;
                font-family: 'Inter', sans-serif;
                font-weight: 800;
                box-shadow: 0 14px 34px rgba(6, 182, 212, 0.24);
            }

            .theme-toggle {
                display: none !important;
            }

            .menu-btn {
                width: 42px;
                height: 42px;
                display: inline-grid;
                place-items: center;
                border-radius: 12px !important;
                background: rgba(15, 23, 42, 0.9) !important;
                border: 1px solid var(--app-line) !important;
                color: var(--app-text) !important;
            }

            nav {
                width: 330px !important;
                padding: 88px 14px 20px !important;
                background: rgba(2, 6, 23, 0.88) !important;
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border-left: 1px solid var(--app-line);
                box-shadow: -30px 0 80px rgba(0, 0, 0, 0.34) !important;
            }

            nav ul {
                display: grid;
                gap: 8px;
                padding: 0 !important;
            }

            nav a {
                min-height: 58px;
                gap: 12px;
                padding: 10px 12px !important;
                border-radius: 14px !important;
                background: rgba(15, 23, 42, 0.58);
                border: 1px solid rgba(148, 163, 184, 0.08);
            }

            nav a:hover,
            nav a.active {
                background: rgba(6, 182, 212, 0.11) !important;
                border-color: rgba(6, 182, 212, 0.28);
                transform: translateX(-4px) !important;
            }

            .nav-week-icon {
                width: 34px;
                height: 34px;
                display: inline-grid;
                place-items: center;
                border-radius: 11px;
                color: #fff;
                font-size: 0.9rem;
                flex: 0 0 auto;
            }

            .nav-week-text {
                display: grid;
                gap: 1px;
            }

            .nav-week-text strong {
                color: #f8fafc;
                font-size: 0.9rem;
            }

            .nav-week-text span {
                color: var(--app-muted);
                font-family: 'Inter', sans-serif;
                font-size: 0.7rem;
                direction: ltr;
                text-align: right;
            }

            main {
                margin-top: 72px !important;
            }

            .hero {
                min-height: calc(100vh - 72px) !important;
                align-items: flex-start !important;
                padding: 64px 24px 42px !important;
                background: transparent !important;
                animation: none !important;
            }

            .hero::before,
            .hero::after {
                display: none !important;
            }

            .hero::after {
                content: "";
            }

            .hero-content {
                width: 100%;
                max-width: 1420px !important;
                margin: 0 auto;
                opacity: 1 !important;
                transform: none !important;
            }

            .js-hero-shell {
                position: relative;
                overflow: hidden;
            }

            .js-hero-shell::before {
                content: "";
                position: absolute;
                inset: -80px;
                pointer-events: none;
                background-image:
                    linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
                background-size: 58px 58px;
                mask-image: radial-gradient(ellipse at 50% 8%, black 10%, transparent 72%);
                -webkit-mask-image: radial-gradient(ellipse at 50% 8%, black 10%, transparent 72%);
            }

            #particles {
                position: fixed;
                inset: 0;
                pointer-events: none;
                z-index: 0;
            }

            .title-section {
                position: relative;
                z-index: 1;
                text-align: center;
                margin-bottom: 34px;
            }

            .title-badge {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 7px 16px;
                margin-bottom: 18px;
                border-radius: 999px;
                background: rgba(6, 182, 212, 0.11);
                border: 1px solid rgba(6, 182, 212, 0.22);
                color: #67e8f9;
                font-family: 'Inter', sans-serif;
                font-size: 0.78rem;
                font-weight: 700;
            }

            .title-section h2 {
                max-width: 980px;
                margin: 0 auto 16px !important;
                font-size: clamp(2.5rem, 5vw, 5.8rem) !important;
                line-height: 1.04;
                font-weight: 900 !important;
                background: linear-gradient(135deg, #ffffff 0%, #67e8f9 35%, #60a5fa 62%, #c4b5fd 100%);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            .title-section p {
                max-width: 760px;
                margin: 0 auto 8px !important;
                color: var(--app-muted) !important;
                font-size: 1.05rem !important;
                line-height: 1.8;
            }

            .platform-actions {
                position: relative;
                z-index: 1;
                display: flex;
                justify-content: center;
                gap: 12px;
                flex-wrap: wrap;
                margin: 28px 0 34px;
            }

            .platform-actions a {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                padding: 13px 18px;
                border-radius: 14px;
                color: #fff;
                text-decoration: none;
                font-weight: 800;
                border: 1px solid rgba(255, 255, 255, 0.12);
            }

            .primary-action {
                background: linear-gradient(135deg, var(--app-cyan), var(--app-blue));
                box-shadow: 0 18px 44px rgba(37, 99, 235, 0.28);
            }

            .secondary-action {
                background: rgba(15, 23, 42, 0.76);
            }

            .stats-bar {
                position: relative;
                z-index: 1;
                display: flex;
                justify-content: center;
                gap: 18px;
                flex-wrap: wrap;
                margin-bottom: 36px;
            }

            .stat-item {
                min-width: 130px;
                padding: 16px 20px;
                border-radius: 18px;
                background: rgba(15, 23, 42, 0.68);
                border: 1px solid var(--app-line);
                backdrop-filter: blur(16px);
            }

            .stat-number {
                font-family: 'Inter', sans-serif;
                font-size: 2rem;
                font-weight: 800;
                background: linear-gradient(135deg, #67e8f9, #a78bfa);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            .stat-label {
                color: var(--app-muted);
                font-size: 0.86rem;
            }

            .weeks-container {
                position: relative;
                z-index: 1;
                display: grid;
                grid-template-columns: repeat(4, minmax(0, 1fr));
                gap: 18px;
                width: 100%;
            }

            .week-card {
                display: flex;
                flex-direction: column;
                min-height: 230px;
                padding: 20px;
                border-radius: 20px;
                background: rgba(15, 23, 42, 0.72);
                border: 1px solid var(--app-line);
                backdrop-filter: blur(18px);
                text-decoration: none;
                color: var(--app-text);
                position: relative;
                overflow: hidden;
                opacity: 0;
                transform: translateY(22px);
                animation: cardIn 0.65s ease forwards;
            }

            .week-card::before {
                content: "";
                position: absolute;
                top: 0;
                inset-inline: 20%;
                height: 1px;
                background: linear-gradient(90deg, transparent, var(--accent), transparent);
            }

            .week-card::after {
                content: "";
                position: absolute;
                width: 180px;
                height: 180px;
                top: -90px;
                left: -70px;
                border-radius: 50%;
                background: color-mix(in srgb, var(--accent) 18%, transparent);
                filter: blur(30px);
                opacity: 0.55;
            }

            .week-card:hover {
                transform: translateY(-6px);
                border-color: color-mix(in srgb, var(--accent) 48%, transparent);
                box-shadow: 0 24px 72px color-mix(in srgb, var(--accent) 18%, transparent);
            }

            @keyframes cardIn {
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .week-header {
                display: flex;
                align-items: center;
                gap: 13px;
                padding-bottom: 16px;
                margin-bottom: 18px;
                border-bottom: 1px solid rgba(148, 163, 184, 0.12);
                position: relative;
                z-index: 1;
            }

            .week-number {
                width: 44px;
                height: 44px;
                display: grid;
                place-items: center;
                border-radius: 14px;
                background: linear-gradient(135deg, var(--accent), #3b82f6);
                color: #fff;
                font-family: 'Inter', sans-serif;
                font-weight: 800;
            }

            .week-title {
                color: #fff;
                font-weight: 800;
                font-size: 1rem;
            }

            .week-subtitle {
                color: var(--app-muted);
                font-family: 'Inter', sans-serif;
                direction: ltr;
                text-align: right;
                font-size: 0.72rem;
            }

            .lesson-preview {
                position: relative;
                z-index: 1;
                display: grid;
                gap: 10px;
                margin-top: auto;
            }

            .lesson-chip {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 12px 13px;
                border-radius: 14px;
                background: rgba(255, 255, 255, 0.035);
                border: 1px solid rgba(255, 255, 255, 0.055);
                color: #cbd5e1;
                font-size: 0.84rem;
            }

            .lesson-chip i {
                color: var(--accent);
            }

            #landing {
                display: none !important;
            }

            #task-content {
                background: transparent !important;
            }

            #task-content.show {
                display: block;
            }

            @media (max-width: 1180px) {
                .weeks-container {
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                }
            }

            @media (max-width: 860px) {
                .weeks-container {
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                }
            }

            @media (max-width: 620px) {
                header {
                    padding: 0 14px !important;
                }

                nav {
                    width: min(100%, 360px) !important;
                }

                .hero {
                    padding: 38px 14px 28px !important;
                }

                .weeks-container {
                    grid-template-columns: 1fr;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function buildSidebar() {
        const list = document.querySelector("#sidebar ul");
        if (!list) return;

        list.innerHTML = tasks.map((task, index) => {
            const week = index + 1;
            return `
                <li>
                    <a href="#task${week}" data-task="task${week}">
                        <span class="nav-week-icon" style="background: linear-gradient(135deg, ${task[3]}, #3b82f6)">
                            <i class="fas ${task[2]}"></i>
                        </span>
                        <span class="nav-week-text">
                            <strong>الأسبوع ${week}: ${task[0]}</strong>
                            <span>${task[1]}</span>
                        </span>
                    </a>
                </li>
            `;
        }).join("");
    }

    function buildHero() {
        const hero = document.querySelector(".hero");
        const content = document.querySelector(".hero-content");
        if (!hero || !content) return;

        hero.classList.add("js-hero-shell");
        content.innerHTML = `
            <canvas id="particles" aria-hidden="true"></canvas>
            <div class="title-section">
                <div class="title-badge">
                    <i class="fas fa-code"></i>
                    <span>JavaScript Interactive Mentorship</span>
                </div>
                <h2>تطبيقات الجافاسكريبت</h2>
                <p>مسار تدريبي من 22 أسبوع يربط كل مجموعة دروس بتطبيق عملي واضح داخل نفس المشروع.</p>
                <p>إعداد م. أسامة زينهم</p>
            </div>

            <div class="platform-actions">
                <a href="#task1" data-task="task1" class="primary-action">
                    <i class="fas fa-play"></i>
                    <span>ابدأ من الأسبوع الأول</span>
                </a>
                <a href="https://wa.me/201116771405" target="_blank" class="secondary-action" rel="noopener noreferrer">
                    <i class="fab fa-whatsapp"></i>
                    <span>احجز Session الـ Mentorship</span>
                </a>
            </div>

            <div class="stats-bar">
                <div class="stat-item">
                    <div class="stat-number">22</div>
                    <div class="stat-label">أسبوع</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">182</div>
                    <div class="stat-label">درس</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">22</div>
                    <div class="stat-label">تطبيق</div>
                </div>
            </div>

            <div class="weeks-container">
                ${tasks.map((task, index) => {
                    const week = index + 1;
                    return `
                        <a class="week-card" style="--accent: ${task[3]}; animation-delay: ${Math.min(index * 45, 720)}ms" href="#task${week}" data-task="task${week}">
                            <div class="week-header">
                                <div class="week-number">${week}</div>
                                <div class="week-info">
                                    <div class="week-title">${task[0]}</div>
                                    <div class="week-subtitle">${task[1]}</div>
                                </div>
                            </div>
                            <div class="lesson-preview">
                                <div class="lesson-chip"><i class="fas ${task[2]}"></i><span>Week ${week}</span></div>
                                <div class="lesson-chip"><i class="fas fa-arrow-left"></i><span>افتح التطبيق</span></div>
                            </div>
                        </a>
                    `;
                }).join("")}
            </div>
        `;
    }

    function attachDelegatedRouting() {
        document.addEventListener("click", (event) => {
            const link = event.target.closest("[data-task]");
            if (!link) return;

            const taskId = link.getAttribute("data-task");
            if (!taskId) return;

            event.preventDefault();
            if (window.router && typeof window.router.navigateToTask === "function") {
                window.router.navigateToTask(taskId);
            } else {
                window.location.hash = taskId;
            }

            const sidebar = document.getElementById("sidebar");
            if (sidebar && window.innerWidth <= 768) sidebar.classList.remove("visible");
        });
    }

    function startParticles() {
        const canvas = document.getElementById("particles");
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        const particles = [];
        const mouse = { x: -1000, y: -1000 };

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        function resetParticle(particle) {
            particle.x = Math.random() * canvas.width;
            particle.y = Math.random() * canvas.height;
            particle.size = Math.random() * 1.8 + 0.6;
            particle.speedX = (Math.random() - 0.5) * 0.32;
            particle.speedY = (Math.random() - 0.5) * 0.32;
            particle.opacity = Math.random() * 0.35 + 0.08;
            particle.hue = Math.random() > 0.5 ? 190 : 255;
        }

        resize();
        for (let i = 0; i < Math.min(90, Math.floor(window.innerWidth / 16)); i++) {
            const particle = {};
            resetParticle(particle);
            particles.push(particle);
        }

        window.addEventListener("resize", resize, { passive: true });
        document.addEventListener("mousemove", (event) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        }, { passive: true });

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                const dx = particle.x - mouse.x;
                const dy = particle.y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance > 0 && distance < 120) {
                    const force = (120 - distance) / 120;
                    particle.x += (dx / distance) * force;
                    particle.y += (dy / distance) * force;
                }

                if (particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
                    resetParticle(particle);
                }

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${particle.hue}, 88%, 70%, ${particle.opacity})`;
                ctx.fill();
            });

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 125) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(103, 232, 249, ${0.055 * (1 - distance / 125)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(draw);
        }

        draw();
    }

    injectStyles();
    buildSidebar();
    buildHero();
    attachDelegatedRouting();
    startParticles();
})();
