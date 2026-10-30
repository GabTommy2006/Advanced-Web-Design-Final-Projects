/* =========================================================
   DATA.JS — Dữ liệu dùng chung: bữa ăn, nền ẩm thực, món ăn
   Ảnh: đặt file vào images/dishes/<id>.jpg và images/cuisines/<key>.jpg.
   Nếu chưa có ảnh, trang sẽ tự hiển thị emoji thay thế.
   Ghi nguồn ảnh (Unsplash) vào trường `credit` để hiện ở trang Giới thiệu.
   ========================================================= */
(function () {
  'use strict';

  /** Khung giờ các bữa ăn (giờ bắt đầu, tính theo 24h) */
  const MEALS = {
    sang:  { label: 'Sáng',  full: 'Bữa sáng', icon: '🌅', time: '05:00 – 10:00',
             greet: 'Chào buổi sáng!',  sub: 'Bắt đầu ngày mới bằng món gì nhỉ?' },
    trua:  { label: 'Trưa',  full: 'Bữa trưa', icon: '☀️', time: '10:00 – 14:00',
             greet: 'Chào buổi trưa!',  sub: 'Đến giờ ăn trưa rồi.' },
    toi:   { label: 'Tối',   full: 'Bữa tối',  icon: '🌆', time: '14:00 – 21:00',
             greet: 'Chào buổi tối!',   sub: 'Tối nay ăn gì cho ấm bụng?' },
    khuya: { label: 'Khuya', full: 'Ăn khuya', icon: '🌙', time: '21:00 – 05:00',
             greet: 'Khuya rồi đó!',    sub: 'Bụng réo thì kiếm gì nhẹ nhẹ nha.' },
  };

  /** Nền ẩm thực — key trùng với [data-cuisine] trong themes.css */
  const CUISINES = {
    viet:  { name: 'Việt Nam',  flag: '🇻🇳', emoji: '🍜', desc: 'Thanh, đậm đà và đầy rau thơm.' },
    nhat:  { name: 'Nhật Bản',  flag: '🇯🇵', emoji: '🍣', desc: 'Tinh tế đến từng lát cá.' },
    han:   { name: 'Hàn Quốc',  flag: '🇰🇷', emoji: '🥘', desc: 'Cay nồng và rất “đưa cơm”.' },
    trung: { name: 'Trung Hoa', flag: '🇨🇳', emoji: '🥟', desc: 'Phong phú bậc nhất châu Á.' },
    thai:  { name: 'Thái Lan',  flag: '🇹🇭', emoji: '🍲', desc: 'Chua, cay, ngọt hài hoà.' },
    y:     { name: 'Ý',         flag: '🇮🇹', emoji: '🍝', desc: 'Phô mai béo, húng quế thơm.' },
  };

  const d = (id, cuisine, emoji, name, meals, price, desc) =>
    ({ id, cuisine, emoji, name, meals, price, desc, credit: '' });

  /** 6 nền ẩm thực × 6 món */
  const DISHES = [
    d('pho-bo', 'viet', '🍜', 'Phở bò', ['sang', 'toi'], '40–70k',
      'Nước dùng ninh xương bò nhiều giờ cùng quế, hồi, gừng nướng; bánh phở mềm, thịt bò tái và rau thơm.'),
    d('banh-mi', 'viet', '🥖', 'Bánh mì', ['sang'], '20–35k',
      'Vỏ giòn rụm, nhân pate, chả lụa, đồ chua và ngò tươi — bữa sáng gọn nhẹ mang đi được.'),
    d('bun-cha', 'viet', '🍢', 'Bún chả', ['trua'], '40–60k',
      'Chả nướng than hoa thơm lừng, chấm nước mắm chua ngọt cùng bún và rau sống.'),
    d('com-tam', 'viet', '🍚', 'Cơm tấm', ['trua', 'toi'], '35–60k',
      'Sườn nướng mật ong, bì, chả trứng, thêm mỡ hành và nước mắm ngọt.'),
    d('banh-xeo', 'viet', '🥞', 'Bánh xèo', ['toi'], '40–70k',
      'Vỏ vàng giòn, nhân tôm thịt giá, cuốn rau cải và chấm nước mắm chua ngọt.'),
    d('chao-long', 'viet', '🥣', 'Cháo lòng', ['sang', 'khuya'], '30–45k',
      'Cháo nóng sánh mịn với lòng heo, quẩy giòn và hành ngò — ấm bụng lúc khuya.'),

    d('sushi', 'nhat', '🍣', 'Sushi', ['trua', 'toi'], '80–250k',
      'Cơm giấm nắm tay cùng lát cá hồi, cá ngừ tươi rói, chấm xì dầu và wasabi.'),
    d('ramen', 'nhat', '🍜', 'Ramen', ['toi', 'khuya'], '90–150k',
      'Mì sợi dai trong nước dùng tonkotsu béo ngậy, thêm chashu và trứng lòng đào.'),
    d('tempura', 'nhat', '🍤', 'Tempura', ['toi'], '90–180k',
      'Tôm và rau củ tẩm bột chiên giòn nhẹ như mây, chấm nước tentsuyu.'),
    d('onigiri', 'nhat', '🍙', 'Onigiri', ['sang'], '25–45k',
      'Cơm nắm bọc rong biển, nhân cá hồi hoặc mơ muối — nhỏ gọn cho buổi sáng.'),
    d('udon', 'nhat', '🍲', 'Udon', ['trua'], '70–120k',
      'Sợi mì to, mềm dai trong nước dùng dashi thanh ngọt, thêm tempura giòn.'),
    d('takoyaki', 'nhat', '🐙', 'Takoyaki', ['khuya'], '40–70k',
      'Bánh bạch tuộc nướng tròn xoe, rưới sốt, mayonnaise và cá bào “nhảy múa”.'),

    d('bibimbap', 'han', '🥗', 'Bibimbap', ['trua'], '70–120k',
      'Cơm trộn rau củ, thịt bò, trứng ốp và tương ớt gochujang trong thố đá nóng.'),
    d('tteokbokki', 'han', '🌶️', 'Tteokbokki', ['khuya'], '50–90k',
      'Bánh gạo dẻo sốt cay ngọt, thêm chả cá, trứng và phô mai kéo sợi.'),
    d('kimchi-jjigae', 'han', '🥘', 'Kimchi jjigae', ['toi'], '80–130k',
      'Canh kimchi chua cay sôi sùng sục với thịt heo và đậu hũ non.'),
    d('ga-ran-han', 'han', '🍗', 'Gà rán Hàn Quốc', ['khuya'], '120–250k',
      'Gà chiên hai lần giòn rụm, phủ sốt cay ngọt yangnyeom — “chân ái” ăn khuya.'),
    d('kimbap', 'han', '🍱', 'Kimbap', ['sang', 'trua'], '35–60k',
      'Cơm cuộn rong biển với trứng, xúc xích, cà rốt, củ cải vàng.'),
    d('thit-nuong-bbq', 'han', '🥩', 'Thịt nướng BBQ', ['toi'], '150–300k',
      'Ba chỉ nướng tại bàn, cuốn xà lách cùng tỏi, kimchi và tương ssamjang.'),

    d('dimsum', 'trung', '🥟', 'Dimsum', ['sang'], '60–150k',
      'Há cảo, xíu mại, bánh bao nhỏ xinh hấp nóng trong xửng tre.'),
    d('mi-van-than', 'trung', '🍜', 'Mì vằn thắn', ['sang', 'khuya'], '40–60k',
      'Mì trứng dai, hoành thánh tôm thịt và nước dùng ngọt thanh.'),
    d('vit-quay-bac-kinh', 'trung', '🦆', 'Vịt quay Bắc Kinh', ['toi'], '250–600k',
      'Da vịt giòn bóng cuốn bánh tráng mỏng cùng hành, dưa leo và tương ngọt.'),
    d('com-chien-duong-chau', 'trung', '🍳', 'Cơm chiên Dương Châu', ['trua'], '40–70k',
      'Cơm chiên tơi hạt với lạp xưởng, tôm, trứng và đậu Hà Lan.'),
    d('lau-tu-xuyen', 'trung', '🫕', 'Lẩu Tứ Xuyên', ['toi'], '200–400k',
      'Nồi lẩu cay tê với ớt khô và tiêu Tứ Xuyên, nhúng thịt, rau, nấm.'),
    d('dau-hu-ma-po', 'trung', '🌶️', 'Đậu hũ Ma Bà', ['trua'], '50–80k',
      'Đậu hũ non sốt thịt băm cay tê, ăn cùng cơm trắng nóng hổi.'),

    d('pad-thai', 'thai', '🍝', 'Pad Thai', ['trua'], '60–100k',
      'Phở xào me chua ngọt với tôm, trứng, đậu phộng rang và giá đỗ.'),
    d('tom-yum', 'thai', '🍲', 'Tom Yum', ['toi'], '80–150k',
      'Canh chua cay thơm sả, lá chanh, riềng cùng tôm tươi và nấm rơm.'),
    d('ca-ri-xanh', 'thai', '🍛', 'Cà ri xanh', ['toi'], '70–120k',
      'Cà ri nước cốt dừa thơm ớt xanh, húng Thái và thịt gà mềm.'),
    d('som-tam', 'thai', '🥗', 'Gỏi đu đủ Som Tam', ['trua'], '40–70k',
      'Đu đủ xanh giã cùng ớt, chanh, mắm, đậu phộng — chua cay giòn sần sật.'),
    d('xoi-xoai', 'thai', '🥭', 'Xôi xoài', ['sang', 'khuya'], '40–60k',
      'Xôi nếp dẻo rưới nước cốt dừa béo ngậy, ăn cùng xoài chín ngọt lịm.'),
    d('com-chien-dua', 'thai', '🍍', 'Cơm chiên dứa', ['trua'], '60–100k',
      'Cơm chiên với dứa, tôm, hạt điều, đựng trong nửa trái dứa thơm lừng.'),

    d('pizza-margherita', 'y', '🍕', 'Pizza Margherita', ['toi', 'khuya'], '120–250k',
      'Đế mỏng nướng lò củi, sốt cà chua, phô mai mozzarella và lá húng quế.'),
    d('spaghetti-carbonara', 'y', '🍝', 'Spaghetti Carbonara', ['trua', 'toi'], '90–160k',
      'Mì Ý sốt trứng, phô mai pecorino, thịt guanciale và tiêu đen.'),
    d('lasagna', 'y', '🧀', 'Lasagna', ['toi'], '120–200k',
      'Nhiều lớp mì lá xen sốt bò bằm và béchamel, nướng vàng ruộm.'),
    d('risotto-nam', 'y', '🍄', 'Risotto nấm', ['toi'], '120–200k',
      'Cơm Ý nấu sánh mịn với nấm, bơ và phô mai parmesan.'),
    d('bruschetta', 'y', '🥖', 'Bruschetta', ['sang'], '60–100k',
      'Bánh mì nướng giòn phủ cà chua, tỏi, húng quế và dầu ô liu.'),
    d('tiramisu', 'y', '🍰', 'Tiramisu', ['khuya'], '50–90k',
      'Bánh ngọt cà phê với kem mascarpone mềm mịn, rắc cacao đắng nhẹ.'),
  ];

  window.FOOD = Object.freeze({ MEALS, CUISINES, DISHES });
})();
