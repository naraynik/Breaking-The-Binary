const renderEvidence = () => `
<div id="evidencePage" class="hidden pt-32 px-6 container mx-auto pb-20">
    <div class="mb-12 text-center max-w-3xl mx-auto fade-in">
        <h1 class="text-4xl font-bold text-[#1F2937] mb-4">The Data Behind the Mission</h1>
        <p class="text-lg text-gray-500">
            Numbers tell a story of systemic drop-offs. By understanding the gaps, we can engineer better opportunities.
        </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <!-- Chart 1: Bar Chart -->
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-[500px] flex flex-col fade-in" style="animation-delay: 0.2s;">
            <div class="mb-6 flex items-center gap-3">
                <i data-lucide="globe-2" class="w-6 h-6 text-[#7C3AED]"></i>
                <h2 class="text-2xl font-bold text-[#1F2937]">Global vs India Participation</h2>
            </div>
            <p class="text-sm text-gray-500 mb-6">Percentage of women in various STEM sub-sectors.</p>
            <div class="flex-1 min-h-0 relative">
                <canvas id="participationChart"></canvas>
            </div>
        </div>

        <!-- Chart 2: Pipeline Funnel / Area -->
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-[500px] flex flex-col fade-in" style="animation-delay: 0.4s;">
            <div class="mb-6 flex items-center gap-3">
                <i data-lucide="trending-down" class="w-6 h-6 text-pink-500"></i>
                <h2 class="text-2xl font-bold text-[#1F2937]">The "Leaky Pipeline"</h2>
            </div>
            <p class="text-sm text-gray-500 mb-6">Visualizing where girls drop out of the STEM trajectory.</p>
            <div class="flex-1 min-h-0 relative">
                <canvas id="pipelineChart"></canvas>
            </div>
        </div>
    </div>
    
    <!-- Insight Banner -->
    <div class="mt-12 bg-[#2D0A59]/5 border border-[#2D0A59]/10 p-6 rounded-2xl max-w-7xl mx-auto flex items-start gap-4 fade-in" style="animation-delay: 0.6s;">
        <i data-lucide="alert-circle" class="w-6 h-6 text-[#7C3AED] shrink-0 mt-1"></i>
        <p class="text-[#1F2937] leading-relaxed">
            <strong class="text-[#2D0A59] block mb-1">Key Insight:</strong> 
            While girls show equal interest in STEM during early education, societal pressures, lack of mentorship, and structural biases cause a significant dropoff at the higher-education and workforce entry levels. Our Discovery portal is designed to plug these leaks.
        </p>
    </div>
</div>
`;

function initCharts() {
    // Check if Chart.js is loaded
    if (typeof Chart === 'undefined') return;

    const ctxPart = document.getElementById('participationChart');
    if (ctxPart && !window.participationChartInst) {
        window.participationChartInst = new Chart(ctxPart, {
            type: 'bar',
            data: {
                labels: ['Overall STEM', 'IT & Tech', 'Engineering', 'Research & AI'],
                datasets: [
                    {
                        label: 'Global Average (%)',
                        data: [28, 33, 20, 22],
                        backgroundColor: '#2D0A59',
                        borderRadius: 4
                    },
                    {
                        label: 'India Average (%)',
                        data: [27, 34, 30, 16],
                        backgroundColor: '#7C3AED',
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'bottom' } },
                scales: {
                    y: { beginAtZero: true, max: 100, grid: { color: '#f0f0f0' } },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    const ctxPipe = document.getElementById('pipelineChart');
    if (ctxPipe && !window.pipelineChartInst) {
        window.pipelineChartInst = new Chart(ctxPipe, {
            type: 'line',
            data: {
                labels: ['10th Grade', '12th Grade', 'Undergrad', 'Workforce', 'Leadership'],
                datasets: [
                    {
                        label: 'Boys Surviving',
                        data: [52, 65, 82, 92, 99],
                        borderColor: '#93c5fd',
                        backgroundColor: 'rgba(191, 219, 254, 0.5)',
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'Girls Surviving',
                        data: [48, 35, 18, 8, 1],
                        borderColor: '#f472b6',
                        backgroundColor: 'rgba(251, 207, 232, 0.5)',
                        fill: true,
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'bottom' } },
                scales: {
                    y: { beginAtZero: true, max: 100, grid: { color: '#f0f0f0' } },
                    x: { grid: { display: false } }
                }
            }
        });
    }
}
