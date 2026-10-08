let bookCatalog = [
  { bookCode: "B01", title: "Lập trình JavaScript cơ bản", category: "Lập trình", price: 120000, totalCopies: 5, availableCopies: 3, shelfLocation: "Kệ A1" },
  { bookCode: "B02", title: "Cấu trúc dữ liệu và giải thuật", category: "Khoa học máy tính", price: 150000, totalCopies: 4, availableCopies: 0, shelfLocation: "Kệ A2" },
  { bookCode: "B03", title: "Cơ sở dữ liệu SQL", category: "Cơ sở dữ liệu", price: 135000, totalCopies: 6, availableCopies: 2, shelfLocation: "Kệ B1" }
];

console.log("=== 1. NHẬP KHO ẤN BẢN MỚI ===");
let newBook = {
  bookCode: "B04",
  title: "Nhập môn Trí tuệ nhân tạo",
  category: "AI",
  price: 180000,
  totalCopies: 10,
  availableCopies: 10,
  shelfLocation: "Kệ C1"
};
bookCatalog.push(newBook);
console.log("Đã nhập thêm sách:", newBook.title);

console.log("\n=== 2. XUẤT MƯỢN SÁCH ===");
let borrowCode = "B01";
for (let i = 0; i < bookCatalog.length; i++) {
  if (bookCatalog[i].bookCode === borrowCode) {
    if (bookCatalog[i].availableCopies > 0) {
      bookCatalog[i].availableCopies--;
      console.log(`Mượn thành công sách [${borrowCode}]. Số lượng còn lại trên kệ: ${bookCatalog[i].availableCopies}`);
      if (bookCatalog[i].availableCopies === 0) {
        console.log(`-> Trạng thái: HẾT SÁCH TRÊN KỆ!`);
      }
    } else {
      console.log(`Sách [${borrowCode}] đã hết, không thể mượn!`);
    }
    break;
  }
}

console.log("\n=== 3. THANH LÝ SÁCH HỎNG ===");
let deleteCode = "B02";
for (let i = 0; i < bookCatalog.length; i++) {
  if (bookCatalog[i].bookCode === deleteCode) {
    bookCatalog.splice(i, 1);
    console.log(`Đã thanh lý thành công đầu sách mã: ${deleteCode}`);
    break;
  }
}

console.log("\n=== 4. BẢNG KIỂM KÊ TÀI SẢN THƯ VIỆN ===");
let totalBooksCount = 0;
let totalAssetValue = 0;

for (let i = 0; i < bookCatalog.length; i++) {
  let book = bookCatalog[i];
  let itemValue = book.totalCopies * book.price;
  totalBooksCount += book.totalCopies;
  totalAssetValue += itemValue;

  console.log(`Mã: ${book.bookCode} | Tên: ${book.title} | Tổng: ${book.totalCopies} | Còn kệ: ${book.availableCopies} | Vị trí: ${book.shelfLocation}`);
}

console.log("--------------------------------------------------");
console.log(`Tổng số lượng sách trong kho: ${totalBooksCount} cuốn`);
console.log(`Tổng giá trị tài sản kho tri thức: ${totalAssetValue.toLocaleString("vi-VN")} VNĐ`);