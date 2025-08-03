# Deployment Checklist

## Before Deployment

### Backend (Render)
- [ ] MongoDB Atlas database created and connection string ready
- [ ] Cloudinary account set up with API keys
- [ ] Razorpay account configured with test keys
- [ ] Email service configured (Gmail, etc.)
- [ ] JWT secret generated
- [ ] All environment variables documented

### Frontend (Vercel)
- [ ] Backend URL ready for environment variable
- [ ] Build command tested locally (`npm run build`)
- [ ] All dependencies in package.json

## Deployment Steps

### Backend on Render
1. [ ] Go to Render Dashboard
2. [ ] Create new Web Service
3. [ ] Connect GitHub repository
4. [ ] Set root directory to `server`
5. [ ] Set build command: `npm install`
6. [ ] Set start command: `npm start`
7. [ ] Add all environment variables
8. [ ] Deploy and get URL

### Frontend on Vercel
1. [ ] Go to Vercel Dashboard
2. [ ] Import GitHub repository
3. [ ] Set framework to Create React App
4. [ ] Add environment variable: `REACT_APP_BASE_URL`
5. [ ] Deploy and get URL

## Post-Deployment
1. [ ] Update backend CORS with frontend URL
2. [ ] Test user registration
3. [ ] Test user login
4. [ ] Test course creation
5. [ ] Test payment flow
6. [ ] Test file uploads
7. [ ] Update resume with deployed URLs

## Environment Variables Needed

### Backend (.env)
```
MONGODB_URL=
JWT_SECRET=
PORT=10000
CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
MAIL_HOST=
MAIL_USER=
MAIL_PASS=
FRONTEND_URL=
```

### Frontend (.env)
```
REACT_APP_BASE_URL=
```

## URLs to Update
- [ ] Backend URL in frontend environment
- [ ] Frontend URL in backend CORS
- [ ] Frontend URL in backend environment variables 