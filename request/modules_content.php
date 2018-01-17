<?php

$ar = array(

    array('link' => 'gioi-thieu-chung', 'content' => "<h3>Lịch sử phát triển</h3>
    <p>Kenyon's beautiful 1,000-acre campus is in Gambier, Ohio, 45 miles from the state's capital, Columbus. The campus includes a 500-acre nature preserve. <a href=\"http://www.kenyon.edu/virtual-tour/locations/middle-path/\">Take the virtual tour</a>.</p>
    
    <h3>Chức năng, nhiệm vụ</h3>
    <p>Kenyon is a private, residential liberal-arts college. The College offers exceptional programs, opportunities to collaborate with faculty, and the ethos of a small and welcoming community.</p>
    
    <h3>Sứ mạng, mục tiêu đào tạo</h3>
    <p>Kenyon is highly selective. Of 460 entering first-year students in the Class of 2021, 47 percent are in the top 5 percent of their high school graduating class. <a href=\"http://www.kenyon.edu/admissions-aid/how-to-apply/\">Learn about applying to Kenyon</a>.</p>
    
    <h3>Tiềm lực</h3>
    <p>Fifty-three percent of Kenyon's 1,680 students are women; 47 percent are men. About 20 percent are African Americans, Asians, and Latinos/Hispanic-Americans, Native Americans, and multiethnic students. Students come from across the United States and from 45 other nations. <a href=\"http://www.kenyon.edu/admissions-aid/admissions-statistics/\">More about Kenyon's class profile</a>.</p>"),

    array('link' => 'co-cau-to-chuc', 'parent' => 'gioi-thieu', 'text' => 'Cơ cấu tổ chức', 'content' => "<h3>Cơ cấu tổ chức</h3>
    ~~~"),

    array('link' => 'so-do', 'parent' => 'co-cau-to-chuc', 'text' => 'Sơ đồ mô hình tổ chức', 'content' => "<h3>Sơ đồ mô hình tổ chức</h3>
    ~~~"),

    array('link' => 'ban-giam-doc', 'parent' => 'co-cau-to-chuc', 'text' => 'Ban giám đốc', 'content' => "<h3>Ban giám đốc</h3>
    ~~~"),

    array('link' => 'khoa-vien', 'parent' => 'co-cau-to-chuc', 'text' => 'Khối khoa, viện', 'content' => "<h3>Khối khoa viện</h3>
    ~~~"),

    array('link' => 'don-vi-quan-ly', 'parent' => 'co-cau-to-chuc', 'text' => 'Khối đơn vị quản lý', 'content' => "<h3>Khối đơn vị quản lý</h3>
    ~~~"),
  //)


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

echo json_encode($ar);