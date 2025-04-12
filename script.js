var data = [
  { "nim": "2101020014", "total_nilai_akhir": "82,3", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["4,5", "90%"], "nilai_capaian_cpmk071": ["29", "82%"], "nilai_capaian_cpmk072": ["44", "80%"] },
  { "nim": "2101020024", "total_nilai_akhir": "68,2", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["1", "20%"], "nilai_capaian_cpmk071": ["23", "66%"], "nilai_capaian_cpmk072": ["39", "71%"] },
  { "nim": "2101020048", "total_nilai_akhir": "80,6", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["4,5", "90%"], "nilai_capaian_cpmk071": ["31", "89%"], "nilai_capaian_cpmk072": ["40", "73%"] },
  { "nim": "2101020058", "total_nilai_akhir": "82,5", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["4,5", "90%"], "nilai_capaian_cpmk071": ["29", "83%"], "nilai_capaian_cpmk072": ["44", "80%"] },
  { "nim": "2101020074", "total_nilai_akhir": "68,2", "nilai_capaian_cpmk012": ["4,5", "90%"], "nilai_capaian_cpmk031": ["3", "60%"], "nilai_capaian_cpmk071": ["26", "73%"], "nilai_capaian_cpmk072": ["35", "64%"] },
  { "nim": "2101020092", "total_nilai_akhir": "61,7", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["1", "20%"], "nilai_capaian_cpmk071": ["25", "71%"], "nilai_capaian_cpmk072": ["31", "56%"] },
  { "nim": "2101020103", "total_nilai_akhir": "10,5", "nilai_capaian_cpmk012": ["0", "0%"], "nilai_capaian_cpmk031": ["0", "0%"], "nilai_capaian_cpmk071": ["2,5", "7,1%"], "nilai_capaian_cpmk072": ["8", "15%"] },
  { "nim": "2101020104", "total_nilai_akhir": "64,8", "nilai_capaian_cpmk012": ["4,5", "90%"], "nilai_capaian_cpmk031": ["3", "60%"], "nilai_capaian_cpmk071": ["22", "64%"], "nilai_capaian_cpmk072": ["35", "64%"] },
  { "nim": "2101020117", "total_nilai_akhir": "67,3", "nilai_capaian_cpmk012": ["4,5", "90%"], "nilai_capaian_cpmk031": ["3", "60%"], "nilai_capaian_cpmk071": ["25", "71%"], "nilai_capaian_cpmk072": ["35", "64%"] },
  { "nim": "2201020001", "total_nilai_akhir": "66,8", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["3", "60%"], "nilai_capaian_cpmk071": ["27", "76%"], "nilai_capaian_cpmk072": ["32", "58%"] },
  { "nim": "2201020002", "total_nilai_akhir": "77,3", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["4", "80%"], "nilai_capaian_cpmk071": ["29", "84%"], "nilai_capaian_cpmk072": ["39", "71%"] },
  { "nim": "2201020010", "total_nilai_akhir": "86,8", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["4", "80%"], "nilai_capaian_cpmk071": ["33", "94%"], "nilai_capaian_cpmk072": ["45", "82%"] },
  { "nim": "2201020014", "total_nilai_akhir": "73,1", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["3", "60%"], "nilai_capaian_cpmk071": ["29", "83%"], "nilai_capaian_cpmk072": ["36", "65%"] },
  { "nim": "2201020015", "total_nilai_akhir": "68", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["3", "60%"], "nilai_capaian_cpmk071": ["28", "80%"], "nilai_capaian_cpmk072": ["32", "58%"] },
  { "nim": "2201020018", "total_nilai_akhir": "82,8", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["3,5", "70%"], "nilai_capaian_cpmk071": ["30", "86%"], "nilai_capaian_cpmk072": ["44", "80%"] },
  { "nim": "2201020019", "total_nilai_akhir": "82,5", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["4", "80%"], "nilai_capaian_cpmk071": ["33", "93%"], "nilai_capaian_cpmk072": ["41", "75%"] },
  { "nim": "2201020022", "total_nilai_akhir": "56,8", "nilai_capaian_cpmk012": ["4,5", "90%"], "nilai_capaian_cpmk031": ["1", "20%"], "nilai_capaian_cpmk071": ["26", "75%"], "nilai_capaian_cpmk072": ["25", "45%"] },
  { "nim": "2201020026", "total_nilai_akhir": "77,3", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["4", "80%"], "nilai_capaian_cpmk071": ["29", "84%"], "nilai_capaian_cpmk072": ["39", "71%"] },
  { "nim": "2201020032", "total_nilai_akhir": "75,7", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["4", "80%"], "nilai_capaian_cpmk071": ["30", "85%"], "nilai_capaian_cpmk072": ["37", "67%"] },
  { "nim": "2201020039", "total_nilai_akhir": "68,8", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["4", "80%"], "nilai_capaian_cpmk071": ["29", "82%"], "nilai_capaian_cpmk072": ["31", "56%"] },
  { "nim": "2201020041", "total_nilai_akhir": "82,5", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["4", "80%"], "nilai_capaian_cpmk071": ["33", "93%"], "nilai_capaian_cpmk072": ["41", "75%"] },
  { "nim": "2201020047", "total_nilai_akhir": "56", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["3,8", "75%"], "nilai_capaian_cpmk071": ["22", "64%"], "nilai_capaian_cpmk072": ["25", "45%"] },
  { "nim": "2201020048", "total_nilai_akhir": "87", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["3,5", "70%"], "nilai_capaian_cpmk071": ["35", "99%"], "nilai_capaian_cpmk072": ["44", "80%"] },
  { "nim": "2201020057", "total_nilai_akhir": "59", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["3,8", "75%"], "nilai_capaian_cpmk071": ["25", "72%"], "nilai_capaian_cpmk072": ["25", "45%"] },
  { "nim": "2201020063", "total_nilai_akhir": "85,9", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["3,8", "76%"], "nilai_capaian_cpmk071": ["33", "94%"], "nilai_capaian_cpmk072": ["44", "80%"] },
  { "nim": "2201020065", "total_nilai_akhir": "81,3", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["3,8", "75%"], "nilai_capaian_cpmk071": ["31", "89%"], "nilai_capaian_cpmk072": ["42", "75%"] },
  { "nim": "2201020066", "total_nilai_akhir": "62,3", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["3", "60%"], "nilai_capaian_cpmk071": ["25", "72%"], "nilai_capaian_cpmk072": ["29", "53%"] },
  { "nim": "2201020067", "total_nilai_akhir": "78,2", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["4", "80%"], "nilai_capaian_cpmk071": ["32", "92%"], "nilai_capaian_cpmk072": ["37", "67%"] },
  { "nim": "2201020070", "total_nilai_akhir": "87,5", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["3,8", "75%"], "nilai_capaian_cpmk071": ["33", "94%"], "nilai_capaian_cpmk072": ["46", "84%"] },
  { "nim": "2201020074", "total_nilai_akhir": "58,8", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["3", "60%"], "nilai_capaian_cpmk071": ["22", "62%"], "nilai_capaian_cpmk072": ["29", "53%"] },
  { "nim": "2201020075", "total_nilai_akhir": "82,3", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["4", "80%"], "nilai_capaian_cpmk071": ["32", "92%"], "nilai_capaian_cpmk072": ["41", "75%"] },
  { "nim": "2201020083", "total_nilai_akhir": "80,7", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["4", "80%"], "nilai_capaian_cpmk071": ["31", "88%"], "nilai_capaian_cpmk072": ["41", "75%"] },
  { "nim": "2101020086", "total_nilai_akhir": "2,5", "nilai_capaian_cpmk012": ["0", "0%"], "nilai_capaian_cpmk031": ["0", "0%"], "nilai_capaian_cpmk071": ["2,5", "7,1%"], "nilai_capaian_cpmk072": ["0", "0%"] },
  { "nim": "2201020090", "total_nilai_akhir": "86,7", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["3,8", "75%"], "nilai_capaian_cpmk071": ["34", "97%"], "nilai_capaian_cpmk072": ["44", "80%"] },
  { "nim": "2201020091", "total_nilai_akhir": "80,5", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["4", "80%"], "nilai_capaian_cpmk071": ["31", "87%"], "nilai_capaian_cpmk072": ["41", "75%"] },
  { "nim": "2201020092", "total_nilai_akhir": "63,7", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["3", "60%"], "nilai_capaian_cpmk071": ["27", "76%"], "nilai_capaian_cpmk072": ["29", "53%"] },
  { "nim": "2201020093", "total_nilai_akhir": "78,3", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["3,8", "75%"], "nilai_capaian_cpmk071": ["30", "86%"], "nilai_capaian_cpmk072": ["40", "72%"] },
  { "nim": "2201020094", "total_nilai_akhir": "78,3", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["4", "80%"], "nilai_capaian_cpmk071": ["32", "92%"], "nilai_capaian_cpmk072": ["37", "67%"] },
  { "nim": "2201020095", "total_nilai_akhir": "78,7", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["3,8", "75%"], "nilai_capaian_cpmk071": ["30", "87%"], "nilai_capaian_cpmk072": ["40", "72%"] },
  { "nim": "2201020098", "total_nilai_akhir": "66", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["3,8", "75%"], "nilai_capaian_cpmk071": ["24", "69%"], "nilai_capaian_cpmk072": ["33", "60%"] },
  { "nim": "2201020099", "total_nilai_akhir": "86,7", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["4", "80%"], "nilai_capaian_cpmk071": ["33", "93%"], "nilai_capaian_cpmk072": ["45", "82%"] },
  { "nim": "2201020100", "total_nilai_akhir": "74", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["4", "80%"], "nilai_capaian_cpmk071": ["30", "86%"], "nilai_capaian_cpmk072": ["35", "64%"] },
  { "nim": "2201020103", "total_nilai_akhir": "87,8", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["3,5", "70%"], "nilai_capaian_cpmk071": ["35", "101%"], "nilai_capaian_cpmk072": ["44", "80%"] },
  { "nim": "2201020104", "total_nilai_akhir": "74", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["4", "80%"], "nilai_capaian_cpmk071": ["30", "86%"], "nilai_capaian_cpmk072": ["35", "64%"] },
  { "nim": "2201020105", "total_nilai_akhir": "68,2", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["3,5", "70%"], "nilai_capaian_cpmk071": ["27", "76%"], "nilai_capaian_cpmk072": ["33", "60%"] },
  { "nim": "2201020106", "total_nilai_akhir": "56,5", "nilai_capaian_cpmk012": ["4,5", "90%"], "nilai_capaian_cpmk031": ["2,5", "50%"], "nilai_capaian_cpmk071": ["24", "67%"], "nilai_capaian_cpmk072": ["26", "47%"] },
  { "nim": "2201020109", "total_nilai_akhir": "74", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["4", "80%"], "nilai_capaian_cpmk071": ["30", "86%"], "nilai_capaian_cpmk072": ["35", "64%"] },
  { "nim": "2201020112", "total_nilai_akhir": "57", "nilai_capaian_cpmk012": ["4,5", "90%"], "nilai_capaian_cpmk031": ["2,5", "50%"], "nilai_capaian_cpmk071": ["24", "69%"], "nilai_capaian_cpmk072": ["26", "47%"] },
  { "nim": "2201020116", "total_nilai_akhir": "52,2", "nilai_capaian_cpmk012": ["4,5", "90%"], "nilai_capaian_cpmk031": ["2,5", "50%"], "nilai_capaian_cpmk071": ["23", "66%"], "nilai_capaian_cpmk072": ["22", "40%"] },
  { "nim": "2201020117", "total_nilai_akhir": "63,1", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["3,5", "70%"], "nilai_capaian_cpmk071": ["26", "73%"], "nilai_capaian_cpmk072": ["29", "53%"] },
  { "nim": "2201020118", "total_nilai_akhir": "86,2", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["4", "80%"], "nilai_capaian_cpmk071": ["32", "92%"], "nilai_capaian_cpmk072": ["45", "82%"] },
  { "nim": "2201020122", "total_nilai_akhir": "62,5", "nilai_capaian_cpmk012": ["5", "100%"], "nilai_capaian_cpmk031": ["3,5", "70%"], "nilai_capaian_cpmk071": ["25", "71%"], "nilai_capaian_cpmk072": ["29", "53%"] },
  { "nim": "2201020123", "total_nilai_akhir": "59", "nilai_capaian_cpmk012": ["4,5", "90%"], "nilai_capaian_cpmk031": ["1", "20%"], "nilai_capaian_cpmk071": ["25", "70%"], "nilai_capaian_cpmk072": ["29", "53%"] }
];

var points = data.map(function(d) {
  var total = parseFloat(d.total_nilai_akhir.replace(",", "."));
  var cpmk012 = parseFloat(d.nilai_capaian_cpmk012[0].replace(",", "."));
  var cpmk031 = parseFloat(d.nilai_capaian_cpmk031[0].replace(",", "."));
  var cpmk071 = parseFloat(d.nilai_capaian_cpmk071[0].replace(",", "."));
  var cpmk072 = parseFloat(d.nilai_capaian_cpmk072[0].replace(",", "."));
  var avg = (cpmk012 + cpmk031 + cpmk071 + cpmk072) / 4;
  return { nim: d.nim, total: total, avg: avg };
});

var canvas = document.getElementById("bubbleChart");
var ctx = canvas.getContext("2d");
var margin = { top: 40, right: 40, bottom: 60, left: 60 };
var chartWidth = canvas.width - margin.left - margin.right;
var chartHeight = canvas.height - margin.top - margin.bottom;
var xMin = 0, xMax = 25;
var yMin = 0, yMax = 100;

function xScale(val) {
  return margin.left + ((val - xMin) / (xMax - xMin)) * chartWidth;
}
function yScale(val) {
  return canvas.height - margin.bottom - ((val - yMin) / (yMax - yMin)) * chartHeight;
}

var currentPage = 1;
var pageSize = 10;
var totalPages = Math.ceil(points.length / pageSize);

function isOverlapping(b1, b2) {
  var dx = b1.cx - b2.cx;
  var dy = b1.cy - b2.cy;
  var distance = Math.sqrt(dx * dx + dy * dy);
  return distance < (b1.r + b2.r + 5);
}

function getBubbleColor(total) {
  if (total > 80) {
    return "rgba(0, 200, 0, 0.6)"; // hijau, untuk nilai tinggi
  } else if (total >= 60) {
    return "rgba(255, 215, 0, 0.6)"; // kuning, nilai sedang
  } else {
    return "rgba(200, 0, 0, 0.6)"; // merah, nilai rendah
  }
}

function drawGrid() {
  ctx.strokeStyle = "#ddd";
  ctx.lineWidth = 1;
  var xTicks = 6;
  for (var i = 0; i <= xTicks; i++) {
    var val = xMin + i * ((xMax - xMin) / xTicks);
    var x = xScale(val);
    ctx.beginPath();
    ctx.moveTo(x, margin.top);
    ctx.lineTo(x, canvas.height - margin.bottom);
    ctx.stroke();
  }
  var yTicks = 5;
  for (var j = 0; j <= yTicks; j++) {
    var val = yMin + j * ((yMax - yMin) / yTicks);
    var y = yScale(val);
    ctx.beginPath();
    ctx.moveTo(margin.left, y);
    ctx.lineTo(canvas.width - margin.right, y);
    ctx.stroke();
  }
}

function drawAxes() {
  drawGrid();
  ctx.strokeStyle = "#333";
  ctx.lineWidth = 1;
  
  // Sumbu X
  ctx.beginPath();
  ctx.moveTo(margin.left, canvas.height - margin.bottom);
  ctx.lineTo(canvas.width - margin.right, canvas.height - margin.bottom);
  ctx.stroke();
  
  // Sumbu Y
  ctx.beginPath();
  ctx.moveTo(margin.left, margin.top);
  ctx.lineTo(margin.left, canvas.height - margin.bottom);
  ctx.stroke();
  
  ctx.fillStyle = "#333";
  ctx.font = "12px sans-serif";
  var xTicks = 6;
  for (var i = 0; i <= xTicks; i++) {
    var val = xMin + i * ((xMax - xMin) / xTicks);
    var x = xScale(val);
    var y = canvas.height - margin.bottom;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + 5);
    ctx.stroke();
    ctx.fillText(val.toFixed(1), x - 10, y + 20);
  }
  var yTicks = 5;
  for (var j = 0; j <= yTicks; j++) {
    var val = yMin + j * ((yMax - yMin) / yTicks);
    var x = margin.left;
    var y = yScale(val);
    ctx.beginPath();
    ctx.moveTo(x - 5, y);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.fillText(val.toFixed(0), x - 40, y + 4);
  }
  ctx.fillText("Rata-rata Nilai CPMK", canvas.width / 2 - 50, canvas.height - 20);
  ctx.save();
  ctx.translate(20, canvas.height / 2 + 40);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText("Nilai Akhir", 0, 0);
  ctx.restore();
}

function drawBubbles() {
  var startIndex = (currentPage - 1) * pageSize;
  var currentPoints = points.slice(startIndex, startIndex + pageSize);
  var placedBubbles = [];
  
  currentPoints.forEach(function(p) {
    var r = p.total / 2;
    var cx = xScale(p.avg);
    var cy = yScale(p.total);

    var bubble = { cx: cx, cy: cy, r: r };

    var attempts = 0;
    while (placedBubbles.some(b => isOverlapping(bubble, b)) && attempts < 10) {
      bubble.cx += 5;
      attempts++;
    }
   
    var fillColor = getBubbleColor(p.total);

    ctx.beginPath();
    ctx.arc(bubble.cx, bubble.cy, bubble.r, 0, 2 * Math.PI);
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.strokeStyle = "rgba(50, 100, 200, 0.8)";
    ctx.stroke();

    ctx.fillStyle = "#000";
    ctx.font = "10px sans-serif";
    ctx.fillText(p.nim, bubble.cx - bubble.r, bubble.cy - bubble.r);

    p.cx = bubble.cx;
    p.cy = bubble.cy;
    p.r = bubble.r;

    placedBubbles.push(bubble);
  });
}

function drawChart() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawAxes();
  drawBubbles();
  updatePageIndicator();
}

function updatePageIndicator() {
  document.getElementById("pageIndicator").innerText = "Halaman " + currentPage + " dari " + totalPages;
}

document.getElementById("prevBtn").addEventListener("click", function() {
  if (currentPage > 1) {
    currentPage--;
    drawChart();
  }
});
document.getElementById("nextBtn").addEventListener("click", function() {
  if (currentPage < totalPages) {
    currentPage++;
    drawChart();
  }
});

drawChart();

var tooltip = document.getElementById("tooltip");
canvas.addEventListener("mousemove", function(e) {
  var rect = canvas.getBoundingClientRect();
  var mouseX = e.clientX - rect.left;
  var mouseY = e.clientY - rect.top;
  var startIndex = (currentPage - 1) * pageSize;
  var currentPoints = points.slice(startIndex, startIndex + pageSize);
  var found = false;
  
  currentPoints.forEach(function(p) {
    var dx = mouseX - p.cx;
    var dy = mouseY - p.cy;
    if (Math.sqrt(dx * dx + dy * dy) < p.r) {
      tooltip.style.left = (e.pageX + 10) + "px";
      tooltip.style.top = (e.pageY + 10) + "px";
      tooltip.style.display = "block";
      tooltip.innerHTML = "<strong>NIM:</strong> " + p.nim + "<br>" +
                          "<strong>Rata-rata CPMK:</strong> " + p.avg.toFixed(2) + "<br>" +
                          "<strong>Nilai Akhir:</strong> " + p.total;
      found = true;
    }
  });
  if (!found) {
    tooltip.style.display = "none";
  }
});
