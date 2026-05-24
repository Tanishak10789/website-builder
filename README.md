🪄 AI Website Builder
Generate complete, production-ready websites from a single natural-language prompt — no coding required.
�
🚀 Live Demo  •  💻 GitHub 


�
￼ ￼ ￼ ￼ ￼ ￼ ￼ 


✨ Overview
Type a description of the site you want — "a modern landing page for a fitness coach with testimonials and a pricing table" — and get a fully responsive, self-contained website in under 90 seconds. Refine it with follow-up prompts, tweak the code in a built-in editor, and one-click deploy to a public URL.
Built end-to-end as a MERN-stack application with an LLM pipeline, authentication, payment gateway, and a Monaco-powered code editor with live preview.
🎯 Key Features
🤖 Prompt-to-website generation — natural-language input → complete HTML/CSS/JS output via OpenRouter (DeepSeek model)
⚡ 5-phase progress UI — analyzing → designing → writing code → animating → QA, so users understand what's happening during the 45–90s generation window
💬 Conversational refinement — follow-up prompts ("make the hero gradient darker", "add an FAQ section") update the existing site in place
✏️ Built-in code editor — Monaco editor with syntax highlighting + live preview in a sandboxed iframe
🌐 One-click public deploy — every generated site gets a public slug URL (/site/your-slug) anyone can visit
🔐 Hybrid authentication — Firebase Google OAuth on the frontend, JWT in httpOnly cookies on the backend
💳 Credit-based monetization — free tier (100 credits) + paid plans via Razorpay with HMAC SHA-256 signature verification
📱 Mobile-first generation — system prompt enforces responsive, single-file output usable as a standalone site
🛠️ Tech Stack
Layer
Technology
Frontend
React 19, Vite, Tailwind CSS, shadcn/ui, React Router, Monaco Editor
Backend
Node.js, Express.js 5, Mongoose ODM
Database
MongoDB Atlas
AI
OpenRouter API (DeepSeek model)
Auth
Firebase Authentication (Google OAuth) + JWT (httpOnly cookies)
Payments
Razorpay (with HMAC signature verification)
Deployment
Vercel (frontend) · Render (backend) · MongoDB Atlas (database)
🧠 How It Works
Code
Generation pipeline
User submits a prompt → frontend shows the 5-phase progress UI
Backend wraps the prompt in an engineered system instruction (single-file, mobile-first, vanilla JS, no external dependencies)
OpenRouter forwards to DeepSeek; response is parsed with JSON extraction logic and a 2-retry fallback for malformed outputs
Valid HTML is saved to MongoDB with a unique slug + conversation history
Frontend renders the result in a sandboxed <iframe srcDoc> for safety + Monaco editor for inspection/edits
Why these choices
MongoDB over PostgreSQL — conversation array is variable-length nested chat history per website; schemaless fits well
DeepSeek via OpenRouter — cheaper than GPT-4 for HTML generation; OpenRouter abstracts model swapping
Self-contained HTML output — generated sites don't depend on Tailwind/React CDNs, so they work offline and load fast
JWT in httpOnly cookies — protects against XSS token theft; pairs with credentials: include on frontend axios
🚀 Quick Start
Prerequisites
Node.js 18+
MongoDB Atlas account (free tier works)
OpenRouter API key — openrouter.ai
Firebase project with Google sign-in enabled
Razorpay keys (Test mode is fine) — razorpay.com
1. Clone
Bash
2. Backend setup
Bash
Create backend/.env:
Env
Run the backend:
Bash
3. Frontend setup
Bash
Create frontend/.env:
Env
Run the frontend:
Bash
Open http://localhost:5173 🚀
📁 Project Structure
Code
🔌 API Reference
Method
Endpoint
Auth
Description
POST
/api/auth/login
—
Verify Firebase ID token, issue JWT cookie
POST
/api/auth/logout
✓
Clear JWT cookie
GET
/api/auth/me
✓
Get current user + credit balance
POST
/api/website/generate
✓
Generate new website from prompt (10 credits)
POST
/api/website/update/:id
✓
Refine existing website via follow-up prompt
GET
/api/website/getbyid/:id
✓
Fetch website by ID
GET
/api/website/getall
✓
List user's websites
GET
/api/website/deploy/:id
✓
Generate public slug + return URL
GET
/api/website/getbyslug/:slug
—
Fetch deployed site for public viewing
POST
/api/payment/order
✓
Create Razorpay order
POST
/api/payment/verify
✓
Verify payment signature + credit top-up
💰 Credit System
Plan
Price
Credits
Generations*
Free
₹0
100
~10
Pro
₹499
500
~50
Enterprise
₹1499
1000
~100
*Each generation costs 10 credits. Follow-up refinement prompts also consume credits.
🗺️ Roadmap
[ ] Streaming generation output (token-by-token render instead of waiting full response)
[ ] Multi-file output support (separate HTML / CSS / JS files)
[ ] Custom domain mapping for deployed sites
[ ] Template gallery to start from a designed base
[ ] Export project as a downloadable ZIP
[ ] Stripe integration for international users (currently INR-only via Razorpay)
🐛 Known Limitations
Render free tier cold starts — first request after 15 min idle takes ~50s while the backend wakes up
Generation time — 45–90s typical; depends on prompt complexity and OpenRouter response time
No streaming yet — users wait for the full response before seeing output (5-phase UI mitigates the perceived wait)
👤 Author
Tanishak Agarwal
🌐 LinkedIn: tanishak-agarwal
💻 GitHub: @Tanishak10789
✉️ Email: tanishak9252@gmail.com
📄 License
This project is open source and available under the MIT License.
�
Built with ☕ and a lot of prompt iteration.
⭐ Star this repo if you found it interesting! 

