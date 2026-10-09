import "./Publications.css";

const minimumPublications = [
    [
        1,
        "An Efficient Deep Learning Framework for Accurate Disease Classification",
        "Aruna Kokkula, P. Chandra Sekhar",
        "Journal of Machine and Computing",
        "2788-7669",
        "Scopus: —; UGC Care List: —; Peer Reviewed: —",
        "N/A",
        "2025-26",
        "View"
    ],
    [
        2,
        "Brain Haemorrhage Analysis Using Deep Learning",
        "Aruna Kokkula, P. Chandra Sekhar",
        "Journal of Soft Computing",
        "2229-6956",
        "Peer Reviewed: —",
        "N/A",
        "2025-26",
        "View"
    ],
    [
        3,
        "Design and Implementation of Road Rutting Detection using MAnet with Efficientb0 Architecture",
        "Radhika Kondam, P. Chandrasekhar, Pradeep Kumar Boya",
        "Journal of Information Systems Engineering and Management",
        "2468-4376",
        "Scopus: —; UGC Care List: —; Peer Reviewed: —",
        "N/A",
        "2025-26",
        "View"
    ],
    [
        4,
        "Low Power SoC based Road Surface Crack Segmentation using Unet with Efficientb0 Architecture",
        "Radhika Kondam, P. Chandrasekhar, Pradeep Kumar Boya",
        "Journal of VLSI Circuits and Systems",
        "2582-1458",
        "Scopus: —; Web of Science: —; UGC Care List: —; Peer Reviewed: —",
        "N/A",
        "2024-25",
        "View"
    ],
    [
        5,
        "FPGA Based Implementation and Verification of Hybrid Security Algorithm for NoC Architecture",
        "T. Nagalaxmi, E. Sreenivasa Rao, P. Chandra Sekhar",
        "Analog Integrated Circuits and Signal Processing",
        "0925-1030 (P) / 1573-1979 (O)",
        "Scopus: —; Web of Science: —; UGC Care List: —; Peer Reviewed: —",
        "1.8 (2025 JCR)",
        "2024-25",
        "View"
    ],
    [
        6,
        "Development of Low Power GNSS Correlator in Zynq SoC for GPS and GLONASS",
        "Arunalatha Botla, Chandrasekhar Paidimarry",
        "Journal of VLSI circuits and systems",
        "2582-1458",
        "Scopus: —; Web of Science: —; UGC Care List: —; Peer Reviewed: —",
        "0.482",
        "2024-25",
        "View"
    ],
    [
        7,
        "Low Power System on Chip Implementation of Adaptive Intraframe and Hierarchical Motion Estimation in H.265",
        "T M Praneeth Naidu, P. Chandra Sekhar, Pradeep Kumar Boya",
        "Journal of VLSI Circuits and Systems",
        "2582-1458",
        "Scopus: —; Web of Science: —; UGC Care List: —; Peer Reviewed: —",
        "0.482",
        "2024-25",
        "View"
    ],
    [
        8,
        "Modified VGG-19 Deep Learning Strategies for Parkinson's Disease Diagnosis - A Comprehensive Review and Novel Approach",
        "Aruna Kokkula, P. Chandra Sekhar, T M Praneeth Naidu",
        "Journal of ANGIOTHERAPY",
        "2207-8843 (P) / 2207-872X (O)",
        "Scopus: —; UGC Care List: —; Peer Reviewed: —",
        "0.6",
        "2024-25",
        "View"
    ],
    [
        9,
        "Design and Develop Low-Power Memory Controller for Gain Cell-Embedded Dynamic Random-Access Memory Cell using Intelligent Clock Gating",
        "Chintam Shravan, Kaleem Fatima, Chandra Sekhar Paidimarry",
        "Telecommunications and Radio Engineering",
        "0040-2508 (P) / 1943-6009 (O)",
        "Scopus: —; Web of Science: —; UGC Care List: —; Peer Reviewed: —",
        "0.87",
        "2024-25",
        "View"
    ],
    [
        10,
        "A 1.2 GHz Frequency Range, 153.4 dBc/Hz FoM, Low Phase Noise, Current Starved Multi-Path Ring VCO",
        "Mohd Ziauddin Jahangir, Chandra Sekhar Paidimarry",
        "Journal of Integrated Circuits and Systems",
        "1807-1953 (P) / 1872-0234 (O)",
        "Scopus: —; UGC Care List: —; Peer Reviewed: —",
        "0.482",
        "2023-24",
        "View"
    ],
    [
        11,
        "A Fast-Dehazing Technique using Generative Adversarial Network Model for Illumination Adjustment in Hazy Videos",
        "T M Praneeth Naidu",
        "Journal of Scientific & Industrial Research (CSIR-NIScPR)",
        "0022-4456 (P) / 0975-1084 (O)",
        "Scopus: —; Web of Science: —; UGC Care List: —",
        "0.7",
        "2023-24",
        "View"
    ],
    [
        12,
        "Power Optimization for Multi-Core Memory Controller Using Intelligent Clock Gating Technique",
        "Ahmed Noami, B. Pradeep Kumar, P. Chandrasekhar",
        "Journal of Electrical and Electronics Engineering",
        "1844-6035 (Print) / 2067-2128 (Online)",
        "Scopus: —; UGC Care List: —; Peer Reviewed: —",
        "0.6",
        "2022-23",
        "View"
    ],
    [
        13,
        "High Priority Arbitration for Less Burst Data Transactions for Improved Average Waiting Time of Multi-Processor Cores",
        "Ahmed Noami, B. Pradeep Kumar, P. Chandrasekhar",
        "Applied Science and Engineering Progress",
        "2672-9156 (P) / 2673-0421 (O)",
        "Scopus: —; UGC Care List: —; Peer Reviewed: —",
        "N/A",
        "2021-22",
        "View"
    ],
    [
        14,
        "Design and Implementation of a United Multi-Core Memory Controller using AXI4-Lite Interface Protocol",
        "Ahmed Noami, B. Pradeep Kumar, P. Chandrasekhar",
        "International Journal on Emerging Technologies",
        "0975-8364 (P) / 2249-3255 (O)",
        "Scopus: —; UGC Care List: —; Peer Reviewed: —",
        "N/A",
        "2020-21",
        "View"
    ],
    [
        15,
        "Analysis of Hybrid PAPR Reduction Methods of OFDM Signal for HPA Models in Wireless Communications",
        "Sravanthi Thota, Yedukondalu, P. Chandra Sekhar Paidimarry",
        "IEEE Access",
        "2169-3536",
        "Scopus: —; Web of Science: —; UGC Care List: —; Peer Reviewed: —",
        "3.367",
        "2020-21",
        "View"
    ],
    [
        16,
        "An Improved Real Time GPS RF Data Capturing for GNSS SDR Applications",
        "B. Pradeep Kumar, P. Chandra Sekhar",
        "Journal of Gyroscopy and Navigation (Springer)",
        "2075-1087 (P) / 2075-1109 (O)",
        "Scopus: —; UGC Care List: —; Peer Reviewed: —",
        "1.6",
        "2020-21",
        "View"
    ],
    [
        17,
        "Crosstalk and Delay Analysis of a CMOS-Gate Driven Coupled Interconnects in Sub-threshold Conduction",
        "B Hari Prasad Naik, P. Chandra Sekhar",
        "IJETAE",
        "2250-2459",
        "Scopus: —",
        "7.127",
        "2017-18",
        "View"
    ],
    [
        18,
        "An FTDD Scheme for the Reduction of EM Radiation based on Asymmetric UL-DL in Hetnets",
        "VRK Sharma, P. Chandra Sekhar",
        "European Journal of Scientific Research",
        "1450-216X (P) / 1450-202X (O)",
        "Scopus: —; UGC Care List: —; Peer Reviewed: —",
        "0.713",
        "2015-16",
        "View"
    ],
    [
        19,
        "Computationally Efficient Analytical Crosstalk Noise Model for RC Interconnects",
        "P. Chandrasekhar, Rameshwar Rao",
        "Journal of Mathematical Methods and Models in Applied Science",
        "1998-0140",
        "Scopus: —",
        "2.86",
        "2007-08",
        "View"
    ]
];

const activityOne = [
    [
        1,
        "An Efficient Deep Learning Framework for Accurate Disease Classification",
        "Aruna Kokkula, P. Chandra Sekhar",
        "Journal of Machine and Computing",
        "2788-7669",
        "Scopus: —; UGC Care List: —; Peer Reviewed: —",
        "N/A",
        "2025-26"
    ],
    [
        2,
        "Brain Haemorrhage Analysis Using Deep Learning",
        "Aruna Kokkula, P. Chandra Sekhar",
        "Journal of Soft Computing",
        "2229-6956",
        "Peer Reviewed: —",
        "N/A",
        "2025-26"
    ],
    [
        3,
        "Design and Implementation of Road Rutting Detection using MAnet with Efficientb0 Architecture",
        "Radhika Kondam, P. Chandrasekhar, Pradeep Kumar Boya",
        "Journal of Information Systems Engineering and Management",
        "2468-4376",
        "Scopus: —; UGC Care List: —; Peer Reviewed: —",
        "N/A",
        "2025-26"
    ],
    [
        4,
        "Low Power SoC based Road Surface Crack Segmentation using Unet with Efficientb0 Architecture",
        "Radhika Kondam, P. Chandrasekhar, Pradeep Kumar Boya",
        "Journal of VLSI Circuits and Systems",
        "2582-1458",
        "Scopus: —; Web of Science: —; UGC Care List: —; Peer Reviewed: —",
        "N/A",
        "2024-25"
    ],
    [
        5,
        "FPGA Based Implementation and Verification of Hybrid Security Algorithm for NoC Architecture",
        "T. Nagalaxmi, E. Sreenivasa Rao, P. Chandra Sekhar",
        "Analog Integrated Circuits and Signal Processing",
        "0925-1030 (P) / 1573-1979 (O)",
        "Scopus: —; Web of Science: —; UGC Care List: —; Peer Reviewed: —",
        "1.8 (2025 JCR)",
        "2024-25"
    ],
    [
        6,
        "Development of Low Power GNSS Correlator in Zynq SoC for GPS and GLONASS",
        "Arunalatha Botla, Chandrasekhar Paidimarry",
        "Journal of VLSI circuits and systems",
        "2582-1458",
        "Scopus: —; Web of Science: —; UGC Care List: —; Peer Reviewed: —",
        "0.482",
        "2024-25"
    ],
    [
        7,
        "Low Power System on Chip Implementation of Adaptive Intraframe and Hierarchical Motion Estimation in H.265",
        "T M Praneeth Naidu, P. Chandra Sekhar, Pradeep Kumar Boya",
        "Journal of VLSI Circuits and Systems",
        "2582-1458",
        "Scopus: —; Web of Science: —; UGC Care List: —; Peer Reviewed: —",
        "0.482",
        "2024-25"
    ],
    [
        8,
        "Modified VGG-19 Deep Learning Strategies for Parkinson's Disease Diagnosis - A Comprehensive Review and Novel Approach",
        "Aruna Kokkula, P. Chandra Sekhar, T M Praneeth Naidu",
        "Journal of ANGIOTHERAPY",
        "2207-8843 (P) / 2207-872X (O)",
        "Scopus: —; UGC Care List: —; Peer Reviewed: —",
        "0.6",
        "2024-25"
    ],
    [
        9,
        "Design and Develop Low-Power Memory Controller for Gain Cell-Embedded Dynamic Random-Access Memory Cell using Intelligent Clock Gating",
        "Chintam Shravan, Kaleem Fatima, Chandra Sekhar Paidimarry",
        "Telecommunications and Radio Engineering",
        "0040-2508 (P) / 1943-6009 (O)",
        "Scopus: —; Web of Science: —; UGC Care List: —; Peer Reviewed: —",
        "0.87",
        "2024-25"
    ],
    [
        10,
        "A 1.2 GHz Frequency Range, 153.4 dBc/Hz FoM, Low Phase Noise, Current Starved Multi-Path Ring VCO",
        "Mohd Ziauddin Jahangir, Chandra Sekhar Paidimarry",
        "Journal of Integrated Circuits and Systems",
        "1807-1953 (P) / 1872-0234 (O)",
        "Scopus: —; UGC Care List: —; Peer Reviewed: —",
        "0.482",
        "2023-24"
    ],
    [
        11,
        "A Fast-Dehazing Technique using Generative Adversarial Network Model for Illumination Adjustment in Hazy Videos",
        "T M Praneeth Naidu",
        "Journal of Scientific & Industrial Research (CSIR-NIScPR)",
        "0022-4456 (P) / 0975-1084 (O)",
        "Scopus: —; Web of Science: —; UGC Care List: —",
        "0.7",
        "2023-24"
    ],
    [
        12,
        "Power Optimization for Multi-Core Memory Controller Using Intelligent Clock Gating Technique",
        "Ahmed Noami, B. Pradeep Kumar, P. Chandrasekhar",
        "Journal of Electrical and Electronics Engineering",
        "1844-6035 (Print) / 2067-2128 (Online)",
        "Scopus: —; UGC Care List: —; Peer Reviewed: —",
        "0.6",
        "2022-23"
    ],
    [
        13,
        "High Priority Arbitration for Less Burst Data Transactions for Improved Average Waiting Time of Multi-Processor Cores",
        "Ahmed Noami, B. Pradeep Kumar, P. Chandrasekhar",
        "Applied Science and Engineering Progress",
        "2672-9156 (P) / 2673-0421 (O)",
        "Scopus: —; UGC Care List: —; Peer Reviewed: —",
        "N/A",
        "2021-22"
    ],
    [
        14,
        "Design and Implementation of a United Multi-Core Memory Controller using AXI4-Lite Interface Protocol",
        "Ahmed Noami, B. Pradeep Kumar, P. Chandrasekhar",
        "International Journal on Emerging Technologies",
        "0975-8364 (P) / 2249-3255 (O)",
        "Scopus: —; UGC Care List: —; Peer Reviewed: —",
        "N/A",
        "2020-21"
    ],
    [
        15,
        "Analysis of Hybrid PAPR Reduction Methods of OFDM Signal for HPA Models in Wireless Communications",
        "Sravanthi Thota, Yedukondalu, P. Chandra Sekhar Paidimarry",
        "IEEE Access",
        "2169-3536",
        "Scopus: —; Web of Science: —; UGC Care List: —; Peer Reviewed: —",
        "3.367",
        "2020-21"
    ],
    [
        16,
        "An Improved Real Time GPS RF Data Capturing for GNSS SDR Applications",
        "B. Pradeep Kumar, P. Chandra Sekhar",
        "Journal of Gyroscopy and Navigation (Springer)",
        "2075-1087 (P) / 2075-1109 (O)",
        "Scopus: —; UGC Care List: —; Peer Reviewed: —",
        "1.6",
        "2020-21"
    ],
    [
        17,
        "Crosstalk and Delay Analysis of a CMOS-Gate Driven Coupled Interconnects in Sub-threshold Conduction",
        "B Hari Prasad Naik, P. Chandra Sekhar",
        "IJETAE",
        "2250-2459",
        "Scopus: —",
        "7.127",
        "2017-18"
    ],
    [
        18,
        "An FTDD Scheme for the Reduction of EM Radiation based on Asymmetric UL-DL in Hetnets",
        "VRK Sharma, P. Chandra Sekhar",
        "European Journal of Scientific Research",
        "1450-216X (P) / 1450-202X (O)",
        "Scopus: —; UGC Care List: —; Peer Reviewed: —",
        "0.713",
        "2015-16"
    ],
    [
        19,
        "Design and Implementation of a United Multi-Core Memory Controller using AXI4 Lite Interface Protocol",
        "Ahmed Noami1, B. Pradeep Kumar1 and P. Chandrasekhar2",
        "International Journal on Emerging Technologies",
        "0975-8364",
        "Scopus: —; UGC Care List: —; Peer Reviewed: —",
        "N/A",
        "2019-20"
    ]
];

const activityTwo = [
    [
        1,
        "Book Chapter",
        "12th International Conference on Frontiers of Intelligent Computing: Theory and Applications (FICTA-2024)",
        "Road Surface Crack Detection using Modified ResNet Deep Learning Model",
        "Radhika Kondam, P. Chandra Sekhar",
        "2024",
        "International (Abroad)",
        "2024-25"
    ],
    [
        2,
        "Book Chapter",
        "12th International Conference on Frontiers of Intelligent Computing: Theory and Applications (FICTA-2024)",
        "Detection of Alzheimer's Disease from Brain MRI Images using DenseNet Deep Learning",
        "Aruna Kokkula, P. Chandra Sekhar",
        "2024",
        "International (Abroad)",
        "2024-25"
    ],
    [
        3,
        "Book Chapter",
        "12th International Conference on Frontiers of Intelligent Computing: Theory and Applications (FICTA-2024)",
        "Crowd Counting using Mask R-CNN Inception ResNet V2 Deep Learning Model",
        "T.M. Praneeth Naidu, P. Chandra Sekhar",
        "2024",
        "International (Abroad)",
        "2024-25"
    ],
    [
        4,
        "Book Chapter",
        "Lecture Notes in Springer – Proceedings of the Second International Conference on Emerging Trends in Engineering",
        "Study and Performance Comparison of Coupled Ring Oscillator",
        "Shirisha Pendyala, Mohd Ziauddin Jahangir, Chandra Sekhar Paidimarry",
        "2023",
        "International",
        "2023-24"
    ],
    [
        5,
        "Book Chapter",
        "Lecture Notes on Data Engineering and Communications Technologies (LNDECT Vol. 56)",
        "Learning-Based Image Registration Approach Using View Synthesis Framework (LIRVS)",
        "Sirisha B, B. Sandhya, J. Prasanna Kumar, P. Chandra Sekhar",
        "2020",
        "International (within country)",
        "2019-20"
    ],
    [
        6,
        "Book Chapter",
        "Lecture Notes in Electrical Engineering (LNEE Vol. 453)",
        "Analysis of Electromagnetic Wave Using Explicit FDTD in TM Mode with Extrapolation",
        "Hariprasad Naik Bhattu, P. Chandra Sekhar",
        "2017",
        "National",
        "2017-18"
    ],
    [
        7,
        "Book Chapter",
        "Lecture Notes in Electrical Engineering (LNEE Vol. 416)",
        "A Novel Implementation of FPGA Based Finite Difference Time Domain (FDTD) Technique for Two Dimensional Objects",
        "G. S. Rao, Karthik Reddy, B. Pradeep Kumar, P. Chandra Sekhar",
        "2017",
        "National",
        "2016-17"
    ],
    [
        8,
        "Book Chapter",
        "Lecture Notes on Data Engineering and Communications Technologies (Vol. 63)",
        "Comparison of PAPR in OFDM and FBMC/OQAM Using PAPR Reduction Methods",
        "Sravanthi Thota, Yedukondalu K, P. Chandra Sekhar",
        "2021",
        "National",
        "2021-22"
    ],
    [
        9,
        "Book Chapter",
        "Lecture Notes on Analytics in Intelligent Systems (Vol. 4)",
        "Reduced Complexity Hybrid PAPR Reduction Schemes for Future Broadcasting Systems",
        "Sravanthi Thota, Yedukondalu K, P. Chandra Sekhar",
        "2019",
        "National",
        "2018-19"
    ],
    [
        10,
        "Book Chapter",
        "Lecture Notes on Data Engineering and Communications Technologies (LNDECT Vol. 63)",
        "High Performance AXI4 Interface Protocol for Multi-Core Memory Controller on SoC",
        "Ahmed Noami, B. Pradeep Kumar, P. Chandrasekhar",
        "2021",
        "National",
        "2021-22"
    ],
    [
        11,
        "Book Chapter",
        "Advances in Decision Sciences, Image Processing, Security and Computer Vision",
        "Early Stage Squamous Cell Lung Cancer Detection",
        "Kuchulakanti Harish, Chandrasekhar Paidimarry",
        "2019",
        "National",
        "2018-19"
    ],
    [
        12,
        "Book",
        "Lecture Notes in Electrical Engineering – Advances in Signal Processing and Communication Engineering (Springer Nature, Vol. 929)",
        "Design of an All Digital Phase-Locked Loop Using Cordic Algorithm",
        "Jahangir Mohd Ziauddin, Chandrasekhar Paidimarry",
        "2022",
        "International",
        "2022-23"
    ]
];

const researchGuidance = [
    [
        1,
        "KONDAM RADHIKA",
        "INDIGENOUS ROAD PAVEMENT DISTRESS DETECTION ALGORITHMS ON SOC",
        "Ph.D.",
        "Awarded",
        "2026",
        "2026-27"
    ],
    [
        2,
        "T M Praneeth Naidu",
        "Design and Development of Smart Video Surveillance Algorithms using Deep Learning in SoC",
        "Ph.D.",
        "Awarded",
        "2025",
        "2018-19"
    ],
    [
        3,
        "Sneha Talari",
        "Metamaterial Inspired Filtering Antenna Using Finite Difference Time Domain Technique for 5G Applications",
        "Ph.D.",
        "Awarded",
        "2025",
        "2018-19"
    ],
    [
        4,
        "Spandana K",
        "FPGA Implementation of Low Power ADPLL",
        "Ph.D.",
        "Awarded",
        "2025",
        "2017-18"
    ],
    [
        5,
        "ShyamKishor G",
        "Deep Learning based Channel Estimation Algorithms for MIMO-Filtered OFDM System",
        "Ph.D.",
        "Awarded",
        "2025",
        "2017-18"
    ],
    [
        6,
        "Mohd Ziauddin Jahangir",
        "High Resolution and Low Jitter Full custom ADPLL Architectures for Frequency Synthesizer IP",
        "Ph.D.",
        "Awarded",
        "2024",
        "2024-25"
    ],
    [
        7,
        "Ahmed Noami",
        "An Efficient Memory Controller for Multi-Core Processors in System-on-Chip",
        "Ph.D.",
        "Awarded",
        "2023",
        "2023-24"
    ],
    [
        8,
        "T Abhishek",
        "FPGA Based Digital Beam forming Techniques",
        "Ph.D.",
        "Awarded",
        "2023",
        "2022-23"
    ],
    [
        9,
        "K Harish",
        "A Novel Pulmonary Nodule Detection and Classification Framework using Statistical and Machine Learning Methods",
        "Ph.D.",
        "Awarded",
        "2023",
        "2022-23"
    ],
    [
        10,
        "B Pradeep Kumar",
        "IP core development of GNSS Software Defined Radio: Base-band Algorithms using reconfigurable architectures in FPGA",
        "Ph.D.",
        "Awarded",
        "2023",
        "2023-24"
    ],
    [
        11,
        "Hari Prasad Naik",
        "Modelling of On-chip VLSI Interconnects for Signal Integrity Analysis",
        "Ph.D.",
        "Awarded",
        "2019",
        "2019-20"
    ],
    [
        12,
        "N Kurumurthy",
        "Efficient Hybrid Conformal FDTD Techniques to the Analysis of Circular Patch Antennas",
        "Ph.D.",
        "Awarded",
        "2020",
        "2020-21"
    ],
    [
        13,
        "Sravanthi Thota",
        "Investigation of PAPR Mitigation in OFDM System using Hybrid Methods for Wireless Communication",
        "Ph.D.",
        "Awarded",
        "2022",
        "2022-23"
    ],
    [
        14,
        "Ch Sridevi",
        "Universal Verification Methodology for Communication IP Cores with Reusable Feature",
        "Ph.D.",
        "Awarded",
        "2020",
        "2020-21"
    ],
    [
        15,
        "S Rajender",
        "Analysis & Optimization of On-Chip Interconnect Performance Metrics for Driver-Interconnect-Load Systems",
        "Ph.D.",
        "Awarded",
        "2021",
        "2021-22"
    ],
    [
        16,
        "VRK Sarma",
        "Investigative Studies on Providing Solutions for the Asymmetric Characteristics of Mobile Communication Systems based on EM Radiations",
        "Ph.D.",
        "Awarded",
        "2022",
        "2021-22"
    ],
    [
        17,
        "R Sridevi",
        "Detection and Reduction of Cross-Talk Noise in VLSI Interconnects",
        "Ph.D.",
        "Awarded",
        "2022",
        "2022-23"
    ],
    [
        18,
        "M Ramana Reddy",
        "Design and Analysis of CMOS Low Noise Amplifier Topologies in Receiver Front-end for 4GWIMAX Systems",
        "Ph.D.",
        "Awarded",
        "2019",
        "2019-20"
    ],
    [
        19,
        "P Kalyani",
        "Adaptive Forward and Reverse Body Biasing Techniques for Sub-threshold Circuits",
        "Ph.D.",
        "Awarded",
        "2020",
        "2020-21"
    ],
    [
        20,
        "B Sireesha",
        "Automated Registration of Multi-angle SAR Images Using Adaptive View Synthesis Framework",
        "Ph.D.",
        "Awarded",
        "2020",
        "2020-21"
    ],
    [
        21,
        "B Arunalatha",
        "Development of Low Power GNSS Correlator for Real Time Software Defined Receiver",
        "Ph.D.",
        "Awarded",
        "2025",
        "2024-25"
    ],
    [
        22,
        "B Devender",
        "Design and development of Pulse Doppler Radar models using FPGA and Matlab tools",
        "Ph.D.",
        "Awarded",
        "2024",
        "2023-24"
    ],
    [
        23,
        "B Upender Rao",
        "Investigations on Applications of Defected Ground Structure in Microstrip Patch Antennas",
        "Ph.D.",
        "Awarded",
        "2025",
        "2024-25"
    ],
    [
        24,
        "Ch Praveen Kumar",
        "Crosstalk Induced Effects and Performance Analysis of On Chip VLSI Interconnects",
        "Ph.D.",
        "Awarded",
        "2023",
        "2022-23"
    ],
    [
        25,
        "Ch Shravan",
        "Performance Optimization of GC-eDRAM Memory Controller in Multi-Processor SoC",
        "Ph.D.",
        "Awarded",
        "2025",
        "2024-25"
    ],
    [
        26,
        "G Ramesh",
        "Optimization of Power Dissipation in VLSI Circuits using Modified Lector Approach and Dual Threshold Method",
        "Ph.D.",
        "Awarded",
        "2024",
        "2024-25"
    ],
    [
        27,
        "M Srinu",
        "Performance Analysis of Novel SRAM Architectures.",
        "Ph.D.",
        "Awarded",
        "2025",
        "2025-26"
    ],
    [
        28,
        "T Naga Laxmi",
        "Design and Performance Analysis of Low Latency based Network-on-Chip Architecture for Multiprocessor System-on-Chip",
        "Ph.D.",
        "Awarded",
        "2025",
        "2024-25"
    ],
    [
        29,
        "T Sanjeev Kumar",
        "Analysis and Efficient detection of Moving objects in Aerial imagery using Moment based feature extraction",
        "Ph.D.",
        "Awarded",
        "2025",
        "2024-25"
    ],
    [
        30,
        "Md Toufeeq Ahmed",
        "—",
        "Ph.D.",
        "Ongoing",
        "—",
        "2022-23"
    ],
    [
        31,
        "M Shivani",
        "—",
        "Ph.D.",
        "Ongoing",
        "—",
        "2025-26"
    ],
    [
        32,
        "Pricilla Vasanthi",
        "—",
        "Ph.D.",
        "Ongoing",
        "—",
        "2025-26"
    ],
    [
        33,
        "Haneef Shaik",
        "—",
        "Ph.D.",
        "Ongoing",
        "—",
        "2025-26"
    ],
    [
        34,
        "B. Pradeep Kumar",
        "IP core development of GNSS Software Defined Radio: Base-band Algorithms using reconfigurable architectures in FPGA",
        "Ph.D.",
        "Awarded",
        "2021",
        "2015-16"
    ],
    [
        35,
        "B. Hari Prasad Naik",
        "Modelling of On-chip VLSI Interconnects for Signal Integrity Analysis",
        "Ph.D.",
        "Awarded",
        "2019",
        "2016-17"
    ]
];

const ugPgProjects = [
    [
        1,
        "B. Madhavi",
        "Sentence Embedding Natural Language Processing",
        "PG Dissertation",
        "Awarded",
        "2024",
        "2024-25"
    ],
    [
        2,
        "D. Chandu",
        "A Crop Suggesting System based on Soil Nutrition",
        "PG Dissertation",
        "Awarded",
        "2024",
        "2024-25"
    ],
    [
        3,
        "T. Navya",
        "Moving Object Detection and Tracking Using Modified YOLO architecture",
        "PG Dissertation",
        "Awarded",
        "2024",
        "2024-25"
    ],
    [
        4,
        "G. Vaishnavi",
        "TESTING APPROACHES FOR CRITICAL MEDICAL EMBEDDED SYSTEMS USED IN SURGICAL ROBOTICS",
        "PG Dissertation",
        "Awarded",
        "2024",
        "2024-25"
    ],
    [
        5,
        "A.Shashidhar",
        "A NOVEL APPROACH TO PROVIDE PROTECTION FOR WOMEN BY USING SMART SECURITY DEVICE",
        "PG Dissertation",
        "Awarded",
        "2024",
        "2024-25"
    ],
    [
        6,
        "T.Shashikalyan",
        "Power Optimization Using upf(unified power format) Generation",
        "PG Dissertation",
        "Awarded",
        "2023",
        "2023-24"
    ],
    [
        7,
        "D. Manoj Kumar",
        "Water Quality Check Using IOT",
        "PG Dissertation",
        "Awarded",
        "2023",
        "2023-24"
    ],
    [
        8,
        "M.Srivani",
        "Presilicon Verification Of DDR PHY",
        "PG Dissertation",
        "Awarded",
        "2022",
        "2022-23"
    ],
    [
        9,
        "Ajay Kumar Goyal",
        "System To Overlay data from multi sensors Elements on videofeed",
        "PG Dissertation",
        "Awarded",
        "2022",
        "2022-23"
    ],
    [
        10,
        "A.Gogula Krishnan",
        "Performance of On-chip IP module",
        "PG Dissertation",
        "Awarded",
        "2022",
        "2022-23"
    ],
    [
        11,
        "A.Sai Charan",
        "Design of a chaific oscillator RKY Netuand",
        "PG Dissertation",
        "Awarded",
        "2022",
        "2022-23"
    ],
    [
        12,
        "M.Sai Charan Kumar",
        "Performance analysis of modified gate diffusion input technique",
        "PG Dissertation",
        "Awarded",
        "2022",
        "2022-23"
    ],
    [
        13,
        "M.Sneha",
        "IOT Based Health Monitoring System",
        "PG Dissertation",
        "Awarded",
        "2022",
        "2022-23"
    ],
    [
        14,
        "A.Rohini",
        "Design Router 1X3 Packing Switching Frame",
        "PG Dissertation",
        "Awarded",
        "2022",
        "2022-23"
    ],
    [
        15,
        "CH.Saikrishna",
        "Performance analysis of modified gate diffusion input technique",
        "PG Dissertation",
        "Awarded",
        "2021",
        "2020-21"
    ],
    [
        16,
        "P.Rakesh",
        "Design and Implementation of Band GAP Reference",
        "PG Dissertation",
        "Awarded",
        "2021",
        "2021-22"
    ],
    [
        17,
        "N. Indu",
        "Design of Chaotic Oscillator for RKYN",
        "PG Dissertation",
        "Awarded",
        "2019",
        "2019-20"
    ],
    [
        18,
        "P.Ravi",
        "DFT Driven Physical Design Implementation and EM Signal Convergence",
        "PG Dissertation",
        "Awarded",
        "2019",
        "2019-20"
    ],
    [
        19,
        "M.Jeevan Kumar",
        "Implementation of Blowfish algorithm of FPGA for increasing security and Improved Performance",
        "PG Dissertation",
        "Awarded",
        "2019",
        "2019-20"
    ],
    [
        20,
        "Sai Prasad Shukla",
        "Design and Simulation of modified Fast binary counter based on symmetric stackey",
        "PG Dissertation",
        "Awarded",
        "2020",
        "2020-21"
    ],
    [
        21,
        "Rampa Samuel",
        "FPGA based peak detection of ECG signal using Histogram Approach",
        "PG Dissertation",
        "Awarded",
        "2020",
        "2020-21"
    ],
    [
        22,
        "P.Paramesh",
        "—",
        "PG Dissertation",
        "Ongoing",
        "—",
        "2026-27"
    ],
    [
        23,
        "J. Vinod Kuar",
        "Implementation and Analysis of True and Pseudo MultiPort SRAM Architectures for Modern SoCs",
        "PG Dissertation",
        "Ongoing",
        "—",
        "2026-27"
    ],
    [
        24,
        "A.Deepika",
        "ASIC Implementation of DLPF",
        "PG Dissertation",
        "Awarded",
        "2025",
        "2025-26"
    ],
    [
        25,
        "K.Lathasri",
        "Design and Analysis Telescopic Amplifies Based Comparator for ADC's Applications",
        "PG Dissertation",
        "Awarded",
        "2025",
        "2025-26"
    ],
    [
        26,
        "Narendula Amani",
        "Fog Assisted Health Care Support system for remote patients with Diabetes",
        "PG Dissertation",
        "Awarded",
        "2022",
        "2021-22"
    ],
    [
        27,
        "CH MADHAV",
        "WATER QUALITY ASSESSMENT SYSTEM USING IoT",
        "PG Dissertation",
        "Awarded",
        "2022",
        "2021-22"
    ],
    [
        28,
        "K.Shravan Kumar",
        "Verification of IEEE-1687 Standard and its applications in modern dense SoC's",
        "PG Dissertation",
        "Awarded",
        "2017",
        "2016-17"
    ],
    [
        29,
        "Padmavathi N A V S L",
        "Development and Implementation of Firing Control algorithms for Aircraft ECM in FPGA",
        "PG Dissertation",
        "Awarded",
        "2016",
        "2015-16"
    ],
    [
        30,
        "M Jeevan Kumar",
        "Implementation of Blowfish algorithm on FPGA for increase security and improve performance",
        "PG Dissertation",
        "Awarded",
        "2019",
        "2018-19"
    ],
    [
        31,
        "Thatipamula Sathish",
        "Early Timing Closure of Complex SoC",
        "PG Dissertation",
        "Awarded",
        "2019",
        "2017-18"
    ],
    [
        32,
        "ADAKATLA SAIBABU",
        "FPGA Implementation of Reversible High Capacity Data Hiding Technique for -e healthcare applications",
        "PG Dissertation",
        "Awarded",
        "2019",
        "2018-19"
    ],
    [
        33,
        "Atluri Ravikishore Reddy",
        "PRE-Encoded Multipliers Based on Non-Redundant Radix-4 Signed Digital Encoding",
        "PG Dissertation",
        "Awarded",
        "2017",
        "2016-17"
    ],
    [
        34,
        "K Laxminarayana",
        "Implementation of Area Efficient Turbo Codes Using FPGA",
        "PG Dissertation",
        "Awarded",
        "2018",
        "2017-18"
    ],
    [
        35,
        "A Tanmayee",
        "Performance Analysis of Complex SOC'S",
        "PG Dissertation",
        "Awarded",
        "2018",
        "2017-18"
    ],
    [
        36,
        "K. Ravi varma",
        "FPGA implementation of controller for non-parallel Flash memory",
        "PG Dissertation",
        "Awarded",
        "2018",
        "2017-18"
    ],
    [
        37,
        "T. Madhav Reddy",
        "FPGA implementation of SPI bus protocol with built in self-test capability",
        "PG Dissertation",
        "Awarded",
        "2018",
        "2017-18"
    ],
    [
        38,
        "A. Manoj Kumar",
        "3 1005-15-7444D1 A.. Manoj Kumar IoT based Heart rate monitoring system ES-VLSI",
        "PG Dissertation",
        "Awarded",
        "2018",
        "2017-18"
    ],
    [
        39,
        "A. Manusha",
        "4 1005-15-744213 A.. Manusha Novel Design & implementation of BLI algorithm",
        "PG Dissertation",
        "Awarded",
        "2018",
        "2017-18"
    ],
    [
        40,
        "A.. Raghavendra",
        "Implementation of a DCM based true random number generator for Xilinx FPGA",
        "PG Dissertation",
        "Awarded",
        "2018",
        "2017-18"
    ],
    [
        41,
        "B. Rajesh",
        "Study and analysis of adaptive beam forming using genetic algorithm",
        "PG Dissertation",
        "Awarded",
        "2019",
        "2018-19"
    ],
    [
        42,
        "N. Srikanth",
        "Adaptive beam forming LMS algorithm for smart antenna",
        "PG Dissertation",
        "Awarded",
        "2019",
        "2018-19"
    ],
    [
        43,
        "S. Jyothi",
        "Low cost IOT Based Weather Station for Real Time Monitoring &Forecasting",
        "PG Dissertation",
        "Awarded",
        "2022",
        "2021-22"
    ],
    [
        44,
        "N.Chandu",
        "PRECISION CROP ADVISING WITH MACHINE LEARNING",
        "PG Dissertation",
        "Awarded",
        "2024",
        "2023-24"
    ],
    [
        45,
        "A.Haswanth Kumar",
        "Design and Development of Acquisition Toolbox for Beidou B2a signal using Matlab",
        "PG Dissertation",
        "Ongoing",
        "—",
        "2026-27"
    ]
];

const DataTable = ({ columns, rows, className = "" }) => (
    <div className={`publication-table-card ${className}`}>
        <div className="publication-table-scroll">
            <table className="publication-table">
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={`${row[0]}-${rowIndex}`}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const SectionHeading = ({ eyebrow, title, text }) => (
    <div className="publication-section-heading">
        {eyebrow && <span>{eyebrow}</span>}
        <h2>{title}</h2>
        {text && <p>{text}</p>}
    </div>
);

const Publications = () => {
    return (
        <main className="publications-page">
            <section className="publications-hero">
                <div className="publications-hero-inner">
                    <span className="publications-badge">CAIIC</span>
                    <h1>Publications</h1>
                    <p>
                        Research publications, scholarly works, research guidance, and
                        student project supervision associated with CAIIC.
                    </p>
                </div>
            </section>

            <section className="publications-content">
                <div className="publications-container">
                    <section className="publication-section">
                        <SectionHeading
                            eyebrow="PEER-REVIEWED / UGC-LISTED JOURNALS"
                            title="A Minimum of Ten Publications in Peer-Reviewed or UGC-Listed Journals"
                            text="Complete set of 19 publication records from the CAS report."
                        />

                        <DataTable
                            columns={[
                                "Sr.",
                                "Paper Title",
                                "Authors",
                                "Journal Name",
                                "ISBN/ISSN Number",
                                "Indexed In",
                                "Impact Factor",
                                "Year",
                                "Proof",
                            ]}
                            rows={minimumPublications}
                        />
                    </section>

                    <section className="publication-section publication-section-soft">
                        <SectionHeading
                            title="Research Papers in Peer-Reviewed or UGC Listed Journals"
                        />

                        <DataTable
                            columns={[
                                "Sr.",
                                "Paper Title",
                                "Authors",
                                "Journal Name",
                                "ISBN/ISSN Number",
                                "Indexed In",
                                "Impact Factor",
                                "Year",
                            ]}
                            rows={activityOne}
                        />

                        <div className="publication-subsection">
                            <SectionHeading
                                title="Publications Other Than Research Papers"
                            />

                            <DataTable
                                columns={[
                                    "Sr.",
                                    "Type",
                                    "Title of Book",
                                    "Chapter Title",
                                    "Publisher / Authors",
                                    "Publication Year",
                                    "National / International",
                                    "Year",
                                ]}
                                rows={activityTwo}
                            />
                        </div>
                    </section>

                    <section className="publication-section">
                        <SectionHeading
                            title="Research Guidance"
                            text="Ph.D. / M.Phil. / PG Dissertation awarded or submitted records."
                        />

                        <DataTable
                            columns={[
                                "Sr.",
                                "Scholar Name",
                                "Thesis Title",
                                "Degree",
                                "Status",
                                "Ph.D. Awarded Year",
                                "Year",
                            ]}
                            rows={researchGuidance}
                        />
                    </section>

                    <section className="publication-section publication-section-soft">
                        <SectionHeading
                            eyebrow="STUDENT PROJECTS"
                            title="UG & PG Projects"
                        />

                        <DataTable
                            columns={[
                                "Sr.",
                                "Scholar Name",
                                "Thesis / Project Title",
                                "Degree",
                                "Status",
                                "PG Dissertation Year",
                                "Year",
                            ]}
                            rows={ugPgProjects}
                        />
                    </section>
                </div>
            </section>
        </main>
    );
};

export default Publications;
