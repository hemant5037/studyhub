# 🔧 MongoDB Connection Setup Guide

## 🚨 **Current Error:**
```
Error: querySrv ENOTFOUND _mongodb._tcp.cluster.mongodb.net
```

## 📋 **Step-by-Step Fix:**

### **1. MongoDB Atlas Setup**

#### **A. Create/Select Cluster**
1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Sign in to your account
3. Select your project or create a new one
4. Create a new cluster (Free tier is fine)

#### **B. Configure Network Access**
1. In the left sidebar, click **"Network Access"**
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (adds `0.0.0.0/0`)
4. Click **"Confirm"**

#### **C. Create Database User**
1. In the left sidebar, click **"Database Access"**
2. Click **"Add New Database User"**
3. Set **Username** and **Password** (save these!)
4. Select **"Read and write to any database"**
5. Click **"Add User"**

### **2. Get Connection String**

#### **A. Connect to Your Application**
1. Click **"Connect"** on your cluster
2. Choose **"Connect your application"**
3. Select **"Node.js"** as driver
4. Copy the connection string

#### **B. Format the Connection String**
Replace the placeholder with your actual credentials:
```
mongodb+srv://username:password@cluster.mongodb.net/studyhub?retryWrites=true&w=majority
```

**Important:**
- Replace `username` with your database username
- Replace `password` with your database password
- Replace `cluster.mongodb.net` with your actual cluster URL
- The `studyhub` part is your database name

### **3. Update Render Environment Variables**

#### **A. In Render Dashboard**
1. Go to your service dashboard
2. Click **"Environment"** tab
3. Find `MONGODB_URL` or add it
4. Paste your complete connection string

#### **B. Example Environment Variable**
```env
MONGODB_URL=mongodb+srv://myuser:mypassword123@cluster0.abc123.mongodb.net/studyhub?retryWrites=true&w=majority
```

### **4. Test Connection**

#### **A. Local Testing**
Create a `.env` file in your `server` folder:
```env
MONGODB_URL=your_connection_string_here
```

#### **B. Test Locally**
```bash
cd server
npm start
```

### **5. Common Issues & Solutions**

#### **Issue 1: Network Access**
- **Error**: `ENOTFOUND` or `ECONNREFUSED`
- **Solution**: Add `0.0.0.0/0` to Network Access

#### **Issue 2: Authentication**
- **Error**: `Authentication failed`
- **Solution**: Check username/password in connection string

#### **Issue 3: Database Name**
- **Error**: `Database not found`
- **Solution**: Make sure database name is correct in connection string

#### **Issue 4: Cluster URL**
- **Error**: `ENOTFOUND _mongodb._tcp.cluster.mongodb.net`
- **Solution**: Use the exact cluster URL from Atlas

## 🔍 **Troubleshooting Checklist**

- [ ] MongoDB Atlas account created
- [ ] Cluster created and running
- [ ] Network Access allows `0.0.0.0/0`
- [ ] Database user created with read/write permissions
- [ ] Connection string copied correctly
- [ ] Username and password replaced in connection string
- [ ] Environment variable set in Render
- [ ] Database name specified in connection string

## 📞 **Quick Test**

Once you've set up everything, your connection string should look like:
```
mongodb+srv://yourusername:yourpassword@cluster0.abc123.mongodb.net/studyhub?retryWrites=true&w=majority
```

## 🎯 **Next Steps**

1. Follow the setup guide above
2. Update your Render environment variables
3. Redeploy your application
4. Check the logs for successful connection

The error should be resolved once you have the correct MongoDB connection string configured! 🚀 