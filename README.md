# egometry

A platform for creators. This is the Next.js project structure for Rokz.

## Project Structure

```
project-root/
├── public/
│   ├── images/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Card.jsx
│   ├── pages/
│   │   ├── _app.js
│   │   ├── index.js
│   │   ├── about.js
│   │   └── creators/
│   │       └── [id].js
│   ├── styles/
│   │   ├── globals.css
│   │   └── Header.module.css
│   └── data/
│       └── creators.js
├── .gitignore
├── package.json
├── README.md
└── next.config.js
```

### Configuration Files

- **.gitignore**: Lists files and directories that should be ignored by Git.
- **package.json**: Contains metadata about the project and its dependencies.
- **README.md**: Documentation for the project.
- **next.config.js**: Configuration file for Next.js.

### Components

- **Header.jsx**: The header component for the app.
- **Footer.jsx**: The footer component for the app.
- **Card.jsx**: A reusable card component for displaying creator profiles.

### Pages

- **_app.js**: Custom App component for global styles and layout.
- **index.js**: The main landing page of the platform.
- **about.js**: A page for information about the platform.
- **creators/[id].js**: Dynamic route to display individual creator profiles.

### Data Files

- **creators.js**: Sample data for creators that can be used for rendering in components.

### Styles

- **globals.css**: Global styles for the application.
- **Header.module.css**: Module CSS for styling the Header component.
