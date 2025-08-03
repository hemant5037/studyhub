# StudyHub Deployment Guide

This guide will help you deploy your StudyHub application on Vercel (Frontend) and Render (Backend).

## Prerequisites

1. GitHub account with your project pushed
2. Vercel account (free tier available)
3. Render account (free tier available)
4. MongoDB Atlas account (for database)
5. Cloudinary account (for image uploads)
6. Razorpay account (for payments)

## Backend Deployment (Render)

### Step 1: Prepare Backend for Deployment

1. **Environment Variables**: Create a `.env` file in the `server` directory with the following variables:
   ```env
   MONGODB_URL=your_mongodb_atlas_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=10000
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   MAIL_HOST=your_mail_host
   MAIL_USER=your_mail_user
   MAIL_PASS=your_mail_password
   FRONTEND_URL=https://your-frontend-domain.vercel.app
   ```

### Step 2: Deploy on Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" and select "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `studyhub-backend`
   - **Root Directory**: `server`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

5. Add Environment Variables in Render dashboard (same as your `.env` file)

6. Click "Create Web Service"

### Step 3: Get Backend URL

After deployment, Render will provide a URL like: `https://studyhub-backend-xxxx.onrender.com`

## Frontend Deployment (Vercel)

### Step 1: Prepare Frontend for Deployment

1. **Environment Variables**: Create a `.env` file in the root directory:
   ```env
   REACT_APP_BASE_URL=https://your-backend-domain.onrender.com/api/v1
   ```

### Step 2: Deploy on Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Create React App
   - **Root Directory**: `./` (root of your project)
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`

5. Add Environment Variables in Vercel dashboard:
   - `REACT_APP_BASE_URL`: Your Render backend URL + `/api/v1`

6. Click "Deploy"

### Step 3: Get Frontend URL

After deployment, Vercel will provide a URL like: `https://studyhub-frontend.vercel.app`

## Post-Deployment Steps

### 1. Update CORS Configuration

Update your backend CORS settings in `server/index.js`:
```javascript
app.use(
    cors({
        origin: ["https://your-frontend-domain.vercel.app", "http://localhost:3000"],
        credentials: true,
    })
);
```

### 2. Update Environment Variables

1. **Backend**: Update `FRONTEND_URL` in Render environment variables
2. **Frontend**: Update `REACT_APP_BASE_URL` in Vercel environment variables

### 3. Test Your Application

1. Test user registration and login
2. Test course creation and enrollment
3. Test payment integration
4. Test file uploads

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Ensure CORS origin includes your Vercel domain
2. **Environment Variables**: Double-check all environment variables are set correctly
3. **Database Connection**: Verify MongoDB Atlas connection string
4. **Build Errors**: Check if all dependencies are in package.json

### Useful Commands:

```bash
# Test backend locally
cd server && npm start

# Test frontend locally
npm start

# Check build
npm run build
```

## Security Notes

1. Never commit `.env` files to GitHub
2. Use strong JWT secrets
3. Enable MongoDB Atlas network access for Render IPs
4. Set up proper CORS origins

## Cost Optimization

- **Vercel**: Free tier includes 100GB bandwidth/month
- **Render**: Free tier includes 750 hours/month
- **MongoDB Atlas**: Free tier includes 512MB storage
- **Cloudinary**: Free tier includes 25GB storage and 25GB bandwidth/month

## Support

If you encounter issues:
1. Check Render and Vercel logs
2. Verify all environment variables
3. Test endpoints using Postman
4. Check browser console for frontend errors 