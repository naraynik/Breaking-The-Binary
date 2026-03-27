const renderDashboard = () => `
<div id="dashboardPage" class="hidden pt-24 px-4 md:px-8 pb-28 container mx-auto max-w-6xl min-h-screen">
    
    <!-- Header Summary -->
    <div class="bg-gradient-to-br from-[#2D0A59] to-[#7C3AED] rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden mb-8 animate-fade-in-up">
        <div class="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>
        <div class="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div>
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-16 h-16 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-sm shadow-inner flex items-center justify-center border border-white/30 dark:border-white/10 text-2xl font-black transition-colors" id="dashInitials">--</div>
                    <div>
                        <h1 class="text-3xl font-black drop-shadow-md text-white transition-colors" id="dashName">Student Profile</h1>
                        <p class="text-white/80 dark:text-white/70 flex items-center gap-2 text-sm mt-1 transition-colors">
                            <i data-lucide="map-pin" class="w-4 h-4"></i> <span id="dashLocation">India</span>
                        </p>
                    </div>
                </div>
                <!-- Mini Stats -->
                <div class="flex flex-wrap gap-3 mt-6 text-sm font-medium">
                    <div class="bg-black/20 dark:bg-black/40 rounded-lg px-4 py-2 border border-white/10 dark:border-white/5 backdrop-blur-sm transition-colors">
                        <span class="text-white/60 dark:text-white/50 block text-xs uppercase tracking-wider mb-0.5 transition-colors">Education</span>
                        <span id="dashEdu" class="text-white">Not provided</span>
                    </div>
                </div>
            </div>

            <!-- Overall Score Circle -->
            <div class="bg-white/10 p-6 rounded-3xl backdrop-blur-md border border-white/20 text-center shrink-0 min-w-[200px]">
                <p class="text-sm font-bold text-white/80 uppercase tracking-widest mb-4">Academic Score</p>
                <div class="relative w-32 h-32 mx-auto flex items-center justify-center">
                    <svg class="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" class="stroke-white/20" stroke-width="8"></circle>
                        <circle cx="50" cy="50" r="45" fill="none" class="stroke-green-400" stroke-width="8" stroke-dasharray="283" stroke-dashoffset="283" id="dashOverallCircle" style="transition: stroke-dashoffset 1s ease-out;"></circle>
                    </svg>
                    <div class="absolute inset-0 flex items-center justify-center flex-col">
                        <span class="text-3xl font-black" id="dashOverallText">--%</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Sidebar: Detailed Marks & Goals -->
        <div class="lg:col-span-1 space-y-8">
            
            <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 animate-fade-in-up transition-colors" style="animation-delay: 0.1s">
                <h3 class="font-bold text-[#1F2937] dark:text-gray-100 text-lg mb-4 flex items-center gap-2 transition-colors">
                    <i data-lucide="bar-chart-2" class="w-5 h-5 text-[#7C3AED] dark:text-[#A78BFA]"></i> Detailed Marks
                </h3>
                <div class="space-y-4" id="dashMarksList">
                    <!-- Populated by JS -->
                </div>
            </div>

            <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 animate-fade-in-up transition-colors" style="animation-delay: 0.2s">
                <h3 class="font-bold text-[#1F2937] dark:text-gray-100 text-lg mb-4 flex items-center gap-2 transition-colors">
                    <i data-lucide="target" class="w-5 h-5 text-pink-500 dark:text-pink-400"></i> My STEM Goal
                </h3>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed italic transition-colors" id="dashGoal">"No goal specified yet."</p>
            </div>

             <!-- Interests -->
             <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 animate-fade-in-up transition-colors" style="animation-delay: 0.3s">
                <h3 class="font-bold text-[#1F2937] dark:text-gray-100 text-lg mb-4 flex items-center gap-2 transition-colors">
                    <i data-lucide="sparkles" class="w-5 h-5 text-blue-500 dark:text-blue-400"></i> Selected Interests
                </h3>
                <div class="flex flex-wrap gap-2" id="dashInterestsTags">
                    <span class="text-sm text-gray-500 dark:text-gray-400">None selected</span>
                </div>
            </div>
        </div>

        <!-- Main Content: AI Career Matches -->
        <div class="lg:col-span-2 space-y-6 animate-fade-in-up" style="animation-delay: 0.4s">
            <div class="flex justify-between items-center mb-2">
                <h2 class="text-2xl font-black text-[#1F2937] dark:text-gray-100 transition-colors">Curated Pathways For You</h2>
                <div class="hidden sm:flex text-xs font-bold text-[#7C3AED] dark:text-[#A78BFA] bg-[#7C3AED]/10 dark:bg-[#7C3AED]/20 px-3 py-1 rounded-full items-center gap-1.5 transition-colors">
                    <span class="w-2 h-2 rounded-full bg-[#7C3AED] dark:bg-[#A78BFA] animate-pulse"></span> AI Generated based on your profile
                </div>
            </div>
            
            <p class="text-gray-500 dark:text-gray-400 mb-6 transition-colors">Based on your interests, marks, and location, these fields offer the strongest opportunities.</p>
            
            <div id="dashCareersGrid" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Populated by JS -->
            </div>
            
        </div>
    </div>
</div>
`;

function initDashboard() {
    console.log("Initializing Dashboard...");
    const state = window.userState || {};

    // Core details
    const nameStr = state.name || 'Guest User';
    document.getElementById('dashName').textContent = nameStr;
    document.getElementById('dashInitials').textContent = nameStr.substring(0, 2).toUpperCase();

    let loc = "India";
    if (state.city && state.state) loc = `${state.city}, ${state.state}`;
    else if (state.state) loc = state.state;
    document.getElementById('dashLocation').textContent = loc;

    document.getElementById('dashEdu').textContent = state.education || 'Not Provided';
    if (state.goal) {
        document.getElementById('dashGoal').textContent = `"${state.goal}"`;
    }

    // Marks
    const marks = state.marks || {};
    const overall = marks.overall || marks.obOverall || marks.ObOverall || 0;

    document.getElementById('dashOverallText').textContent = overall ? `${overall}%` : '--%';
    const circle = document.getElementById('dashOverallCircle');
    if (circle && overall > 0) {
        // Circumference 2*pi*r = ~283 for r=45
        const dashOffset = 283 - (overall / 100) * 283;
        setTimeout(() => {
            circle.style.strokeDashoffset = dashOffset;
        }, 300);
    }

    const marksList = document.getElementById('dashMarksList');
    if (marksList) {
        if (Object.keys(marks).length === 0) {
            marksList.innerHTML = `<p class="text-gray-400 text-sm">No marks recorded.</p>`;
        } else {
            let mHtml = '';
            for (const [subj, valStr] of Object.entries(marks)) {
                if (subj.toLowerCase() === 'overall' || subj.toLowerCase() === 'oboverall') continue;
                // Parse val
                const val = parseInt(valStr);
                if (isNaN(val)) continue;
                // Strip 'ob' prefix (case-insensitive) and Capitalize
                let title = subj.replace(/^[O|o]b/, '');
                title = title.charAt(0).toUpperCase() + title.slice(1);

                // Color scale
                let barColor = 'bg-[#7C3AED]';
                if (val < 60) barColor = 'bg-orange-400';
                else if (val > 85) barColor = 'bg-green-500';

                mHtml += `
                <div>
                    <div class="flex justify-between text-sm mb-1 font-medium">
                        <span class="text-gray-600 dark:text-gray-400 transition-colors">${title}</span>
                        <span class="text-[#1F2937] dark:text-gray-100 transition-colors">${val}%</span>
                    </div>
                    <div class="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2 overflow-hidden border border-gray-200 dark:border-gray-600 transition-colors">
                        <div class="${barColor} h-2 rounded-full" style="width: ${val}%"></div>
                    </div>
                </div>
                `;
            }
            mHtml += `<p class="text-xs text-center text-gray-400 dark:text-gray-500 mt-4 leading-tight transition-colors">These figures help us recommend streams requiring specific aptitude.</p>`;
            marksList.innerHTML = mHtml;
        }
    }

    // Interests
    const tagsDiv = document.getElementById('dashInterestsTags');
    if (tagsDiv) {
        if (state.interests && state.interests.length > 0) {
            tagsDiv.innerHTML = state.interests.map(i => `
                <span class="text-xs font-bold text-[#7C3AED] dark:text-[#A78BFA] bg-[#7C3AED]/10 dark:bg-[#7C3AED]/20 border border-[#7C3AED]/20 dark:border-[#7C3AED]/30 px-3 py-1.5 rounded-full inline-block transition-colors">
                    ${i}
                </span>
            `).join('');
        } else {
            tagsDiv.innerHTML = `<span class="text-sm text-gray-400 dark:text-gray-500 transition-colors">None selected during onboarding.</span>`;
        }
    }

    // Matched Careers Logic
    const grid = document.getElementById('dashCareersGrid');
    if (grid) {
        let matches = [];
        if (window.stemCareers && state.interests) {

            // Map onboarding interests directly to relevant Career Branch IDs to guarantee high-quality matches
            const keywordToCareerIds = {
                'Coding & AI': ['cs01', 'cs02', 'cs03'],
                'Space & Astronomy': ['rs01', 'phy01', 'ee01'],
                'Healthcare & Medicine': ['med01', 'med02', 'bio01'],
                'Robotics': ['mech01', 'cs01', 'ee01'],
                'Environment & Climate': ['env01', 'env02', 'chem01'],
                'Mathematics': ['math01', 'math02', 'cs02'],
                'Electronics': ['ee01', 'ee02', 'mech01'],
                'Biotechnology': ['bio01', 'bio02', 'med03'],
                'Civil Infrastructure': ['ce01', 'ce02', 'env01'],
                'Chemistry': ['chem01', 'chem02', 'bio02'],
                'Cybersecurity': ['cs04', 'cs01', 'math02']
            };

            // Collect target IDs based on user's selected interests
            let targetIds = new Set();
            state.interests.forEach(interest => {
                if (keywordToCareerIds[interest]) {
                    keywordToCareerIds[interest].forEach(id => targetIds.add(id));
                }
            });

            // Collect all branches
            let allBranches = [];
            for (const catId in window.stemCareers) {
                allBranches.push(...window.stemCareers[catId].branches);
            }

            // Score matches: +10 if ID is in target list. Also do a basic text fallback.
            matches = allBranches.map(b => {
                let score = 0;
                if (targetIds.has(b.id)) score += 10;

                state.interests.forEach(istr => {
                    const words = istr.toLowerCase().split(/[\s&,-]+/);
                    words.forEach(w => {
                        if (w.length > 3 && (b.title.toLowerCase().includes(w) || b.description.toLowerCase().includes(w))) {
                            score += 1;
                        }
                    });
                });
                return { ...b, score };
            });

            // Sort by score
            matches.sort((a, b) => b.score - a.score);
            // Ignore 0 scores unless we need fallbacks
            if (matches[0] && matches[0].score > 0) {
                matches = matches.filter(m => m.score > 0).slice(0, 4);
            } else {
                // Fallback to top 4 random
                matches = matches.slice(0, 4);
            }
        }

        if (matches.length > 0) {
            grid.innerHTML = matches.map(c => `
                <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 hover:bg-white dark:hover:bg-gray-700 hover:border-[#7C3AED]/30 dark:hover:border-[#7C3AED]/50 hover:shadow-lg transition-all group cursor-pointer relative overflow-hidden flex flex-col h-full" onclick="showPage('discoveryPage'); setTimeout(() => { typeof showBranchDetail === 'function' ? showBranchDetail('${c.id}') : null }, 100)">
                    <div class="absolute inset-0 bg-gradient-to-br from-transparent to-[#7C3AED]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="flex items-center gap-3 mb-3 relative z-10">
                        <div class="w-10 h-10 rounded-xl ${c.colorClass} dark:opacity-90 text-white flex items-center justify-center shrink-0 shadow-sm transition-opacity">
                           <i data-lucide="${c.icon}" class="w-5 h-5"></i>
                        </div>
                        <h4 class="font-bold text-[#1F2937] dark:text-gray-100 leading-tight group-hover:text-[#7C3AED] dark:group-hover:text-[#A78BFA] transition-colors">${c.title}</h4>
                    </div>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2 relative z-10 flex-1 transition-colors">${c.description}</p>
                    <div class="flex items-center justify-between mt-auto relative z-10">
                        <span class="text-xs font-bold text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 px-2.5 py-1 rounded-md transition-colors">Highly Matched ✨</span>
                        <i data-lucide="arrow-right" class="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-[#7C3AED] dark:group-hover:text-[#A78BFA] group-hover:translate-x-1 transition-all"></i>
                    </div>
                </div>
            `).join('');
        } else {
            grid.innerHTML = `<p class="col-span-full text-gray-400 dark:text-gray-500 p-4 border border-dashed border-gray-200 dark:border-gray-700 rounded-xl text-center transition-colors">No precise career matches found yet. Explore our discovery page!</p>`;
        }
    }

    lucide.createIcons();
}
