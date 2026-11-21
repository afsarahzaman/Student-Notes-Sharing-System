# Student Notes Sharing System

## Project Summary
Student Notes Sharing System is an Electron-based desktop application project designed to provide students with a simple interface for organizing and accessing study notes. The application includes a dashboard and interface sections for adding and viewing notes.

## Objectives
- Provide a simple desktop interface for student notes.
- Offer sections for adding and viewing notes.
- Demonstrate desktop application development using web technologies and Electron.

## Technologies
- HTML
- CSS
- JavaScript
- Electron
- Node.js and npm
- electron-builder

## Main Interface
- **Dashboard:** Main application screen.
- **Total Notes:** Summary area for the number of notes.
- **Total Subjects:** Summary area for the number of subjects.
- **Recent Notes:** Area intended to show recently added notes.
- **Add Notes:** Section for entering notes.
- **View Notes:** Section for viewing available notes.

> Note: The actual saving, retrieval, and online-sharing behavior should be verified against the submitted source code before claiming that these functions are fully implemented.

## Project Structure
Key source files include:
- `index.html` â€” application interface
- `style.css` â€” interface styling
- `main.js` â€” Electron main process and desktop window
- `preload.js` â€” safe bridge between Electron and the renderer
- `renderer.js` â€” renderer-side application logic
- `package.json` â€” project metadata, scripts, dependencies, and build configuration

## Run in Development
Install dependencies and start the application:

```bash
npm install
npm start
```

On Windows PowerShell, if the `npm` command is blocked by execution policy, try:

```powershell
npm.cmd install
npm.cmd start
```

## Build and Distribution
The project has been packaged for Windows. The Windows unpacked application is generated under `dist/win-unpacked` when the Windows build succeeds.

The requested distribution formats are:
- Windows: `.exe` (installer or unpacked application)
- Linux: `.deb` and/or `.AppImage`
- macOS: `.dmg`

Linux and macOS packages must be built and tested on suitable operating-system environments. Do not describe these packages as completed until the corresponding build files have actually been generated and tested.

## Testing
Test the following before final submission:
- Application launches successfully.
- Add Notes works as expected.
- View Notes displays saved notes.
- Notes remain available after closing and reopening the app, if persistence is intended.
- Any online or multi-user sharing feature works, if included.
- Each packaged build launches on its target operating system.

## Future Improvements
- Confirm persistent storage and add backup/export.
- Add a backend and database if online multi-user sharing is required.
- Improve validation and error handling.
- Build, test, and sign releases for all target operating systems.

## Repository
GitHub: https://github.com/afsarahzaman/Student-Note-Sharing-System

---
**Prepared as a project summary.** Update this README if the final implementation or repository URL changes.
