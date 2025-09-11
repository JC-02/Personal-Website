# Jordan Cowan Portfolio - Deployment Guide

## 🚀 DigitalOcean + Cloudflare Deployment

### Prerequisites
- DigitalOcean account
- GitHub repository
- Domain registered with Cloudflare

### Deployment Steps

#### 1. GitHub Setup
```bash
# If you haven't already, push to GitHub:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

#### 2. DigitalOcean App Platform
1. Go to [DigitalOcean Apps](https://cloud.digitalocean.com/apps)
2. Click "Create App"
3. Connect your GitHub repository
4. Choose this portfolio repository
5. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Run Command**: Not needed (static site)

#### 3. Cloudflare Domain Configuration
1. In Cloudflare dashboard, go to DNS settings
2. Add CNAME record:
   - **Name**: `www` (or `@` for root domain)
   - **Target**: Your DigitalOcean app URL
3. Set SSL/TLS to "Full (strict)"
4. Enable "Always Use HTTPS"

### Alternative: Manual DigitalOcean Droplet

#### Server Setup Commands
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Nginx
sudo apt install nginx -y

# Install PM2 (for process management)
sudo npm install -g pm2

# Setup firewall
sudo ufw enable
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
```

#### Deployment Script
```bash
#!/bin/bash
cd /var/www/jordan-cowan-portfolio
git pull origin main
npm install
npm run build
sudo cp -r dist/* /var/www/html/
sudo systemctl reload nginx
```

## 🔧 Local Development

### Start Development Server
```bash
npm run dev
# Visit: http://localhost:5173
```

### Build for Production
```bash
npm run build
npm run preview  # Test production build
```

### Code Quality
```bash
npm run lint     # Check code quality
npm run format   # Format code
```

## 🌐 Testing Checklist

### Before Deployment
- [ ] All navigation links work
- [ ] Contact form submission works
- [ ] Responsive design on mobile/tablet
- [ ] Performance (animations smooth)
- [ ] Cross-browser compatibility
- [ ] SEO meta tags present

### After Deployment
- [ ] Domain resolves correctly
- [ ] HTTPS certificate active
- [ ] All assets loading
- [ ] Contact form emails working
- [ ] Google Analytics (if added)
- [ ] Performance monitoring
