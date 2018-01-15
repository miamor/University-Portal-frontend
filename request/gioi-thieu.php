<?php

$ar = array();

$ar['nav'] = array(
    array('link' => 'gioi-thieu-chung', 'text' => 'Giới thiệu chung'),
    array('link' => 'co-cau-to-chuc', 'text' => 'Cơ cấu tổ chức'),
    array('link' => 'so-do', 'parent' => 'co-cau-to-chuc', 'text' => 'Sơ đồ mô hình tổ chức'),
    array('link' => 'ban-giam-doc', 'parent' => 'co-cau-to-chuc', 'text' => 'Ban giám đốc'),
    array('link' => 'khoa-vien', 'parent' => 'co-cau-to-chuc', 'text' => 'Khối khoa, viện'),
    array('link' => 'don-vi-quan-ly', 'parent' => 'co-cau-to-chuc', 'text' => 'Khối đơn vị quản lý'),
);

$ar['content'] = array(
  // những content trong nav gioi-thieu-chung
  'gioi-thieu-chung' => "<h3>Lịch sử phát triển</h3>
  <p>Kenyon's beautiful 1,000-acre campus is in Gambier, Ohio, 45 miles from the state's capital, Columbus. The campus includes a 500-acre nature preserve. <a href=\"http://www.kenyon.edu/virtual-tour/locations/middle-path/\">Take the virtual tour</a>.</p>
  
  <h3>Chức năng, nhiệm vụ</h3>
  <p>Kenyon is a private, residential liberal-arts college. The College offers exceptional programs, opportunities to collaborate with faculty, and the ethos of a small and welcoming community.</p>
  
  <h3>Sứ mạng, mục tiêu đào tạo</h3>
  <p>Kenyon is highly selective. Of 460 entering first-year students in the Class of 2021, 47 percent are in the top 5 percent of their high school graduating class. <a href=\"http://www.kenyon.edu/admissions-aid/how-to-apply/\">Learn about applying to Kenyon</a>.</p>
  
  <h3>Tiềm lực</h3>
  <p>Fifty-three percent of Kenyon's 1,680 students are women; 47 percent are men. About 20 percent are African Americans, Asians, and Latinos/Hispanic-Americans, Native Americans, and multiethnic students. Students come from across the United States and from 45 other nations. <a href=\"http://www.kenyon.edu/admissions-aid/admissions-statistics/\">More about Kenyon's class profile</a>.</p>",
  
  'co-cau-to-chuc' => "<h3>Cơ cấu tổ chức</h3>
  ~~~",

  'ban-giam-doc' => "<h3>Ban giám đốc</h3>
  ~~~"
);

echo json_encode($ar, JSON_UNESCAPED_UNICODE);