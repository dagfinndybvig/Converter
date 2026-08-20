// Library Classification Explorer - Main Application

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearBtn');
    const subjectList = document.getElementById('subjectList');
    const resultCount = document.getElementById('resultCount');
    const comparisonView = document.getElementById('comparisonView');
    const selectedSubjectEl = document.getElementById('selectedSubject');
    const backToListBtn = document.getElementById('backToList');
    const structuralNote = document.getElementById('structuralNote');
    const nlmSection = document.getElementById('nlmSection');
    const nlmCode = document.getElementById('nlmCode');
    const nlmName = document.getElementById('nlmName');
    const filterCategories = document.getElementById('filterCategories');
    const categoryNav = document.getElementById('categoryNav');
    
    // About Modal Elements
    const aboutBtn = document.getElementById('aboutBtn');
    const aboutModal = document.getElementById('aboutModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    
    // Classification detail elements
    const lccCode = document.getElementById('lccCode');
    const lccName = document.getElementById('lccName');
    const lccParent = document.getElementById('lccParent');
    const lccHierarchy = document.getElementById('lccHierarchy');
    
    const ddcCode = document.getElementById('ddcCode');
    const ddcName = document.getElementById('ddcName');
    const ddcParent = document.getElementById('ddcParent');
    const ddcHierarchy = document.getElementById('ddcHierarchy');
    
    const udcCode = document.getElementById('udcCode');
    const udcName = document.getElementById('udcName');
    const udcParent = document.getElementById('udcParent');
    const udcHierarchy = document.getElementById('udcHierarchy');

    // Category buttons
    const categoryButtons = document.querySelectorAll('.category-btn');

    // State
    let filteredData = [...CLASSIFICATION_DATA];
    let currentCategory = 'all';

    // Get hierarchy display text
    const getHierarchyText = (system, code, parent) => {
        if (!parent) return '';
        
        // Build a simple hierarchy representation
        const parts = [];
        
        if (system === 'LCC') {
            // LCC uses letters, so show the progression
            if (code && code.length > 1) {
                parts.push(`Class: ${code[0]}`);
                if (code.length > 1) {
                    parts.push(`Subclass: ${code.substring(0, 2)}`);
                    if (parent && parent.length <= 2) {
                        parts.push(`Parent: ${parent}`);
                    }
                }
            }
        } else if (system === 'DDC') {
            // DDC uses numbers, show the hierarchy
            if (code && code.length >= 3) {
                const mainClass = code[0] + '00';
                const division = code.substring(0, 2) + '0';
                const section = code;
                
                parts.push(`Main: ${mainClass}`);
                if (code.length >= 2) {
                    parts.push(`Division: ${division}`);
                }
                if (parent) {
                    parts.push(`Parent: ${parent}`);
                }
            }
        } else if (system === 'UDC') {
            // UDC uses numbers, similar to DDC
            if (code && code.length >= 1) {
                parts.push(`Main: ${code[0]}`);
                if (code.length >= 2) {
                    parts.push(`Section: ${code.substring(0, 2)}`);
                }
                if (parent) {
                    parts.push(`Parent: ${parent}`);
                }
            }
        }
        
        return parts.length > 0 ? `Hierarchy: ${parts.join(' > ')}` : '';
    };

    // Render subject list
    const renderSubjectList = () => {
        if (filteredData.length === 0) {
            subjectList.innerHTML = '<div class="subject-list empty">No subjects found matching your criteria.</div>';
            resultCount.textContent = '';
            return;
        }

        // Group by category if filter is enabled
        const showCategories = filterCategories.checked;
        
        if (showCategories) {
            // Group subjects by category
            const grouped = {};
            filteredData.forEach(subject => {
                const category = subject.category || 'Miscellaneous';
                if (!grouped[category]) {
                    grouped[category] = [];
                }
                grouped[category].push(subject);
            });

            // Render grouped list
            let html = '';
            Object.keys(grouped).sort().forEach(category => {
                html += `
                    <div class="category-group">
                        <div class="category-header">${category}</div>
                        ${grouped[category].map(subject => `
                            <div class="subject-item" data-subject="${encodeURIComponent(subject.subject)}">
                                <div class="subject-name">${subject.subject}</div>
                                <div class="subject-codes">
                                    LCC: ${subject.lcc.code} | DDC: ${subject.ddc.code} | UDC: ${subject.udc.code}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `;
            });
            subjectList.innerHTML = html;
        } else {
            // Render flat list
            subjectList.innerHTML = filteredData.map(subject => `
                <div class="subject-item" data-subject="${encodeURIComponent(subject.subject)}">
                    <div class="subject-name">${subject.subject}</div>
                    <div class="subject-codes">
                        LCC: ${subject.lcc.code} | DDC: ${subject.ddc.code} | UDC: ${subject.udc.code}
                    </div>
                </div>
            `).join('');
        }

        resultCount.textContent = `${filteredData.length} ${filteredData.length === 1 ? 'subject' : 'subjects'} found`;

        // Add click handlers
        subjectList.querySelectorAll('.subject-item').forEach(item => {
            item.addEventListener('click', () => {
                const subject = decodeURIComponent(item.dataset.subject);
                showComparisonView(subject);
            });
        });
    };

    // Show comparison view for a subject
    const showComparisonView = (subjectName) => {
        const subject = CLASSIFICATION_DATA.find(s => s.subject === subjectName);
        if (!subject) return;

        // Hide subject list and category nav
        document.querySelector('.search-section').classList.add('hidden');
        categoryNav.classList.add('hidden');
        comparisonView.classList.remove('hidden');

        // Set selected subject
        selectedSubjectEl.textContent = subject.subject;

        // Populate LCC card
        lccCode.textContent = subject.lcc.code || 'N/A';
        lccName.textContent = subject.lcc.name || 'N/A';
        lccParent.textContent = subject.lcc.parent ? `Parent: ${subject.lcc.parent}` : '';
        lccHierarchy.textContent = getHierarchyText('LCC', subject.lcc.code, subject.lcc.parent);

        // Populate DDC card
        ddcCode.textContent = subject.ddc.code || 'N/A';
        ddcName.textContent = subject.ddc.name || 'N/A';
        ddcParent.textContent = subject.ddc.parent ? `Parent: ${subject.ddc.parent}` : '';
        ddcHierarchy.textContent = getHierarchyText('DDC', subject.ddc.code, subject.ddc.parent);

        // Populate UDC card
        udcCode.textContent = subject.udc.code || 'N/A';
        udcName.textContent = subject.udc.name || 'N/A';
        udcParent.textContent = subject.udc.parent ? `Parent: ${subject.udc.parent}` : '';
        udcHierarchy.textContent = getHierarchyText('UDC', subject.udc.code, subject.udc.parent);

        // Populate structural note
        structuralNote.textContent = subject.note || 'The classification systems organize this subject differently based on their philosophical frameworks.';

        // Show NLM section if data exists
        if (subject.nlm) {
            nlmCode.textContent = `Code: ${subject.nlm.code}`;
            nlmName.textContent = subject.nlm.name ? ` | Name: ${subject.nlm.name}` : '';
            nlmSection.classList.remove('hidden');
        } else {
            nlmSection.classList.add('hidden');
        }

        // Scroll to top of comparison view
        comparisonView.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // Hide comparison view
    const hideComparisonView = () => {
        comparisonView.classList.add('hidden');
        document.querySelector('.search-section').classList.remove('hidden');
        categoryNav.classList.remove('hidden');
    };

    // Modal functions
    const openModal = () => {
        aboutModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        aboutModal.classList.add('hidden');
        document.body.style.overflow = '';
    };

    // Filter data based on search and category
    const filterData = (searchTerm = '', category = 'all') => {
        let result = CLASSIFICATION_DATA;

        // Filter by category
        if (category !== 'all') {
            result = result.filter(subject => (subject.category || 'Miscellaneous') === category);
        }

        // Filter by search term
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            result = result.filter(subject => 
                subject.subject.toLowerCase().includes(term) ||
                subject.lcc.code.toLowerCase().includes(term) ||
                subject.ddc.code.toLowerCase().includes(term) ||
                subject.udc.code.toLowerCase().includes(term) ||
                (subject.lcc.name && subject.lcc.name.toLowerCase().includes(term)) ||
                (subject.ddc.name && subject.ddc.name.toLowerCase().includes(term)) ||
                (subject.udc.name && subject.udc.name.toLowerCase().includes(term))
            );
        }

        return result;
    };

    // Event Listeners
    
    // About Modal
    aboutBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    aboutModal.addEventListener('click', (e) => {
        if (e.target === aboutModal) {
            closeModal();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !aboutModal.classList.contains('hidden')) {
            closeModal();
        }
    });

    // Search input
    searchInput.addEventListener('input', (e) => {
        currentCategory = document.querySelector('.category-btn.active').dataset.category;
        filteredData = filterData(e.target.value, currentCategory);
        renderSubjectList();
    });

    // Clear button
    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        currentCategory = 'all';
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector('.category-btn[data-category="all"]').classList.add('active');
        filteredData = filterData('', 'all');
        renderSubjectList();
    });

    // Category buttons
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            filteredData = filterData(searchInput.value, currentCategory);
            renderSubjectList();
        });
    });

    // Back to list button
    backToListBtn.addEventListener('click', hideComparisonView);

    // Filter categories checkbox
    filterCategories.addEventListener('change', () => {
        renderSubjectList();
    });

    // Initialize
    const init = () => {
        filteredData = filterData('', 'all');
        renderSubjectList();
    };

    init();
});
