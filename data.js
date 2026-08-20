// Library Classification Explorer - Curated Mapping Data
// Three systems: LCC (Library of Congress), DDC (Dewey Decimal), UDC (Universal Decimal)

const CLASSIFICATION_DATA = [
  // ===== PHILOSOPHY & PSYCHOLOGY =====
  {
    subject: "Philosophy (General)",
    category: "Philosophy & Psychology",
    lcc: { code: "B", name: "Philosophy. Psychology. Religion", parent: null },
    ddc: { code: "100", name: "Philosophy & psychology", parent: null },
    udc: { code: "1", name: "Philosophy", parent: null },
    note: "DDC groups philosophy and psychology together at top level; LCC splits them (B vs later BF)."
  },
  {
    subject: "Metaphysics",
    category: "Philosophy & Psychology",
    lcc: { code: "BD111-701", name: "Speculative philosophy. Metaphysics", parent: "B" },
    ddc: { code: "110", name: "Metaphysics", parent: "100" },
    udc: { code: "11", name: "Metaphysics", parent: "1" },
    note: "Clean 1:1 mapping at this level."
  },
  {
    subject: "Epistemology",
    category: "Philosophy & Psychology",
    lcc: { code: "BD143-237", name: "Epistemology. Theory of knowledge", parent: "B" },
    ddc: { code: "121", name: "Epistemology, causation, humankind", parent: "100" },
    udc: { code: "16", name: "Logic. Epistemology. Theory of knowledge", parent: "1" },
    note: "UDC combines logic and epistemology; DDC separates them."
  },
  {
    subject: "Logic",
    category: "Philosophy & Psychology",
    lcc: { code: "BC", name: "Logic", parent: "B" },
    ddc: { code: "160", name: "Logic", parent: "100" },
    udc: { code: "16", name: "Logic. Epistemology. Theory of knowledge", parent: "1" },
    note: "UDC treats logic as part of epistemology; LCC and DDC treat it separately."
  },
  {
    subject: "Ethics (Moral Philosophy)",
    category: "Philosophy & Psychology",
    lcc: { code: "BJ1-1725", name: "Ethics", parent: "B" },
    ddc: { code: "170", name: "Ethics", parent: "100" },
    udc: { code: "17", name: "Ethics. Moral philosophy", parent: "1" },
    note: "Direct correspondence across all three systems."
  },
  {
    subject: "Psychology",
    category: "Philosophy & Psychology",
    lcc: { code: "BF1-990", name: "Psychology", parent: "B" },
    ddc: { code: "150", name: "Psychology", parent: "100" },
    udc: { code: "159.9", name: "Psychology", parent: "1" },
    note: "DDC keeps psychology under philosophy; LCC gives it a large separate subclass; UDC uses 159.9."
  },
  {
    subject: "Experimental Psychology",
    category: "Philosophy & Psychology",
    lcc: { code: "BF180-198.7", name: "Experimental psychology", parent: "BF" },
    ddc: { code: "150.72", name: "Research methods in psychology", parent: "150" },
    udc: { code: "159.953", name: "Experimental psychology", parent: "159.9" },
    note: "Granularity varies: LCC has dedicated ranges, DDC uses decimal extension."
  },

  // ===== RELIGION =====
  {
    subject: "Religion (General)",
    category: "Religion",
    lcc: { code: "BL- BX", name: "Religion", parent: "B" },
    ddc: { code: "200", name: "Religion", parent: null },
    udc: { code: "2", name: "Religion. Theology", parent: null },
    note: "LCC spreads religion across BL-BX with separate schedules for each faith."
  },
  {
    subject: "Christianity",
    category: "Religion",
    lcc: { code: "BR1-1725", name: "Christianity", parent: "BL" },
    ddc: { code: "270", name: "History of Christianity", parent: "200" },
    udc: { code: "27", name: "Christianity", parent: "2" },
    note: "DDC and UDC align well here; LCC uses broader BR class."
  },
  {
    subject: "Buddhism",
    category: "Religion",
    lcc: { code: "BQ1-9800", name: "Buddhism", parent: "BL" },
    ddc: { code: "294.3", name: "Theravada Buddhism", parent: "200" },
    udc: { code: "294.3", name: "Buddhism", parent: "2" },
    note: "DDC 294 is 'Other non-Christian religions' - Buddhism shares top-level with many faiths; LCC gives it a full class."
  },
  {
    subject: "Islam",
    category: "Religion",
    lcc: { code: "BP1-253", name: "Islam. Bahai Faith. Theosophy, etc.", parent: "BL" },
    ddc: { code: "297", name: "Islam, Babism & Bahai Faith", parent: "200" },
    udc: { code: "297", name: "Islam", parent: "2" },
    note: "DDC groups Islam with Babi/Bahai; LCC separates them."
  },
  {
    subject: "Hinduism",
    category: "Religion",
    lcc: { code: "BL1100-1295", name: "Hinduism", parent: "BL" },
    ddc: { code: "294.5", name: "Hinduism", parent: "200" },
    udc: { code: "294.5", name: "Hinduism", parent: "2" },
    note: "DDC treats Hinduism as a subset of 'Other religions'; LCC has dedicated range."
  },

  // ===== SOCIAL SCIENCES =====
  {
    subject: "Social Sciences (General)",
    category: "Social Sciences",
    lcc: { code: "H", name: "Social Sciences", parent: null },
    ddc: { code: "300", name: "Social sciences", parent: null },
    udc: { code: "3", name: "Social sciences", parent: null },
    note: "All three systems align perfectly at the top level."
  },
  {
    subject: "Sociology & Anthropology",
    category: "Social Sciences",
    lcc: { code: "HM", name: "Sociology (General)", parent: "H" },
    ddc: { code: "301", name: "Sociology & anthropology", parent: "300" },
    udc: { code: "316", name: "Sociology", parent: "3" },
    note: "DDC combines sociology and anthropology; LCC separates them (HM vs GN)."
  },
  {
    subject: "Economics",
    category: "Social Sciences",
    lcc: { code: "HB1-3840", name: "Economic theory. Demography", parent: "H" },
    ddc: { code: "330", name: "Economics", parent: "300" },
    udc: { code: "33", name: "Economics. Economic science", parent: "3" },
    note: "Direct mapping; LCC HB covers both theory and demography."
  },
  {
    subject: "Political Science",
    category: "Social Sciences",
    lcc: { code: "JC", name: "Political theory", parent: "J" },
    ddc: { code: "320", name: "Political science", parent: "300" },
    udc: { code: "32", name: "Politics", parent: "3" },
    note: "LCC has detailed subclasses: JA Political science (General), JC Political theory, JK US, JL Latin America, etc."
  },
  {
    subject: "Law",
    category: "Social Sciences",
    lcc: { code: "K", name: "Law", parent: null },
    ddc: { code: "340", name: "Law", parent: "300" },
    udc: { code: "34", name: "Law. Jurisprudence", parent: "3" },
    note: "All three systems have dedicated top-level equivalents."
  },
  {
    subject: "Education",
    category: "Social Sciences",
    lcc: { code: "L", name: "Education", parent: null },
    ddc: { code: "370", name: "Education", parent: "300" },
    udc: { code: "37", name: "Education. Training. Teaching", parent: "3" },
    note: "LCC gives Education its own class; DDC and UDC nest it under social sciences."
  },

  // ===== LANGUAGE & LITERATURE =====
  {
    subject: "Linguistics",
    category: "Language & Literature",
    lcc: { code: "P1-1091", name: "Philology. Linguistics", parent: "P" },
    ddc: { code: "410", name: "Linguistics", parent: "400" },
    udc: { code: "81", name: "Linguistics. Philology", parent: "8" },
    note: "DDC puts linguistics in 400 (Language); UDC puts it in 8 (Language/Literature). Structural divergence."
  },
  {
    subject: "English Language",
    category: "Language & Literature",
    lcc: { code: "PE1-3695", name: "English", parent: "P" },
    ddc: { code: "420", name: "English & Old English languages", parent: "400" },
    udc: { code: "82", name: "English. Old English literature", parent: "8" },
    note: "DDC 420 covers language; UDC 82 covers both language and literature."
  },
  {
    subject: "English Literature",
    category: "Language & Literature",
    lcc: { code: "PR1-9680", name: "English literature", parent: "P" },
    ddc: { code: "820", name: "English & Old English literatures", parent: "800" },
    udc: { code: "821.111", name: "English literature", parent: "82" },
    note: "DDC and LCC separate language (420/PE) from literature (820/PR); UDC combines under 82."
  },
  {
    subject: "French Literature",
    category: "Language & Literature",
    lcc: { code: "PQ1-3999", name: "French literature - Italian literature - Spanish literature - Portuguese literature", parent: "P" },
    ddc: { code: "840", name: "French & related literatures", parent: "800" },
    udc: { code: "84", name: "French literature", parent: "8" },
    note: "LCC PQ covers multiple Romance literatures; DDC and UDC have dedicated numbers."
  },

  // ===== SCIENCE =====
  {
    subject: "Science (General)",
    category: "Science",
    lcc: { code: "Q", name: "Science", parent: null },
    ddc: { code: "500", name: "Pure Science & Mathematics", parent: null },
    udc: { code: "5", name: "Mathematics & Natural sciences", parent: null },
    note: "All three align at top level, though DDC includes Mathematics here."
  },
  {
    subject: "Mathematics",
    category: "Science",
    lcc: { code: "QA1-939", name: "Mathematics", parent: "Q" },
    ddc: { code: "510", name: "Mathematics", parent: "500" },
    udc: { code: "51", name: "Mathematics", parent: "5" },
    note: "Perfect alignment across all systems."
  },
  {
    subject: "Computer Science",
    category: "Science",
    lcc: { code: "QA75.5-76.95", name: "Computers. Computer Science", parent: "QA" },
    ddc: { code: "004", name: "Computer science", parent: "000" },
    udc: { code: "004", name: "Computer science & technology", parent: "00" },
    note: "Major structural difference: LCC nests under Mathematics (QA); DDC and UDC give it top-level status in 000/00."
  },
  {
    subject: "Artificial Intelligence",
    category: "Science",
    lcc: { code: "Q334-342", name: "Artificial intelligence", parent: "QA75.5-76.95" },
    ddc: { code: "006.3", name: "Artificial intelligence", parent: "004" },
    udc: { code: "004.8", name: "Artificial intelligence", parent: "004" },
    note: "LCC places AI within QA (Mathematics/CS); DDC/UD use 006.3/004.8."
  },
  {
    subject: "Astronomy",
    category: "Science",
    lcc: { code: "QB1-991", name: "Astronomy", parent: "Q" },
    ddc: { code: "520", name: "Astronomy & allied sciences", parent: "500" },
    udc: { code: "52", name: "Astronomy. Geodesy. Space exploration", parent: "5" },
    note: "Clean mapping across all systems."
  },
  {
    subject: "Physics",
    category: "Science",
    lcc: { code: "QC1-999", name: "Physics", parent: "Q" },
    ddc: { code: "530", name: "Physics", parent: "500" },
    udc: { code: "53", name: "Physics", parent: "5" },
    note: "Direct correspondence."
  },
  {
    subject: "Chemistry",
    category: "Science",
    lcc: { code: "QD1-999", name: "Chemistry", parent: "Q" },
    ddc: { code: "540", name: "Chemistry & allied sciences", parent: "500" },
    udc: { code: "54", name: "Chemistry. Crystallography. Mineralogy", parent: "5" },
    note: "All systems align well."
  },
  {
    subject: "Biology",
    category: "Science",
    lcc: { code: "QH1-999", name: "Natural history - Biology", parent: "Q" },
    ddc: { code: "570", name: "Life sciences", parent: "500" },
    udc: { code: "57", name: "Biological sciences in general", parent: "5" },
    note: "LCC uses QH for Biology; DDC 570 covers all life sciences."
  },
  {
    subject: "Botany",
    category: "Science",
    lcc: { code: "QK1-989", name: "Botany", parent: "Q" },
    ddc: { code: "580", name: "Plants (Botany)", parent: "500" },
    udc: { code: "58", name: "Botany", parent: "5" },
    note: "Direct mapping."
  },

  // ===== MEDICINE & HEALTH (NLM focus) =====
  {
    subject: "Medicine (General)",
    category: "Medicine & Health",
    lcc: { code: "R", name: "Medicine", parent: null },
    ddc: { code: "610", name: "Medicine & health", parent: "600" },
    udc: { code: "61", name: "Medicine. Health", parent: "6" },
    nlm: { code: "W", name: "Health Professions", parent: null },
    note: "LCC 'R' covers general medicine; NLM has its own system (W class for Health Professions)."
  },
  {
    subject: "Anatomy",
    category: "Medicine & Health",
    lcc: { code: "QM1-695", name: "Human anatomy", parent: "Q" },
    ddc: { code: "611", name: "Human anatomy, cytology, histology", parent: "610" },
    udc: { code: "611", name: "Anatomy", parent: "61" },
    nlm: { code: "QS", name: "Anatomy", parent: "Q" },
    note: "LCC puts anatomy under Q (Science); DDC/UD under Medicine. NLM uses QS (shared with LCC)."
  },
  {
    subject: "Physiology",
    category: "Medicine & Health",
    lcc: { code: "QP1-981", name: "Physiology", parent: "Q" },
    ddc: { code: "612", name: "Human physiology", parent: "610" },
    udc: { code: "612", name: "Physiology", parent: "61" },
    nlm: { code: "QT", name: "Physiology", parent: "Q" },
    note: "LCC in Science; DDC/UD under Medicine."
  },
  {
    subject: "Pharmacology",
    category: "Medicine & Health",
    lcc: { code: "RM1-950", name: "Therapeutics. Pharmacology", parent: "R" },
    ddc: { code: "615", name: "Pharmacology & therapeutics", parent: "610" },
    udc: { code: "615", name: "Pharmacology. Therapeutics. Toxicology", parent: "61" },
    nlm: { code: "QV", name: "Pharmacology", parent: "Q" },
    note: "NLM uses QV; LCC uses RM under Medicine."
  },
  {
    subject: "Internal Medicine",
    category: "Medicine & Health",
    lcc: { code: "RC31-1245", name: "Internal medicine", parent: "R" },
    ddc: { code: "616", name: "Diseases", parent: "610" },
    udc: { code: "616", name: "Pathology. Clinical medicine", parent: "61" },
    nlm: { code: "WC", name: "Communicable Diseases", parent: null },
    note: "NLM has much more granular categorization for medical specialties."
  },
  {
    subject: "Surgery",
    category: "Medicine & Health",
    lcc: { code: "RD1-811", name: "Surgery", parent: "R" },
    ddc: { code: "617", name: "Surgery & related medical specialties", parent: "610" },
    udc: { code: "617", name: "Surgery. Orthopaedics. Ophthalmology", parent: "61" },
    nlm: { code: "WO", name: "Surgery", parent: null },
    note: "All systems align well at this level."
  },

  // ===== TECHNOLOGY =====
  {
    subject: "Technology (General)",
    category: "Technology",
    lcc: { code: "T", name: "Technology", parent: null },
    ddc: { code: "600", name: "Technology (Applied sciences)", parent: null },
    udc: { code: "6", name: "Applied Sciences. Medicine. Technology", parent: null },
    note: "All three align at top level. UDC 6 also includes Medicine."
  },
  {
    subject: "Engineering",
    category: "Technology",
    lcc: { code: "TA1-2040", name: "Engineering (General). Civil engineering", parent: "T" },
    ddc: { code: "620", name: "Engineering & allied operations", parent: "600" },
    udc: { code: "62", name: "Engineering. Technology in general", parent: "6" },
    note: "Direct mapping."
  },
  {
    subject: "Chemical Engineering",
    category: "Technology",
    lcc: { code: "TP155-156", name: "Chemical technology", parent: "TP" },
    ddc: { code: "660", name: "Chemical engineering", parent: "600" },
    udc: { code: "66", name: "Chemical technology. Chemical & related industries", parent: "6" },
    note: "LCC TP covers Chemical Technology broadly."
  },
  {
    subject: "Electrical Engineering",
    category: "Technology",
    lcc: { code: "TK1-9971", name: "Electrical engineering. Electronics. Nuclear engineering", parent: "T" },
    ddc: { code: "621.3", name: "Electrical engineering", parent: "620" },
    udc: { code: "621.3", name: "Electrical engineering. Electronics", parent: "62" },
    note: "DDC and UDC use decimal extension for specialization."
  },
  {
    subject: "Computer Engineering",
    category: "Technology",
    lcc: { code: "TK7885-7895", name: "Computer engineering", parent: "TK" },
    ddc: { code: "005.1", name: "Computer hardware", parent: "000" },
    udc: { code: "004.2", name: "Computer architecture & design", parent: "004" },
    note: "LCC nests under Electrical Engineering (TK); DDC/UD under Computer Science (004/005)."
  },

  // ===== ARTS =====
  {
    subject: "Fine Arts",
    category: "Arts",
    lcc: { code: "N", name: "Fine Arts", parent: null },
    ddc: { code: "700", name: "Arts", parent: null },
    udc: { code: "7", name: "The arts. Recreation. Entertainment. Sport", parent: null },
    note: "All align at top level. UDC 7 also includes recreation and sport."
  },
  {
    subject: "Visual Arts",
    category: "Arts",
    lcc: { code: "N1-9211", name: "Visual arts", parent: "N" },
    ddc: { code: "700", name: "Arts", parent: null },
    udc: { code: "7.03", name: "Fine arts. Visual arts", parent: "7" },
    note: "DDC 700 is broader (all arts); LCC N is specifically Fine Arts."
  },
  {
    subject: "Music",
    category: "Arts",
    lcc: { code: "M", name: "Music", parent: null },
    ddc: { code: "780", name: "Music", parent: "700" },
    udc: { code: "78", name: "Music", parent: "7" },
    note: "LCC gives Music its own class; DDC/UD nest under Arts."
  },
  {
    subject: "Literature (General)",
    category: "Arts",
    lcc: { code: "PN", name: "Literature (General)", parent: "P" },
    ddc: { code: "800", name: "Literature, rhetoric & criticism", parent: null },
    udc: { code: "8", name: "Language. Linguistics. Literature", parent: null },
    note: "LCC PN covers general literature; specific literatures have their own (PR, PS, PQ, etc.)."
  },

  // ===== HISTORY & GEOGRAPHY =====
  {
    subject: "History (General)",
    category: "History & Geography",
    lcc: { code: "D", name: "History (General)", parent: null },
    ddc: { code: "900", name: "History & geography", parent: null },
    udc: { code: "9", name: "Geography. Biography. History", parent: null },
    note: "DDC combines history and geography; LCC separates them (D vs G). UDC also includes biography."
  },
  {
    subject: "World History",
    category: "History & Geography",
    lcc: { code: "D1-203", name: "History (General)", parent: "D" },
    ddc: { code: "909", name: "World history", parent: "900" },
    udc: { code: "930", name: "History of the ancient world", parent: "9" },
    note: "UDC uses 930 for ancient world; modern world uses 94(100)-94(199) with facultative notation."
  },
  {
    subject: "European History",
    category: "History & Geography",
    lcc: { code: "D203-4001", name: "History of Europe", parent: "D" },
    ddc: { code: "940", name: "History of Europe", parent: "900" },
    udc: { code: "94", name: "History of Europe", parent: "9" },
    note: "Clean mapping across all three."
  },
  {
    subject: "United States History",
    category: "History & Geography",
    lcc: { code: "E11-143", name: "America", parent: null },
    ddc: { code: "973", name: "History of North America", parent: "900" },
    udc: { code: "973", name: "United States", parent: "9" },
    note: "LCC has entire E-F range for American history; DDC uses 973."
  },
  {
    subject: "Geography",
    category: "History & Geography",
    lcc: { code: "G", name: "Geography. Anthropology. Recreation", parent: null },
    ddc: { code: "910", name: "Geography & travel", parent: "900" },
    udc: { code: "91", name: "Geography. Regional geography", parent: "9" },
    note: "LCC G includes geography, anthropology, and recreation."
  },
  {
    subject: "Maps",
    category: "History & Geography",
    lcc: { code: "G1000-3122", name: "Cartography", parent: "G" },
    ddc: { code: "912", name: "Graphic representations of earth", parent: "910" },
    udc: { code: "912", name: "Cartography. Maps. Plans", parent: "91" },
    note: "All three systems align well for cartography."
  },

  // ===== MISCELLANEOUS =====
  {
    subject: "Bibliography & Library Science",
    category: "Miscellaneous",
    lcc: { code: "Z", name: "Bibliography. Library Science", parent: null },
    ddc: { code: "010", name: "Bibliographies", parent: "000" },
    udc: { code: "01", name: "Bibliography. Bibliology. Library science", parent: "00" },
    note: "Library of Congress Classification gives this its own class; Dewey Decimal Classification nests it under Generalities; Universal Decimal Classification under General."
  },
  {
    subject: "Information Science",
    category: "Miscellaneous",
    lcc: { code: "Z665-719", name: "Library Science. Information Science", parent: "Z" },
    ddc: { code: "020", name: "Library & information sciences", parent: "000" },
    udc: { code: "02", name: "Librarianship", parent: "0" },
    note: "Library of Congress Classification treats this as part of Library Science; Dewey Decimal Classification and Universal Decimal Classification separate it."
  },
  {
    subject: "General Works",
    category: "Miscellaneous",
    lcc: { code: "A", name: "General Works", parent: null },
    ddc: { code: "000", name: "Computer science, information & general works", parent: null },
    udc: { code: "00", name: "Science & knowledge in general. Organization. Computer science. Information. Documentation. Librarianship. Institutions. Publications", parent: null },
    note: "Dewey Decimal Classification 000 is extremely broad, including Computer Science; Library of Congress Classification A is much narrower, covering encyclopedias, periodicals, etc."
  },

  // ===== ADDITIONAL PSYCHOLOGY SUBJECTS =====
  {
    subject: "Clinical Psychology",
    category: "Philosophy & Psychology",
    lcc: { code: "RC461-508", name: "Clinical psychology", parent: "R" },
    ddc: { code: "150.195", name: "Clinical psychology", parent: "150" },
    udc: { code: "159.97", name: "Clinical psychology", parent: "159.9" },
    note: "Library of Congress Classification places Clinical Psychology under Medicine; Dewey Decimal Classification and Universal Decimal Classification keep it under Psychology."
  },
  {
    subject: "Developmental Psychology",
    category: "Philosophy & Psychology",
    lcc: { code: "BF713-724.85", name: "Developmental psychology. Including infant psychology, child psychology, puberty, adolescence", parent: "BF" },
    ddc: { code: "155", name: "Developmental psychology", parent: "150" },
    udc: { code: "159.922-159.923", name: "Developmental psychology", parent: "159.9" },
    note: "Clean mapping across systems, though Library of Congress Classification provides much finer granularity."
  },
  {
    subject: "Social Psychology",
    category: "Philosophy & Psychology",
    lcc: { code: "HM1001-1281", name: "Social psychology", parent: "HM" },
    ddc: { code: "302", name: "Social interaction", parent: "300" },
    udc: { code: "316.6", name: "Social psychology", parent: "316" },
    note: "Library of Congress Classification has a separate class; Dewey Decimal Classification places it in Sociology; Universal Decimal Classification uses 316.6."
  },
  {
    subject: "Cognitive Psychology",
    category: "Philosophy & Psychology",
    lcc: { code: "BF311-499.9", name: "Cognition. Including learning, attention, comprehension, memory, imagination, genius, intelligence, thought and thinking, psycholinguistics, mental fatigue", parent: "BF" },
    ddc: { code: "153", name: "Cognitive psychology and information processing", parent: "150" },
    udc: { code: "159.953.5", name: "Cognitive psychology", parent: "159.953" },
    note: "Dewey Decimal Classification uses 153 for cognitive processes; Universal Decimal Classification has more granular notation."
  },

  // ===== ADDITIONAL LAW SUBJECTS =====
  {
    subject: "Constitutional Law",
    category: "Social Sciences",
    lcc: { code: "K3154-3370", name: "Constitutional law", parent: "K" },
    ddc: { code: "342", name: "Constitutional & administrative law", parent: "340" },
    udc: { code: "342", name: "Constitutional law", parent: "34" },
    note: "All three systems align well for this major legal category."
  },
  {
    subject: "Criminal Law",
    category: "Social Sciences",
    lcc: { code: "K5000-5582", name: "Criminal law", parent: "K" },
    ddc: { code: "345", name: "Criminal law", parent: "340" },
    udc: { code: "343", name: "Criminal law. Penal law", parent: "34" },
    note: "Library of Congress Classification has extensive subclasses for different aspects of criminal law."
  },
  {
    subject: "International Law",
    category: "Social Sciences",
    lcc: { code: "JX", name: "International law", parent: "J" },
    ddc: { code: "341", name: "International law", parent: "340" },
    udc: { code: "341", name: "International law", parent: "34" },
    note: "Library of Congress Classification separates International Law into its own JX class, distinct from other political science materials."
  },
  {
    subject: "Contract Law",
    category: "Social Sciences",
    lcc: { code: "K850-894", name: "Contracts", parent: "K" },
    ddc: { code: "346.02", name: "Contract law", parent: "340" },
    udc: { code: "347.44", name: "Contract law", parent: "347" },
    note: "Dewey Decimal Classification and Universal Decimal Classification place contract law within broader private law categories."
  },
  {
    subject: "Intellectual Property Law",
    category: "Social Sciences",
    lcc: { code: "K1401-1578", name: "Intellectual property", parent: "K" },
    ddc: { code: "346.048", name: "Intellectual property", parent: "340" },
    udc: { code: "347.77-347.78", name: "Intellectual property rights", parent: "347" },
    note: "A relatively modern area of law that all systems have adapted to accommodate."
  },

  // ===== ADDITIONAL ENGINEERING SUBJECTS =====
  {
    subject: "Mechanical Engineering",
    category: "Technology",
    lcc: { code: "TJ1-1570", name: "Mechanical engineering and machinery", parent: "T" },
    ddc: { code: "621.01-621.8", name: "Mechanical engineering", parent: "620" },
    udc: { code: "621.01", name: "General mechanical engineering", parent: "621" },
    note: "Library of Congress Classification has a dedicated TJ class; Dewey Decimal Classification and Universal Decimal Classification distribute across multiple numbers."
  },
  {
    subject: "Civil Engineering",
    category: "Technology",
    lcc: { code: "TA590-615", name: "Structural engineering", parent: "TA" },
    ddc: { code: "624", name: "Civil engineering", parent: "620" },
    udc: { code: "624", name: "Civil engineering and construction", parent: "62" },
    note: "Direct correspondence in Dewey Decimal Classification and Universal Decimal Classification; Library of Congress Classification nests under Engineering (General)."
  },
  {
    subject: "Software Engineering",
    category: "Technology",
    lcc: { code: "QA76.758-76.7675", name: "Software engineering", parent: "QA75.5-76.95" },
    ddc: { code: "005.1", name: "Computer hardware & software", parent: "004" },
    udc: { code: "004.42", name: "Software engineering", parent: "004" },
    note: "Library of Congress Classification places this under Mathematics/Computer Science; Dewey Decimal Classification in Computer Science (000)."
  },
  {
    subject: "Robotics",
    category: "Technology",
    lcc: { code: "TJ210.2-211.45", name: "Robotics. Robots", parent: "TJ" },
    ddc: { code: "629.892", name: "Robotics", parent: "620" },
    udc: { code: "007.52", name: "Robotics", parent: "007" },
    note: "Dewey Decimal Classification places robotics under Other Branches of Engineering; Universal Decimal Classification under Computer applications; Library of Congress Classification under Mechanical Engineering."
  },
  {
    subject: "Aerospace Engineering",
    category: "Technology",
    lcc: { code: "TL500-770", name: "Aeronautical engineering", parent: "TL" },
    ddc: { code: "629.1", name: "Aerospace engineering", parent: "620" },
    udc: { code: "629.7", name: "Aerospace technology", parent: "629" },
    note: "All systems have dedicated sections for aerospace, though Library of Congress Classification separates aeronautics (TL) from astronautics (TL780-785.8)."
  },

  // ===== ADDITIONAL MEDICINE SUBJECTS =====
  {
    subject: "Neurology",
    category: "Medicine & Health",
    lcc: { code: "RC346-429", name: "Neurology. Diseases of the nervous system", parent: "R" },
    ddc: { code: "616.8", name: "Nervous system diseases", parent: "610" },
    udc: { code: "616.8", name: "Neurology. Nervous system", parent: "616" },
    nlm: { code: "WL", name: "Nervous System", parent: null },
    note: "National Library of Medicine uses WL for Nervous System; Library of Congress Classification and Dewey Decimal Classification align well."
  },
  {
    subject: "Cardiology",
    category: "Medicine & Health",
    lcc: { code: "RC666-701", name: "Diseases of the circulatory (cardiovascular) system", parent: "R" },
    ddc: { code: "616.1", name: "Circulatory system diseases", parent: "610" },
    udc: { code: "616.1", name: "Cardiovascular system diseases", parent: "616" },
    nlm: { code: "WG", name: "Cardiovascular System", parent: null },
    note: "National Library of Medicine uses WG for Cardiovascular System; all systems have clear mappings for this medical specialty."
  },
  {
    subject: "Pediatrics",
    category: "Medicine & Health",
    lcc: { code: "RJ", name: "Pediatrics", parent: "R" },
    ddc: { code: "618.92", name: "Pediatrics", parent: "610" },
    udc: { code: "616-053.2", name: "Pediatric diseases", parent: "616" },
    nlm: { code: "WS", name: "Pediatrics", parent: null },
    note: "National Library of Medicine uses WS; Dewey Decimal Classification uses 618.92; Universal Decimal Classification uses auxiliary notation -053.2 for children's diseases."
  },
  {
    subject: "Psychiatry",
    category: "Medicine & Health",
    lcc: { code: "RC435-571", name: "Psychiatry", parent: "R" },
    ddc: { code: "616.89", name: "Mental disorders", parent: "610" },
    udc: { code: "616.89", name: "Psychiatry", parent: "616" },
    nlm: { code: "WM", name: "Psychiatry", parent: null },
    note: "National Library of Medicine uses WM; note that Dewey Decimal Classification uses 616.89 for mental disorders, while psychiatry as a medical field has different placements."
  },
  {
    subject: "Microbiology",
    category: "Medicine & Health",
    lcc: { code: "QR1-502", name: "Microbiology", parent: "Q" },
    ddc: { code: "579", name: "Microorganisms, fungi & algae", parent: "570" },
    udc: { code: "579", name: "Microbiology", parent: "57" },
    nlm: { code: "QW", name: "Microbiology & Immunology", parent: null },
    note: "Library of Congress Classification places this under Science (QR); National Library of Medicine uses QW; Dewey Decimal Classification and Universal Decimal Classification under Biology."
  },
  {
    subject: "Public Health",
    category: "Medicine & Health",
    lcc: { code: "RA1-1270", name: "Public aspects of medicine", parent: "R" },
    ddc: { code: "614", name: "Incidence and prevention of disease", parent: "610" },
    udc: { code: "614", name: "Public health. Hygiene", parent: "61" },
    nlm: { code: "WA", name: "Public Health", parent: null },
    note: "National Library of Medicine uses WA; all systems recognize this as a distinct field of medicine."
  },

  // ===== ADDITIONAL SCIENCE SUBJECTS =====
  {
    subject: "Geology",
    category: "Science",
    lcc: { code: "QE1-996.5", name: "Geology", parent: "Q" },
    ddc: { code: "551", name: "Geology, hydrology, meteorology", parent: "550" },
    udc: { code: "551", name: "Geology", parent: "55" },
    note: "Direct mapping across all systems for this earth science discipline."
  },
  {
    subject: "Meteorology",
    category: "Science",
    lcc: { code: "QC851-999", name: "Meteorology. Climatology", parent: "QC" },
    ddc: { code: "551.5", name: "Meteorology", parent: "550" },
    udc: { code: "551.5", name: "Meteorology", parent: "55" },
    note: "Library of Congress Classification nests meteorology under Physics; Dewey Decimal Classification and Universal Decimal Classification place it with Earth Sciences."
  },
  {
    subject: "Oceanography",
    category: "Science",
    lcc: { code: "GC1-1581", name: "Oceanography", parent: null },
    ddc: { code: "551.46", name: "Oceanography", parent: "550" },
    udc: { code: "551.46", name: "Oceanography", parent: "55" },
    note: "Library of Congress Classification has a dedicated GC class; Dewey Decimal Classification and Universal Decimal Classification place it under Earth Sciences."
  },
  {
    subject: "Genetics",
    category: "Science",
    lcc: { code: "QH426-470", name: "Genetics", parent: "QH" },
    ddc: { code: "576.5", name: "Genetics", parent: "570" },
    udc: { code: "576.5", name: "Genetics", parent: "57" },
    note: "All systems align well for this fundamental biological discipline."
  },
  {
    subject: "Ecology",
    category: "Science",
    lcc: { code: "QH540-549.5", name: "Ecology", parent: "QH" },
    ddc: { code: "577", name: "Ecology", parent: "570" },
    udc: { code: "574", name: "General ecology", parent: "57" },
    note: "Dewey Decimal Classification and Universal Decimal Classification have slightly different numbers but represent the same discipline."
  },
  {
    subject: "Astrophysics",
    category: "Science",
    lcc: { code: "QB460-480", name: "Astrophysics", parent: "QB" },
    ddc: { code: "523.01", name: "Astrophysics", parent: "520" },
    udc: { code: "524", name: "Astrophysics. Cosmology", parent: "52" },
    note: "Library of Congress Classification nests under Astronomy; Dewey Decimal Classification uses decimal extension; Universal Decimal Classification has its own section."
  },

  // ===== ADDITIONAL ARTS SUBJECTS =====
  {
    subject: "Painting",
    category: "Arts",
    lcc: { code: "ND1000-2495", name: "Painting", parent: "N" },
    ddc: { code: "750", name: "Painting & paintings", parent: "700" },
    udc: { code: "75", name: "Painting", parent: "7" },
    note: "All systems have dedicated sections for painting as a major art form."
  },
  {
    subject: "Sculpture",
    category: "Arts",
    lcc: { code: "NB1000-1952", name: "Sculpture", parent: "N" },
    ddc: { code: "730", name: "Plastic arts. Sculpture", parent: "700" },
    udc: { code: "73", name: "Plastic arts. Sculpture", parent: "7" },
    note: "Clean mapping across all three classification systems."
  },
  {
    subject: "Architecture",
    category: "Arts",
    lcc: { code: "NA1-9428", name: "Architecture", parent: null },
    ddc: { code: "720", name: "Architecture", parent: "700" },
    udc: { code: "72", name: "Architecture", parent: "7" },
    note: "Library of Congress Classification gives Architecture its own NA class; Dewey Decimal Classification and Universal Decimal Classification nest it under Arts."
  },
  {
    subject: "Photography",
    category: "Arts",
    lcc: { code: "TR1-1050", name: "Photography", parent: null },
    ddc: { code: "770", name: "Photography, photographs & computer graphics", parent: "700" },
    udc: { code: "77", name: "Photography. Photographs", parent: "7" },
    note: "Library of Congress Classification has a dedicated TR class; the other systems place it under Arts."
  },
  {
    subject: "Film Studies",
    category: "Arts",
    lcc: { code: "PN1993-1999", name: "Motion pictures", parent: "PN" },
    ddc: { code: "791.43", name: "Motion pictures", parent: "790" },
    udc: { code: "791.2", name: "Cinematography", parent: "791" },
    note: "Library of Congress Classification uses PN for general literature which includes motion pictures; Dewey Decimal Classification and Universal Decimal Classification place it under Recreation."
  },
  {
    subject: "Theatre",
    category: "Arts",
    lcc: { code: "PN2000-3300", name: "Drama. Theater", parent: "PN" },
    ddc: { code: "792", name: "Stage presentations", parent: "790" },
    udc: { code: "792", name: "Theatre", parent: "7" },
    note: "Dewey Decimal Classification and Universal Decimal Classification categorize theatre under Recreation/Arts; Library of Congress Classification under Literature."
  },

  // ===== ADDITIONAL HISTORY SUBJECTS =====
  {
    subject: "Ancient History",
    category: "History & Geography",
    lcc: { code: "D51-90", name: "Ancient history", parent: "D" },
    ddc: { code: "930", name: "History of ancient world", parent: "900" },
    udc: { code: "930", name: "History of the ancient world", parent: "9" },
    note: "All systems align well for ancient history."
  },
  {
    subject: "Medieval History",
    category: "History & Geography",
    lcc: { code: "D111-203", name: "Medieval history", parent: "D" },
    ddc: { code: "940.1", name: "Medieval Europe", parent: "940" },
    udc: { code: "94(4)", name: "Medieval history of Europe", parent: "94" },
    note: "Dewey Decimal Classification uses decimal extension for medieval period; Universal Decimal Classification uses facultative notation for regions."
  },
  {
    subject: "Renaissance",
    category: "History & Geography",
    lcc: { code: "CB359-460", name: "Renaissance", parent: "CB" },
    ddc: { code: "940.21-940.24", name: "Renaissance period", parent: "940" },
    udc: { code: "94(4)04", name: "Renaissance Europe", parent: "94" },
    note: "Library of Congress Classification has a dedicated CB class for History of Civilization; Dewey Decimal Classification distributes by region."
  },
  {
    subject: "Modern History",
    category: "History & Geography",
    lcc: { code: "D203-4001", name: "History of Europe", parent: "D" },
    ddc: { code: "940.2-940.5", name: "Modern history", parent: "940" },
    udc: { code: "94(100)16-19", name: "Modern history of the world", parent: "94" },
    note: "Modern history classifications vary by system and often by geographic region."
  },
  {
    subject: "World War II",
    category: "History & Geography",
    lcc: { code: "D731-830", name: "World War II", parent: "D" },
    ddc: { code: "940.53-940.5489", name: "World War II", parent: "940" },
    udc: { code: "94(100)1939-1945", name: "Second World War", parent: "94" },
    note: "All systems provide detailed classifications for this major historical event, though the exact numbers and organization differ."
  },
  {
    subject: "Asian History",
    category: "History & Geography",
    lcc: { code: "DS1-937", name: "History of Asia", parent: "D" },
    ddc: { code: "950", name: "History of Asia", parent: "900" },
    udc: { code: "95", name: "History of Asia", parent: "9" },
    note: "Clean correspondence across all three systems for continental history."
  },
  {
    subject: "African History",
    category: "History & Geography",
    lcc: { code: "DT1-3415", name: "History of Africa", parent: "D" },
    ddc: { code: "960", name: "History of Africa", parent: "900" },
    udc: { code: "96", name: "History of Africa", parent: "9" },
    note: "Direct mapping for African history across all systems."
  },

  // ===== ADDITIONAL LITERATURE SUBJECTS =====
  {
    subject: "American Literature",
    category: "Language & Literature",
    lcc: { code: "PS1-3580", name: "American literature", parent: "P" },
    ddc: { code: "810", name: "American literature in English", parent: "800" },
    udc: { code: "821.111.09", name: "American literature in English", parent: "821.111" },
    note: "Library of Congress Classification has a dedicated PS class; Dewey Decimal Classification uses 810 for English-language American literature."
  },
  {
    subject: "German Literature",
    category: "Language & Literature",
    lcc: { code: "PT1-4897", name: "German literature", parent: "P" },
    ddc: { code: "830", name: "German & related literatures", parent: "800" },
    udc: { code: "830", name: "German literature", parent: "8" },
    note: "All systems have dedicated sections for German literature."
  },
  {
    subject: "Spanish Literature",
    category: "Language & Literature",
    lcc: { code: "PQ6001-8929", name: "Spanish literature", parent: "PQ" },
    ddc: { code: "860", name: "Spanish & Portuguese literatures", parent: "800" },
    udc: { code: "860", name: "Spanish & Portuguese literature", parent: "8" },
    note: "Library of Congress Classification groups Spanish with Italian, Spanish, and Portuguese in PQ; Dewey Decimal Classification combines Spanish and Portuguese."
  },
  {
    subject: "Russian Literature",
    category: "Language & Literature",
    lcc: { code: "PG2900-3999", name: "Russian literature", parent: "PG" },
    ddc: { code: "891.7", name: "Russian literature", parent: "890" },
    udc: { code: "882", name: "Russian literature", parent: "8" },
    note: "Library of Congress Classification has PG for Slavic literatures; Dewey Decimal Classification places Russian under Other Literatures (890)."
  },
  {
    subject: "Poetry",
    category: "Language & Literature",
    lcc: { code: "PN1010-1550", name: "Poetry", parent: "PN" },
    ddc: { code: "808.1", name: "Poetry", parent: "800" },
    udc: { code: "82-1", name: "Poetry", parent: "8" },
    note: "Library of Congress Classification places poetry under Literature (General); Dewey Decimal Classification uses 808.1; Universal Decimal Classification uses auxiliary notation."
  },
  {
    subject: "Drama",
    category: "Language & Literature",
    lcc: { code: "PN1600-3300", name: "Drama. Theater", parent: "PN" },
    ddc: { code: "808.2", name: "Drama", parent: "800" },
    udc: { code: "82-2", name: "Drama", parent: "8" },
    note: "Similar to poetry, all systems provide classification for dramatic works."
  },

  // ===== ADDITIONAL TECHNOLOGY SUBJECTS =====
  {
    subject: "Computer Hardware",
    category: "Technology",
    lcc: { code: "TK7885-7895", name: "Computer engineering. Computer hardware", parent: "TK" },
    ddc: { code: "004.2", name: "Computer architecture and design", parent: "004" },
    udc: { code: "004.2", name: "Computer architecture & design", parent: "004" },
    note: "Library of Congress Classification places this under Electrical Engineering; the other systems under Computer Science."
  },
  {
    subject: "Database Systems",
    category: "Technology",
    lcc: { code: "QA76.9.D3", name: "Database management", parent: "QA75.5-76.95" },
    ddc: { code: "005.74", name: "Database management", parent: "005" },
    udc: { code: "005.74", name: "Database systems", parent: "005" },
    note: "All systems classify database systems under Computer Science, though the exact placement varies."
  },
  {
    subject: "Artificial Neural Networks",
    category: "Technology",
    lcc: { code: "QA76.87", name: "Neural computers. Neural networks", parent: "QA75.5-76.95" },
    ddc: { code: "006.32", name: "Neural networks", parent: "006.3" },
    udc: { code: "004.85", name: "Neural networks", parent: "004.8" },
    note: "As a subfield of AI, neural networks are classified under Computer Science in Dewey Decimal Classification and Universal Decimal Classification, but under Mathematics in Library of Congress Classification."
  },
  {
    subject: "Nanotechnology",
    category: "Technology",
    lcc: { code: "T174.7-618.97", name: "Nanotechnology", parent: "T" },
    ddc: { code: "620.5", name: "Nanotechnology", parent: "620" },
    udc: { code: "620.5", name: "Nanotechnology", parent: "62" },
    note: "An interdisciplinary field that Library of Congress Classification distributes across Technology; Dewey Decimal Classification and Universal Decimal Classification use decimal extensions."
  },
  {
    subject: "Biotechnology",
    category: "Technology",
    lcc: { code: "TP248.1-248.65", name: "Biotechnology", parent: "TP" },
    ddc: { code: "660.6", name: "Biochemical engineering. Biotechnology", parent: "660" },
    udc: { code: "606", name: "Biotechnology", parent: "6" },
    note: "Interdisciplinary field at the intersection of biology and technology; classification varies by system emphasis."
  },

  // ===== ADDITIONAL SOCIAL SCIENCES SUBJECTS =====
  {
    subject: "Anthropology",
    category: "Social Sciences",
    lcc: { code: "GN1-890", name: "Anthropology", parent: null },
    ddc: { code: "301", name: "Sociology & anthropology", parent: "300" },
    udc: { code: "39", name: "Ethnology. Anthropology. Prehistory", parent: "3" },
    note: "Library of Congress Classification gives Anthropology its own GN class; Dewey Decimal Classification combines it with Sociology."
  },
  {
    subject: "Demography",
    category: "Social Sciences",
    lcc: { code: "HB848-3697", name: "Demography. Population. Vital events", parent: "HB" },
    ddc: { code: "304.6", name: "Demography", parent: "304" },
    udc: { code: "314.1", name: "Demography. Population studies", parent: "314" },
    note: "Library of Congress Classification treats demography as part of Economics; Dewey Decimal Classification and Universal Decimal Classification have separate classifications."
  },
  {
    subject: "Urban Studies",
    category: "Social Sciences",
    lcc: { code: "HT101-859", name: "Urban planning. City planning", parent: "H" },
    ddc: { code: "307.76", name: "Urban sociology", parent: "307" },
    udc: { code: "304.444", name: "Urban studies", parent: "304" },
    note: "Interdisciplinary field that Library of Congress Classification places under Social Sciences (HT); Dewey Decimal Classification under Communities."
  },
  {
    subject: "Linguistics - Sociolinguistics",
    category: "Social Sciences",
    lcc: { code: "P40", name: "Sociolinguistics", parent: "P" },
    ddc: { code: "417", name: "Dialectology & historical linguistics", parent: "400" },
    udc: { code: "811.6", name: "Sociolinguistics", parent: "811" },
    note: "Library of Congress Classification uses P40; Dewey Decimal Classification uses 417; Universal Decimal Classification uses 811.6 - showing the structural differences in how language studies are organized."
  },
  {
    subject: "Cultural Anthropology",
    category: "Social Sciences",
    lcc: { code: "GN301-674", name: "Ethnology. Social and cultural anthropology", parent: "GN" },
    ddc: { code: "306", name: "Culture & institutions", parent: "300" },
    udc: { code: "39", name: "Ethnology. Anthropology", parent: "3" },
    note: "Shows the different organizational philosophies: Library of Congress Classification by discipline, Dewey Decimal Classification by cultural aspect, Universal Decimal Classification by ethnic/cultural group."
  },

  // ===== ADDITIONAL RELIGION SUBJECTS =====
  {
    subject: "Judaism",
    category: "Religion",
    lcc: { code: "BM1-990", name: "Judaism", parent: "BL" },
    ddc: { code: "296", name: "Judaism", parent: "200" },
    udc: { code: "28", name: "Jewish religion. Judaism", parent: "2" },
    note: "All systems provide dedicated classification for Judaism, though the placement varies (296 in Dewey Decimal Classification, 28 in Universal Decimal Classification)."
  },
  {
    subject: "Hindu Scriptures",
    category: "Religion",
    lcc: { code: "BL1110-1140", name: "Hindu scriptures", parent: "BL" },
    ddc: { code: "294.54", name: "Hindu sacred writings", parent: "200" },
    udc: { code: "294.53", name: "Hindu sacred books", parent: "2" },
    note: "Specific religious texts require granular classification that each system handles differently."
  },
  {
    subject: "Comparative Religion",
    category: "Religion",
    lcc: { code: "BL410-820", name: "Religions. History and principles of religions", parent: "BL" },
    ddc: { code: "200", name: "Religion", parent: null },
    udc: { code: "21", name: "Comparative religion. History of religion", parent: "2" },
    note: "Comparative studies are classified differently: Library of Congress Classification has dedicated BL ranges; Dewey Decimal Classification uses the main 200 class; Universal Decimal Classification uses 21."
  }
];

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CLASSIFICATION_DATA };
}
