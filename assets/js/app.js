
    // ==============================================================
    // 1. DỮ LIỆU 50 MÓN ĂN, ĂN VẶT & ĐỒ UỐNG ĐÀ NẴNG (50 ẢNH ĐỘC LẬP KHỚP 100% TÊN MÓN)
    // ==============================================================
    const CUISINES = {
      vietnam:  { name: "Việt Nam", count: "26 Quán", thumb: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=200&q=80" },
      japan:    { name: "Nhật Bản", count: "6 Quán",  thumb: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=200&q=80" },
      korea:    { name: "Hàn Quốc", count: "5 Quán",  thumb: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?auto=format&fit=crop&w=200&q=80" },
      italy:    { name: "Ý (Italy)", count: "6 Quán", thumb: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=200&q=80" },
      thailand: { name: "Thái Lan", count: "3 Quán",  thumb: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=200&q=80" },
      mexico:   { name: "Mexico",   count: "4 Quán",  thumb: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=200&q=80" }
    };

    const FOODS = [
      // ==================== 1. QUẬN HẢI CHÂU (10 MÓN) ====================
      {
        id: 1, name: "Mì Quảng Tôm Thịt 1A", cuisine: "vietnam", district: "Hải Châu",
        spot: "Số 1A Hải Phòng, Q. Hải Châu", meals: ["breakfast","lunch","dinner"],
        price: 40000, rating: 4.9, time: "10-15 phút", isVeg: false, tags: ["main"],
        img: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 2, name: "Phở Bò & Bún Chả Cá Hờn", cuisine: "vietnam", district: "Hải Châu",
        spot: "113/3 Nguyễn Chí Thanh, Q. Hải Châu", meals: ["breakfast","lunch","latenight"],
        price: 35000, rating: 4.8, time: "10-15 phút", isVeg: false, tags: ["main","healthy"],
        img: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 3, name: "Cơm Gà Xối Mỡ A Hải", cuisine: "vietnam", district: "Hải Châu",
        spot: "96 Phan Châu Trinh, Q. Hải Châu", meals: ["lunch","dinner","latenight"],
        price: 55000, rating: 4.9, time: "15-20 phút", isVeg: false, tags: ["main"],
        img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 4, name: "Gỏi Cuốn & Bánh Tráng Thịt Heo Mậu", cuisine: "vietnam", district: "Hải Châu",
        spot: "35 Đỗ Thúc Tịnh, Q. Hải Châu", meals: ["lunch","dinner"],
        price: 65000, rating: 4.8, time: "15-25 phút", isVeg: false, tags: ["main","healthy"],
        img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 5, name: "Bánh Mì Que & Bánh Mì Bà Lan", cuisine: "vietnam", district: "Hải Châu",
        spot: "62 Trưng Nữ Vương, Q. Hải Châu", meals: ["breakfast","lunch","dinner","latenight"],
        price: 20000, rating: 4.8, time: "5-10 phút", isVeg: false, tags: ["snack"],
        img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 6, name: "Cà Phê Muối Kem Béo Bạch Đằng", cuisine: "vietnam", district: "Hải Châu",
        spot: "98 Bạch Đằng Ven Sông Hàn, Hải Châu", meals: ["breakfast","lunch","dinner","latenight"],
        price: 30000, rating: 4.9, time: "5-10 phút", isVeg: true, tags: ["drink"],
        img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 7, name: "Cà Phê Sữa Đá Phố Cổ Đà Nẵng", cuisine: "vietnam", district: "Hải Châu",
        spot: "96 Bạch Đằng, Q. Hải Châu", meals: ["breakfast","lunch","latenight"],
        price: 35000, rating: 4.8, time: "5-10 phút", isVeg: true, tags: ["drink"],
        img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 8, name: "Pizza 4P's Margherita Nướng Củi", cuisine: "italy", district: "Hải Châu",
        spot: "74 Bạch Đằng (Indochina), Hải Châu", meals: ["lunch","dinner"],
        price: 120000, rating: 4.9, time: "20-30 phút", isVeg: true, tags: ["main"],
        img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 9, name: "Mì Ramen Tonkotsu Chashu Nhật", cuisine: "japan", district: "Hải Châu",
        spot: "26 Nguyễn Chí Thanh, Q. Hải Châu", meals: ["lunch","dinner","latenight"],
        price: 85000, rating: 4.8, time: "15-20 phút", isVeg: false, tags: ["main"],
        img: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 10, name: "Súp Tom Yum Hải Sản Thai Market", cuisine: "thailand", district: "Hải Châu",
        spot: "04 Trần Quốc Toản, Q. Hải Châu", meals: ["lunch","dinner"],
        price: 85000, rating: 4.8, time: "15-25 phút", isVeg: false, tags: ["main","healthy"],
        img: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=600&q=80"
      },

      // ==================== 2. QUẬN SƠN TRÀ (9 MÓN) ====================
      {
        id: 11, name: "Sữa Chua Hoa Quả & Yaourt Muối", cuisine: "vietnam", district: "Sơn Trà",
        spot: "Chân Cầu Trần Thị Lý, Q. Sơn Trà", meals: ["lunch","dinner","latenight"],
        price: 20000, rating: 4.7, time: "5-10 phút", isVeg: true, tags: ["snack","healthy"],
        img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 12, name: "Set Sushi & Sashimi Cá Hồi Tươi", cuisine: "japan", district: "Sơn Trà",
        spot: "Đường Phạm Văn Đồng, Q. Sơn Trà", meals: ["lunch","dinner"],
        price: 140000, rating: 4.9, time: "20-25 phút", isVeg: false, tags: ["main","healthy"],
        img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 13, name: "Há Cảo & Bạch Tuộc Viên Takoyaki", cuisine: "japan", district: "Sơn Trà",
        spot: "Chợ đêm Sơn Trà, Mai Hắc Đế", meals: ["dinner","latenight"],
        price: 35000, rating: 4.7, time: "10-15 phút", isVeg: false, tags: ["snack"],
        img: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 14, name: "Nước Chanh Tắc & Dừa Tươi Mỹ Khê", cuisine: "vietnam", district: "Sơn Trà",
        spot: "Võ Nguyên Giáp, Biển Mỹ Khê, Sơn Trà", meals: ["breakfast","lunch","dinner","latenight"],
        price: 25000, rating: 4.8, time: "5-10 phút", isVeg: true, tags: ["drink","healthy"],
        img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 15, name: "Hải Sản Tôm Mực Nướng Bé Mặn", cuisine: "vietnam", district: "Sơn Trà",
        spot: "Lô 8 Võ Nguyên Giáp, Q. Sơn Trà", meals: ["lunch","dinner","latenight"],
        price: 130000, rating: 4.9, time: "20-30 phút", isVeg: false, tags: ["main"],
        img: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 16, name: "Thịt Nướng BBQ Hàn Quốc", cuisine: "korea", district: "Sơn Trà",
        spot: "A11 Phạm Văn Đồng, Q. Sơn Trà", meals: ["lunch","dinner"],
        price: 150000, rating: 4.9, time: "20-30 phút", isVeg: false, tags: ["main"],
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 17, name: "Trà Đào Cam Sả Ven Sông Hàn", cuisine: "vietnam", district: "Sơn Trà",
        spot: "Đường Trần Hưng Đạo, Q. Sơn Trà", meals: ["breakfast","lunch","dinner","latenight"],
        price: 30000, rating: 4.8, time: "5-10 phút", isVeg: true, tags: ["drink","healthy"],
        img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 18, name: "Bánh Churros Chấm Socola Cầu Rồng", cuisine: "mexico", district: "Sơn Trà",
        spot: "Đuôi Cầu Rồng, Trần Hưng Đạo, Sơn Trà", meals: ["dinner","latenight"],
        price: 35000, rating: 4.7, time: "10-15 phút", isVeg: true, tags: ["snack"],
        img: "https://images.unsplash.com/photo-1624371414361-e670edf4898d?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 19, name: "Mì Udon Nấm & Đậu Hũ Chay Nhật", cuisine: "japan", district: "Sơn Trà",
        spot: "Đường Hồ Nghinh, Q. Sơn Trà", meals: ["breakfast","lunch","dinner"],
        price: 55000, rating: 4.8, time: "15-20 phút", isVeg: true, tags: ["main","healthy"],
        img: "https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?auto=format&fit=crop&w=600&q=80"
      },

      // ==================== 3. QUẬN NGŨ HÀNH SƠN (9 MÓN) ====================
      {
        id: 20, name: "Kem Bơ Cô Vân Chợ Bắc Mỹ An", cuisine: "vietnam", district: "Ngũ Hành Sơn",
        spot: "Chợ Bắc Mỹ An, Nguyễn Bá Lân, NHS", meals: ["lunch","dinner","latenight"],
        price: 20000, rating: 4.9, time: "5-10 phút", isVeg: true, tags: ["snack","drink"],
        img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 21, name: "Nem Lụi & Thịt Xiên Nướng Bắc Mỹ An", cuisine: "vietnam", district: "Ngũ Hành Sơn",
        spot: "25 Nguyễn Bá Lân, Q. Ngũ Hành Sơn", meals: ["lunch","dinner","latenight"],
        price: 30000, rating: 4.8, time: "10-15 phút", isVeg: false, tags: ["snack","main"],
        img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 22, name: "Tokbokki Phô Mai Chả Cá Hàn Quốc", cuisine: "korea", district: "Ngũ Hành Sơn",
        spot: "71 Phan Tứ (ĐH Kinh Tế), Ngũ Hành Sơn", meals: ["lunch","dinner","latenight"],
        price: 35000, rating: 4.8, time: "10-15 phút", isVeg: false, tags: ["snack"],
        img: "https://images.unsplash.com/photo-1635363638580-c2809d049eee?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 23, name: "Trà Sữa Trân Châu Đường Đen Phan Tứ", cuisine: "vietnam", district: "Ngũ Hành Sơn",
        spot: "Đường Phan Tứ, Mỹ An, Ngũ Hành Sơn", meals: ["lunch","dinner","latenight"],
        price: 30000, rating: 4.8, time: "5-10 phút", isVeg: true, tags: ["drink","snack"],
        img: "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 24, name: "Tacos Bò Nướng Salsa Phố Tây", cuisine: "mexico", district: "Ngũ Hành Sơn",
        spot: "An Thượng 2, Mỹ An, Ngũ Hành Sơn", meals: ["lunch","dinner","latenight"],
        price: 55000, rating: 4.8, time: "15-20 phút", isVeg: false, tags: ["main","snack"],
        img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 25, name: "Burrito Đậu Đen & Bơ Guacamole Chay", cuisine: "mexico", district: "Ngũ Hành Sơn",
        spot: "An Thượng 4, Mỹ An, Ngũ Hành Sơn", meals: ["breakfast","lunch","dinner"],
        price: 60000, rating: 4.7, time: "15-20 phút", isVeg: true, tags: ["main","healthy"],
        img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 26, name: "Nachos Giòn Phô Mai Sốt Bơ", cuisine: "mexico", district: "Ngũ Hành Sơn",
        spot: "An Thượng 3, Mỹ An, Ngũ Hành Sơn", meals: ["dinner","latenight"],
        price: 50000, rating: 4.7, time: "10-15 phút", isVeg: true, tags: ["snack"],
        img: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 27, name: "Mì Ý Sốt Kem Nấm Carbonara", cuisine: "italy", district: "Ngũ Hành Sơn",
        spot: "An Thượng 30, Mỹ An, Ngũ Hành Sơn", meals: ["lunch","dinner"],
        price: 80000, rating: 4.8, time: "15-25 phút", isVeg: false, tags: ["main"],
        img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 28, name: "Quesadilla Phô Mai Kẹp Gà Nướng", cuisine: "mexico", district: "Ngũ Hành Sơn",
        spot: "Đường Ngô Thì Sĩ, Mỹ An, Ngũ Hành Sơn", meals: ["breakfast","lunch","dinner","latenight"],
        price: 65000, rating: 4.8, time: "15-20 phút", isVeg: false, tags: ["snack","main"],
        img: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=600&q=80"
      },

      // ==================== 4. QUẬN THANH KHÊ (8 MÓN) ====================
      {
        id: 29, name: "Bún Thịt Nướng & Mì Trộn Lê Duẩn", cuisine: "vietnam", district: "Thanh Khê",
        spot: "K424/03 Lê Duẩn, Q. Thanh Khê", meals: ["breakfast","lunch","dinner"],
        price: 35000, rating: 4.9, time: "10-15 phút", isVeg: false, tags: ["main"],
        img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 30, name: "Pizza Hải Sản Phô Mai Đút Lò", cuisine: "italy", district: "Thanh Khê",
        spot: "255 Hải Phòng, Q. Thanh Khê", meals: ["lunch","dinner","latenight"],
        price: 85000, rating: 4.8, time: "20-25 phút", isVeg: false, tags: ["main","snack"],
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 31, name: "Cơm Thực Dưỡng & Rau Củ Chay", cuisine: "vietnam", district: "Thanh Khê",
        spot: "Đường Điện Biên Phủ, Q. Thanh Khê", meals: ["breakfast","lunch","dinner"],
        price: 30000, rating: 4.8, time: "10-15 phút", isVeg: true, tags: ["main","healthy"],
        img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 32, name: "Sinh Tố Xoài Dâu Tươi Nguyễn Tất Thành", cuisine: "vietnam", district: "Thanh Khê",
        spot: "Đường Nguyễn Tất Thành, Q. Thanh Khê", meals: ["lunch","dinner","latenight"],
        price: 30000, rating: 4.7, time: "5-10 phút", isVeg: true, tags: ["drink","healthy"],
        img: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 33, name: "Cơm Trộn Hàn Quốc Bibimbap Nấm", cuisine: "korea", district: "Thanh Khê",
        spot: "Đường Điện Biên Phủ, Q. Thanh Khê", meals: ["breakfast","lunch","dinner"],
        price: 45000, rating: 4.8, time: "15-20 phút", isVeg: true, tags: ["main","healthy"],
        img: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 34, name: "Pad Thái Tôm Tươi Sốt Me", cuisine: "thailand", district: "Thanh Khê",
        spot: "Đường Lê Độ, Q. Thanh Khê", meals: ["lunch","dinner"],
        price: 60000, rating: 4.8, time: "15-20 phút", isVeg: false, tags: ["main"],
        img: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 35, name: "Bánh Tiramisu Ý & Trà Chiều", cuisine: "italy", district: "Thanh Khê",
        spot: "Đường Lê Duẩn, Q. Thanh Khê", meals: ["lunch","dinner","latenight"],
        price: 35000, rating: 4.8, time: "5-10 phút", isVeg: true, tags: ["snack"],
        img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 36, name: "Mì Ý Sốt Bò Bằm Bolognese", cuisine: "italy", district: "Thanh Khê",
        spot: "Đường Hà Huy Tập, Q. Thanh Khê", meals: ["lunch","dinner"],
        price: 65000, rating: 4.7, time: "15-25 phút", isVeg: false, tags: ["main"],
        img: "https://images.unsplash.com/photo-1621996346565-e3d5d6281298?auto=format&fit=crop&w=600&q=80"
      },

      // ==================== 5. QUẬN LIÊN CHIỂU - HÒA KHÁNH (8 MÓN) ====================
      {
        id: 37, name: "Cánh Gà Chiên Mắm & Chân Gà Sốt Thái", cuisine: "vietnam", district: "Liên Chiểu",
        spot: "Chợ Hòa Khánh, Q. Liên Chiểu", meals: ["dinner","latenight"],
        price: 35000, rating: 4.8, time: "15-20 phút", isVeg: false, tags: ["snack"],
        img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 38, name: "Khoai Tây Lắc Phô Mai & Đồ Ăn Vặt", cuisine: "vietnam", district: "Liên Chiểu",
        spot: "Phạm Như Xương (Cổng ĐH Sư Phạm)", meals: ["lunch","dinner","latenight"],
        price: 20000, rating: 4.7, time: "5-10 phút", isVeg: true, tags: ["snack"],
        img: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 39, name: "Kimbap Cuộn Rong Biển Hàn Quốc", cuisine: "korea", district: "Liên Chiểu",
        spot: "31 Ngô Thì Nhậm, Hòa Khánh", meals: ["breakfast","lunch","dinner","latenight"],
        price: 25000, rating: 4.8, time: "10-15 phút", isVeg: true, tags: ["snack","healthy"],
        img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 40, name: "Cơm Cà Ri Gà Xù Nhật (Katsu Curry)", cuisine: "japan", district: "Liên Chiểu",
        spot: "60 Nguyễn Lương Bằng (ĐH Bách Khoa)", meals: ["lunch","dinner"],
        price: 55000, rating: 4.8, time: "15-20 phút", isVeg: false, tags: ["main"],
        img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 41, name: "Salad Rau Củ & Phô Mai Tươi Chay", cuisine: "italy", district: "Liên Chiểu",
        spot: "Đường Âu Cơ, Hòa Khánh, Liên Chiểu", meals: ["breakfast","lunch","dinner"],
        price: 35000, rating: 4.7, time: "10-15 phút", isVeg: true, tags: ["snack","healthy"],
        img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 42, name: "Súp Bí Đỏ & Bánh Mì Bơ Tỏi Đút Lò", cuisine: "italy", district: "Liên Chiểu",
        spot: "Nguyễn Lương Bằng, Q. Liên Chiểu", meals: ["breakfast","latenight"],
        price: 35000, rating: 4.7, time: "10-15 phút", isVeg: true, tags: ["snack","healthy"],
        img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 43, name: "Bánh Donut Kem Ngọt & Trà Sữa", cuisine: "vietnam", district: "Liên Chiểu",
        spot: "Đường Tôn Đức Thắng, Q. Liên Chiểu", meals: ["lunch","dinner","latenight"],
        price: 25000, rating: 4.8, time: "5-10 phút", isVeg: true, tags: ["snack","drink"],
        img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 44, name: "Burger Bò Phô Mai Nướng Hòa Khánh", cuisine: "vietnam", district: "Liên Chiểu",
        spot: "Đường Ngô Thì Nhậm, Liên Chiểu", meals: ["lunch","dinner","latenight"],
        price: 45000, rating: 4.8, time: "10-15 phút", isVeg: false, tags: ["main","snack"],
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
      },

      // ==================== 6. QUẬN CẨM LỆ (6 MÓN) ====================
      {
        id: 45, name: "Lasagna Bò Đút Lò Phô Mai Ngàn Lớp", cuisine: "italy", district: "Cẩm Lệ",
        spot: "Đường Nguyễn Hữu Thọ, Q. Cẩm Lệ", meals: ["lunch","dinner"],
        price: 85000, rating: 4.9, time: "20-25 phút", isVeg: false, tags: ["main"],
        img: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 46, name: "Matcha Latte Kem Cheese Nhật Bản", cuisine: "japan", district: "Cẩm Lệ",
        spot: "Đường Nguyễn Hữu Thọ, Q. Cẩm Lệ", meals: ["breakfast","lunch","dinner","latenight"],
        price: 35000, rating: 4.8, time: "5-10 phút", isVeg: true, tags: ["drink"],
        img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 47, name: "Gà Rán Sốt Mật Ong Hàn Quốc", cuisine: "korea", district: "Cẩm Lệ",
        spot: "Đường Phan Đăng Lưu / Cẩm Lệ", meals: ["lunch","dinner","latenight"],
        price: 65000, rating: 4.9, time: "15-20 phút", isVeg: false, tags: ["snack","main"],
        img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 48, name: "Cơm Chiên Hải Sản Trái Thơm Thái", cuisine: "thailand", district: "Cẩm Lệ",
        spot: "Cách Mạng Tháng 8, Q. Cẩm Lệ", meals: ["lunch","dinner"],
        price: 60000, rating: 4.8, time: "15-20 phút", isVeg: false, tags: ["main"],
        img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 49, name: "Kem Gelato Ý & Kem Dừa Cẩm Lệ", cuisine: "italy", district: "Cẩm Lệ",
        spot: "Đường Ông Ích Đường, Q. Cẩm Lệ", meals: ["lunch","dinner","latenight"],
        price: 30000, rating: 4.8, time: "5-10 phút", isVeg: true, tags: ["snack"],
        img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 50, name: "Bánh Kem Socola & Tiệm Bánh Ngọt", cuisine: "vietnam", district: "Cẩm Lệ",
        spot: "Khuê Trung, Cách Mạng Tháng 8, Cẩm Lệ", meals: ["lunch","dinner","latenight"],
        price: 35000, rating: 4.8, time: "5-10 phút", isVeg: true, tags: ["snack"],
        img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"
      }
    ];

    const CAT_QUOTES = [
      "🐾 Hoàng Thượng Mèo phán: Nhân phẩm 10 điểm! Món này hình thật việc thật, đi ăn liền kẻo nguội Meow~",
      "🐰 Thỏ Lùn nhắn nhủ: Quẻ Đại Cát! Quán này vừa ngon vừa đúng gu chiếc bụng đói của bạn!",
      "🍊 Foodora Gợi ý: Địa điểm ăn uống cực kỳ đáng thử tại khu vực này!"
    ];

    const TASKS = [
      { id: 1, name: "Chuẩn hóa 50 ảnh món ăn khớp 100% với tên món (không trùng lặp)", status: "done" },
      { id: 2, name: "Nâng cấp Băng Chuyền Vô Cực (Card Roulette) có âm thanh Web Audio API", status: "done" },
      { id: 3, name: "Thêm chế độ Đập Hộp Mù Hội Mèo & Quay Combo 3 Tăng Cùng Quận", status: "done" },
      { id: 4, name: "Giữ chuẩn bố cục Dashboard & Mobile theo ảnh mẫu Foodora", status: "done" },
      { id: 5, name: "Kiểm tra liên kết chỉ đường Google Maps cho toàn bộ 50 quán", status: "doing" }
    ];

    let curPersona = "all";
    let curCuisine = "vietnam";
    let spinCounter = 0;
    let soundEnabled = true;
    let audioCtx = null;
    let isSpinningRoulette = false;

    window.addEventListener("DOMContentLoaded", () => {
      renderHome();
      renderAllDistricts();
      renderCuisinesView();
      renderKanban();
      initRoulettePreview();
      spinCombo3Tang(false);
    });

    // ==============================================================
    // 2. HỆ THỐNG ÂM THANH CƠ HỌC WEB AUDIO API (KHÔNG CẦN FILE MP3)
    // ==============================================================
    function playTickSound(freq = 680) {
      if (!soundEnabled) return;
      try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.045);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.045);
      } catch (e) {}
    }

    function playWinFanfare() {
      if (!soundEnabled) return;
      try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const notes = [523.25, 659.25, 783.99, 1046.5];
        notes.forEach((n, idx) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(n, audioCtx.currentTime + idx * 0.09);
          gain.gain.setValueAtTime(0.11, audioCtx.currentTime + idx * 0.09);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + idx * 0.09 + 0.28);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(audioCtx.currentTime + idx * 0.09);
          osc.stop(audioCtx.currentTime + idx * 0.09 + 0.28);
        });
      } catch (e) {}
    }

    function toggleSound() {
      soundEnabled = !soundEnabled;
      document.getElementById("soundToggleBtn").textContent = soundEnabled ? "🔊 Âm thanh: Bật" : "🔇 Âm thanh: Tắt";
    }

    // ==============================================================
    // 3. LOGIC GIAO DIỆN CHÍNH & LỌC 50 MÓN
    // ==============================================================
    function setAppTheme(theme) {
      document.body.classList.remove("theme-hoi-meo", "theme-tho-lun");
      document.querySelectorAll(".theme-pill-btn").forEach(b => b.classList.toggle("active", b.dataset.t === theme));

      if (theme === "hoi-meo") {
        document.body.classList.add("theme-hoi-meo");
        document.getElementById("brandIcon").textContent = "🐱";
        document.getElementById("brandName").textContent = "Hội Mèo ĐN";
        document.getElementById("heroHeadline").innerHTML = `Hội Mèo phán món,<span>chốt đơn siêu tốc</span>`;
      } else if (theme === "tho-lun") {
        document.body.classList.add("theme-tho-lun");
        document.getElementById("brandIcon").textContent = "🐰";
        document.getElementById("brandName").textContent = "Thỏ Lùn ĐN";
        document.getElementById("heroHeadline").innerHTML = `Kẹt Hội Thỏ Lùn,<span>hôm nay măm gì?</span>`;
      } else {
        document.getElementById("brandIcon").textContent = "🍽️";
        document.getElementById("brandName").textContent = "Foodora";
        document.getElementById("heroHeadline").innerHTML = `Hôm nay ăn gì,<span>quay món siêu tốc</span>`;
      }
    }

    function matchPersona(f) {
      if (curPersona === "snack") return f.tags.includes("snack");
      if (curPersona === "drink") return f.tags.includes("drink");
      if (curPersona === "main") return f.tags.includes("main");
      if (curPersona === "vegetarian") return f.isVeg;
      if (curPersona === "budget") return f.price <= 35000;
      return true;
    }

    function createRestaurantCard(f) {
      const typeLabel = f.tags.includes("drink") ? "🧋 Đồ uống" : (f.tags.includes("snack") ? "🍡 Ăn vặt" : "🍜 Món chính");
      return `
        <article class="rest-card" onclick="showcaseWinnerEverywhere(${f.id}, true)">
          <div class="rest-img-wrap">
            <img class="rest-img" src="${f.img}" alt="${f.name}" loading="lazy" />
            <span class="rest-badge-top">📍 Q. ${f.district}</span>
            <span class="rest-tag-right">${typeLabel}</span>
          </div>
          <div class="rest-info">
            <div class="rest-title-row">
              <h3 class="rest-name">${f.name}</h3>
              <span class="rest-rating"><span class="star">★</span> ${f.rating}</span>
            </div>
            <div class="rest-sub">${f.spot}</div>
            <div class="rest-meta">
              <span>🕒 ${f.time}</span>
              <span class="rest-price">${f.price.toLocaleString('vi-VN')}đ</span>
            </div>
          </div>
        </article>
      `;
    }

    function selectPersona(p) {
      curPersona = p;
      document.querySelectorAll("#categoriesGrid .cat-card").forEach(c => {
        c.classList.toggle("active", c.dataset.p === p);
      });
      renderHome();
    }

    function syncDistrict(from) {
      const h = document.getElementById("headerDistrict");
      const c = document.getElementById("catalogDistrict");
      if (from === "header") c.value = h.value;
      else h.value = c.value;
      renderHome();
      renderAllDistricts();
    }

    function getActivePool() {
      const dist = document.getElementById("headerDistrict").value;
      const meal = document.getElementById("mealSelect").value;
      const maxPrice = parseInt(document.getElementById("budgetSelect").value, 10);
      const q = document.getElementById("globalSearch").value.toLowerCase().trim();

      return FOODS.filter(f => {
        const okP = matchPersona(f);
        const okD = dist === "all" || f.district === dist;
        const okM = meal === "all" || f.meals.includes(meal);
        const okB = f.price <= maxPrice;
        const okQ = !q || f.name.toLowerCase().includes(q) || f.spot.toLowerCase().includes(q) || f.district.toLowerCase().includes(q);
        return okP && okD && okM && okB && okQ;
      });
    }

    function renderHome() {
      const filtered = getActivePool();
      const personaNames = {
        all: "Quán ngon đề xuất tại Đà Nẵng",
        snack: "🍡 Danh sách Quán Ăn Vặt Đà Nẵng",
        drink: "🧋 Danh sách Quán Đồ Uống, Trà Sữa & Cafe",
        main: "🍜 Danh sách Quán Ăn No (Món Chính)",
        vegetarian: "🌱 Danh sách Quán Chay & Thanh Đạm",
        budget: "🎓 Quán Ngon Sinh Viên (Dưới 35.000đ)"
      };
      document.getElementById("homeListTitle").textContent = `${personaNames[curPersona]} (${filtered.length} quán)`;
      document.getElementById("homeRestaurantGrid").innerHTML = filtered.map(createRestaurantCard).join("");
    }

    function handleGlobalSearch() {
      const activeView = document.querySelector(".view-section.active").id;
      if (activeView === "view-all") renderAllDistricts();
      else {
        switchView("home");
        renderHome();
      }
    }

    // ==============================================================
    // 4. SIÊU VÒNG QUAY GACHA STUDIO (BĂNG CHUYỀN + HỘP MÙ + COMBO 3 TĂNG)
    // ==============================================================
    function openRandomStudio(tab = "roulette") {
      document.getElementById("studioModal").classList.add("open");
      switchStudioTab(tab);
    }

    function closeRandomStudio() {
      document.getElementById("studioModal").classList.remove("open");
    }

    function switchStudioTab(tab) {
      document.querySelectorAll(".studio-tab").forEach(b => b.classList.toggle("active", b.dataset.st === tab));
      document.querySelectorAll(".st-panel").forEach(p => p.style.display = "none");
      document.getElementById(`st-panel-${tab}`).style.display = "block";
    }

    function initRoulettePreview() {
      const track = document.getElementById("rouletteTrack");
      const previewItems = FOODS.slice(0, 12);
      track.innerHTML = previewItems.map(f => `
        <div class="r-slot-card">
          <img class="r-slot-img" src="${f.img}" alt="${f.name}" />
          <div class="r-slot-body">
            <div class="r-slot-dist">📍 Q. ${f.district}</div>
            <div class="r-slot-name">${f.name}</div>
            <div class="r-slot-price">${f.price.toLocaleString('vi-VN')}đ</div>
          </div>
        </div>
      `).join("");
    }

    // CHẾ ĐỘ 1: QUAY BĂNG CHUYỀN VÔ CỰC (CS:GO / CASE OPENING CARD ROULETTE)
    function startCardRoulette() {
      if (isSpinningRoulette) return;
      isSpinningRoulette = true;

      const btn = document.getElementById("btnStartRoulette");
      btn.textContent = "⏳ Đang quay...";
      btn.disabled = true;

      let pool = getActivePool();
      if (!pool.length) pool = FOODS;

      const totalCards = 42;
      const winIndex = 35; // Vị trí thẻ chiến thắng
      const winner = pool[Math.floor(Math.random() * pool.length)];

      const sequence = [];
      for (let i = 0; i < totalCards; i++) {
        if (i === winIndex) {
          sequence.push(winner);
        } else {
          sequence.push(pool[Math.floor(Math.random() * pool.length)]);
        }
      }

      const track = document.getElementById("rouletteTrack");
      track.style.transition = "none";
      track.style.transform = "translateX(0px)";

      track.innerHTML = sequence.map((f, idx) => `
        <div class="r-slot-card" id="rcard-${idx}">
          <img class="r-slot-img" src="${f.img}" alt="${f.name}" />
          <div class="r-slot-body">
            <div class="r-slot-dist">📍 Q. ${f.district}</div>
            <div class="r-slot-name">${f.name}</div>
            <div class="r-slot-price">${f.price.toLocaleString('vi-VN')}đ</div>
          </div>
        </div>
      `).join("");

      // Kích hoạt hiệu ứng âm thanh tạch... tạch... giảm tốc dần
      const tickDelays = [50, 110, 175, 245, 320, 400, 485, 575, 675, 785, 905, 1040, 1190, 1360, 1550, 1765, 2010, 2290, 2610, 2960];
      tickDelays.forEach((delay, idx) => {
        setTimeout(() => playTickSound(720 - idx * 14), delay);
      });

      // Tính toán khoảng cách trượt (mỗi card rộng 170px + gap 12px = 182px)
      const cardStep = 182;
      const jitter = Math.floor(Math.random() * 50) - 25; // Dừng ngẫu nhiên tự nhiên trong lòng thẻ
      const targetOffset = -(winIndex * cardStep + jitter);

      setTimeout(() => {
        track.style.transition = "transform 3.25s cubic-bezier(0.12, 0.85, 0.22, 1)";
        track.style.transform = `translateX(${targetOffset}px)`;
      }, 40);

      setTimeout(() => {
        const winCardEl = document.getElementById(`rcard-${winIndex}`);
        if (winCardEl) winCardEl.classList.add("winner-glow");

        playWinFanfare();
        if (typeof confetti === "function") {
          confetti({ particleCount: 85, spread: 70, origin: { y: 0.55 } });
        }

        showcaseWinnerEverywhere(winner.id, false);
        btn.textContent = "⚡ QUAY TIẾP LẦN NỮA";
        btn.disabled = false;
        isSpinningRoulette = false;
      }, 3350);
    }

    // CHẾ ĐỘ 2: ĐẬP HỘP MÙ HỘI MÈO & THỎ LÙN
    function openBlindBox(boxType, elId) {
      const cardEl = document.getElementById(elId);
      cardEl.classList.add("shaking");

      // Âm thanh lắc hộp
      [60, 140, 220, 310, 400, 490].forEach(t => setTimeout(() => playTickSound(540), t));

      setTimeout(() => {
        cardEl.classList.remove("shaking");
        const dist = document.getElementById("headerDistrict").value;

        let pool = FOODS.filter(f => {
          const okD = dist === "all" || f.district === dist;
          const okT = boxType === "all" || f.tags.includes(boxType);
          return okD && okT;
        });
        if (!pool.length) pool = FOODS;

        const winner = pool[Math.floor(Math.random() * pool.length)];
        playWinFanfare();
        if (typeof confetti === "function") {
          confetti({ particleCount: 75, spread: 65, origin: { y: 0.6 } });
        }

        const box = document.getElementById("bboxWinnerBox");
        box.style.display = "flex";
        document.getElementById("bbImg").src = winner.img;
        document.getElementById("bbBadge").textContent = `🎁 KHUI TRÚNG TẠI QUẬN ${winner.district.toUpperCase()} • ★ ${winner.rating}`;
        document.getElementById("bbName").textContent = winner.name;
        document.getElementById("bbSpot").textContent = `🏠 Địa chỉ: ${winner.spot} • 💰 ${winner.price.toLocaleString('vi-VN')}đ`;
        document.getElementById("bbQuote").textContent = CAT_QUOTES[Math.floor(Math.random() * CAT_QUOTES.length)];
        document.getElementById("bbMapBtn").href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(winner.name + " " + winner.spot + " Đà Nẵng")}`;

        showcaseWinnerEverywhere(winner.id, false);
      }, 600);
    }

    // CHẾ ĐỘ 3: QUAY COMBO 3 TĂNG CÙNG QUẬN
    function spinCombo3Tang(withEffects = true) {
      const districts = ["Hải Châu", "Sơn Trà", "Ngũ Hành Sơn", "Thanh Khê", "Liên Chiểu", "Cẩm Lệ"];
      const selDist = document.getElementById("headerDistrict").value;
      const targetDist = selDist === "all" ? districts[Math.floor(Math.random() * districts.length)] : selDist;

      const distPool = FOODS.filter(f => f.district === targetDist);
      const mains = distPool.filter(f => f.tags.includes("main"));
      const snacks = distPool.filter(f => f.tags.includes("snack"));
      const drinks = distPool.filter(f => f.tags.includes("drink"));

      const pickMain = (mains.length ? mains : distPool)[Math.floor(Math.random() * (mains.length || distPool.length))];
      const pickSnack = (snacks.length ? snacks : distPool)[Math.floor(Math.random() * (snacks.length || distPool.length))];
      const pickDrink = (drinks.length ? drinks : distPool)[Math.floor(Math.random() * (drinks.length || distPool.length))];

      const total = pickMain.price + pickSnack.price + pickDrink.price;
      document.getElementById("comboSummaryText").innerHTML = `📍 Lịch trình 3 Tăng tại <strong>Quận ${targetDist}</strong> • Tổng chi phí dự kiến: <strong style="color:var(--primary);">${total.toLocaleString('vi-VN')}đ/người</strong>`;

      const steps = [
        { label: "TĂNG 1: MÓN CHÍNH ĂN NO", item: pickMain },
        { label: "TĂNG 2: MÓN ĂN VẶT", item: pickSnack },
        { label: "TĂNG 3: ĐỒ UỐNG & CHILL", item: pickDrink }
      ];

      if (withEffects) {
        playWinFanfare();
        if (typeof confetti === "function") {
          confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
        }
      }

      document.getElementById("combo3Grid").innerHTML = steps.map(s => {
        const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.item.name + " " + s.item.spot + " Đà Nẵng")}`;
        return `
          <div class="combo-slot">
            <div class="combo-slot-head">
              <span>${s.label}</span>
              <span>★ ${s.item.rating}</span>
            </div>
            <img src="${s.item.img}" alt="${s.item.name}" style="width:100%; height:135px; object-fit:cover;" />
            <div style="padding:0.85rem;">
              <div style="font-size:0.95rem; font-weight:800;">${s.item.name}</div>
              <div style="font-size:0.76rem; color:var(--text-muted); margin:4px 0 8px;">🏠 ${s.item.spot}</div>
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <strong style="color:var(--primary); font-size:0.86rem;">${s.item.price.toLocaleString('vi-VN')}đ</strong>
                <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" style="font-size:0.76rem; font-weight:800; color:var(--text-dark); text-decoration:none;">Bản đồ &rarr;</a>
              </div>
            </div>
          </div>
        `;
      }).join("");
    }

    // Cập nhật thông tin món trúng thưởng lên cả Modal lẫn Hero Banner ngoài Trang Chủ
    function showcaseWinnerEverywhere(id, openModalNow = false) {
      const f = FOODS.find(x => x.id === id);
      if (!f) return;

      spinCounter++;
      document.getElementById("spinCountBadge").textContent = spinCounter;

      const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(f.name + " " + f.spot + " Đà Nẵng")}`;
      const quote = CAT_QUOTES[Math.floor(Math.random() * CAT_QUOTES.length)];

      // Cập nhật trong Roulette Studio
      document.getElementById("rwImg").src = f.img;
      document.getElementById("rwBadge").textContent = `📍 QUẬN ${f.district.toUpperCase()} • ★ ${f.rating}`;
      document.getElementById("rwName").textContent = f.name;
      document.getElementById("rwSpot").textContent = `🏠 Địa chỉ: ${f.spot} • 💰 ${f.price.toLocaleString('vi-VN')}đ`;
      document.getElementById("rwQuote").textContent = quote;
      document.getElementById("rwMapBtn").href = mapUrl;

      // Cập nhật ngoài Hero Banner Trang Chủ
      document.getElementById("heroPlateImg").src = f.img;
      document.getElementById("bannerDealTag").textContent = "🎯 Quán vừa chọn";
      document.getElementById("bannerDealTitle").textContent = f.name;
      document.getElementById("bannerDealSub").textContent = `📍 Q. ${f.district} • 💰 ${f.price.toLocaleString('vi-VN')}đ`;
      document.getElementById("bannerDealLink").href = mapUrl;

      if (openModalNow) {
        openRandomStudio("roulette");
      }
    }

    // ==============================================================
    // 5. HIỂN THỊ 50 QUÁN CHIA THEO 6 QUẬN & KANBAN
    // ==============================================================
    function renderAllDistricts() {
      const dist = document.getElementById("catalogDistrict").value;
      const type = document.getElementById("catalogType").value;
      const q = document.getElementById("globalSearch").value.toLowerCase().trim();

      const filtered = FOODS.filter(f => {
        const okD = dist === "all" || f.district === dist;
        const okT = type === "all" || (type === "veg" ? f.isVeg : f.tags.includes(type));
        const okQ = !q || f.name.toLowerCase().includes(q) || f.spot.toLowerCase().includes(q) || f.district.toLowerCase().includes(q);
        return okD && okT && okQ;
      });

      const districts = [
        { key: "Hải Châu", sub: "Trung tâm Chợ Cồn, Bạch Đằng, Hải Phòng, Nguyễn Chí Thanh" },
        { key: "Sơn Trà", sub: "Biển Mỹ Khê, Phạm Văn Đồng, Cầu Rồng, Chân Cầu Trần Thị Lý" },
        { key: "Ngũ Hành Sơn", sub: "Chợ Bắc Mỹ An, Khu ĐH Kinh Tế Phan Tứ, Phố Tây An Thượng" },
        { key: "Thanh Khê", sub: "Lê Duẩn, Hải Phòng, Điện Biên Phủ, Biển Nguyễn Tất Thành" },
        { key: "Liên Chiểu", sub: "Làng Đại Học Hòa Khánh, ĐH Bách Khoa, ĐH Sư Phạm, Chợ Hòa Khánh" },
        { key: "Cẩm Lệ", sub: "Khuê Trung, Cách Mạng Tháng 8, Nguyễn Hữu Thọ, Ông Ích Đường" }
      ];

      let html = "";
      districts.forEach(d => {
        const list = filtered.filter(f => f.district === d.key);
        if (list.length) {
          html += `
            <div class="district-banner">
              <div>
                <h3 style="font-size:1.08rem; font-weight:800;">📍 Quận ${d.key} (${list.length} quán)</h3>
                <span style="font-size:0.78rem; color:var(--text-muted);">${d.sub}</span>
              </div>
            </div>
            <div class="restaurant-grid">
              ${list.map(createRestaurantCard).join("")}
            </div>
          `;
        }
      });

      document.getElementById("allDistrictsContainer").innerHTML = html || `<p style="padding:2rem; text-align:center; color:var(--text-muted);">Không tìm thấy quán phù hợp.</p>`;
    }

    function renderCuisinesView() {
      document.getElementById("cuisineCardsGrid").innerHTML = Object.entries(CUISINES).map(([k, c]) => `
        <div class="cat-card ${k === curCuisine ? 'active' : ''}" onclick="selectCuisine('${k}')">
          <div class="cat-thumb-wrap">
            <img src="${c.thumb}" alt="${c.name}" />
          </div>
          <div class="cat-name">${c.name}</div>
          <div class="cat-count">${c.count}</div>
        </div>
      `).join("");

      const list = FOODS.filter(f => f.cuisine === curCuisine);
      document.getElementById("cuisineDishesGrid").innerHTML = list.map(createRestaurantCard).join("");
    }

    function selectCuisine(k) {
      curCuisine = k;
      renderCuisinesView();
    }

    function renderKanban() {
      const cols = {
        doing: { title: "🔨 Đang thực hiện", items: TASKS.filter(t => t.status === "doing") },
        done:  { title: "✅ Đã hoàn thành", items: TASKS.filter(t => t.status === "done") }
      };
      document.getElementById("kanbanBoard").innerHTML = Object.entries(cols).map(([k, col]) => `
        <div class="kanban-col">
          <h3 style="font-size:0.95rem; font-weight:800;">${col.title} (${col.items.length})</h3>
          ${col.items.map(t => `
            <div class="kanban-item">
              <span>${t.name}</span>
              ${k !== "done" ? `<button class="btn-primary-pill" style="padding:0.35rem 0.7rem; font-size:0.74rem;" onclick="completeTask(${t.id})">Xong ✓</button>` : '<span>🎉</span>'}
            </div>
          `).join("")}
        </div>
      `).join("");
    }

    function completeTask(id) {
      const item = TASKS.find(t => t.id === id);
      if (item) { item.status = "done"; renderKanban(); }
    }

    function switchView(viewId) {
      document.querySelectorAll(".view-section").forEach(s => s.classList.remove("active"));
      document.getElementById(`view-${viewId}`).classList.add("active");

      document.querySelectorAll(".side-link, .mob-tab").forEach(b => {
        b.classList.toggle("active", b.dataset.view === viewId);
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  