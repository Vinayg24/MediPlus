# 💊 MediPlus — AI-Powered Hospital Management & Appointment System

MediPlus is a smart and interactive *Hospital Management System (HMS)* designed to manage every aspect of a hospital — from *patient appointments, **medical records, and **doctor schedules, to a smart AI chatbot called **AI MAGIC* that provides illness-related suggestions and medicine recommendations.

This web application is built using *ASP.NET Core, **C#, **JavaScript, and modern frontend technologies. MediPlus empowers **Admins, Doctors, Nurses, and Patients* to access a digital-first healthcare environment, enhancing efficiency and engagement.

---

## 🌐 Live Demo & Credentials

> Hosted on: *MonsterAsp.net*

### 🧪 Try the System (Demo Accounts)

| Role    | Email               | Password   |
|---------|---------------------|------------|
| Doctor  | lila@gmail.com      | Lila@123   |
| Nurse   | Liam1@gmail.com     | Liam@123   |
| Patient | Register Yourself   | Any        |

❌ *Admin access is disabled for security reasons*

---

## ✨ AI MAGIC — Intelligent Illness & Medicine Advisor

> *Feeling unwell? Let AI MAGIC help!*

This advanced feature uses a smart *JavaScript-based chatbot* to:

- 🧠 Accept your illness name (e.g., headache, fever)
- 📖 Display a short description of the illness
- 💊 Suggest commonly used medicines
- 🧘 Provide general care tips

AI MAGIC is fast, lightweight, and runs directly in the browser — no backend or API needed!

---

## 👥 User Roles & Features

### 🔧 Admin
- Full access to dashboard and system users
- Enable/disable and manage Doctors & Nurses
- CRUD operations for staff profiles
- View feedback and user activities

### 👨‍⚕ Doctor
- Manage working hours and patient records
- Add educational qualifications
- Post news and health updates
- View assigned patients and update profiles

### 👩‍⚕ Nurse
- View scheduled appointments
- Access patient information
- Assist doctors during treatments

### 🧑‍💼 Patient
- Register and manage appointments
- Use AI MAGIC chatbot for medical queries
- Send feedback or contact doctors
- Cancel or reschedule bookings

---

## 🔐 Security Features

- 🔐 Secure registration and login using *ASP.NET Identity*
- ✅ Strong password enforcement
- 🛡 Protection against *CSRF, **XSS, and **DDoS*
- 🔑 Third-party login using *Google OAuth*

---

## 🛠 Tech Stack

| Category         | Tools/Technologies                            |
|------------------|------------------------------------------------|
| Language         | C#, JavaScript                                |
| Backend          | ASP.NET Core MVC, Razor Pages                |
| Frontend         | HTML5, CSS3, Bootstrap, jQuery               |
| Database         | MS SQL Server, Entity Framework Core         |
| Libraries        | LINQ, AutoMapper, Fluent API, ASP.NET Identity|

---

## 🧱 Architecture

MediPlus follows the *Clean Architecture* approach:

- ✅ Modular and scalable design
- ✅ Easy maintenance and testing
- ✅ Loose coupling between layers
- ✅ High cohesion within components

---

## 🖥 Getting Started (Run Locally)

### ✅ Prerequisites
- [.NET SDK 8.0+](https://dotnet.microsoft.com/)
- Git
- Visual Studio or VS Code

### 🚀 Installation Steps


git clone https://github.com/vVinayg245/MediPlus-System.git
cd MediPlus-System

dotnet restore   # Restore dependencies
dotnet build     # Build the solution
dotnet run       # Run the project
Then open your browser: https://localhost:5001

📁 Folder Structure
bash
Copy
Edit
MediPlus-System/
├── Controllers/
├── Models/
├── Views/
├── wwwroot/
│   ├── css/
│   └── js/         # Chatbot logic included here
├── Data/
├── Program.cs
├── Startup.cs
└── README.md
👤 Built With 💙 By
Vinay Goswami — (AI Magic + Chatbot Integration ✨)

📬 Contact Me
📧 vinaygoswami2404@gmail.com
🔗 LinkedIn ()
🌐 Portfolio Coming Soon

📄 License
© 2024 MediPlus HMS — All Rights Reserved.
Use with permission. Do not redistribute without proper credit.

⭐ Support & Feedback
If you liked this project:

⭐ Star the repo

🛠 Fork and improve it

💬 Share with your network
