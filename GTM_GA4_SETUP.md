# GTM & GA4 Setup Guide for MMA 360

## ✅ Already Installed
- GTM Container ID: **GTM-K5XBF42C**
- GA4 Measurement ID: **G-ELQNBXKR56**

## Conversion Events Setup

### 1. WhatsApp Click Conversion
**Event Name**: `whatsapp_click`
**Event Parameters**:
- `event_category`: Conversion
- `event_label`: WhatsApp Click
- `value`: 1
- `currency`: INR
- `phone_number`: 918148490360

**GTM Setup**:
1. Go to GTM → Tags → New
2. Tag Type: **Google Analytics: GA4 Event**
3. Configuration Tag: Create new GA4 Configuration tag with Measurement ID: **G-ELQNBXKR56**
4. Event Name: `whatsapp_click`
5. Event Parameters:
   - `event_category`: Conversion
   - `event_label`: WhatsApp Click
   - `value`: 1
   - `currency`: INR
6. Trigger: Custom Event → Event name: `whatsapp_click`
7. **Mark as Conversion**: ✅ Yes

### 2. Call Click Conversion
**Event Name**: `call_click`
**Event Parameters**:
- `event_category`: Conversion
- `event_label`: Phone Call Click (or specific label)
- `value`: 1
- `currency`: INR
- `phone_number`: +918148490360

**GTM Setup**:
1. Go to GTM → Tags → New
2. Tag Type: **Google Analytics: GA4 Event**
3. Configuration Tag: Use the same GA4 Configuration tag
4. Event Name: `call_click`
5. Event Parameters:
   - `event_category`: Conversion
   - `event_label`: {{Event Label}} (use dataLayer variable)
   - `value`: {{Value}} (use dataLayer variable, default 1)
   - `currency`: INR
6. Trigger: Custom Event → Event name: `call_click`
7. **Mark as Conversion**: ✅ Yes

### 3. GA4 Configuration Tag
1. Go to GTM → Tags → New
2. Tag Type: **Google Analytics: GA4 Configuration**
3. Measurement ID: **G-ELQNBXKR56**
4. Trigger: **All Pages**
5. Name: "GA4 Configuration - MMA 360"

## Google Ads Conversion Import

### Step 1: Link GA4 to Google Ads
1. In Google Analytics 4:
   - Go to **Admin** → **Google Ads Links**
   - Click **Link** → Select your Google Ads account
   - Enable **Import conversions from Google Ads**

### Step 2: Import Conversions in Google Ads
1. In Google Ads:
   - Go to **Tools & Settings** → **Conversions**
   - Click **+ New conversion action**
   - Select **Import** → **Google Analytics 4**
   - Select these events:
     - ✅ `whatsapp_click` - Set as Primary conversion
     - ✅ `call_click` - Set as Primary conversion
   - Set conversion values:
     - WhatsApp: Value = 1, Count = One
     - Call: Value = 1, Count = One
   - Attribution: Use your preferred model (Data-driven recommended)

### Step 3: Verify Conversions
1. Test the buttons on your website
2. Check GA4 Real-time reports to see events firing
3. Wait 24-48 hours for conversions to appear in Google Ads
4. Use Google Ads conversion tracking to optimize campaigns

## Event Tracking Details

### WhatsApp Buttons Tracked:
- Header WhatsApp button (`.whatsapp-btn`)
- Floating WhatsApp button (`.floating-btn-right`)

### Call Buttons Tracked:
- "Call Now" buttons in locations (`.btn-primary`)
- "Prefer To Call" phone button (`.phone-btn`)
- Floating call button (`.floating-btn-left`)
- "Call To Enquire" button (`.cta-btn`)
- "Call Now to Start" button (`.cta-btn`)
- "Book Your Appointment" button (`.book-btn`)
- "Contact Us" button (`.contact-btn`)

All call buttons are grouped under one conversion event: `call_click`
All WhatsApp buttons are grouped under one conversion event: `whatsapp_click`

## Testing

1. Use GTM Preview Mode to test events
2. Check browser console for "Conversion Event" logs
3. Verify in GA4 DebugView
4. Confirm conversions appear in Google Ads after 24-48 hours
