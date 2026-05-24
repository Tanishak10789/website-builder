# AI Website Builder

> Generate complete responsive websites from a single natural-language prompt.

**[🚀 Live Demo](https://website-builder-tawny-one.vercel.app/)** &nbsp;•&nbsp; **[💻 GitHub](https://github.com/Tanishak10789/website-builder)**

---

## What it does

Type what you want — *"a landing page for a coffee shop with a hero image and pricing section"* — and get a fully responsive, self-contained website in under 90 seconds. Edit it in the built-in code editor, refine with follow-up prompts, and one-click deploy to a public URL.

## Features

- 🤖 Prompt-to-website generation powered by OpenRouter (DeepSeek model)
- ⚡ 5-phase progress UI during generation
- 💬 Follow-up prompts to refine your site in place
- ✏️ Built-in Monaco code editor with live preview
- 🌐 One-click public deploy (each site gets a shareable URL)
- 🔐 Google sign-in (Firebase + JWT cookies)
- 💳 Credit-based plans via Razorpay

## Tech Stack

**MERN** (MongoDB · Express · React · Node) + Tailwind CSS · shadcn/ui · Monaco Editor · Firebase Auth · Razorpay · OpenRouter API

**Deployment:** Vercel (frontend) · Render (backend) · MongoDB Atlas

---

## Setup

### 1. Clone

```bash
git clone https://github.com/Tanishak10789/website-builder.git
cd website-builder
```

### 2. Backend

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=any_long_random_string
OPENROUTER_API_KEY=your_openrouter_key
FRONTEND_URL=http://localhost:5173
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
```

```bash
npm run dev
```

### 3. Frontend

```bash
cd ../frontend
npm install
```

Create `frontend/.env`:

```env
VITE_SERVER_URL=http://localhost:8000
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key
```

```bash
npm run dev
```

Open `http://localhost:5173` 🚀

---

## Author

**Tanishak Agarwal** — [LinkedIn](https://www.linkedin.com/in/tanishak-agarwal-2b6196258/) · [GitHub](https://github.com/Tanishak10789) · tanishak9252@gmail.com

⭐ Star this repo if you found it interesting!
