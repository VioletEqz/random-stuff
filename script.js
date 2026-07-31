const CONFIG = {
  senior: {
    name: "Phạm Hải Nam",
    role: "Jungler/AI Lead/DevOp/MLOp",
    department: "Team AI",
  },
  messages: [
    {
      from: "Shinichien",
      content:
        "@MISA AVA (Beta) nay sinh nhật anh Nam, cho tôi lời nhắn hài hước, ý nghĩa.",
    },
    {
      from: "Thanhkun",
      content: "Chúc anh sức khỏe tiền tài - Kỳ review tới x2 lương liền.",
    },
    {
      from: "Anonymous",
      content:
        "Chúc anh Nam sớm tìm được thú vui trong công việc, không chán nản cứ haizz haizz nữa.",
    },
    {
      from: "Anonymous",
      content:
        "Em nghi anh em minh noi it hieu nhieu - chuc minh sinh nhat anh nhe :v",
    },
    {
      from: "Trần Văn Hậu",
      content: "'Anh có điều gì muốn nhắn nhủ anh Nam không' - 'Không bit nữa'",
    },
  ],
  compliments: [
    "Senior này là lý do nhiều deadline vẫn còn cơ hội sống sót.",
    "Khả năng xử lý vấn đề vượt quá phạm vi của gói đánh giá tiêu chuẩn.",
    "Độ ổn định của team tăng đáng kể khi trạng thái của anh chuyển sang Online.",
    "Không phát hiện giải pháp thay thế tương đương trong cơ sở dữ liệu hiện tại.",
    "Khả năng khiến vấn đề khó trông đơn giản được đánh dấu là lợi thế cạnh tranh.",
    "Hệ thống ghi nhận mức tăng rõ rệt về độ tự tin của team khi anh tham gia.",
  ],
  hiddenAttributes: [
    "Biết khi nào nên đưa ra đáp án và khi nào nên để người khác tự tìm thấy nó.",
  ],
};

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function personalize() {
  $$("[data-senior-name]").forEach(
    (el) => (el.textContent = CONFIG.senior.name),
  );
  const role = $("[data-senior-role]");
  if (role)
    role.textContent = `${CONFIG.senior.role} · ${CONFIG.senior.department}`;
}
function showSection(id, scroll = true) {
  const section = document.getElementById(id);
  section.hidden = false;
  section.classList.remove("section-enter");
  requestAnimationFrame(() => section.classList.add("section-enter"));
  if (scroll)
    setTimeout(
      () => section.scrollIntoView({ behavior: "smooth", block: "start" }),
      120,
    );
}
async function bootSequence() {
  const logs = [
    "Khởi tạo EVALUATOR...",
    "Đang kết nối dữ liệu nội bộ...",
    "Đang truy xuất lịch sử dự án...",
    "Đang phân tích mức độ ảnh hưởng đến team...",
    "Đang kiểm tra độ kiên nhẫn với Fresher...",
    "Đang đối chiếu số deadline đã sống sót...",
    "Phát hiện lượng dữ liệu vượt mức thông thường.",
    "WARNING: Đối tượng có thể không thuộc nhóm nhân sự tiêu chuẩn.",
  ];
  const logBox = $("#terminal-log");
  const bar = $("#progress-bar");
  const progressText = $("#progress-value");
  let progress = 0;

  for (let i = 0; i < logs.length; i++) {
    const line = document.createElement("div");
    line.className = `log-line${i >= 6 ? " warning" : ""}`;
    line.textContent = `> ${logs[i]}`;
    logBox.appendChild(line);

    const target =
      i === logs.length - 1
        ? 100
        : Math.min(96, progress + 10 + Math.random() * 9);
    while (progress < target) {
      progress += 1;
      bar.style.width = `${progress}%`;
      progressText.textContent = `${progress}%`;
      await sleep(i === 5 && progress > 90 ? 70 : 18);
    }
    await sleep(i >= 6 ? 400 : 250);
  }

  $("#start-btn").disabled = false;
  $("#system-status").textContent = "READY FOR EVALUATION";
}
function animateStats() {
  $$(".stat-card").forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("visible");
      card.querySelector(".meter span").style.width =
        `${Number(card.dataset.score)}%`;
    }, index * 160);
  });
}
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function setOutput(title, body, status = "SYSTEM RESPONSE") {
  $("#dynamic-output").innerHTML = `
    <div style="font-weight:900;color:#315cc7;margin-bottom:5px">${status}</div>
    <div style="font-size:17px;font-weight:900;margin-bottom:5px">${title}</div>
    <small>${body}</small>
  `;
}
async function runBirthdayDetection() {
  showSection("birthday-detection");
  const log = $("#birthday-log");
  log.innerHTML = "";
  const entries = [
    "Đang tạo báo cáo cuối cùng...",
    "Đang kiểm tra lịch hệ thống...",
    "Phát hiện sự kiện trọng yếu.",
    "Mức ưu tiên: MAXIMUM",
    `Xác thực hoàn tất: Hôm nay là sinh nhật của ${CONFIG.senior.name}.`,
  ];
  for (const item of entries) {
    const line = document.createElement("div");
    line.className = "log-line";
    line.textContent = `> ${item}`;
    log.appendChild(line);
    await sleep(560);
  }
  $("#birthday-btn").hidden = false;
}
function activateBirthdayMode() {
  document.body.classList.add("birthday-active");
  $("#system-status").textContent = "BIRTHDAY PROTOCOL ACTIVE";
  showSection("birthday-mode");
  launchConfetti(190);
}
async function forceBreak() {
  const output = $("#break-output");
  output.innerHTML = "";
  const steps = [
    "Đang tắt Work Mode...",
    "Đang đóng các cuộc họp không cần thiết...",
    "Đang hạ mức độ nghiêm trọng của email...",
    "Đang trì hoãn deadline...",
    "Đang triển khai bánh sinh nhật...",
    "Operation completed successfully.",
  ];
  for (const step of steps) {
    const row = document.createElement("div");
    row.textContent = `> ${step}`;
    output.appendChild(row);
    await sleep(420);
  }
  showSection("messages");
  showSection("ending", false);
  launchConfetti(260);
}
let currentMessage = 0;
function renderMessage() {
  const msg = CONFIG.messages[currentMessage];
  $("#message-id").textContent =
    `FEEDBACK ID: ${String(currentMessage + 1).padStart(3, "0")}`;
  $("#message-from").textContent = `FROM: ${msg.from}`;
  $("#message-content").textContent = msg.content;
}
function replay() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => window.location.reload(), 500);
}
function setupEvents() {
  $("#start-btn").addEventListener("click", async () => {
    const scanText = $("#scan-status-text");
    if (scanText)
      scanText.textContent = "Facial signature matched. Opening profile.dat...";
    $("#system-status").textContent = "status: identity verified";
    showSection("profile");

    const avatar = document.querySelector(".profile-avatar");
    if (avatar) {
      avatar.classList.remove("revealed");
      await sleep(180);
      avatar.classList.add("revealed");
    }
  });
  $("#evaluate-btn").addEventListener("click", () => {
    $("#system-status").textContent = "status: analyzing exceptional metrics";
    showSection("evaluation");
    animateStats();
    setTimeout(() => showSection("achievements", false), 1500);
  });
  $("#compliment-btn").addEventListener("click", () =>
    setOutput(
      "AI COMPLIMENT GENERATED",
      randomItem(CONFIG.compliments),
      "CONFIDENCE: 100%",
    ),
  );
  $("#hidden-btn").addEventListener("click", () =>
    setOutput(
      "HIDDEN ATTRIBUTE DETECTED",
      randomItem(CONFIG.hiddenAttributes),
      "ACCESS GRANTED",
    ),
  );
  $("#experience-btn").addEventListener("click", async () => {
    setOutput(
      "Đang phân tích số năm kinh nghiệm...",
      "Đang đối chiếu kỹ năng với dữ liệu lịch sử.",
      "PROCESSING",
    );
    await sleep(1000);
    setOutput(
      "ERROR: Kinh nghiệm thực tế không khớp với tuổi sinh học.",
      "Estimated professional experience: Approximately 300 years.",
      "ANOMALY CONFIRMED",
    );
  });
  $("#finalize-btn").addEventListener("click", runBirthdayDetection);
  $("#birthday-btn").addEventListener("click", activateBirthdayMode);
  $("#break-btn").addEventListener("click", forceBreak);
  $("#prev-message").addEventListener("click", () => {
    currentMessage =
      (currentMessage - 1 + CONFIG.messages.length) % CONFIG.messages.length;
    renderMessage();
  });
  $("#next-message").addEventListener("click", () => {
    currentMessage = (currentMessage + 1) % CONFIG.messages.length;
    renderMessage();
  });
  $("#celebrate-btn").addEventListener("click", () => launchConfetti(220));
  $("#replay-btn").addEventListener("click", replay);
}
function launchConfetti(count = 180) {
  const canvas = $("#confetti-canvas");
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  ctx.scale(dpr, dpr);

  const palette = [
    "#4f7cff",
    "#8b6cff",
    "#ffc857",
    "#58d6b3",
    "#ff7db5",
    "#ffffff",
  ];
  const pieces = Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: -20 - Math.random() * window.innerHeight * 0.35,
    width: 6 + Math.random() * 8,
    height: 8 + Math.random() * 11,
    color: randomItem(palette),
    speed: 2 + Math.random() * 5,
    drift: -1.4 + Math.random() * 2.8,
    rotation: Math.random() * Math.PI,
    rotationSpeed: -0.14 + Math.random() * 0.28,
  }));

  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    pieces.forEach((p) => {
      p.y += p.speed;
      p.x += p.drift;
      p.rotation += p.rotationSpeed;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, 1 - frame / 300);
      ctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);
      ctx.restore();
    });
    frame += 1;
    if (frame < 300 && pieces.some((p) => p.y < window.innerHeight + 40)) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
  }
  animate();
}

personalize();
renderMessage();
setupEvents();
bootSequence();
