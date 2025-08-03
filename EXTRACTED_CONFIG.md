# 🔧 StudyHub Project Configuration Extraction

## 📋 **Environment Variables Required**

### **Backend Environment Variables (Render)**

| Variable Name | Current Usage | Required | Example/Default |
|---------------|---------------|----------|-----------------|
| `MONGODB_URL` | Database connection | ✅ Required | `mongodb+srv://username:password@cluster.mongodb.net/studyhub` |
| `JWT_SECRET` | JWT token signing | ✅ Required | `your-super-secret-jwt-key-here` |
| `PORT` | Server port | ✅ Required | `10000` (Render sets this) |
| `CLOUD_NAME` | Cloudinary cloud name | ✅ Required | `your-cloud-name` |
| `API_KEY` | Cloudinary API key | ✅ Required | `123456789012345` |
| `API_SECRET` | Cloudinary API secret | ✅ Required | `your-cloudinary-secret-key` |
| `RAZORPAY_KEY` | Razorpay public key | ✅ Required | `rzp_test_cEtswxj6pxi3Kd` |
| `RAZORPAY_SECRET` | Razorpay secret key | ✅ Required | `8RBwQyywEDacSUIlU76GpXK6` |
| `MAIL_HOST` | Email service host | ✅ Required | `smtp.gmail.com` |
| `MAIL_USER` | Email username | ✅ Required | `your-email@gmail.com` |
| `MAIL_PASS` | Email password | ✅ Required | `your-app-password` |
| `FRONTEND_URL` | Frontend domain for CORS | ✅ Required | `https://your-app.vercel.app` |
| `FOLDER_NAME` | Cloudinary folder name | ✅ Required | `studyhub` |

### **Frontend Environment Variables (Vercel)**

| Variable Name | Current Usage | Required | Example |
|---------------|---------------|----------|---------|
| `REACT_APP_BASE_URL` | Backend API URL | ✅ Required | `https://your-backend.onrender.com/api/v1` |

## 🔍 **Current Configuration Analysis**

### **Database Configuration**
- **File**: `server/config/database.js`
- **Connection**: Uses `MONGODB_URL` environment variable
- **Status**: ✅ Properly configured

### **Cloudinary Configuration**
- **File**: `server/config/cloudinary.js`
- **Variables Used**: `CLOUD_NAME`, `API_KEY`, `API_SECRET`
- **Status**: ✅ Properly configured

### **Razorpay Configuration**
- **File**: `server/config/razorpay.js`
- **Current**: Hardcoded test keys
- **Variables Used**: `RAZORPAY_KEY`, `RAZORPAY_SECRET`
- **Status**: ⚠️ Needs environment variable setup

### **Email Configuration**
- **File**: `server/utils/mailSender.js`
- **Variables Used**: `MAIL_HOST`, `MAIL_USER`, `MAIL_PASS`
- **Status**: ✅ Properly configured

### **JWT Configuration**
- **File**: `server/middlewares/auth.js`, `server/controllers/Auth.js`
- **Variable Used**: `JWT_SECRET`
- **Status**: ✅ Properly configured

## 🚨 **Issues Found & Fixes Needed**

### **1. Razorpay Hardcoded Keys**
**Issue**: Test keys are hardcoded in `server/config/razorpay.js`
**Fix**: Update to use environment variables

```javascript
// Current (needs to be changed):
const RAZORPAY_KEY = "rzp_test_cEtswxj6pxi3Kd"
const RAZORPAY_SECRET = "8RBwQyywEDacSUIlU76GpXK6"

// Should be:
exports.instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
});
```

### **2. Missing FOLDER_NAME Variable**
**Issue**: `FOLDER_NAME` is used but not documented
**Usage**: Cloudinary folder organization for uploads
**Fix**: Add to environment variables

## 📝 **Complete Environment Setup**

### **Backend (.env)**
```env
# Database
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/studyhub

# JWT
JWT_SECRET=your-super-secret-jwt-key-here

# Server
PORT=10000

# Cloudinary
CLOUD_NAME=your-cloud-name
API_KEY=your-cloudinary-api-key
API_SECRET=your-cloudinary-api-secret
FOLDER_NAME=studyhub

# Razorpay
RAZORPAY_KEY=rzp_test_cEtswxj6pxi3Kd
RAZORPAY_SECRET=8RBwQyywEDacSUIlU76GpXK6

# Email
MAIL_HOST=smtp.gmail.com
MAIL_USER=your-email@gmail.com
MAIL_PASS=your-app-password

# Frontend
FRONTEND_URL=https://your-frontend-domain.vercel.app
```

### **Frontend (.env)**
```env
REACT_APP_BASE_URL=https://your-backend-domain.onrender.com/api/v1
```

## 🔧 **Required Fixes**

### **1. Update Razorpay Config**
```javascript
// server/config/razorpay.js
const Razorpay = require("razorpay");

exports.instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
});
```

### **2. Add FOLDER_NAME to Environment**
- Add `FOLDER_NAME=studyhub` to your environment variables
- Used in: Profile.js, Course.js, Subsection.js for Cloudinary uploads

## 📊 **Deployment Checklist**

### **Backend (Render)**
- [ ] Fix Razorpay configuration
- [ ] Set all 12 environment variables
- [ ] Test database connection
- [ ] Test Cloudinary uploads
- [ ] Test email sending
- [ ] Test payment integration

### **Frontend (Vercel)**
- [ ] Set `REACT_APP_BASE_URL`
- [ ] Test API connectivity
- [ ] Test user registration/login
- [ ] Test course enrollment

## 🎯 **Next Steps**
1. Fix the Razorpay configuration
2. Set up all environment variables in Render
3. Deploy backend first
4. Update frontend with backend URL
5. Deploy frontend
6. Test all functionality 