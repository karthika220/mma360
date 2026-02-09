# Complete Deployment & GTM/GA4 Setup Guide

## Part 1: Hosting & Deployment

### Option A: GitHub Pages (Free & Easy)

#### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **+** icon → **New repository**
3. Repository name: `mma360-website`
4. Set to **Public** (required for free GitHub Pages)
5. Click **Create repository**

#### Step 2: Upload Files
1. Install [GitHub Desktop](https://desktop.github.com/) or use Git command line
2. Clone your repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/mma360-website.git
   cd mma360-website
   ```
3. Copy all your files into the repository folder:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `assets/` folder (with all images)
4. Commit and push:
   ```bash
   git add .
   git commit -m "Initial deployment"
   git push origin main
   ```

#### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Select branch: **main**
5. Select folder: **/ (root)**
6. Click **Save**
7. Your site will be live at: `https://YOUR_USERNAME.github.io/mma360-website/`

---

### Option B: Netlify (Recommended - Free & Fast)

#### Step 1: Prepare Files
1. Ensure all files are in one folder:
   ```
   mma360/
   ├── index.html
   ├── styles.css
   ├── script.js
   └── assets/
       └── (all images)
   ```

#### Step 2: Deploy to Netlify
1. Go to [Netlify.com](https://netlify.com) and sign up/login
2. Click **Add new site** → **Deploy manually**
3. Drag and drop your entire `mma360` folder
4. Wait for deployment (usually 30-60 seconds)
5. Your site will be live at: `https://random-name.netlify.app`
6. Click **Site settings** → **Change site name** to customize URL

#### Step 3: Custom Domain (Optional)
1. In Netlify, go to **Domain settings**
2. Click **Add custom domain**
3. Enter your domain name
4. Follow DNS configuration instructions

---

### Option C: Vercel (Free & Fast)

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Deploy
1. Navigate to your project folder:
   ```bash
   cd C:\Users\Karthika\Downloads\mma360
   ```
2. Run deployment:
   ```bash
   vercel
   ```
3. Follow prompts:
   - Set up and deploy? **Yes**
   - Which scope? Select your account
   - Link to existing project? **No**
   - Project name: `mma360`
   - Directory: `./`
   - Override settings? **No**
4. Your site will be live at: `https://mma360.vercel.app`

---

## Part 2: Google Tag Manager Setup

### Step 1: Access GTM
1. Go to [tagmanager.google.com](https://tagmanager.google.com)
2. Sign in with your Google account
3. Select container: **GTM-K5XBF42C** (or create new container)

### Step 2: Create GA4 Configuration Tag

1. In GTM, click **Tags** → **New**
2. Tag Configuration:
   - Click **Tag Configuration** → Select **Google Analytics: GA4 Configuration**
   - Measurement ID: `G-ELQNBXKR56`
   - Tag Name: `GA4 Configuration - MMA 360`
3. Triggering:
   - Click **Triggering** → Select **All Pages**
4. Click **Save**

### Step 3: Create WhatsApp Click Event Tag

1. Click **Tags** → **New**
2. Tag Configuration:
   - Click **Tag Configuration** → Select **Google Analytics: GA4 Event**
   - Configuration Tag: Select `GA4 Configuration - MMA 360`
   - Event Name: `whatsapp_click`
   - Event Parameters:
     - Click **Add Row**
     - Parameter name: `event_category`
     - Value: `Conversion`
     - Click **Add Row**
     - Parameter name: `event_label`
     - Value: `WhatsApp Click`
     - Click **Add Row**
     - Parameter name: `value`
     - Value: `1`
     - Click **Add Row**
     - Parameter name: `currency`
     - Value: `INR`
   - Tag Name: `GA4 - WhatsApp Click`
3. Triggering:
   - Click **Triggering** → **+** → **Trigger Configuration**
   - Select **Custom Event**
   - Event name: `whatsapp_click`
   - Trigger Name: `WhatsApp Click Trigger`
   - Click **Save**
4. Click **Save** on the tag

### Step 4: Create Call Click Event Tag

1. Click **Tags** → **New**
2. Tag Configuration:
   - Click **Tag Configuration** → Select **Google Analytics: GA4 Event**
   - Configuration Tag: Select `GA4 Configuration - MMA 360`
   - Event Name: `call_click`
   - Event Parameters:
     - Click **Add Row**
     - Parameter name: `event_category`
     - Value: `Conversion`
     - Click **Add Row**
     - Parameter name: `event_label`
     - Value: `{{Event Label}}` (create Data Layer Variable - see below)
     - Click **Add Row**
     - Parameter name: `value`
     - Value: `{{Value}}` (create Data Layer Variable - see below)
     - Click **Add Row**
     - Parameter name: `currency`
     - Value: `INR`
   - Tag Name: `GA4 - Call Click`
3. Triggering:
   - Click **Triggering** → **+** → **Trigger Configuration**
   - Select **Custom Event**
   - Event name: `call_click`
   - Trigger Name: `Call Click Trigger`
   - Click **Save**
4. Click **Save** on the tag

### Step 5: Create Data Layer Variables (Optional but Recommended)

1. Click **Variables** → **New**
2. Variable Configuration:
   - Click **Variable Configuration** → Select **Data Layer Variable**
   - Data Layer Variable Name: `event_label`
   - Variable Name: `Event Label`
   - Click **Save**
3. Repeat for:
   - Variable Name: `Value`
   - Data Layer Variable Name: `value`

### Step 6: Mark Events as Conversions in GA4

1. Go to [analytics.google.com](https://analytics.google.com)
2. Select your GA4 property
3. Go to **Admin** (gear icon) → **Events**
4. Find `whatsapp_click` → Toggle **Mark as conversion** → **ON**
5. Find `call_click` → Toggle **Mark as conversion** → **ON**

### Step 7: Submit GTM Container

1. In GTM, click **Submit** (top right)
2. Version Name: `Initial GA4 Events Setup`
3. Version Description: `Added WhatsApp and Call click conversion tracking`
4. Click **Publish**

---

## Part 3: Google Ads Conversion Import

### Step 1: Link GA4 to Google Ads

1. In Google Analytics 4:
   - Go to **Admin** → **Google Ads Links**
   - Click **Link** → Select your Google Ads account
   - Enable **Import conversions from Google Ads**
   - Click **Next** → **Submit**

### Step 2: Import Conversions in Google Ads

1. Go to [ads.google.com](https://ads.google.com)
2. Click **Tools & Settings** (wrench icon) → **Conversions**
3. Click **+ New conversion action**
4. Select **Import** → **Google Analytics 4**
5. Select your GA4 property
6. Select conversions to import:
   - ✅ `whatsapp_click` 
     - Category: **Lead**
     - Value: **Use different values for each conversion** (if you set values)
     - Count: **One**
     - Attribution: **Data-driven** (recommended)
   - ✅ `call_click`
     - Category: **Lead**
     - Value: **Use different values for each conversion**
     - Count: **One**
     - Attribution: **Data-driven**
7. Click **Import and continue**
8. Click **Done**

---

## Part 4: Testing Events

### Step 1: Test in GTM Preview Mode

1. In GTM, click **Preview** (top right)
2. Enter your website URL: `https://your-site.com`
3. Click **Connect**
4. A new tab opens with your site + GTM Preview panel
5. Test events:
   - Click WhatsApp button → Should see `whatsapp_click` event fire
   - Click any Call button → Should see `call_click` event fire
6. In Preview panel, verify:
   - Tags fired correctly
   - Event parameters are correct
   - No errors

### Step 2: Test in GA4 DebugView

1. In GA4, go to **Admin** → **DebugView**
2. Enable DebugView:
   - Option A: Install [GA Debugger Chrome Extension](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)
   - Option B: Add `?debug_mode=true` to your URL
3. Visit your site with debug mode
4. Click buttons and watch events appear in real-time
5. Verify:
   - Event names: `whatsapp_click`, `call_click`
   - Parameters: `event_category`, `event_label`, `value`, `currency`

### Step 3: Verify in GA4 Real-Time Reports

1. In GA4, go to **Reports** → **Real-time**
2. Visit your website
3. Click WhatsApp or Call buttons
4. Events should appear within 30 seconds
5. Check:
   - Event count increases
   - Event names are correct
   - Parameters are visible

### Step 4: Verify Conversions in Google Ads

1. Wait 24-48 hours after setup
2. In Google Ads, go to **Tools & Settings** → **Conversions**
3. Check imported conversions:
   - Should show conversion data
   - Verify conversion values
   - Check attribution windows

---

## Part 5: Troubleshooting

### Events Not Firing?

1. **Check GTM Container ID:**
   - Verify `GTM-K5XBF42C` is correct in `index.html`
   - Check browser console for GTM errors

2. **Check Event Names:**
   - WhatsApp: Must be exactly `whatsapp_click`
   - Call: Must be exactly `call_click`
   - Case-sensitive!

3. **Check Browser Console:**
   - Open DevTools (F12)
   - Go to Console tab
   - Look for errors or event logs

4. **Verify GTM Tags:**
   - Use GTM Preview Mode
   - Check if tags are firing
   - Verify triggers are correct

### Conversions Not Importing to Google Ads?

1. **Check GA4 Link:**
   - Verify GA4 is linked to Google Ads
   - Check link status in GA4 Admin

2. **Check Event Marking:**
   - Verify events are marked as conversions in GA4
   - Go to Admin → Events → Check toggle

3. **Wait Time:**
   - Conversions take 24-48 hours to appear
   - Check again after waiting period

4. **Check Data:**
   - Verify events are firing in GA4 Real-time
   - If no events in GA4, fix GTM first

---

## Quick Reference

### Your IDs:
- **GTM Container ID:** `GTM-K5XBF42C`
- **GA4 Measurement ID:** `G-ELQNBXKR56`
- **Phone Number:** `+91 81484 90360`
- **WhatsApp Number:** `918148490360`

### Event Names:
- `whatsapp_click` - WhatsApp button clicks
- `call_click` - All call button clicks
- `explore_sessions` - Explore Sessions button (engagement, not conversion)

### Testing Checklist:
- [ ] GTM Preview Mode shows events firing
- [ ] GA4 DebugView shows events
- [ ] GA4 Real-time shows events
- [ ] Events marked as conversions in GA4
- [ ] Conversions imported to Google Ads (after 24-48h)
- [ ] All buttons work on mobile devices
- [ ] Website loads fast (<3 seconds)

---

## Support Resources

- **GTM Help:** [support.google.com/tagmanager](https://support.google.com/tagmanager)
- **GA4 Help:** [support.google.com/analytics](https://support.google.com/analytics)
- **Google Ads Help:** [support.google.com/google-ads](https://support.google.com/google-ads)
