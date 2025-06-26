# 📝 React Appwrite Blog App

A full-featured blog application built using **React**, **Appwrite**, **Tailwind CSS**, and **TinyMCE**.
This app supports user authentication, post creation/editing, image uploads, and a responsive modern UI.

---

## 🚀 Features

* 🔐 User authentication (Sign Up / Login / Logout)
* 📝 Create, edit, and delete blog posts
* 🖼 Upload featured images to Appwrite storage
* 🧠 Rich text editor using TinyMCE
* 🔒 Protected routes with custom layout
* 💨 Tailwind CSS for fast and responsive design

---

## 🛠️ Tech Stack

* **Frontend:** React, Tailwind CSS
* **Backend:** Appwrite (Database, Auth, Storage)
* **Editor:** TinyMCE
* **Routing & State:** React Router, Redux Toolkit

---

## 📆 Folder Structure

```
/src
  ├── appwrite/        # Appwrite service functions
  ├── components/      # Reusable components (Button, Input, Header, etc.)
  ├── pages/           # Pages (Login, Signup, Home, AddPost, etc.)
  ├── store/           # Redux setup
  └── App.jsx          # Main layout
  └── main.jsx         # Entry point
```

---

## 🔧 Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/your-username/react-appwrite-blog-app.git
cd react-appwrite-blog-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Create environment file**

```bash
cp .env.example .env
```

4. **Fill in your Appwrite & TinyMCE credentials** inside `.env`

```env
VITE_APPWRITE_URL=https://<your-appwrite-endpoint>/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
VITE_TINYMCE_API_KEY=your_tinymce_key
```

5. **Start the development server**

```bash
npm run dev
```

---

## 🧪 Testing the App

* Go to `http://localhost:5173`
* Create an account
* Add and edit posts
* Try logging out and protected routes

---

## 🗃 .env.example

```env
VITE_APPWRITE_URL=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=
VITE_APPWRITE_BUCKET_ID=
VITE_TINYMCE_API_KEY=
```

---

## 📄 Deployment

This app can be deployed to:

* [Vercel](https://vercel.com/)
* [Netlify](https://www.netlify.com/)
* [Render](https://render.com/)

Just make sure to set your `.env` variables in their dashboard.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

* [Appwrite](https://appwrite.io)
* [TinyMCE](https://www.tiny.cloud/)
* [Tailwind CSS](https://tailwindcss.com/)
