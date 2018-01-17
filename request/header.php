<?php

$ar = array();

$ar['nav'] = array(
    array('link' => 'gioi-thieu', 'text' => 'Giới thiệu'),
    array('link' => 'gioi-thieu-chung', 'parent' => 'gioi-thieu', 'text' => 'Giới thiệu chung'),
    array('link' => 'co-cau-to-chuc', 'parent' => 'gioi-thieu', 'text' => 'Cơ cấu tổ chức'),

    array('link' => 'dao-tao', 'text' => 'Đào tạo'),
    array('link' => 'gioi-thieu-chung', 'parent' => 'dao-tao', 'text' => 'Giới thiệu chung'),
    array('link' => 'cam-ket-dau-ra', 'parent' => 'dao-tao', 'text' => 'Cam kết chuẩn đầu ra'),
    array('link' => 'dai-hoc', 'parent' => 'dao-tao', 'text' => 'Đào tạo đại học'),
    array('link' => 'sau-dai-hoc', 'parent' => 'dao-tao', 'text' => 'Đào tạo sau đại học'),
    array('link' => 'chuyen-cap', 'parent' => 'dao-tao', 'text' => 'Chuyển cấp, liên thông'),
    array('link' => 'bo-tuc', 'parent' => 'dao-tao', 'text' => 'Bổ túc, bồi dưỡng'),
    array('link' => 'chuyen-cap', 'parent' => 'dao-tao', 'text' => 'Tra cứu điểm thi'),

    array('link' => 'tuyen-sinh', 'text' => 'Tuyển sinh'),
    array('link' => 'thong-tin-chung', 'parent' => 'tuyen-sinh', 'text' => 'Thông tin chung'),
    array('link' => 'dai-hoc', 'parent' => 'tuyen-sinh', 'text' => 'Tuyển sinh đại học'),
    array('link' => 'lien-thong-dai-hoc', 'parent' => 'tuyen-sinh', 'text' => 'Tuyển sinh liên thông đại học'),
    array('link' => 'sau-dai-hoc', 'parent' => 'tuyen-sinh', 'text' => 'Tuyển sinh sau đại học'),
    array('link' => 'cau-hoi', 'parent' => 'tuyen-sinh', 'text' => 'Một số câu hỏi thường gặp'),

    array('link' => 'NCKH', 'text' => 'Nghiên cứu khoa học'),
    array('link' => 'gioi-thieu-chung', 'parent' => 'NCKH', 'text' => 'Giới thiệu chung'),
    array('link' => 'hoi-dong', 'parent' => 'NCKH', 'text' => 'Các Hội đồng khoa học'),
    array('link' => 'du-an', 'parent' => 'NCKH', 'text' => 'Các chương trình, dự án, đề tài'),
    array('link' => 'nhom-nghien-cuu', 'parent' => 'NCKH', 'text' => 'Các nhóm nghiên cứu'),
    array('link' => 'san-pham', 'parent' => 'NCKH', 'text' => 'Sản phẩm khoa học công nghệ'),
    array('link' => 'thanh-tuu', 'parent' => 'NCKH', 'text' => 'Một số thành tựu quan trọng'),
  );

echo json_encode($ar, JSON_UNESCAPED_UNICODE);