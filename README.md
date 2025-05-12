📝 Blogwizz

Blogwizz is a full-stack blogging platform that empowers users to create, manage, and explore blogs seamlessly. Built with React, Node.js, Express, and MongoDB, it offers a robust and scalable solution with secure authentication and a smooth user experience.

🚀 Features
🔐 Authentication System

Secure user registration and login using hashed passwords and token-based authentication.

🧑‍🎨 Blog Creation & Management

Users can create, edit, and delete their blog posts.

🖼️ Image Uploads

Upload and attach images to your blog posts.

🔍 Real-time Search

Instantly search blogs by title or content using a responsive search bar.

🌐 Full REST API

Backend built with RESTful design principles to ensure maintainability and scalability.

🛠️ Tech Stack
Frontend	Backend	Database	Others
React	Node.js	MongoDB	Express.js, REST API, JWT, Multer

📂 Project Structure
bash
Copy
Edit
Blogwizz/
├── client/             # React frontend
│   └── ...
├── server/             # Node.js backend
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── middleware/
│   └── ...
└── README.md
🔧 Setup Instructions
Clone the repository:

bash
Copy
Edit
git clone https://blogwiz-01.netlify.app/
cd blogwizz
Install dependencies:

Backend:

bash
Copy
Edit
cd server
npm install
Frontend:

bash
Copy
Edit
cd client
npm install
Configure environment variables:

Create a .env file in the /server directory and add:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Run the application:

Backend:

bash
Copy
Edit
npm run dev
Frontend:

bash
Copy
Edit
npm start
📸 Screenshots
![Screenshot (296)](https://github.com/user-attachments/assets/2e14182f-a193-448c-bdab-6f35beaa57b0)
![Screenshot (297)](https://github.com/user-attachments/assets/d57d5344-fdba-4e7c-8886-5e8af170d78a)





✨ Future Enhancements
Rich text editor support (Markdown or WYSIWYG)

Comment and like system

Categories/tags for blogs

User profile pages

Admin panel

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
