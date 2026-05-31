# WebApp Design & Development

This project is a new version of my first web app. I first made it with JavaScript in 2014. In May 2026, I updated the code using modern tools to make it faster, easier to use, and better to maintain.

The app is a portfolio that shows my work in vector art, branding, animations, and photography.

**Note:** The updates and modern changes to this project were made using **Antigravity-cli** and **Gemini-cli**.

---

## Technologies Used

- **HTML5** – Used for the structure of the website.
- **TypeScript (ESNext)** – All the main logic was changed from JS to TypeScript to make it safer and better.
- **Sass (Syntactically Awesome Style Sheets)** – Used for a modular design with variables and easy-to-use styles.
- **Node.js & TSX** – A custom build system to compile the code and create the final website files.

---

## Main Features

- **Responsive Design:** The website looks good on phones, tablets, and large computers.
- **News Feed:** A list of important moments shown in a modern 3-column grid.
- **Lightbox Galleries:** Large overlays to see art and photos in high quality.
- **Custom Video Player:** A special video player with my own design and controls.
- **Language:** The whole application is written in Norwegian.

---

## Installation

To set up the project on your computer, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/krigjo25/webapp-Design_-_Development-static.git
    cd webapp-Design_-_Development-static
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

---

## Commands

The project uses npm scripts to build the site:

- **Build the project:**
  Changes Sass to CSS, TypeScript to JavaScript, and creates the final HTML files in the `dist/` folder. It also cleans the folder before starting.
  ```bash
  npm run build
  ```

- **Start local server:**
  Builds the project and starts a local server so you can see the website.
  ```bash
  npm start
  ```

- **Generate titles:**
  A tool to create and manage page titles for the whole app.
  ```bash
  npm run gen-titles
  ```

---

## Documentation

You can find more details and diagrams in the [docs/](./docs/) folder:

- **[Architecture Overview](./docs/architecture.md):** Information about the project structure and how it works.
- **[Diagrams](./docs/diagrams.drawio):** Visual diagrams
---

## License
This project is licensed under the ISC License.
