$(function() {
    $(".vi").click(function() {
        $(".menu ul:nth-child(1) li:nth-child(1) a").text("Trang chủ");
        $(".menu ul:nth-child(1) li:nth-child(2) a").text("Giới thiệu");
        $(".menu ul:nth-child(1) li:nth-child(3) a").text("Hình ảnh");
        $(".menu ul:nth-child(1) li:nth-child(4) a").text("Giới thiệu mùa 1");
        $(".menu ul:nth-child(1) li:nth-child(5) a").text("Giới thiệu mùa 2");
        $(".menu ul:nth-child(1) li:nth-child(6) a").text("Các liên kết khác");
        $(".menu ul:nth-child(1) li:nth-child(7) a").text("Tiếng Việt");
        $(".menu ul:nth-child(1) li:nth-child(8) a").text("English");

        
        $("#intro").text("Giới thiệu");
        $("#intro__content").text("Trường trung học Koudo Ikusei là một trường hàng đầu có uy tín với các cơ sở hiện đại, nơi gần như 100% sinh viên đi học đại học có việc làm. Các sinh viên ở đó có quyền tự do mặc bất kỳ quần áo hay chọn kiểu tóc mà họ muốn. Koudo Ikusei là một trường thiên đường, nhưng sự thật là chỉ có cấp trên của sinh viên được đối xử tốt. Ayanokouji Kiyotaka là một sinh viên của lớp D, nơi mà dành cho các sinh viên 'kém' và bị chế giễu. Vì một lý do nào đó, Kiyotaka đã bất cẩn trong kỳ thi tuyển sinh của mình, và được đưa vào lớp D. Sau khi gặp Horikita Suzune và Kushida Kikyou, hai sinh viên khác trong lớp, cuộc sống của Kiyotaka bắt đầu thay đổi.");
        $("#picture").text("Hình ảnh");
        $("#trss1").text("Giới thiệu mùa 1");
        $("#trss2").text("Giới thiệu mùa 2");
        $("#exlink").text("Các liên kết khác");
        $("#git").text("LIÊN LẠC");
        $("#cm").text("TƯƠNG TÁC VỚI TÔI");
    })
});

$(function() {
    $(".en").click(function() {
        $(".menu ul:nth-child(1) li:nth-child(1) a").text("Home");
        $(".menu ul:nth-child(1) li:nth-child(2) a").text("Introduction");
        $(".menu ul:nth-child(1) li:nth-child(3) a").text("Picture Gallery");
        $(".menu ul:nth-child(1) li:nth-child(4) a").text("Trailer Season 1");
        $(".menu ul:nth-child(1) li:nth-child(5) a").text("Trailer Season 2");
        $(".menu ul:nth-child(1) li:nth-child(6) a").text("External Link");
        $(".menu ul:nth-child(1) li:nth-child(7) a").text("Vietnamese");
        $(".menu ul:nth-child(1) li:nth-child(8) a").text("English");

        $("#intro").text("Introduction");
        $("#intro__content").text("Koudo Ikusei High School is a prestigious top school with state-of-the-art facilities where almost 100% of students go to university to get a job. The students there have the freedom to wear any clothes or choose the hairstyle they want. Koudo Ikusei is a heavenly school, but the truth is that only the superiors of students are treated well. Ayanokouji Kiyotaka is a student in Class D, which is reserved for 'bad' and mocked students. For some reason, Kiyotaka was careless in his entrance exam, and was placed in Class D. After meeting Horikita Suzune and Kushida Kikyou, two other students in the class, Kiyotaka's life began to change.");
        $("#picture").text("Picture Gallery");
        $("#trss1").text("Trailer Season 1");
        $("#trss2").text("Trailer Season 2");
        $("#exlink").text("External Link");
        $("#git").text("GET IN TOUCH");
        $("#cm").text("CONTACT ME");
    })
});
