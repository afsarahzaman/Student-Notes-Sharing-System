
const dashboardSection = document.getElementById('dashboardSection');
const addSection = document.getElementById('addSection');
const viewSection = document.getElementById('viewSection');

const dashboardBtn = document.getElementById('dashboardBtn');
const addBtn = document.getElementById('addBtn');
const viewBtn = document.getElementById('viewBtn');

const notesForm = document.getElementById('notesForm');
const allNotes = document.getElementById('allNotes');
const recentNotes = document.getElementById('recentNotes');
const searchInput = document.getElementById('searchInput');

// Load saved notes
let notes = JSON.parse(localStorage.getItem('studentNotes') || '[]');

// Show selected section
function showSection(section) {
    dashboardSection.classList.add('hidden');
    addSection.classList.add('hidden');
    viewSection.classList.add('hidden');

    dashboardBtn.classList.remove('active');
    addBtn.classList.remove('active');
    viewBtn.classList.remove('active');

    if (section === 'dashboard') {
        dashboardSection.classList.remove('hidden');
        dashboardBtn.classList.add('active');
    } else if (section === 'add') {
        addSection.classList.remove('hidden');
        addBtn.classList.add('active');
    } else {
        viewSection.classList.remove('hidden');
        viewBtn.classList.add('active');
        displayNotes(notes, allNotes, true);
    }
}

dashboardBtn.addEventListener('click', () => {
    showSection('dashboard');
});

addBtn.addEventListener('click', () => {
    showSection('add');
});

viewBtn.addEventListener('click', () => {
    showSection('view');
});

// Save notes
notesForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const note = {
        id: Date.now(),
        title: document.getElementById('noteTitle').value.trim(),
        subject: document.getElementById('subject').value.trim(),
        semester: document.getElementById('semester').value,
        description: document.getElementById('description').value.trim(),
        date: new Date().toLocaleDateString()
    };

    if (!note.title || !note.subject || !note.description) {
        alert('Please fill in all fields.');
        return;
    }

    notes.unshift(note);
    saveNotes();

    notesForm.reset();
    updateDashboard();
    showSection('view');

    alert('Notes saved successfully!');
});

// Store notes in localStorage
function saveNotes() {
    localStorage.setItem('studentNotes', JSON.stringify(notes));
}

// Display notes
function displayNotes(noteList, container, showDelete) {
    container.replaceChildren();

    if (noteList.length === 0) {
        const message = document.createElement('p');
        message.className = 'empty-message';
        message.textContent = 'No notes found. Add your first note!';
        container.appendChild(message);
        return;
    }

    noteList.forEach(function(note) {
        const card = document.createElement('div');
        card.className = 'note-card';

        const title = document.createElement('h3');
        title.textContent = note.title;

        const subject = document.createElement('p');
        subject.textContent = 'Subject: ' + note.subject;

        const semester = document.createElement('p');
        semester.textContent = 'Semester: ' + note.semester;

        const description = document.createElement('p');
        description.textContent = note.description;

        const date = document.createElement('p');
        date.textContent = 'Date: ' + note.date;

        card.append(title, subject, semester, description, date);

        if (showDelete) {
            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-btn';
            deleteButton.textContent = 'Delete';

            deleteButton.addEventListener('click', function() {
                const confirmed = confirm('Delete this note?');

                if (confirmed) {
                    notes = notes.filter(function(item) {
                        return item.id !== note.id;
                    });

                    saveNotes();
                    updateDashboard();
                    displayNotes(getFilteredNotes(), allNotes, true);
                }
            });

            card.appendChild(deleteButton);
        }

        container.appendChild(card);
    });
}

// Search notes
function getFilteredNotes() {
    const keyword = searchInput.value.toLowerCase().trim();

    return notes.filter(function(note) {
        return note.title.toLowerCase().includes(keyword) ||
               note.subject.toLowerCase().includes(keyword);
    });
}

searchInput.addEventListener('input', function() {
    displayNotes(getFilteredNotes(), allNotes, true);
});

// Update dashboard
function updateDashboard() {
    document.getElementById('totalNotes').textContent = notes.length;

    const subjects = new Set(
        notes.map(function(note) {
            return note.subject.toLowerCase().trim();
        })
    );

    document.getElementById('totalSubjects').textContent = subjects.size;

    displayNotes(notes.slice(0, 3), recentNotes, false);
}

// Start the app
updateDashboard();
showSection('dashboard');
