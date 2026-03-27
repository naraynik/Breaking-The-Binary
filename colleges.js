const renderColleges = () => `
<div id="collegesPage" class="hidden pt-24 px-4 md:px-8 pb-28 container mx-auto max-w-7xl min-h-screen">
    <div class="mb-10 animate-fade-in-up">
        <h1 class="text-4xl font-black text-[#1F2937] dark:text-gray-100 tracking-tight leading-tight mb-3 transition-colors">College Explorer</h1>
        <p class="text-lg text-gray-500 dark:text-gray-400 max-w-2xl transition-colors">Search and filter through over 300+ tracked institutions across India based on courses, NIRF rankings, and locations.</p>
    </div>

    <!-- Filters & Search -->
    <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm mb-8 animate-fade-in-up transition-colors" style="animation-delay: 0.1s">
        <div class="flex flex-col md:flex-row gap-4 justify-between">
            <div class="relative flex-1">
                <i data-lucide="search" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500 transition-colors"></i>
                <input type="text" id="clgSearch" placeholder="Search by college name or city..." class="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 focus:border-[#7C3AED] dark:focus:border-[#A78BFA] transition-all placeholder-gray-400 dark:placeholder-gray-500" />
            </div>
            
            <div class="flex flex-col md:flex-row gap-4 shrink-0">
                <select id="clgStateSelect" class="pl-4 pr-10 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 focus:border-[#7C3AED] dark:focus:border-[#A78BFA] transition-all min-w-[180px]">
                    <option value="">All States</option>
                </select>

                <select id="clgTierSelect" class="pl-4 pr-10 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 focus:border-[#7C3AED] dark:focus:border-[#A78BFA] transition-all min-w-[140px]">
                    <option value="">All Tiers</option>
                    <option value="1">Tier 1 Only</option>
                    <option value="2">Tier 2</option>
                    <option value="3">Tier 3</option>
                </select>

                 <select id="clgTypeSelect" class="pl-4 pr-10 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 focus:border-[#7C3AED] dark:focus:border-[#A78BFA] transition-all min-w-[140px]">
                    <option value="">All Fields</option>
                    <option value="engineering">Engineering</option>
                    <option value="science">Sciences</option>
                    <option value="medical">Medical</option>
                    <option value="maths">Mathematics</option>
                </select>
            </div>
        </div>
    </div>

    <!-- Stats summary -->
    <div class="mb-6 flex justify-between items-center text-sm font-medium text-gray-500 dark:text-gray-400 transition-colors animate-fade-in-up" style="animation-delay: 0.2s">
        <span id="clgCountDisplay">Showing 0 colleges</span>
    </div>

    <!-- College Grid -->
    <div id="collegesGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20">
        <!-- Injected via JS -->
    </div>
</div>
`;

let compiledCollegeArray = [];
let clgStateFilters = new Set();

function initCollegesPage() {
    compileCollegesList();
    populateStateDropdown();
    setupCollegeFilters();
    renderCollegeGrid();
    lucide.createIcons();
}

function compileCollegesList() {
    compiledCollegeArray = [];
    clgStateFilters.clear();

    if (!window.indiaColleges) {
        console.error("indiaColleges data is missing.");
        return;
    }

    for (const [state, list] of Object.entries(window.indiaColleges)) {
        clgStateFilters.add(state);
        list.forEach(clg => {
            compiledCollegeArray.push({
                ...clg,
                state: state
            });
        });
    }

    // Sort alphabetically initially or by Tier
    compiledCollegeArray.sort((a, b) => a.tier - b.tier || a.name.localeCompare(b.name));
}

function populateStateDropdown() {
    const select = document.getElementById('clgStateSelect');
    if (!select) return;

    // Reset options
    select.innerHTML = '<option value="">All States</option>';

    // Sort states
    const sortedStates = Array.from(clgStateFilters).sort();
    sortedStates.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.text = state;
        select.appendChild(option);
    });
}

function setupCollegeFilters() {
    const searchInp = document.getElementById('clgSearch');
    const stateSel = document.getElementById('clgStateSelect');
    const tierSel = document.getElementById('clgTierSelect');
    const typeSel = document.getElementById('clgTypeSelect');

    const triggerRender = () => renderCollegeGrid(searchInp.value, stateSel.value, tierSel.value, typeSel.value);

    if (searchInp) searchInp.addEventListener('input', () => {
        // debounce slightly
        clearTimeout(window.clgSearchTimeout);
        window.clgSearchTimeout = setTimeout(triggerRender, 300);
    });
    if (stateSel) stateSel.addEventListener('change', triggerRender);
    if (tierSel) tierSel.addEventListener('change', triggerRender);
    if (typeSel) typeSel.addEventListener('change', triggerRender);
}

function renderCollegeGrid(search = "", state = "", tier = "", type = "") {
    const grid = document.getElementById('collegesGrid');
    const countDisplay = document.getElementById('clgCountDisplay');
    if (!grid || !countDisplay) return;

    const query = search.toLowerCase().trim();

    // Filter logic
    const filtered = compiledCollegeArray.filter(c => {
        // Text Match
        const matchText = !query ||
            c.name.toLowerCase().includes(query) ||
            c.city.toLowerCase().includes(query) ||
            c.state.toLowerCase().includes(query);

        // Dropdown Matches
        const matchState = !state || c.state === state;
        const matchTier = !tier || c.tier === parseInt(tier);
        const matchType = !type || c.type.includes(type);

        return matchText && matchState && matchTier && matchType;
    });

    countDisplay.textContent = `Showing ${filtered.length} colleges`;

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full py-20 text-center bg-white dark:bg-gray-800 rounded-2xl border border-dashed border-gray-200 dark:border-gray-700 transition-colors">
                <i data-lucide="building" class="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4 transition-colors"></i>
                <p class="text-gray-500 dark:text-gray-400 font-medium text-lg transition-colors">No colleges found matching your criteria.</p>
                <button onclick="document.getElementById('clgSearch').value=''; document.getElementById('clgStateSelect').value=''; document.getElementById('clgTierSelect').value=''; document.getElementById('clgTypeSelect').value=''; renderCollegeGrid();" class="mt-4 text-[#7C3AED] dark:text-[#A78BFA] hover:underline font-medium focus:outline-none transition-colors">Clear all filters</button>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    grid.innerHTML = filtered.map((c, i) => {
        let badgeColor = c.tier === 1 ? 'bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800/50' :
            (c.tier === 2 ? 'bg-violet-50 text-violet-600 border-violet-100 dark:bg-violet-900/30 dark:text-violet-400 dark:border-violet-800/50' : 'bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600');

        // Delay animation stagger
        const delay = (i % 20) * 0.05;

        return `
        <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 flex flex-col hover:shadow-xl hover:border-[#7C3AED] dark:hover:border-[#7C3AED]/50 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up" style="animation-delay: ${delay}s">
            <div class="flex justify-between items-start mb-4">
                <div class="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-700 flex items-center justify-center border border-gray-100 dark:border-gray-600 shrink-0 transition-colors">
                    <i data-lucide="building-2" class="w-6 h-6 text-[#2D0A59] dark:text-[#E9D5FF] transition-colors"></i>
                </div>
                <div class="flex flex-col gap-1 items-end">
                    <span class="text-[10px] font-bold uppercase tracking-wider ${badgeColor} px-2 py-0.5 rounded-full border transition-colors">Tier ${c.tier}</span>
                    ${c.nirf ? `<span class="text-[10px] font-bold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30 px-2 py-0.5 rounded-full border border-orange-100 dark:border-orange-800/50 leading-none transition-colors">NIRF: #${c.nirf}</span>` : ''}
                </div>
            </div>
            
            <h3 class="text-lg font-bold text-[#1F2937] dark:text-gray-100 leading-tight mb-2 flex-1 transition-colors">${c.name}</h3>
            
            <div class="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-sm mb-4 transition-colors">
                <i data-lucide="map-pin" class="w-4 h-4 shrink-0"></i> 
                <span class="truncate">${c.city}, ${c.state}</span>
            </div>

            <div class="space-y-2 mt-auto">
                ${c.medianSalary ? `
                    <div class="flex justify-between items-center bg-gray-50 dark:bg-gray-700/50 rounded-lg px-3 py-2 transition-colors">
                        <span class="text-xs text-gray-500 dark:text-gray-400 font-medium transition-colors">Avg Salary</span>
                        <span class="text-xs font-black text-green-700 dark:text-green-400 transition-colors">${c.medianSalary}</span>
                    </div>` : ''
            }
                ${c.cutoffRange ? `
                    <div class="flex justify-between items-center bg-gray-50 dark:bg-gray-700/50 rounded-lg px-3 py-2 transition-colors">
                        <span class="text-xs text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap overflow-hidden text-ellipsis mr-2 transition-colors">Cutoff</span>
                        <span class="text-xs font-bold text-gray-700 dark:text-gray-300 whitespace-nowrap overflow-hidden text-ellipsis transition-colors">${c.cutoffRange}</span>
                    </div>` : ''
            }
            </div>
            
            ${c.scholarships && c.scholarships.length > 0 ? `
                <div class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 transition-colors">
                    <p class="text-[10px] uppercase font-bold text-pink-500 dark:text-pink-400 mb-2 flex items-center gap-1 transition-colors">
                        <i data-lucide="award" class="w-3 h-3"></i> Top Scholarships
                    </p>
                    <div class="flex flex-wrap gap-1">
                        ${c.scholarships.map(s => `<span class="text-[10px] bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-400 px-2 py-1 rounded-md border border-pink-100 dark:border-pink-800/50 transition-colors">${s}</span>`).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
        `;
    }).join('');

    lucide.createIcons();
}
