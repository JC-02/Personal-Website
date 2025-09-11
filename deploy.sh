#!/bin/bash
# DigitalOcean Deployment Script

# Build the project
echo "Building the project..."
npm run build

# Create deployment package
echo "Creating deployment package..."
tar -czf portfolio-deploy.tar.gz dist/

echo "Deployment package created: portfolio-deploy.tar.gz"
echo "Upload this to your DigitalOcean droplet and extract to /var/www/html/"
