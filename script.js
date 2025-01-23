// script.js
let messages = [
    'Chúc bạn một năm mới thật nhiều niềm vui, hạnh phúc và thành công!',
    'Chúc bạn luôn hạnh phúc và thành công trong mọi việc!',
    'Chúc bạn một năm mới tràn đầy sức khỏe!',
    'Chúc bạn đạt được mọi ước mơ trong năm nay!',
    'Chúc bạn có những chuyến đi vui vẻ và an toàn!',
    'Chúc bạn gặp nhiều may mắn trong công việc!',
    'Chúc bạn có thật nhiều thời gian bên gia đình!',
    'Chúc bạn học tập và làm việc hiệu quả!',
    'Chúc bạn luôn mạnh mẽ và kiên cường!',
    'Chúc bạn có những khoảnh khắc thật đẹp trong cuộc sống!',
    'Chúc bạn thành công trong mọi thử thách!',
    'Chúc bạn có một năm đầy ắp tiếng cười và niềm vui!',
    'Chúc bạn luôn được yêu thương và quý mến!'
];

let step = 0; // Biến để theo dõi trạng thái hộp văn bản

function changeMessage() {
    const messageText = document.getElementById('message-text');
    const goBackButton = document.getElementById('goBackButton');
    const imageContainer = document.getElementById('imageContainer');
    const messageBox = document.querySelector('.message-box');

    // Nếu chưa đến bước cuối cùng
    if (step < messages.length - 1) {
        messageText.textContent = messages[step + 1];
        step++;

        // Thêm nút quay lại chỉ khi chưa có
        if (step > 0 && !goBackButton) {
            const goBackButton = document.createElement('button');
            goBackButton.textContent = 'Quay lạiiii';
            goBackButton.onclick = function() {
                goBack();
            };
            messageBox.appendChild(goBackButton); // Thêm nút vào trong hộp
            goBackButton.id = 'goBackButton'; // Thêm id cho nút để truy xuất
        }

        // Ẩn ảnh và không thêm nút "Tiếp tục" ở bước cuối cùng
        if (step === messages.length - 1) {
            imageContainer.style.display = 'block';
        }
    }
}

function goBack() {
    const messageText = document.getElementById('message-text');
    const goBackButton = document.getElementById('goBackButton');
    const imageContainer = document.getElementById('imageContainer');
    const messageBox = document.querySelector('.message-box');

    // Trở lại hộp trước
    if (step > 0) {
        step--;
        messageText.textContent = messages[step];

        // Ẩn nút "Trở về hộp trước" nếu ở bước đầu tiên
        if (step === 0) {
            goBackButton.style.display = 'none';
        }

        // Ẩn ảnh và tiếp tục hiển thị nút "Chúc thêm lần nữa"
        if (step < messages.length - 1) {
            imageContainer.style.display = 'none';
        }
    }
}

// Tạo hoa đào với cánh và hiệu ứng rơi ngẫu nhiên
function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    
    // Đặt vị trí ngẫu nhiên cho hoa đào
    petal.style.left = Math.random() * 100 + 'vw'; // Vị trí ngang
    petal.style.animationDuration = Math.random() * 3 + 3 + 's'; // Thời gian rơi ngẫu nhiên từ 3 đến 6s
    petal.style.animationDelay = Math.random() * 3 + 's'; // Delay ngẫu nhiên trước khi rơi
    
    document.querySelector('.falling-petals').appendChild(petal);
}

// Tạo hoa đào mỗi 100ms
setInterval(createPetal, 100);
