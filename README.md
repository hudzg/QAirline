# QAirline

**QAirline** là một dự án quản lý hệ thống đặt vé máy bay, cung cấp giao diện người dùng thân thiện và hệ thống backend mạnh mẽ. Dự án sử dụng React cho frontend và Spring Boot cho backend để xây dựng một hệ thống đặt vé nhanh chóng và hiệu quả.

## Tính năng

- **Đặt vé máy bay**: Người dùng có thể tìm kiếm chuyến bay, xem thông tin và đặt vé.
- **Quản lý tài khoản**: Hệ thống đăng nhập/đăng ký cho phép người dùng quản lý thông tin cá nhân.
- **Quản lý chuyến bay**: Chức năng dành riêng cho quản trị viên để thêm, chỉnh sửa, và xóa các chuyến bay.

## Công nghệ sử dụng

- **Frontend**: React (với React Router, Axios, Redux)
- **Backend**: Spring Boot (với Spring Data JPA, Spring Security)
- **Cơ sở dữ liệu**: MySQL hoặc PostgreSQL
- **Khác**: Docker (tuỳ chọn), Swagger

## Cài đặt

### Yêu cầu hệ thống

- **Node.js** và **npm** (cho frontend React)
- **Java JDK** (cho backend Spring Boot)
- **MySQL** hoặc **PostgreSQL** (cho cơ sở dữ liệu)

### Hướng dẫn cài đặt

1. **Clone repository**:
   ```bash
   git clone https://github.com/hudzg/QAirline.git
   cd QAirline
   ```

2. **Cài đặt và chạy backend**:
   - Di chuyển vào thư mục backend:
     ```bash
     cd backend
     ```
   - Cài đặt các gói phụ thuộc Maven (nếu cần):
     ```bash
     mvn install
     ```
   - Cấu hình cơ sở dữ liệu trong file `application.properties`:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/your_database
     spring.datasource.username=your_username
     spring.datasource.password=your_password
     ```
   - Khởi động Spring Boot:
     ```bash
     mvn spring-boot:run
     ```

3. **Cài đặt và chạy frontend**:
   - Di chuyển vào thư mục frontend:
     ```bash
     cd ../frontend
     ```
   - Cài đặt các gói phụ thuộc:
     ```bash
     npm install
     ```
   - Khởi động React development server:
     ```bash
     npm start
     ```

4. **Truy cập ứng dụng**:
   - Frontend chạy trên `http://localhost:3000`
   - Backend chạy trên `http://localhost:8080`

## API Documentation

API được tài liệu hoá bằng Swagger và có thể truy cập tại `http://localhost:8080/swagger-ui.html` sau khi backend khởi động.

## Đóng góp

Chúng tôi hoan nghênh các đóng góp từ cộng đồng! Nếu muốn đóng góp, hãy mở một issue hoặc gửi pull request. Đảm bảo tuân theo quy chuẩn viết mã và tài liệu của dự án.

## Giấy phép

Dự án này được cấp phép theo [MIT License](LICENSE).

## Lời cảm ơn

Cảm ơn các tài nguyên mã nguồn mở và cộng đồng đã hỗ trợ phát triển dự án này.
