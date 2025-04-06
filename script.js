const canvas = document.getElementById("radarChart");
const ctx = canvas.getContext("2d");
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 200;
const maxValue = 100;
const labels = ["Tugas", "UTS", "UAS"];
const colors = [
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
  "#8E44AD",
  "#27AE60",
  "#D35400",
  "#2C3E50",
  "#16A085",
  "#E67E22",
  "#2980B9",
];

const data = {
  2101020014: { Tugas: 56, UTS: 50, UAS: 70 },
  2101020024: { Tugas: 39, UTS: 50, UAS: 85 },
  2101020048: { Tugas: 66, UTS: 70, UAS: 49 },
  2101020058: { Tugas: 89, UTS: 40, UAS: 70 },
  2101020074: { Tugas: 59, UTS: 60, UAS: 69 },
  2101020092: { Tugas: 59, UTS: 60, UAS: 49 },
  2101020103: { Tugas: 40, UTS: 0, UAS: 34 },
  2101020104: { Tugas: 40, UTS: 50, UAS: 65 },
  2101020117: { Tugas: 60, UTS: 60, UAS: 65 },
  2201020001: { Tugas: 50, UTS: 80, UAS: 69 },
  2201020002: { Tugas: 70, UTS: 80, UAS: 85 },
  2201020010: { Tugas: 80, UTS: 80, UAS: 85 },
  2201020014: { Tugas: 97.5, UTS: 80, UAS: 85 },
  2201020015: { Tugas: 70, UTS: 80, UAS: 70 },
  2201020018: { Tugas: 30, UTS: 70, UAS: 69 },
  2201020019: { Tugas: 100, UTS: 70, UAS: 70 },
  2201020022: { Tugas: 70, UTS: 80, UAS: 53 },
  2201020026: { Tugas: 70, UTS: 80, UAS: 85 },
  2201020032: { Tugas: 79.5, UTS: 60, UAS: 53 },
  2201020039: { Tugas: 60, UTS: 80, UAS: 53 },
  2201020041: { Tugas: 100, UTS: 70, UAS: 70 },
  2201020047: { Tugas: 70, UTS: 60, UAS: 49 },
  2201020048: { Tugas: 80, UTS: 80, UAS: 70 },
  2201020057: { Tugas: 79, UTS: 70, UAS: 53 },
  2201020063: { Tugas: 86, UTS: 70, UAS: 69 },
  2201020065: { Tugas: 80, UTS: 70, UAS: 79 },
  2201020066: { Tugas: 80, UTS: 70, UAS: 69 },
  2201020067: { Tugas: 99.5, UTS: 70, UAS: 53 },
  2201020070: { Tugas: 70, UTS: 70, UAS: 79 },
  2201020074: { Tugas: 70, UTS: 50, UAS: 69 },
  2201020075: { Tugas: 100, UTS: 70, UAS: 69 },
  2201020083: { Tugas: 68, UTS: 70, UAS: 69 },
  2201020086: { Tugas: 50, UTS: 0, UAS: 0 },
  2201020090: { Tugas: 99.5, UTS: 70, UAS: 70 },
  2201020091: { Tugas: 100, UTS: 60, UAS: 68 },
  2201020092: { Tugas: 79.5, UTS: 80, UAS: 69 },
  2201020093: { Tugas: 70, UTS: 70, UAS: 69 },
  2201020094: { Tugas: 100, UTS: 70, UAS: 53 },
  2201020095: { Tugas: 79.5, UTS: 70, UAS: 69 },
  2201020098: { Tugas: 30, UTS: 80, UAS: 85 },
  2201020099: { Tugas: 79, UTS: 80, UAS: 85 },
  2201020100: { Tugas: 79, UTS: 80, UAS: 70 },
  2201020103: { Tugas: 96, UTS: 80, UAS: 70 },
  2201020104: { Tugas: 79, UTS: 80, UAS: 70 },
  2201020105: { Tugas: 79.5, UTS: 80, UAS: 85 },
  2201020106: { Tugas: 70, UTS: 70, UAS: 70 },
  2201020109: { Tugas: 79.5, UTS: 80, UAS: 70 },
  2201020112: { Tugas: 60, UTS: 80, UAS: 68 },
  2201020116: { Tugas: 69, UTS: 70, UAS: 53 },
  2201020117: { Tugas: 57, UTS: 80, UAS: 69 },
  2201020118: { Tugas: 69, UTS: 80, UAS: 85 },
  2201020122: { Tugas: 70, UTS: 70, UAS: 70 },
  2201020123: { Tugas: 70, UTS: 70, UAS: 68 },
};

let mahasiswaList = Object.entries(data);
let currentPage = 0;
const pageSize = 10;

function polarToCartesian(cx, cy, r, angle) {
  return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
}

function drawAxes() {
  ctx.strokeStyle = "#aaa";
  ctx.lineWidth = 1;
  labels.forEach((label, i) => {
    const angle = ((Math.PI * 2) / labels.length) * i;
    const [x, y] = polarToCartesian(centerX, centerY, radius + 20, angle);
    const [lx, ly] = polarToCartesian(centerX, centerY, radius, angle);
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(lx, ly);
    ctx.stroke();
    ctx.fillText(label, x, y);
  });
}

function drawPolygon(values, color) {
  ctx.beginPath();
  values.forEach((value, i) => {
    const angle = ((Math.PI * 2) / labels.length) * i;
    const r = (value / maxValue) * radius;
    const [x, y] = polarToCartesian(centerX, centerY, r, angle);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.3;
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.strokeStyle = color;
  ctx.stroke();
}

function analyzeStudent(score) {
  let max = -1,
    min = 101,
    maxKey = "",
    minKey = "";
  for (let key in score) {
    if (score[key] > max) {
      max = score[key];
      maxKey = key;
    }
    if (score[key] < min) {
      min = score[key];
      minKey = key;
    }
  }
  return `Mahasiswa ini kuat di bagian ${maxKey}, tetapi lemah di ${minKey}.`;
}

function drawChart() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawAxes();
  document.getElementById("analysis").innerHTML = "";
  const slice = mahasiswaList.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );
  slice.forEach(([nim, scores], idx) => {
    const values = labels.map((k) => scores[k]);
    const color = colors[idx % colors.length];
    drawPolygon(values, color);
    ctx.fillStyle = color;
    ctx.fillText(`${nim} → warna ${color}`, 10, 20 + idx * 20);
    const result = analyzeStudent(scores);
    document.getElementById(
      "analysis"
    ).innerHTML += `<p><strong>${nim}</strong>: ${result}</p>`;
  });
}

function nextPage() {
  if ((currentPage + 1) * pageSize < mahasiswaList.length) {
    currentPage++;
    drawChart();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    drawChart();
  }
}

function summaryRanking() {
  const total = { Tugas: [], UTS: [], UAS: [] };
  mahasiswaList.forEach(([nim, scores]) => {
    labels.forEach((k) => total[k].push({ nim, nilai: scores[k] }));
  });

  let summaryHTML = "<hr><h3>Rekapitulasi Keseluruhan</h3>";

  labels.forEach((label) => {
    const sorted = total[label].sort((a, b) => b.nilai - a.nilai);
    const tertinggi = sorted[0];
    const terendah = sorted[sorted.length - 1];
    summaryHTML += `<p><strong>${label}</strong>: Tertinggi → ${tertinggi.nim} (${tertinggi.nilai}), Terendah → ${terendah.nim} (${terendah.nilai})</p>`;
  });

  document.getElementById("summary").innerHTML = summaryHTML;
}

drawChart();
summaryRanking();
