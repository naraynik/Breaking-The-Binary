const renderLogin = () => `
<div id="loginPage" class="min-h-screen flex flex-col md:flex-row bg-white dark:bg-gray-900 font-sans w-full absolute inset-0 z-20">
    <!-- Visual Left -->
    <div class="md:w-1/2 relative flex items-end justify-center overflow-hidden bg-[#2D0A59] p-12">
        <div class="absolute inset-0 z-0">
            <img src="assets/img/login-hero.png" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#2D0A59] via-[#2D0A59]/60 to-transparent/10"></div>
        </div>
        <div class="relative z-10 text-white w-full max-w-lg fade-in mb-8">
            <div class="inline-flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl mb-6 shadow-xl border border-white/20">
                <i data-lucide="sparkles" class="w-7 h-7 text-pink-300"></i>
            </div>
            <h1 class="text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg">
                Talent is universal.<br/><span class="text-pink-300 drop-shadow-md">Opportunity must be engineered.</span>
            </h1>
            <p class="text-lg text-gray-200 border-l-4 border-pink-400 pl-4 py-1 italic bg-black/20 backdrop-blur-sm rounded-r-lg pr-4">"We need to involve women in the creation of the technology that will shape our future."</p>
        </div>
    </div>

    <!-- Login Right -->
    <div class="md:w-1/2 flex flex-col items-center justify-center p-8 lg:p-24 relative bg-gray-50/50 dark:bg-gray-900/50">
        <!-- Subtle background pattern -->
        <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style="background-image: radial-gradient(#7C3AED 1px, transparent 1px); background-size: 24px 24px;"></div>
        
        <div class="w-full max-w-md fade-in relative z-10" style="animation-delay: 0.2s;">
            <!-- Logo area -->
            <div class="flex flex-col items-center justify-center gap-3 text-[#2D0A59] dark:text-gray-100 mb-12">
                <img src="assets/img/logo.png" alt="Breaking the Binary Logo" class="h-16 w-auto mix-blend-multiply dark:mix-blend-normal">
                <span class="text-2xl font-bold tracking-tight">Breaking the Binary</span>
            </div>

            <div class="text-center mb-10">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-sm font-semibold mb-6">
                    <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C3AED] opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-[#7C3AED]"></span>
                    </span>
                    Join the movement
                </div>
                <h2 class="text-3xl font-bold text-[#1F2937] dark:text-gray-100 mb-3">Create your future</h2>
                <p class="text-gray-500 dark:text-gray-400">Sign in to discover your path, connect with mentors, and engineer your STEM journey.</p>
            </div>
            
            <div class="space-y-4">
                <button id="googleLoginBtn" class="group relative w-full flex items-center justify-center gap-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-[#7C3AED] hover:bg-gray-50 dark:hover:bg-gray-700/50 p-4 rounded-xl text-[#1F2937] dark:text-gray-100 font-semibold transition-all hover:shadow-lg focus:ring-4 focus:ring-[#7C3AED]/20 outline-none">
                    <div id="loginSpinner" class="hidden spinner"></div>
                    <span id="loginText" class="flex items-center gap-3">
                        <!-- Google SVG -->
                        <svg class="w-6 h-6" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                        Continue with Google
                    </span>
                </button>

                <div class="flex items-center gap-4 py-2">
                    <div class="h-px bg-gray-200 dark:bg-gray-700 flex-1"></div>
                    <span class="text-sm font-medium text-gray-400">or</span>
                    <div class="h-px bg-gray-200 dark:bg-gray-700 flex-1"></div>
                </div>

                <button id="emailLoginBtn" class="group relative w-full flex items-center justify-center gap-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-[#7C3AED] hover:bg-gray-50 dark:hover:bg-gray-700/50 p-4 rounded-xl text-[#1F2937] dark:text-gray-100 font-semibold transition-all hover:shadow-lg focus:ring-4 focus:ring-[#7C3AED]/20 outline-none">
                    <i data-lucide="mail" class="w-5 h-5 text-gray-500 group-hover:text-[#7C3AED] transition-colors"></i>
                    Continue with Email
                </button>
            </div>

            <!-- Trust/Footer area -->
            <div class="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 text-center">
                <p class="text-sm text-gray-500 flex items-center justify-center gap-2">
                    <i data-lucide="shield-check" class="w-4 h-4 text-green-500"></i>
                    Secure and private login
                </p>
            </div>
        </div>
    </div>
</div>
`;
