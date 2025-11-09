# Take a Note

> AI Powered - Digital note-taking app built with Next.js, React, MongoDB, Auth.js, SCSS, Tailwind CSS

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## About

**Take a Note** is a full-stack web application for capturing, organizing, and managing notes efficiently. The app leverages modern web technologies to provide fast performance, secure authentication, and a responsive, user-friendly UI.  
*Now with AI-powered note summaries via the Gemini API!*

---

## Features

- 📓 Quick and intuitive note-taking with a clean design
- 🖋️ Add, edit, and delete notes
- 🧠 Automatic AI-generated summaries for your notes using the [Gemini API](https://ai.google.dev/)
- 🔒 User authentication with [Auth.js](https://authjs.dev/)
- 🗄️ Server-side data storage with MongoDB
- ⚡️ Built on [Next.js](https://nextjs.org/) and React for a fast, dynamic experience
- 🎨 Styled with both SCSS and [Tailwind CSS](https://tailwindcss.com/) for flexibility and speed

---

## Tech Stack

- [Next.js](https://nextjs.org/) (React framework)
- [React](https://react.dev/)
- [MongoDB](https://www.mongodb.com/)
- [Auth.js](https://authjs.dev/) (Authentication)
- [Tailwind CSS](https://tailwindcss.com/) + [SCSS](https://sass-lang.com/) + CSS
- [Gemini API](https://ai.google.dev/) (AI-powered note summaries)

---

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ZashShadow/take-a-note.git
   cd take-a-note
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**  
   Create a `.env.local` file based on `.env.example` and add your values for MongoDB, Auth.js, and Gemini API configuration.

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Then go to `http://localhost:3000` in your browser.

---

## Usage

1. Register or sign in using the Auth.js authentication flow.
2. Start taking, editing, or deleting notes via the user dashboard.
3. View automatic AI-generated summaries of your notes, powered by Gemini API.
4. Notes are stored securely in MongoDB and available across devices.

---

## Contributing

Contributions are welcome!
- Fork the repository
- Create a new branch for your changes
- Open a PR describing your contribution

Please open an issue to suggest features or report bugs.

---

## License

Project licensed under an open-source license (pending).

---

**Made with ❤️ by [ZashShadow](https://github.com/ZashShadow)**