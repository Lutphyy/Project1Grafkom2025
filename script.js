// Data mahasiswa (No 1 - 53) dengan nilai CPMK012, CPMK031, CPMK071, CPMK072
const mahasiswaData = [
  { id: "2101020014", cpmk012: 100, cpmk031: 90,  cpmk071: 100, cpmk072: 100 },
  { id: "2101020024", cpmk012: 100, cpmk031: 20,  cpmk071: 70,  cpmk072: 70  },
  { id: "2101020048", cpmk012: 100, cpmk031: 90,  cpmk071: 100, cpmk072: 100 },
  { id: "2101020058", cpmk012: 100, cpmk031: 90,  cpmk071: 100, cpmk072: 100 },
  { id: "2101020074", cpmk012: 90,  cpmk031: 60,  cpmk071: 70,  cpmk072: 70  },
  { id: "2101020092", cpmk012: 100, cpmk031: 20,  cpmk071: 70,  cpmk072: 70  },
  { id: "2101020103", cpmk012: 0,   cpmk031: 0,   cpmk071: 0,   cpmk072: 0   },
  { id: "2101020104", cpmk012: 90,  cpmk031: 60,  cpmk071: 70,  cpmk072: 70  },
  { id: "2101020117", cpmk012: 90,  cpmk031: 60,  cpmk071: 70,  cpmk072: 70  },
  { id: "2201020001", cpmk012: 100, cpmk031: 60,  cpmk071: 60,  cpmk072: 60  },
  { id: "2201020002", cpmk012: 100, cpmk031: 80,  cpmk071: 70,  cpmk072: 70  },
  { id: "2201020010", cpmk012: 100, cpmk031: 80,  cpmk071: 90,  cpmk072: 90  },
  { id: "2201020014", cpmk012: 100, cpmk031: 60,  cpmk071: 60,  cpmk072: 60  },
  { id: "2201020015", cpmk012: 100, cpmk031: 60,  cpmk071: 60,  cpmk072: 60  },
  { id: "2201020018", cpmk012: 100, cpmk031: 70,  cpmk071: 100, cpmk072: 100 },
  { id: "2201020019", cpmk012: 100, cpmk031: 80,  cpmk071: 90,  cpmk072: 90  },
  { id: "2201020022", cpmk012: 90,  cpmk031: 20,  cpmk071: 50,  cpmk072: 50  },
  { id: "2201020026", cpmk012: 100, cpmk031: 80,  cpmk071: 70,  cpmk072: 70  },
  { id: "2201020032", cpmk012: 100, cpmk031: 80,  cpmk071: 90,  cpmk072: 90  },
  { id: "2201020039", cpmk012: 100, cpmk031: 80,  cpmk071: 70,  cpmk072: 70  },
  { id: "2201020041", cpmk012: 100, cpmk031: 80,  cpmk071: 90,  cpmk072: 90  },
  { id: "2201020047", cpmk012: 100, cpmk031: 75,  cpmk071: 50,  cpmk072: 50  },
  { id: "2201020048", cpmk012: 100, cpmk031: 70,  cpmk071: 100, cpmk072: 100 },
  { id: "2201020057", cpmk012: 100, cpmk031: 75,  cpmk071: 50,  cpmk072: 50  },
  { id: "2201020063", cpmk012: 100, cpmk031: 76,  cpmk071: 100, cpmk072: 100 },
  { id: "2201020065", cpmk012: 100, cpmk031: 75,  cpmk071: 85,  cpmk072: 85  },
  { id: "2201020066", cpmk012: 100, cpmk031: 60,  cpmk071: 50,  cpmk072: 50  },
  { id: "2201020067", cpmk012: 100, cpmk031: 80,  cpmk071: 90,  cpmk072: 90  },
  { id: "2201020070", cpmk012: 100, cpmk031: 75,  cpmk071: 100, cpmk072: 100 },
  { id: "2201020074", cpmk012: 100, cpmk031: 60,  cpmk071: 50,  cpmk072: 50  },
  { id: "2201020075", cpmk012: 100, cpmk031: 80,  cpmk071: 90,  cpmk072: 90  },
  { id: "2201020083", cpmk012: 100, cpmk031: 80,  cpmk071: 90,  cpmk072: 90  },
  { id: "2201020086", cpmk012: 0,   cpmk031: 0,   cpmk071: 0,   cpmk072: 0   },
  { id: "2201020090", cpmk012: 100, cpmk031: 75,  cpmk071: 100, cpmk072: 100 },
  { id: "2201020091", cpmk012: 100, cpmk031: 80,  cpmk071: 90,  cpmk072: 90  },
  { id: "2201020092", cpmk012: 100, cpmk031: 60,  cpmk071: 50,  cpmk072: 50  },
  { id: "2201020093", cpmk012: 100, cpmk031: 75,  cpmk071: 85,  cpmk072: 85  },
  { id: "2201020094", cpmk012: 100, cpmk031: 80,  cpmk071: 90,  cpmk072: 90  },
  { id: "2201020095", cpmk012: 100, cpmk031: 75,  cpmk071: 85,  cpmk072: 85  },
  { id: "2201020098", cpmk012: 100, cpmk031: 75,  cpmk071: 50,  cpmk072: 50  },
  { id: "2201020099", cpmk012: 100, cpmk031: 80,  cpmk071: 90,  cpmk072: 90  },
  { id: "2201020100", cpmk012: 100, cpmk031: 80,  cpmk071: 70,  cpmk072: 70  },
  { id: "2201020103", cpmk012: 100, cpmk031: 70,  cpmk071: 100, cpmk072: 100 },
  { id: "2201020104", cpmk012: 100, cpmk031: 80,  cpmk071: 70,  cpmk072: 70  },
  { id: "2201020105", cpmk012: 100, cpmk031: 70,  cpmk071: 50,  cpmk072: 50  },
  { id: "2201020106", cpmk012: 90,  cpmk031: 50,  cpmk071: 40,  cpmk072: 40  },
  { id: "2201020109", cpmk012: 100, cpmk031: 80,  cpmk071: 70,  cpmk072: 70  },
  { id: "2201020112", cpmk012: 90,  cpmk031: 50,  cpmk071: 40,  cpmk072: 40  },
  { id: "2201020116", cpmk012: 90,  cpmk031: 50,  cpmk071: 40,  cpmk072: 40  },
  { id: "2201020117", cpmk012: 100, cpmk031: 70,  cpmk071: 50,  cpmk072: 50  },
  { id: "2201020118", cpmk012: 100, cpmk031: 80,  cpmk071: 90,  cpmk072: 90  },
  { id: "2201020122", cpmk012: 100, cpmk031: 70,  cpmk071: 50,  cpmk072: 50  },
  { id: "2201020123", cpmk012: 90,  cpmk031: 20,  cpmk071: 50,  cpmk072: 50  }
];

// Fungsi untuk menentukan indeks rentang nilai (bin)
function getBin(value) {
  if (value <= 50) return 0;
  else if (value <= 70) return 1;
  else if (value <= 90) return 2;
  else return 3;
}

// Inisialisasi array distribusi untuk tiap CPMK
const distribusiCPMK012 = [0, 0, 0, 0];
const distribusiCPMK031 = [0, 0, 0, 0];
const distribusiCPMK071 = [0, 0, 0, 0];
const distribusiCPMK072 = [0, 0, 0, 0];

// Hitung distribusi nilai berdasarkan rentang
mahasiswaData.forEach(item => {
  distribusiCPMK012[getBin(item.cpmk012)]++;
  distribusiCPMK031[getBin(item.cpmk031)]++;
  distribusiCPMK071[getBin(item.cpmk071)]++;
  distribusiCPMK072[getBin(item.cpmk072)]++;
});

// Rentang nilai yang digunakan sebagai label sumbu X
const labels = ["0-50", "51-70", "71-90", "91-100"];

// Warna untuk masing-masing dataset
const colors = {
  cpmk012: "rgba(255, 99, 132, 0.8)",   // Merah
  cpmk031: "rgba(54, 162, 235, 0.8)",    // Biru
  cpmk071: "rgba(255, 206, 86, 0.8)",    // Kuning
  cpmk072: "rgba(75, 192, 192, 0.8)"     // Hijau
};

// Setting canvas dan context
const canvas = document.getElementById("histogramChart");
const ctx = canvas.getContext("2d");

// Margin dan ukuran area grafik
const margin = { top: 40, right: 30, bottom: 60, left: 60 };
const chartWidth = canvas.width - margin.left - margin.right;
const chartHeight = canvas.height - margin.top - margin.bottom;

// Tentukan jumlah dataset (4) dan jumlah bin (4)
const numDatasets = 4;
const numBins = labels.length;

// Tentukan lebar tiap bar dan jarak antar bar dalam grup
const barWidth = 20;
const barGap = 5;
const groupGap = 40;

// Tentukan skala untuk sumbu Y berdasarkan nilai maksimum
const maxCount = Math.max(
  ...distribusiCPMK012,
  ...distribusiCPMK031,
  ...distribusiCPMK071,
  ...distribusiCPMK072
);
const yScale = chartHeight / (maxCount + 2); // +2 sebagai ruang atas

// Fungsi untuk menggambar garis
function drawLine(ctx, x1, y1, x2, y2, color = "black", width = 1) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.stroke();
}

// Mulai menggambar grafik
ctx.clearRect(0, 0, canvas.width, canvas.height);

// Gambar sumbu X dan Y
const originX = margin.left;
const originY = canvas.height - margin.bottom;
drawLine(ctx, originX, margin.top, originX, originY); // sumbu Y
drawLine(ctx, originX, originY, canvas.width - margin.right, originY); // sumbu X

// Tambahkan label sumbu Y
ctx.font = "14px sans-serif";
ctx.fillStyle = "black";
ctx.textAlign = "right";
ctx.textBaseline = "middle";
for (let i = 0; i <= maxCount + 2; i++) {
  const yPos = originY - i * yScale;
  ctx.fillText(i, originX - 5, yPos);
}

// Tambahkan label sumbu X dan garis vertikal untuk tiap bin
ctx.textAlign = "center";
labels.forEach((label, i) => {
  // Posisi tengah grup tiap bin
  const groupX = originX + groupGap/2 + i * (numDatasets * (barWidth + barGap) + groupGap);
  ctx.fillText(label, groupX + (numDatasets * (barWidth + barGap) - barGap)/2, originY + 20);
  // Gambar garis vertikal tipis pada tiap bin (opsional)
  drawLine(ctx, groupX, originY, groupX, margin.top, "#ddd", 1);
});

// Fungsi untuk menggambar sebuah bar
function drawBar(x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

// Data distribusi tiap dataset dalam sebuah array untuk memudahkan iterasi
const datasets = [
  { data: distribusiCPMK012, color: colors.cpmk012 },
  { data: distribusiCPMK031, color: colors.cpmk031 },
  { data: distribusiCPMK071, color: colors.cpmk071 },
  { data: distribusiCPMK072, color: colors.cpmk072 }
];

// Gambar bar untuk tiap kelompok (grouped bar chart)
labels.forEach((label, binIndex) => {
  // Hitung posisi awal grup untuk bin ini
  const groupStartX = originX + groupGap + binIndex * (numDatasets * (barWidth + barGap) + groupGap);
  // Untuk tiap dataset, gambar bar dalam grup
  datasets.forEach((dataset, dsIndex) => {
    const count = dataset.data[binIndex];
    const barHeight = count * yScale;
    // Posisi X untuk bar dataset ke-dsIndex pada grup ini
    const x = groupStartX + dsIndex * (barWidth + barGap);
    const y = originY - barHeight;
    drawBar(x, y, barWidth, barHeight, dataset.color);
    // Tuliskan nilai count di atas bar (jika cukup tinggi)
    if (barHeight > 15) {
      ctx.fillStyle = "black";
      ctx.font = "12px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(count, x + barWidth/2, y - 5);
    }
  });
});

// Judul grafik
ctx.font = "18px sans-serif";
ctx.fillStyle = "black";
ctx.textAlign = "center";
ctx.fillText("Histogram Distribusi Nilai CPMK", canvas.width/2, margin.top/2);

// Legenda sederhana
const legendX = canvas.width - margin.right - 150;
const legendY = margin.top;
const legendGap = 20;
datasets.forEach((dataset, i) => {
  // Kotak warna
  ctx.fillStyle = dataset.color;
  ctx.fillRect(legendX, legendY + i * legendGap, 15, 15);
  // Label
  ctx.fillStyle = "black";
  ctx.font = "14px sans-serif";
  ctx.textAlign = "left";
  ctx.fillText(["CPMK 012", "CPMK 031", "CPMK 071", "CPMK 072"][i], legendX + 20, legendY + i * legendGap + 12);
});
