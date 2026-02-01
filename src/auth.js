const state = { mode: 'login' };

// Elements
const nameField = document.getElementById('nameField');
const formTitle = document.getElementById('formTitle');
const submitBtn = document.getElementById('submitBtn');
const toggleText = document.getElementById('toggleText');
const forgotPass = document.getElementById('forgotPass');
const featuresGrid = document.getElementById('features');
const socialAuth = document.getElementById('socialAuth'); // Selected social buttons

// Features Data
const features = [
    { title: "Digital Signing", desc: "Sign clearance forms electronically without chasing professors." },
    { title: "Real-time Status", desc: "Track your clearance progress instantly" },
    { title: "Automated Alerts", desc: "Receive notifications immediately when a department approves your request." },
    { title: "Secure Storage", desc: "Keep all documents safe and encrypted in the cloud." }
];

// Inject Features
featuresGrid.innerHTML = features.map(f => `
    <div class="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:-translate-y-1.5 transition duration-300">
        <h3 class="text-white font-bold">${f.title}</h3>
        <p class="text-slate-500 text-sm">${f.desc}</p>
    </div>
`).join('');

function handleToggle() {
    if (state.mode === 'login') {
        state.mode = 'register';
        nameField.classList.remove('hidden');
        forgotPass.classList.add('hidden');
        socialAuth.classList.add('hidden'); // Hides Google/MS on register
        formTitle.textContent = 'Create Account';
        submitBtn.textContent = 'Register Now';
        toggleText.innerHTML = 'Already have an account? <span id="toggleLink" class="text-indigo-400 hover:underline cursor-pointer font-bold ml-1">Click here</span>';
    } else {
        state.mode = 'login';
        nameField.classList.add('hidden');
        forgotPass.classList.remove('hidden');
        socialAuth.classList.remove('hidden'); // Shows Google/MS on login
        formTitle.textContent = 'Login';
        submitBtn.textContent = 'Sign In';
        toggleText.innerHTML = 'Don\'t have an account? <span id="toggleLink" class="text-indigo-400 hover:underline cursor-pointer font-bold ml-1">Click here</span>';
    }
    // Re-bind the listener and icons because we replaced the innerHTML
    document.getElementById('toggleLink').addEventListener('click', handleToggle);
    lucide.createIcons();
}

document.getElementById('toggleLink').addEventListener('click', handleToggle);