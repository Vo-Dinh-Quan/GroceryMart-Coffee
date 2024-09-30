function loadContent(selector, path) {
    // Lấy dữ liệu đã lưu trong localStorage
    const cachedData = localStorage.getItem(path);

    // Nếu đã có dữ liệu trong localStorage, hiển thị dữ liệu lên HTML
    if (cachedData) {
        document.querySelector(selector).innerHTML = cachedData;
    }

    // Fetch dữ liệu từ server
    fetch(path)
        .then((response) => response.text()) // Chuyển đổi phản hồi thành chuỗi văn bản
        .then((htmlContent) => {
            // Nếu dữ liệu mới khác dữ liệu đã lưu, cập nhật giao diện và lưu vào localStorage
            if (htmlContent !== cachedData) {
                document.querySelector(selector).innerHTML = htmlContent;
                localStorage.setItem(path, htmlContent); // Lưu nội dung mới vào localStorage
            }
        })
        .catch((error) => {
            console.error("Error fetching the content:", error);
        });
}
