# Gemini Phishing Panel

[![GitHub stars](https://img.shields.io/github/stars/MazzenTheShadowMonarch/Gemini-Panel)](https://github.com/MazzenTheShadowMonarch/Gemini-Panel/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/MazzenTheShadowMonarch/Gemini-Panel)](https://github.com/MazzenTheShadowMonarch/Gemini-Panel/network/members)
[![GitHub issues](https://img.shields.io/github/issues/MazzenTheShadowMonarch/Gemini-Panel)](https://github.com/MazzenTheShadowMonarch/Gemini-Panel/issues)
[![GitHub license](https://img.shields.io/github/license/MazzenTheShadowMonarch/Gemini-Panel)](https://github.com/MazzenTheShadowMonarch/Gemini-Panel/blob/main/LICENSE)

## 🚀 Introduction

**Gemini Panel** is an advanced, open-source phishing management panel designed specifically for educational and authorized security testing purposes. It provides a comprehensive dashboard to create, deploy, and monitor phishing campaigns targeting Google Gemini AI interactions. This tool emulates legitimate Gemini interfaces to capture user credentials, session tokens, or sensitive inputs during simulated attacks.

**⚠️ Disclaimer:** This repository is intended **solely for ethical hacking, penetration testing, and cybersecurity research**. Unauthorized use for phishing or any malicious activity is illegal and unethical. By using this tool, you agree to comply with all applicable laws and only test on systems you own or have explicit permission to assess. The author is not responsible for any misuse.

Key highlights:
- **Modular Design:** Easy to customize templates and payloads.
- **Real-Time Monitoring:** Live dashboard for tracking victim interactions.
- **Multi-Platform Support:** Compatible with web, mobile, and API-based phishing vectors.
- **Secure Backend:** Built with PHP and MySQL for robust data handling.

This project is inspired by modern phishing frameworks but tailored for AI service simulations like Google Gemini.

## 📋 Features

- **Campaign Management:** Create unlimited phishing campaigns with custom domains, subdomains, and tracking parameters.
- **Template Engine:** Pre-built phishing pages mimicking Google Gemini login and chat interfaces. Supports HTML/CSS/JS customization.
- **Credential Harvesting:** Automatically captures usernames, passwords, 2FA codes, and session data.
- **Analytics Dashboard:** Real-time stats on clicks, submissions, and geolocation of victims (via IP tracking).
- **Email/SMS Integration:** Send phishing lures via SMTP or Twilio APIs.
- **Stealth Mode:** Obfuscated URLs, anti-detection headers, and proxy support.
- **Export Tools:** Download harvested data in CSV, JSON, or SQL formats.
- **API Endpoints:** RESTful API for integrating with external tools like Metasploit or custom scripts.
- **Multi-User Support:** Role-based access for team-based red team operations.

## 🛠️ Tech Stack

- **Backend:** PHP 8.0+ with Laravel framework
- **Database:** MySQL 8.0+ or MariaDB
- **Frontend:** Bootstrap 5, jQuery, and custom JS for dynamic UI
- **Security:** AES-256 encryption for stored data, CSRF protection
- **Dependencies:** Composer for PHP packages, npm for frontend assets
- **Server Requirements:** Apache/Nginx, PHP extensions (PDO, OpenSSL, cURL)

## 📦 Installation

### Prerequisites
- PHP 8.0 or higher
- MySQL 8.0 or MariaDB 10.6+
- Composer (PHP dependency manager)
- Node.js and npm (for frontend builds)
- Git

### Step-by-Step Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/MazzenTheShadowMonarch/Gemini-Panel.git
   cd Gemini-Panel
   ```

2. **Install Backend Dependencies**
   ```bash
   composer install --no-dev --optimize-autoloader
   ```

3. **Environment Configuration**
   - Copy the example environment file:
     ```bash
     cp .env.example .env
     ```
   - Edit `.env` with your database credentials:
     ```
     DB_CONNECTION=mysql
     DB_HOST=127.0.0.1
     DB_PORT=3306
     DB_DATABASE=gemini_panel
     DB_USERNAME=your_db_user
     DB_PASSWORD=your_db_pass
     ```
   - Generate application key:
     ```bash
     php artisan key:generate
     ```

4. **Database Setup**
   - Create the database:
     ```sql
     CREATE DATABASE gemini_panel;
     ```
   - Run migrations:
     ```bash
     php artisan migrate
     ```
   - Seed initial data (optional, for demo users):
     ```bash
     php artisan db:seed
     ```

5. **Frontend Build**
   ```bash
   npm install
   npm run build
   ```

6. **Permissions Setup**
   ```bash
   chmod -R 755 storage bootstrap/cache
   ```

7. **Launch the Application**
   - Start the development server:
     ```bash
     php artisan serve
     ```
   - Access the panel at `http://localhost:8000`
   - Default login: Admin / Password (change immediately!)

For production deployment:
- Configure your web server (e.g., Nginx virtual host).
- Set up SSL with Let's Encrypt.
- Use a queue worker for email tasks: `php artisan queue:work`.

## ⚙️ Configuration

### Core Settings
Edit `config/app.php` for general settings:
- `APP_NAME`: Panel title (default: "Gemini Panel")
- `APP_URL`: Base URL for links
- `ENCRYPTION_KEY`: Auto-generated, but regenerate for security

### Phishing Templates
- Templates are in `/resources/views/phishing/`
- Customize `login.blade.php` for Gemini login page.
- Add new templates by copying and modifying existing ones.

### External Services
- **Email:** Configure in `.env` (MAIL_MAILER=smtp, MAIL_HOST=smtp.gmail.com, etc.)
- **SMS:** Add Twilio credentials in `.env` (TWILIO_SID, TWILIO_TOKEN)
- **Geolocation:** Uses free IP API (no key needed)

### Advanced Options
- Enable API rate limiting in `config/rate_limiting.php`.
- Set up cron jobs for cleanup: `php artisan schedule:run`

## 📖 Usage Guide

### Creating a Campaign
1. Log in to the dashboard.
2. Navigate to **Campaigns > New Campaign**.
3. Enter details:
   - Name: e.g., "Gemini Credential Harvest"
   - Target URL: Custom domain (e.g., gemini-login.com)
   - Template: Select "Gemini Login"
   - Lures: Add email/SMS templates
4. Deploy: Generate phishing links and QR codes.
5. Monitor: View real-time logs in **Analytics**.

### Harvesting Data
- Submitted credentials appear in **Victims > Details**.
- Auto-encrypt sensitive fields.
- Export: Use the built-in exporter or API: `GET /api/victims/export?format=json`

### Best Practices for Testing
- Always use VPN/Tor for anonymity during tests.
- Test on isolated networks.
- Verify consent forms for participants.

### API Usage
Base URL: `/api/v1`
- Auth: Bearer token (generate in user settings)
- Endpoints:
  - `POST /campaigns`: Create campaign
  - `GET /analytics/{id}`: Fetch stats
  - `POST /send-lure`: Dispatch phishing email

Example cURL:
```bash
curl -X POST http://localhost:8000/api/v1/campaigns \
  -H "Authorization: Bearer your_token" \
  -H "Content-Type: application/json" \
  -d '{"name": "Test Campaign", "template": "gemini-login"}'
```

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Database connection error | Check `.env` credentials and MySQL service status. |
| 500 Internal Server Error | Run `php artisan config:cache` and check logs in `storage/logs/`. |
| Templates not loading | Clear cache: `php artisan view:clear`. |
| Email not sending | Verify SMTP settings and firewall. |
| Permissions denied | Run `chown -R www-data:www-data storage/`. |

If issues persist, check the [Issues page](https://github.com/MazzenTheShadowMonarch/Gemini-Panel/issues) or open a new one.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/amazing-feature`.
3. Commit changes: `git commit -m 'Add amazing feature'`.
4. Push to the branch: `git push origin feature/amazing-feature`.
5. Open a Pull Request.

### Code Style
- Use PSR-12 for PHP.
- Lint with: `composer run lint`.
- Tests: Run `phpunit` before PR.

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Acknowledgments

- Built with [Laravel](https://laravel.com) framework.
- UI components from [Bootstrap](https://getbootstrap.com).
- Thanks to the open-source community for inspirations from tools like Gophish and Evilginx.

## 📞 Support

- **Issues:** [GitHub Issues](https://github.com/MazzenTheShadowMonarch/Gemini-Panel/issues)
- **Discussions:** [GitHub Discussions](https://github.com/MazzenTheShadowMonarch/Gemini-Panel/discussions)
- **Contact:** For private inquiries, reach out via GitHub profile.

---

*Last Updated: November 23, 2025*  
*Made with ❤️ for ethical security research.*
