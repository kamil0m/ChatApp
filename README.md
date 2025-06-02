# ChatApp

A real-time one-on-one chat application built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js).  
The app supports image sharing, theming, and an online users filter.  
**Live Demo:** [https://chatapp-ovnf.onrender.com/](https://chatapp-ovnf.onrender.com/)

---

## Features

- 🗨️ **One-on-one real-time chat** (powered by websockets)
- 🌙 **Themes** support (35 daisyui themes)
- 🟢 **Online users filter**
- 🖼️ **Image sharing** (with Cloudinary)
- ⚡ Built on the robust MERN stack

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Cloudinary account](https://cloudinary.com/) (for image uploads)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-chatapp-repo.git
cd your-chatapp-repo
```

### 2. Install dependencies

Open two terminals (one for backend, one for frontend):

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### 3. Configure Environment Variables

In the `backend` folder, create a `.env` file with the following content:

```
MONGODB_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NODE_ENV=development
```

> ⚠️ **Note:** Make sure to fill in all values appropriately!

### 4. Run the app locally

Start backend and frontend in separate terminals:

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend:**
```bash
cd frontend
npm run dev
```

- The backend should run by default on `http://localhost:5001`
- The frontend should run by default on `http://localhost:3000`

---

## Usage

- Register a username to start chatting (no authentication required)
- Start a one-on-one chat with any online user
- Share images directly in chat
- Switch between light and dark theme
- Use the online filter to see who is available

---

## Deployment

The app is deployed and live at:  
👉 [https://chatapp-ovnf.onrender.com/](https://chatapp-ovnf.onrender.com/)

---

## License

MIT License

---

## Acknowledgments

- MERN Stack Community
- Cloudinary for image storage

---

## Contact

For questions or support, open an issue or contact the repository owner.
