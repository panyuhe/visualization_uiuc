var data = [
  {
    "Number": "MATH 220",
    "Name": "Calculus",
    "Required": [],
    "Recommended": [],
    "URL": "https://courses.illinois.edu/schedule/terms/MATH/220"
  },
  {
    "Number": "MATH 231",
    "Name": "Calculus II",
    "Required": ["MATH 220"],
    "Recommended": [],
    "URL": "https://courses.illinois.edu/schedule/terms/MATH/231"
  },
  {
    "Number": "MATH 241",
    "Name": "Calculus III",
    "Required": ["MATH 231"],
    "Recommended": [],
    "URL": "https://courses.illinois.edu/schedule/terms/MATH/241"
  },
  {
    "Number": "MATH 347",
    "Name": "Fundamental Mathematics",
    "Required": ["MATH 231"],
    "Recommended": [],
    "URL": "https://courses.illinois.edu/schedule/terms/MATH/347"
  },
  {
    "Number": "MATH 415",
    "Name": "Applied Linear Algebra",
    "Required": ["MATH 241"],
    "Recommended": [],
    "URL": "https://courses.illinois.edu/schedule/terms/MATH/415"
  },
  {
    "Number": "PHYS 211",
    "Name": "University Physics: Mechanics",
    "Required": [],
    "Recommended": ["MATH 231"],
    "URL": "https://courses.illinois.edu/schedule/terms/PHYS/211"
  },
  {
    "Number": "PHYS 212",
    "Name": "University Physics: Elec & Mag",
    "Required": ["PHYS 211"],
    "Recommended": ["MATH 241"],
    "URL": "https://courses.illinois.edu/schedule/terms/PHYS/212"
  },
  {
    "Number": "CS 101",
    "Name": "Intro Computing: Engrg & Sci",
    "Required": ["MATH 220"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS101"
  },
  {
    "Number": "CS 102",
    "Name": "Little Bits to Big Ideas",
    "Required": [],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS102"
  },
  {
    "Number": "CS 105",
    "Name": "Intro Computing: Non-Tech",
    "Required": [],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS105"
  },
  {
    "Number": "CS 125",
    "Name": "Intro to Computer Science",
    "Required": [],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS125"
  },
  {
    "Number": "CS 126",
    "Name": "Software Design Studio",
    "Required": ["CS 125"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS126"
  },
  {
    "Number": "CS 173",
    "Name": "Discrete Structures",
    "Required": ["MATH 220", "CS 125"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS173"
  },
  {
    "Number": "CS 196-25",
    "Name": "Freshman Honors (CS 125)",
    "Required": [],
    "Recommended": ["CS 125"],
    "URL": "https://cs.illinois.edu/courses/profile/CS196"
  },
  {
    "Number": "CS 196-73",
    "Name": "Freshman Honors (CS 173)",
    "Required": [],
    "Recommended": ["CS 173"],
    "URL": "https://cs.illinois.edu/courses/profile/CS196"
  },
  {
    "Number": "CS 199",
    "Name": "Undergraduate Open Seminar",
    "Required": [],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS199"
  },
  {
    "Number": "CS 210",
    "Name": "Ethics & Professional Issues",
    "Required": ["CS 225"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS210"
  },
  {
    "Number": "CS 225",
    "Name": "Data Structures",
    "Required": ["CS 125", "CS 173"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS225"
  },
  {
    "Number": "CS 233",
    "Name": "Computer Architecture",
    "Required": ["CS 125", "CS 173"],
    "Recommended": ["CS 225"],
    "URL": "https://cs.illinois.edu/courses/profile/CS233"
  },
  {
    "Number": "CS 241",
    "Name": "System Programming",
    "Required": ["CS 225"],
    "Recommended": ["CS 233"],
    "URL": "https://cs.illinois.edu/courses/profile/CS241"
  },
  {
    "Number": "CS 242",
    "Name": "Programming Studio",
    "Required": ["CS 241"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS242"
  },
  {
    "Number": "CS 296-25",
    "Name": "Honors Course (CS 225)",
    "Required": [],
    "Recommended": ["CS 225"],
    "URL": "https://cs.illinois.edu/courses/profile/CS296"
  },
  {
    "Number": "CS 296-33",
    "Name": "Honors Course (CS 233)",
    "Required": [],
    "Recommended": ["CS 233"],
    "URL": "https://cs.illinois.edu/courses/profile/CS296"
  },
  {
    "Number": "CS 296-41",
    "Name": "Honors Course (CS 241)",
    "Required": [],
    "Recommended": ["CS 241"],
    "URL": "https://cs.illinois.edu/courses/profile/CS296"
  },
  {
    "Number": "CS 357",
    "Name": "Numerical Methods I",
    "Required": ["CS 125", "MATH 415", "MATH 241"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS357"
  },
  {
    "Number": "CS 361",
    "Name": "Prob & Stat for Computer Sci",
    "Required": ["MATH 220"],
    "Recommended": ["MATH 415"],
    "URL": "https://cs.illinois.edu/courses/profile/CS361"
  },
  {
    "Number": "CS 374",
    "Name": "Intro to Algs & Models of Comp",
    "Required": ["CS 225", "MATH 415"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS374"
  },
  {
    "Number": "CS 410",
    "Name": "Text Information Systems",
    "Required": ["CS 225"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS410"
  },
  {
    "Number": "CS 411",
    "Name": "Database Systems",
    "Required": ["CS 225"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS411"
  },
  {
    "Number": "CS 412",
    "Name": "Intro to Data Mining",
    "Required": ["CS 225"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS412"
  },
  {
    "Number": "CS 413",
    "Name": "Intro to Combinatorics",
    "Required": ["MATH 347"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS413"
  },
  {
    "Number": "CS 418",
    "Name": "Interactive Computer Graphics",
    "Required": ["CS 225", "MATH 241", "MATH 415"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS418"
  },
  {
    "Number": "CS 419",
    "Name": "Production Computer Graphics",
    "Required": ["CS 418"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS419"
  },
  {
    "Number": "CS 421",
    "Name": "Programming Languages & Compilers",
    "Required": ["CS 233", "CS 374"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS421"
  },
  {
    "Number": "CS 422",
    "Name": "Programming Language Design",
    "Required": ["CS 421"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS422"
  },
  {
    "Number": "CS 423",
    "Name": "Operating Systems Design",
    "Required": ["CS 241"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS423"
  },
  {
    "Number": "CS 425",
    "Name": "Distributed Systems",
    "Required": ["CS 241"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS425"
  },
  {
    "Number": "CS 427",
    "Name": "Software Engineering I",
    "Required": ["CS 225", "CS 374"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS427"
  },
  {
    "Number": "CS 428",
    "Name": "Software Engineering II",
    "Required": ["CS 427"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS428"
  },
  {
    "Number": "CS 429",
    "Name": "Software Engineering II, ACP",
    "Required": ["CS 427"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS429"
  },
  {
    "Number": "CS 431",
    "Name": "Embedded Systems",
    "Required": ["CS 241"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS431"
  },
  {
    "Number": "CS 433",
    "Name": "Computer System Organization",
    "Required": ["CS 233"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS433"
  },
  {
    "Number": "CS 438",
    "Name": "Communication Networks",
    "Required": ["CS 241"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS438"
  },
  {
    "Number": "CS 440",
    "Name": "Artificial Intelligence",
    "Required": ["CS 225"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS440"
  },
  {
    "Number": "CS 446",
    "Name": "Machine Learning",
    "Required": ["CS 374", "CS 440"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS446"
  },
  {
    "Number": "CS 450",
    "Name": "Numerical Analysis",
    "Required": ["CS 125", "CS 357", "MATH 415"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS450"
  },
  {
    "Number": "CS 460",
    "Name": "Security Laboratory",
    "Required": ["CS 461"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS460"
  },
  {
    "Number": "CS 461",
    "Name": "Computer Security I",
    "Required": ["CS 241"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS461"
  },
  {
    "Number": "CS 463",
    "Name": "Computer Security II",
    "Required": ["CS 461"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS463"
  },
  {
    "Number": "CS 465",
    "Name": "User Interface Design",
    "Required": ["CS 225"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS465"
  },
  {
    "Number": "CS 466",
    "Name": "Introduction to Bioinformatics",
    "Required": ["CS 225"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS466"
  },
  {
    "Number": "CS 482",
    "Name": "Simulation",
    "Required": ["CS 125"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS482"
  },
  {
    "Number": "CS 484",
    "Name": "Parallel Programming",
    "Required": ["CS 241"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS484"
  },
  {
    "Number": "CS 491",
    "Name": "Adv Competitive Algorithm Prog",
    "Required": ["CS 374"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS491"
  },
  {
    "Number": "CS 492",
    "Name": "Senior Project I",
    "Required": [],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS492"
  },
  {
    "Number": "CS 493",
    "Name": "Senior Project II, ACP",
    "Required": ["CS 492"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS493"
  },
  {
    "Number": "CS 494",
    "Name": "Senior Project II",
    "Required": ["CS 492"],
    "Recommended": [],
    "URL": "https://cs.illinois.edu/courses/profile/CS494"
  }
];
