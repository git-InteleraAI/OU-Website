import { Fragment, useEffect, useMemo, useState } from "react";
import "./Infrastructure.css";

const infrastructureModules = import.meta.glob(
    "../assets/infrastructure/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    {
        eager: true,
        import: "default",
    }
);

const inventorySections = [
    {
        title: "1. Desktop Machines Inventory",
        total: 17,
        groups: [
            {
                rows: [
                    {
                        no: 1,
                        description: "HP Workstation",
                        serial: "INA439SWZH",
                        quantity: 1,
                        source: "UGC-MRPS",
                        condition: "Operational",
                    },
                    {
                        no: 2,
                        description: "DELL Desktop (Dell Vostro 3020)",
                        serial: "4GBZNW3",
                        quantity: 1,
                        source: "C2S",
                        condition: "Operational",
                    },
                    {
                        no: 3,
                        description: 'Desktop with 21.5" LED Monitor, MSI MP223-E2 (Core i9/1TB SSD/16GB DDR5/GALAXY GF RTX 4070)',
                        details: [
                            "Batch 1: BS1723700014, 948, 949, 956, 969",
                            "Batch 2: BS1723900028, 180, 185, 299, 303, 311, 312, 320",
                        ],
                        quantity: 13,
                        source: "ALUMNI",
                        condition: "Operational",
                    },
                    {
                        no: 4,
                        description: 'Desktop with 32" LED Monitor LG 32MP60G-B (Core i9/1TB SSD/16GB DDR5/GALAX GF RTX 4070)',
                        serial: "BS1723900336, 465",
                        quantity: 2,
                        source: "ALUMNI",
                        condition: "Operational",
                    },
                ],
            },
        ],
    },
    {
        title: "2. FPGA Kits Inventory",
        total: 95,
        groups: [
            {
                rows: [
                    { no: 1, description: "Zed board - 7000 All Programmable SoC (Zynq) Device", serial: "DAASA1G6", quantity: 1, source: "PI", condition: "Operational" },
                    { no: 2, description: "Xilinx PYNQ - Python development Board for Zynq", serial: "00183503, 1663 & DABD939", quantity: 1, source: "PI", condition: "Operational" },
                    { no: 3, description: "Xilinx PYNQ-Z1", serial: "XC72020", quantity: 1, source: "PI", condition: "Operational" },
                    { no: 4, description: "Boolean Board", quantity: 16, source: "C2S", condition: "Operational" },
                    { no: 5, description: "Urbana Board", serial: "887429230270, 887429230000", quantity: 2, source: "C2S", condition: "Operational" },
                    { no: 6, description: "Arty A7-100T + 1- USB Cable", serial: "410-319-1", quantity: 1, source: "C2S", condition: "Operational" },
                    { no: 7, description: "Pynq Z2", serial: "EG2306001942, EG2306001941, EG2306001944, TG2311001456, EG2306001943, E62306001945", quantity: 6, source: "C2S", condition: "Operational" },
                    { no: 8, description: "PYNQ ZU", serial: "OG2312000031", quantity: 1, source: "C2S", condition: "Operational" },
                    { no: 9, description: "Pmod KYPD-16 button Keypad", serial: "410-195", quantity: 6, source: "C2S", condition: "Operational" },
                    { no: 10, description: "Pmod OLED: 96x64 RGB OLED Display Prod", serial: "410-323", quantity: 6, source: "C2S", condition: "Operational" },
                    { no: 11, description: "Pmod DA2: Two 12-bit D/A Outputs", serial: "410-113", quantity: 6, source: "C2S", condition: "Operational" },
                    { no: 12, description: "Pmod TPH2: 12 pin Test Point Header", serial: "410-135", quantity: 40, source: "C2S", condition: "Operational" },
                    { no: 13, description: "ZYNQ Ultra Scale + MPSOC ZCU104", serial: "895573132318-89164", quantity: 1, source: "C2S", condition: "Operational" },
                    { no: 14, description: "Kria KV260 Vision AI", serial: "XFLIOAUUDZIO", quantity: 1, source: "C2S", condition: "Operational" },
                    { no: 15, description: "Kria KR260 Robotics", serial: "XFLISSBYONRT", quantity: 1, source: "C2S", condition: "Operational" },
                    { no: 16, description: "Kria KV260 Vision AI", quantity: 4, source: "ALUMNI", condition: "Operational" },
                    { no: 17, description: "Kria KR260 Robotics", quantity: 1, source: "ALUMNI", condition: "Operational" },
                ],
            },
        ],
    },
    {
        title: "3. NVIDIA, USRP Kits & Network Infrastructure",
        total: 24,
        groups: [
            {
                title: "NVIDIA Graphics Cards",
                rows: [
                    { no: 1, description: "Nvidia Graphic Card (Quadro K420)", serial: "710918137823, 4710918138042", quantity: 2, source: "PI", condition: "Operational" },
                    { no: 2, description: "Nvidia Quadro K1200", serial: "4710918138059", quantity: 1, source: "PI", condition: "Operational" },
                ],
            },
            {
                title: "NI Hardware USRP Kit",
                rows: [
                    { no: 1, description: "USRP N210 kit (USRP, 2 SMA-Bulkhead RF cables, Ethernet Cable, Power) - Ettus Research", serial: "F3ECDD, F3EE69", quantity: 2, source: "UGC-MRPS", condition: "Operational" },
                    { no: 2, description: "USRP GPSDisciplined -Oscillator kit (N210/200 (Rev2+)), E110/100 (Rev 4+) - Ettus Research", serial: "724793-01", quantity: 1, source: "UGC-MRPS", condition: "Operational" },
                    { no: 3, description: 'USRP Rack Mount kit (Combine devices into 3U, 19" Rack) - Ettus Research', serial: "79883701", quantity: 1, source: "UGC-MRPS", condition: "Operational" },
                    { no: 4, description: "BasicRx USRP Daughter board (1-250 MHz) - Ettus Research", serial: "F3E088", quantity: 1, source: "UGC-MRPS", condition: "Operational" },
                    { no: 5, description: "LFRX USRP Daughter board (0-30 MHz) - Ettus Research", serial: "F379D0", quantity: 1, source: "UGC-MRPS", condition: "Operational" },
                    { no: 6, description: "TVRX2 USRP Daughter board (50-860 MHz) - Ettus Research", serial: "F3DCOC", quantity: 1, source: "UGC-MRPS", condition: "Operational" },
                    { no: 7, description: "DBSRX2 USRP Daughter board (800 MHz-2.3GHz) - Ettus Research", serial: "F3D57E", quantity: 1, source: "UGC-MRPS", condition: "Operational" },
                    { no: 8, description: "RFX900 USRP Daughter board (750-1050 MHz) - Ettus Research", serial: "F3400E", quantity: 1, source: "UGC-MRPS", condition: "Operational" },
                    { no: 9, description: "RFX1800 USRP Daughter board (1.5-2.1 GHz) - Ettus Research", serial: "F3826E", quantity: 1, source: "UGC-MRPS", condition: "Operational" },
                    { no: 10, description: "RFX2400 USRP Daughter board - Ettus Research", serial: "F382BB", quantity: 1, source: "UGC-MRPS", condition: "Operational" },
                    { no: 11, description: "WBX USRP Daughter board (50MHz-2.2GHz) with 2 MCX Bulkhead RF Cables Ettus Research", serial: "F3ECCT", quantity: 1, source: "UGC-MRPS", condition: "Operational" },
                    { no: 12, description: "SBX USRP Daughterboard (400 MHz-4.4GHz) - Ettus Research", serial: "F3DD87", quantity: 1, source: "UGC-MRPS", condition: "Operational" },
                    { no: 13, description: "Vert 400 Vertical Antenna (144 MHz, 400 MHz, 1200MHz Tri-band)", serial: "783074-01", quantity: 1, source: "UGC-MRPS", condition: "Operational" },
                    { no: 14, description: "Vert 900 Vertical Antenna (824-960 MHz, 1710-1990 MHz) Dual band", serial: "782773-01", quantity: 1, source: "UGC-MRPS", condition: "Operational" },
                    { no: 15, description: "Cable Assembly, SMA to SMA 0.5M", serial: "782770-01", quantity: 1, source: "UGC-MRPS", condition: "Operational" },
                    { no: 16, description: "SMA Cable and 30dB Attenuator loop back kit - Ettus Research", serial: "782781-01", quantity: 1, source: "UGC-MRPS", condition: "Operational" },
                    { no: 17, description: "Cable Assembly, SMA-M to SMA-F bulkhead, 0.2M", serial: "782769-01", quantity: 1, source: "UGC-MRPS", condition: "Operational" },
                    { no: 18, description: "Cable Assembly, MCX-M to SMA-F Bulkhead, 0.2M", serial: "782767-01", quantity: 1, source: "UGC-MRPS", condition: "Operational" },
                    { no: 19, description: "Cable Assembly, USRP MIMO Data and Sync Cable, 0.5M", serial: "783076-01", quantity: 1, source: "UGC-MRPS", condition: "Operational" },
                    { no: 20, description: "XCVR2450 USRP Daughter board (2.4-2.5 GHz, 4.9-5.9GHz) Dual band - Ettus Research", quantity: 1, source: "UGC-MRPS", condition: "Operational" },
                ],
            },
        ],
    },
    {
        title: "4. General Lab Peripherals & Power Backup",
        total: 64,
        groups: [
            {
                title: "Routers & Infrastructure Hardware",
                rows: [
                    { no: 1, description: "Router TP-Link AC1200 Archer C6 (4-Antenna)", serial: "22391W4006162", quantity: 1, source: "C2S", condition: "Operational" },
                ],
            },
            {
                title: "System Peripherals",
                rows: [
                    { no: 1, description: "External Hard Disk (2 TB) - Seagate One Touch", serial: "NAE39622", quantity: 2, source: "C2S", condition: "Operational" },
                    { no: 2, description: "Logitech C270 HD Web Cam", serial: "2339APOA8LM9", quantity: 1, source: "C2S", condition: "Operational" },
                    { no: 3, description: "Logitech R400 Wireless Presenter", serial: "EN 50689:2021", quantity: 1, source: "C2S", condition: "Operational" },
                ],
            },
            {
                title: "Servers & Computing Infrastructure",
                rows: [
                    {
                        no: 1,
                        description: "HPE ProLiant DL385 Gen10 Plus",
                        details: [
                            "CPU: 2x AMD 7C13 processors 64 cores each (Total: 128 Cores, 256 VCPUs)",
                            "Memory: 1TB DDR5 RAM",
                            "Storage: 8x 4TB SSDs configured in RAID 5, 2x 1TB SSDs in RAID 1",
                            "Network: 2x 10Gig copper NIC LAN",
                            "Expansion & Bays: 4 Caddies, 16 SFF bays",
                        ],
                        quantity: 1,
                        source: "CHAVASK",
                        condition: "Operational",
                    },
                    {
                        no: 2,
                        description: 'DELL PowerEdge R750 Server (Xeon Gold 5317-3.4/12-Core / 4*32GB / 1*1.92TB SSD/NVIDIA GPU L4 PCIe 24GB Passive) with 24" LED DELL Monitor S2425H',
                        serial: "ST: JIRYM24, 41466295084, 17RSG34",
                        quantity: 1,
                        source: "ALUMNI",
                        condition: "Operational",
                    },
                    { no: 3, description: "Server Cabinet with Lock and Sliding Tray", quantity: 1, source: "ALUMNI", condition: "Operational" },
                ],
            },
            {
                title: "Interactive Panels",
                rows: [
                    { no: 1, description: 'Newline Interactive Panel 86" PRO (TT-8623QA) H.847', serial: "HERO1EIME91807", quantity: 1, source: "ALUMNI", condition: "Operational" },
                ],
            },
            {
                title: "UPS Power Backup Systems",
                rows: [
                    { no: 1, description: "UPS ELNOVA 6KVA ES 6000", serial: "EN6250679355", quantity: 1, source: "CHAVASK", condition: "Operational" },
                    { no: 2, description: "Battery Stand (4 Rack) 6KVA", quantity: 1, source: "CHAVASK", condition: "Operational" },
                    { no: 3, description: "Exide Power Safe Plus Batteries", quantity: 20, source: "CHAVASK", condition: "Operational" },
                    { no: 4, description: "AC", quantity: 1, source: "CHAVASK", condition: "Operational" },
                    { no: 5, description: "UPS ELNOVA 20KVA Es 20k31", serial: "ES2031240872859", quantity: 1, source: "ALUMNI", condition: "Operational" },
                    { no: 6, description: "Battery Stand (2 Rack) 20KVA", quantity: 1, source: "ALUMNI", condition: "Operational" },
                    { no: 7, description: "Dry cell Batteries (20KVA)", quantity: 20, source: "ALUMNI", condition: "Operational" },
                    { no: 8, description: "UPS 3kv", quantity: 1, source: "PI", condition: "Operational" },
                    { no: 9, description: "Battery Stand (2 Rack) 3KVA", quantity: 1, source: "PI", condition: "Operational" },
                    { no: 10, description: "Exide powersafe Batteries (3KVA)", quantity: 8, source: "PI", condition: "Operational" },
                ],
            },
        ],
    },
];

const InventoryTable = ({ section }) => (
    <div className="stock-register-block">
        <div className="stock-register-title">{section.title}</div>

        <div className="stock-table-scroll">
            <table className="stock-register-table">
                <thead>
                    <tr>
                        <th className="stock-col-number">S.NO.</th>
                        <th>EQUIPMENT DESCRIPTION &amp; SERIAL NUMBERS</th>
                        <th className="stock-col-quantity">QUANTITY</th>
                        <th className="stock-col-source">SOURCE</th>
                        <th className="stock-col-condition">Condition of Equipment</th>
                    </tr>
                </thead>

                <tbody>
                    {section.groups.map((group, groupIndex) => (
                        <Fragment key={`${section.title}-${groupIndex}`}>
                            {group.title && (
                                <tr className="stock-register-group-row">
                                    <td colSpan="5">{group.title}</td>
                                </tr>
                            )}

                            {group.rows.map((item, rowIndex) => (
                                <tr key={`${section.title}-${groupIndex}-${rowIndex}`}>
                                    <td className="stock-cell-number">{item.no}</td>
                                    <td className="stock-cell-description">
                                        <strong>{item.description}</strong>

                                        {item.serial && (
                                            <span className="stock-serial">
                                                S/N: {item.serial}
                                            </span>
                                        )}

                                        {item.details?.map((detail) => (
                                            <span className="stock-detail" key={detail}>
                                                {detail}
                                            </span>
                                        ))}
                                    </td>
                                    <td className="stock-cell-center">{item.quantity}</td>
                                    <td className="stock-cell-center">{item.source}</td>
                                    <td className="stock-cell-center">{item.condition}</td>
                                </tr>
                            ))}
                        </Fragment>
                    ))}

                    <tr className="stock-register-total-row">
                        <td colSpan="2">Total Assets on Sheet:</td>
                        <td>{section.total}</td>
                        <td colSpan="2"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

const Infrastructure = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = useMemo(() => {
        return Object.entries(infrastructureModules)
            .sort(([pathA], [pathB]) =>
                pathA.localeCompare(pathB, undefined, {
                    numeric: true,
                })
            )
            .map(([path, src]) => {
                const fileName = path
                    .split("/")
                    .pop()
                    .replace(/\.[^/.]+$/, "");

                const title = fileName
                    .replace(/^\d+\s*[.)_-]?\s*/, "")
                    .replace(/_/g, " ")
                    .replace(/\s+/g, " ")
                    .trim();

                return {
                    path,
                    src,
                    title,
                };
            });
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setSelectedImage(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <main className="infrastructure-page">
            {/* HEADER */}
            <section className="infrastructure-hero">
                <div className="infrastructure-hero-inner">
                    <span className="infrastructure-badge">CAIIC</span>

                    <h1>Infrastructure</h1>

                    <p>
                        Advanced facilities supporting research, semiconductor design,
                        artificial intelligence, FPGA/SoC development, embedded systems
                        and high-performance computing.
                    </p>
                </div>
            </section>

            {/* IMAGE SECTION */}
            <section className="infrastructure-content">
                <div className="infrastructure-container">
                    <div className="infrastructure-heading">
                        <span>OUR FACILITIES</span>

                        <h2>Research &amp; Development Infrastructure</h2>

                        <div className="infrastructure-title-line"></div>
                    </div>

                    {images.length > 0 ? (
                        <div className="infrastructure-grid">
                            {images.map((image, index) => (
                                <div
                                    className="infrastructure-card"
                                    key={image.path}
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <div className="infrastructure-image-wrapper">
                                        <img
                                            src={image.src}
                                            alt={image.title}
                                            className="infrastructure-image"
                                            loading="lazy"
                                        />

                                        <div className="infrastructure-image-overlay">
                                            <span>View</span>
                                        </div>
                                    </div>

                                    <div className="infrastructure-card-bottom">
                                        <span className="infrastructure-number">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <h3>{image.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="infrastructure-empty">
                            <h3>Infrastructure images will appear here</h3>

                            <p>
                                Add images inside{" "}
                                <strong>src/assets/infrastructure/</strong>
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* STOCK / EQUIPMENT INVENTORY — ANNEXURE A CONTENT ONLY */}
            <section className="infrastructure-stock-section">
                <div className="infrastructure-container">
                    <div className="stock-register-heading">
                        <span>EQUIPMENT INVENTORY</span>
                        <h2>Research Facilities &amp; Equipment Register</h2>
                        <p>
                            Detailed inventory of computing systems, FPGA platforms,
                            communication hardware, laboratory peripherals and power
                            infrastructure available at CAIIC.
                        </p>
                        <div className="stock-register-heading-line"></div>
                    </div>

                    <div className="stock-register-list">
                        {inventorySections.map((section) => (
                            <InventoryTable key={section.title} section={section} />
                        ))}
                    </div>
                </div>
            </section>

            {/* FULL IMAGE VIEW */}
            {selectedImage && (
                <div
                    className="infrastructure-lightbox"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="infrastructure-lightbox-close"
                        onClick={() => setSelectedImage(null)}
                    >
                        ×
                    </button>

                    <div
                        className="infrastructure-lightbox-content"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                        />

                        <p>{selectedImage.title}</p>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Infrastructure;
