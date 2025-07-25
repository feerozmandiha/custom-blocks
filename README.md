# Custom Blocks Plugin for Xennic

افزونه **Custom Blocks** مجموعه‌ای از بلوک‌های سفارشی وردپرسی را در اختیار قرار می‌دهد که برای شرکت‌های فعال در حوزه مهندسی برق قدرت طراحی شده‌اند. این بلوک‌ها به‌گونه‌ای ساخته شده‌اند که با قالب اختصاصی Xennic کاملاً هماهنگ بوده و قابلیت ویرایش از طریق Full Site Editing را دارا می‌باشند.

## ⚙️ امکانات و ویژگی‌ها

- ساخت بلوک‌های سفارشی با استفاده از `@wordpress/scripts`
- سازگاری کامل با قالب شرکتی Xennic
- قابلیت شخصی‌سازی آسان با استفاده از تنظیمات `block.json`
- ساختار ماژولار برای بلوک‌های مختلف مانند خدمات، محصولات، نمودارها و فرم‌های تماس
- طراحی ریسپانسیو و سبک برای بارگذاری سریع‌تر

## 📁 ساختار پلاگین

```bash
custom-blocks/
│
├── src/
│   └── blocks/
│       ├── service/
│       ├── product/
│       └── contact-form/
├── build/
├── block.json
├── custom-blocks.php
├── package.json
├── README.md
└── .gitignore
```
