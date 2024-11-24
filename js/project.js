// ฟังก์ชันเปิดและปิด Modal
function setupModal(openBtnSelector, modalSelector, closeBtnSelector) {
    const openModalBtn = document.querySelector(openBtnSelector);
    const modal = document.querySelector(modalSelector);
    const closeBtn = document.querySelector(closeBtnSelector);

    // เปิด Modal
    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'flex'; // แสดง modal
    });

    // ปิด Modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'; // ซ่อน modal
    });

    // ปิด Modal เมื่อคลิกนอก Modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none'; // ซ่อน modal ถ้าคลิกนอก modal
        }
    });
}

// เรียกใช้ฟังก์ชันเพื่อตั้งค่า Modal สำหรับแต่ละปุ่ม
setupModal('.open-modal-btn', '#modal', '#close-btn');
setupModal('.open-modal-btn2', '#modal2', '#close-btn2');
setupModal('.open-modal-btn3', '#modal3', '#close-btn3');




const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#00b5e2", 
  "#00a3cc", 
  "#0097b6", 
  "#0088a7", 
  "#00768d", 
  "#006a7f", 
  "#005f70", 
  "#005563", 
  "#004a56", 
  "#00404a", 
  "#00354d", 
  "#003147", 
  "#00273f", 
  "#001f38", 
  "#001533", 
  "#00102d", 
  "#000a26", 
  "#000620", 
  "#00031a", 
  "#000015"  
];


circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
