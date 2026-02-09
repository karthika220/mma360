# Quick Start Guide - 5 Minute Setup

## 🚀 Fastest Deployment: Netlify

### 1. Deploy (2 minutes)
1. Go to [netlify.com](https://netlify.com) → Sign up/Login
2. Drag & drop your `mma360` folder
3. Done! Your site is live

### 2. GTM Setup (2 minutes)
1. Go to [tagmanager.google.com](https://tagmanager.google.com)
2. Container: `GTM-K5XBF42C`
3. **Tags** → **New**:
   - **Tag 1:** GA4 Configuration
     - Type: Google Analytics: GA4 Configuration
     - Measurement ID: `G-ELQNBXKR56`
     - Trigger: All Pages
   - **Tag 2:** WhatsApp Click
     - Type: Google Analytics: GA4 Event
     - Event Name: `whatsapp_click`
     - Configuration Tag: (select Tag 1)
     - Trigger: Custom Event → `whatsapp_click`
   - **Tag 3:** Call Click
     - Type: Google Analytics: GA4 Event
     - Event Name: `call_click`
     - Configuration Tag: (select Tag 1)
     - Trigger: Custom Event → `call_click`
4. Click **Submit** → **Publish**

### 3. Mark as Conversions (1 minute)
1. Go to [analytics.google.com](https://analytics.google.com)
2. **Admin** → **Events**
3. Toggle **Mark as conversion** for:
   - `whatsapp_click` ✅
   - `call_click` ✅

### 4. Test
1. Visit your website
2. Open browser console (F12)
3. Click WhatsApp button → Should see event log
4. Click Call button → Should see event log
5. Check GA4 Real-time → Events should appear

**Done!** 🎉

## 📋 Full Details
See `DEPLOYMENT_GUIDE.md` for complete instructions.
