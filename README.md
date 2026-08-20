# Library Classification Explorer

A demonstration application that shows how the same academic subject is classified differently across the three major library classification systems: Library of Congress Classification, Dewey Decimal Classification, and Universal Decimal Classification.

## Overview

This tool was created to illustrate a fundamental concept in library science: **there is no perfect, algorithmic way to convert between classification systems**. Each system organizes knowledge according to different philosophical frameworks, historical contexts, and cultural biases. This demo lets users explore these differences interactively.

## Features

- **113 Curated Subjects** across all major academic disciplines
- **Three Classification Systems** displayed side-by-side:
  - Library of Congress Classification (LCC)
  - Dewey Decimal Classification (DDC)
  - Universal Decimal Classification (UDC)
- **National Library of Medicine (NLM) codes** for medical subjects
- **Search functionality** - find subjects by name or classification code
- **Category Browsing** - filter by discipline (Philosophy, Social Sciences, Medicine, etc.)
- **Structural Analysis** - explanations of why classifications differ
- **Hierarchy Visualization** - see how each subject fits into its system's structure
- **Responsive Design** - works on desktop, tablet, and mobile devices

## Quick Start

This is a pure HTML/CSS/JavaScript application. No server, build tools, or dependencies are required.

### Method 1: Open Directly
Simply double-click on `index.html` or drag it into any modern web browser.

### Method 2: Local Server
For best results with file paths, use a local server:

```bash
# Using Python 3
cd /path/to/Converter
python -m http.server 8000
# Then open http://localhost:8000 in your browser

# Using PHP
php -S localhost:8000

# Using Node.js (npx)
npx serve
```

### Method 3: Deploy Anywhere
Upload all files to any web server or static hosting service (GitHub Pages, Netlify, Vercel, etc.).

## How to Use

1. **Browse by Category** - Click any category button to filter subjects by discipline
2. **Search** - Type in the search box to find subjects by name, or by classification code (e.g., "QA76" for Computer Science in LCC, or "004" for DDC)
3. **Click a Subject** - Select any subject from the list to see its classification across all three systems
4. **Compare** - View the call numbers, names, parent classes, and hierarchy for each system
5. **Read the Analysis** - Each subject includes a note explaining structural differences or interesting mapping details

## Project Structure

```
Converter/
├── index.html      # Main HTML file
├── styles.css     # All stylesheets
├── app.js         # Application logic
├── data.js        # Curated classification mappings (113 subjects)
└── README.md       # This file
```

## Classification Systems Covered

### Library of Congress Classification (LCC)
- **Created**: 1897
- **Type**: Alphabetic (A-Z)
- **Structure**: Single-letter classes with numeric subclasses
- **Strengths**: Highly detailed, designed for large research collections
- **Used by**: Most North American academic libraries

### Dewey Decimal Classification (DDC)
- **Created**: 1876
- **Type**: Numeric decimal (000-999)
- **Structure**: Ten main classes with decimal divisions
- **Strengths**: Intuitive hierarchy, widely used internationally
- **Used by**: Public libraries and school libraries worldwide

### Universal Decimal Classification (UDC)
- **Created**: 1895
- **Type**: Numeric decimal with auxiliaries
- **Structure**: Ten main classes with extensive combining notation
- **Strengths**: Highly flexible, supports complex subject combinations
- **Used by**: European academic and special libraries

### National Library of Medicine (NLM)
- **Type**: Specialized medical classification
- **Used by**: Medical libraries, included where applicable

## Data Contents

The `data.js` file contains **113 manually curated subjects** organized into categories. Each entry carries an explicit `category` field used by the category filter:

### Philosophy & Psychology (11 subjects)
Philosophy (General), Metaphysics, Epistemology, Logic, Ethics (Moral Philosophy), Psychology, Experimental Psychology, Clinical Psychology, Developmental Psychology, Social Psychology, Cognitive Psychology

### Religion (8 subjects)
Religion (General), Christianity, Buddhism, Islam, Hinduism, Judaism, Hindu Scriptures, Comparative Religion

### Social Sciences (16 subjects)
Social Sciences (General), Sociology & Anthropology, Economics, Political Science, Law, Education, Constitutional Law, Criminal Law, International Law, Contract Law, Intellectual Property Law, Anthropology, Demography, Urban Studies, Linguistics - Sociolinguistics, Cultural Anthropology

### Language & Literature (10 subjects)
Linguistics, English Language, English Literature, French Literature, American Literature, German Literature, Spanish Literature, Russian Literature, Poetry, Drama

### Science (15 subjects)
Science (General), Mathematics, Computer Science, Artificial Intelligence, Astronomy, Physics, Chemistry, Biology, Botany, Geology, Meteorology, Oceanography, Genetics, Ecology, Astrophysics

### Medicine & Health (12 subjects)
Medicine (General), Anatomy, Physiology, Pharmacology, Internal Medicine, Surgery, Neurology, Cardiology, Pediatrics, Psychiatry, Microbiology, Public Health

### Technology (15 subjects)
Technology (General), Engineering, Chemical Engineering, Electrical Engineering, Computer Engineering, Mechanical Engineering, Civil Engineering, Software Engineering, Robotics, Aerospace Engineering, Computer Hardware, Database Systems, Artificial Neural Networks, Nanotechnology, Biotechnology

### Arts (10 subjects)
Fine Arts, Visual Arts, Music, Literature (General), Painting, Sculpture, Architecture, Photography, Film Studies, Theatre

### History & Geography (13 subjects)
History (General), World History, European History, United States History, Geography, Maps, Ancient History, Medieval History, Renaissance, Modern History, World War II, Asian History, African History

### Miscellaneous (3 subjects)
Bibliography & Library Science, Information Science, General Works

## Technical Details

- **Framework**: Vanilla JavaScript (ES6+)
- **No Dependencies**: Pure HTML/CSS/JS, no external libraries
- **Responsive**: CSS Grid and Flexbox for layout
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)
- **File Size**: Total ~85KB (uncompressed)

## Why Conversion is Approximate

The structural differences between these systems make perfect one-to-one conversion impossible:

1. **Different Top-Level Organization**: 
   - LCC has 21 main classes (A-Z, excluding some letters)
   - DDC has 10 main classes (000-900)
   - UDC has 10 main classes with extensive auxiliary notation

2. **Granularity Mismatches**: 
   - A single subject may have a dedicated class in one system but be a subdivision in another

3. **Philosophical Differences**: 
   - LCC is discipline-focused (grouping by academic field)
   - DDC is knowledge-focused (grouping by domain)
   - UDC is relationship-focused (allowing complex combinations)

4. **Cultural Biases**: 
   - Each system reflects the knowledge organization priorities of its time and place of origin

5. **Historical Evolution**: 
   - Systems have evolved differently over time, with new fields added in different ways

## Example Insights

Try these subjects to see interesting structural differences:

- **Computer Science**: LCC places it under Mathematics (QA); DDC and UDC give it top-level status
- **Psychology**: DDC keeps it under Philosophy; LCC gives it a large separate subclass
- **Computer Engineering**: LCC nests under Electrical Engineering; DDC/UD under Computer Science
- **Medicine**: NLM has its own entire classification system that differs from LCC/DDC/UDC
- **Anatomy**: LCC puts it under Science; DDC/UD under Medicine

## Customization

### Adding New Subjects
Edit `data.js` and add entries to the `CLASSIFICATION_DATA` array:

```javascript
{
  subject: "Your Subject Name",
  category: "One of the category names listed above", // drives the category filter
  lcc: { code: "LCC_CODE", name: "LCC Name", parent: "PARENT_CODE" },
  ddc: { code: "DDC_CODE", name: "DDC Name", parent: "PARENT_CODE" },
  udc: { code: "UDC_CODE", name: "UDC Name", parent: "PARENT_CODE" },
  nlm: { code: "NLM_CODE", name: "NLM Name", parent: "PARENT_CODE" }, // optional
  note: "Explanation of structural differences or interesting mapping details"
}
```

### Styling
All styles are in `styles.css` using CSS custom properties (variables) for easy theming.

### Logic
Application logic is in `app.js` with clear separation of concerns:
- Data filtering and rendering
- Search functionality
- Category navigation
- Modal management
- Comparison view display

## License

This is a demonstration project created for educational purposes. The classification data is based on publicly available mappings from the Library of Congress, OCLC, and other standard library science sources.

You are free to use, modify, and distribute this application for non-commercial purposes.

## Credits

- Classification system data: Based on standard library classification schedules
- Design: Custom responsive design using modern CSS
- Icons/Styling: Pure CSS, no external dependencies

---

**Created**: August 2026  
**Version**: 1.0  
**Maintainer**: Local demo application
