# Study Zone

> ### Xây dựng môi trường tự học của riêng bạn - VKT A3K56

---
> [!IMPORTANT]
>
> **Major Update (2024/09):**
> - Cập nhật Giao diện mới cho Phụ Huynh
> - Chuyển đổi Model thành API Gemini
> - Tích hợp theo dõi bàn phím Học Sinh

# Setup
## Prerequisites
* **Python 3.9 or later**
* **Rename the file `.env.example` to `.env`**
* Running `pip3 install -r requirements.txt` to install the required dependencies
  
---
## Phân tích dữ liệu bàn phím người dùng.

### Sử dụng API Geminie hoặc ChatGPT (Requires a GPT Plus account)
1. Log into your openai account

2. Go to https://chat.openai.com/api/auth/session

3. Copy the value for `access_token` and paste it into `.env` under `OPENAI_TOKEN`

### Sử dụng Cookie Bing
1. Go to https://www.bing.com/chat and log in

2. Open console with `F12`

3. Open `Application` tab > Cookies

4. Copy the value for `_U` from cookies and paste it into `.env` under `BING_COOKIE`

### Sử dụng Cookie Gemini
1. Go to https://gemini.google.com/app and log in

2. Open console with `F12`

3. Open `Application` tab > Cookies

4. Copy the value for `__Secure-1PSID` from cookies and paste it into `.env` under `GOOGLE_PSID`

## Optional: Configuring OpenAI API

To use the OpenAI API features, follow these steps:

1. Obtain your API key by visiting https://platform.openai.com/api-keys
2. Paste the API key under `OPENAI_KEY` in `.env`
3. Set `OPENAI_ENABLED` to `True` in `.env`

> [!NOTE]
> GPT-4 API is subject to certain restrictions.
> 
> For more details, please visit https://help.openai.com/en/articles/7102672-how-can-i-access-gpt-4
## Optional: Setup system prompt

* A system prompt would be invoked when the bot is first started or reset
* You can set it up by modifying the content in `system_prompt.txt`
* All the text in the file will be fired as a prompt to the bot

## Optional: Disable logging

* Set the value of `LOGGING` in the `.env` to False

------
>  [**SEVER DISCORD**](https://discord.gg/78TnsrJd)
------
## Đối với Học Sinh

* `Tùy chỉnh môi trường học tập` Hỗ trợ môi trườg công cụ soạn thảo lập trình
   * Tích hợp các công cụ học tập như đồng hồ đếm giờ, nhạc nền, tờ ghi chú, và máy tính.
   * Hỗ trợ lựa chọn âm thanh nền (tiếng mưa, lò sưởi, tiếng ồn trắng) để tập trung hiệu quả.

* `Quản lý thời gian hiệu quả:` Sử dụng kỹ thuật Pomodoro để chia nhỏ thời gian học và nghỉ.
* `Góc học tập linh hoạt:` Hỗ trợ tài liệu riêng hoặc tài liệu từ hệ thống (theo cấp độ Cơ bản, Hiểu rõ, Thông thạo).
* `Tương tác với AI:` Khung chat AI giải đáp mọi thắc mắc khi học, bot hỗ trợ viết mã lập trình và giải bài tập theo yêu cầu.
* `Đánh giá tiến độ` Thống kê bảng điểm và gửi qua email để theo dõi tiến độ học tập, Tích hợp Quiz Game bất ngờ trong quá trình học để kiểm tra kiến thức.
  
## Đối với Giáo Viên (Phụ huynh)

* `Quản lý học sinh` Chế độ "Quản lý" cho phép giám sát việc học, tránh xao nhãng và gian lận.
   * Theo dõi Web cam 
   * Theo dõi màn hính máy tính
   * Theo dõi dữ liệu bàn phím nhập vào
* `Theo dõi báo cáo` Nhận báo cáo hàng tuần về điểm số, số buổi học, và hiệu suất học tập của học sinh.
* `Thống kê` Bảng thống kê chi tiết giúp phân tích và đánh giá sự tiến bộ của học sinh.
* `Cá nhân hóa tài liệu học tập` Tạo phòng học riêng với tài liệu và chế độ phù hợp với từng nhóm học sinh.
* `Gợi ý và hỗ trợ:` Hệ thống đưa ra lời khuyên về phương pháp học tập và cải thiện dựa trên dữ liệu học tập.
   ( Áp dụng API ChatBot **Gemini** )
* `Giao diện` Giao diện thân thiện, dễ sử dụng giúp giáo viên tập trung vào việc giảng dạy thay vì thao tác phức tạp.


#### Ba vai trò chính

* `Giáo Viên` 
* `Phụ Huynh`
* `Học Sinh` 
  
   > **Warning**
   > Đây là một dự án đơn giản được tạo ra từ 1 học sinh lớp 11 cho cuộc thi KHKT Cấp Quốc Gia 2024 và Tin Học Trẻ Cấp Quốc Gia 2024 nên sẽ còn mắc nhiều lỗi và sai sót. Rất mong người dùng thông cảm.
 ---
