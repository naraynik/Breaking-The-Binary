const renderHome = () => `
<div id="homePage" class="hidden relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
        <div class="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#7C3AED]/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
        <!-- Hero Content -->
        <div class="text-center max-w-4xl mx-auto mb-16 fade-in">
            <!-- Personlized Greeting (populated after onboarding) -->
            <div id="homePersonalGreeting" class="hidden mb-6">
                <div class="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#2D0A59]/10 to-[#7C3AED]/10 dark:from-[#2D0A59]/40 dark:to-[#7C3AED]/30 border border-[#7C3AED]/20 dark:border-white/10">
                    <div class="w-8 h-8 rounded-full bg-[#7C3AED] flex items-center justify-center shrink-0">
                        <i data-lucide="user" class="w-4 h-4 text-white"></i>
                    </div>
                    <p id="homePersonalGreetingText" class="text-sm font-semibold text-[#2D0A59] dark:text-gray-200"></p>
                </div>
            </div>

            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] dark:text-[#A78BFA] text-sm font-semibold mb-6 border border-transparent dark:border-[#7C3AED]/20">
                <i data-lucide="sparkles" class="w-4 h-4"></i>
                SDG 5: Gender Equality in STEM
            </div>
            
            <h1 class="text-5xl md:text-7xl font-black text-[#1F2937] dark:text-gray-100 tracking-tight leading-tight mb-8 transition-colors">
                Talent is universal.
                <span class="text-[#2D0A59] dark:text-[#C4B5FD] block mt-2 transition-colors">Opportunity must be engineered.</span>
            </h1>
            
            <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto transition-colors">
                A gap in confidence, a lack of role models, an invisible barrier. It's time to decode the disparity. You are the architect of tomorrow's breakthroughs.
            </p>
        </div>

        <!-- The Reality (Stats Banner) -->
        <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700 shadow-2xl rounded-3xl p-8 mb-20 fade-in transition-colors" style="animation-delay: 0.2s;">
            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold text-[#2D0A59] dark:text-[#C4B5FD] transition-colors">The Reality in Numbers</h2>
                <p class="text-gray-500 dark:text-gray-400 transition-colors mt-2">Why we need you to bridge the gap in India.</p>
            </div>
            <div id="homeStatsContainer" class="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-gray-700 transition-colors">
                <!-- Injected dynamically in initHomeCharts -->
            </div>
        </div>

        <!-- Charts Section (Consolidated Evidence) -->
        <div class="mb-20 fade-in" style="animation-delay: 0.4s;">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                <!-- Chart 1: Bar Chart -->
                <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 h-[450px] flex flex-col transition-colors">
                    <div class="mb-4 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <i data-lucide="globe-2" class="w-6 h-6 text-[#7C3AED] dark:text-[#A78BFA]"></i>
                            <h3 class="text-xl font-bold text-[#1F2937] dark:text-gray-100 transition-colors">Global vs India Participation</h3>
                        </div>
                    </div>
                    <p class="text-sm text-gray-500 dark:text-gray-400 transition-colors mb-4">Percentage of women in various STEM sub-sectors.</p>
                    <div class="flex-1 min-h-0 relative">
                        <canvas id="participationChart"></canvas>
                    </div>
                </div>

                <!-- Chart 2: Pipeline Funnel / Area -->
                <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 h-[450px] flex flex-col transition-colors">
                    <div class="mb-4 flex items-center gap-3">
                        <i data-lucide="trending-down" class="w-6 h-6 text-pink-500 dark:text-pink-400"></i>
                        <h3 class="text-xl font-bold text-[#1F2937] dark:text-gray-100 transition-colors">The "Leaky Pipeline"</h3>
                    </div>
                    <p class="text-sm text-gray-500 dark:text-gray-400 transition-colors mb-4">Visualizing where girls drop out of the STEM trajectory in India.</p>
                    <div class="flex-1 min-h-0 relative">
                        <canvas id="pipelineChart"></canvas>
                    </div>
                </div>
            </div>
        </div>

        <!-- Call To Action -->
        <div class="text-center fade-in bg-gradient-to-br from-[#2D0A59] to-[#7C3AED] dark:from-[#1E073B] dark:to-[#5B21B6] rounded-3xl p-12 text-white shadow-xl relative overflow-hidden transition-colors" style="animation-delay: 0.6s;">
            <div class="absolute inset-0 opacity-10 pattern-dots"></div>
            <div class="relative z-10">
                <h2 class="text-4xl font-bold mb-4">Ready to Rewrite the Equation?</h2>
                <p class="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                    Let's find the pathway that matches your interests, your educational level, and your ambition.
                </p>
                <button onclick="showPage('discoveryPage')" class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#2D0A59] dark:bg-gray-100 dark:text-gray-900 hover:bg-gray-50 dark:hover:bg-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                    Explore Career Options
                    <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </button>
            </div>
        </div>

    </div>
</div>
`;

function initHomeCharts() {
    // 1. Inject Stats
    const statsContainer = document.getElementById('homeStatsContainer');
    if (statsContainer && window.stemStats && window.stemStats.keyInsights) {
        statsContainer.innerHTML = window.stemStats.keyInsights.map((insight, index) => {
            const colors = ['text-[#7C3AED] dark:text-[#A78BFA]', 'text-pink-500 dark:text-pink-400', 'text-rose-500 dark:text-rose-400'];
            const colorClass = colors[index % colors.length];
            return `
                <div class="text-center pt-6 md:pt-0 pb-6 md:pb-0 px-4">
                    <div class="text-5xl font-black ${colorClass} mb-2 transition-colors">${insight.stat}</div>
                    <p class="text-gray-800 dark:text-gray-200 font-bold mb-1 transition-colors">${insight.title}</p>
                    <p class="text-gray-500 dark:text-gray-400 text-sm transition-colors">${insight.description}</p>
                </div>
            `;
        }).join('');
    }

    // Check if Chart.js is loaded
    if (typeof Chart === 'undefined') return;

    if (!window.stemStats) return;
    const stats = window.stemStats;

    const ctxPart = document.getElementById('participationChart');
    if (ctxPart && !window.participationChartInst && stats.globalComparison) {
        window.participationChartInst = new Chart(ctxPart, {
            type: 'bar',
            data: {
                labels: stats.globalComparison.labels,
                datasets: [
                    {
                        label: 'Female STEM Graduates (%)',
                        data: stats.globalComparison.dataGraduates,
                        backgroundColor: '#7C3AED', // Purple
                        borderRadius: 4
                    },
                    {
                        label: 'Female STEM Workforce (%)',
                        data: stats.globalComparison.dataWorkforce,
                        backgroundColor: '#F472B6', // Pink
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'bottom' }, title: { display: true, text: stats.globalComparison.title } },
                scales: {
                    y: { beginAtZero: true, max: 100, grid: { color: '#f0f0f0' } },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    const ctxPipe = document.getElementById('pipelineChart');
    if (ctxPipe && !window.pipelineChartInst && stats.leakyPipeline) {
        window.pipelineChartInst = new Chart(ctxPipe, {
            type: 'line',
            data: {
                labels: stats.leakyPipeline.labels,
                datasets: [
                    {
                        label: 'Female Participation Rate',
                        data: stats.leakyPipeline.data,
                        segment: {
                            borderColor: ctx => stats.leakyPipeline.colors[ctx.p0DataIndex] || '#7C3AED',
                        },
                        borderWidth: 4,
                        pointBackgroundColor: stats.leakyPipeline.colors,
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        fill: true,
                        backgroundColor: 'rgba(124, 58, 237, 0.1)',
                        tension: 0.3
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    title: { display: true, text: stats.leakyPipeline.description, font: { weight: 'normal', color: '#6B7280' } }
                },
                scales: {
                    y: { beginAtZero: true, max: 100, title: { display: true, text: 'Participation %' }, grid: { color: '#f0f0f0' } },
                    x: { grid: { display: false } }
                }
            }
        });
    }
}

// =====================================================
// HOME PERSONALIZATION
// =====================================================
function updateHomeGreeting() {
    console.log('Breaking the Binary: updateHomeGreeting called');
    const name = (window.userState && window.userState.name) || '';
    const city = (window.userState && window.userState.city) || '';
    const state = (window.userState && window.userState.state) || '';
    const edu = (window.userState && window.userState.education) || '';
    console.log('Breaking the Binary: Greeting state', { name, city, state, edu });

    const greetingEl = document.getElementById('homePersonalGreeting');
    const textEl = document.getElementById('homePersonalGreetingText');
    console.log('Breaking the Binary: Greeting elements', { greetingEl, textEl });
    if (!greetingEl || !textEl) {
        console.warn('Breaking the Binary: Greeting elements missing from DOM');
        return;
    }

    if (!name) {
        console.log('Breaking the Binary: No name found, hiding greeting');
        greetingEl.classList.add('hidden');
        return;
    }

    let locationPart = '';
    if (city && state) locationPart = ` from ${city}, ${state}`;
    else if (city || state) locationPart = ` from ${city || state}`;

    const eduPart = edu ? ` · ${edu}` : '';

    textEl.textContent = `Welcome, ${name}! 🎉  Personalising your STEM journey${locationPart}${eduPart}.`;
    greetingEl.classList.remove('hidden');
    console.log('Breaking the Binary: Greeting shown');
    lucide.createIcons();
}
