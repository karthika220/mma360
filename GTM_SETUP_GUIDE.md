# Google Tag Manager & GA4 Setup Guide for MMA 360

## Step 1: Get Your GTM Container ID

1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Create a new container or use an existing one
3. Copy your Container ID (format: GTM-XXXXXXX)
4. Replace `GTM-XXXXXXX` in `index.html` with your actual Container ID (appears in two places)

## Step 2: Configure GA4 in Google Tag Manager

### Create GA4 Configuration Tag:

1. In GTM, go to **Tags** → **New**
2. Tag Configuration: **Google Analytics: GA4 Configuration**
3. Measurement ID: Enter your GA4 Measurement ID (format: G-XXXXXXXXXX)
4. Triggering: **All Pages**
5. Save and name it "GA4 Configuration"

### Create GA4 Event Tags for Conversions:

#### 1. Phone Call Event
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: Select your GA4 Configuration tag
- **Event Name**: `phone_call`
- **Parameters**:
  - `event_category`: Contact
  - `event_label`: Phone Call
- **Trigger**: Custom Event → Event name: `phone_call`
- **Mark as Conversion**: Yes (in GA4)

#### 2. WhatsApp Click Event
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: Select your GA4 Configuration tag
- **Event Name**: `whatsapp_click`
- **Parameters**:
  - `event_category`: Contact
  - `event_label`: WhatsApp Click
- **Trigger**: Custom Event → Event name: `whatsapp_click`
- **Mark as Conversion**: Yes (in GA4)

#### 3. Book Appointment Event
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: Select your GA4 Configuration tag
- **Event Name**: `book_appointment`
- **Parameters**:
  - `event_category`: Conversion
  - `event_label`: Book Appointment
  - `conversion_value`: 1
- **Trigger**: Custom Event → Event name: `book_appointment`
- **Mark as Conversion**: Yes (in GA4)

#### 4. Explore Sessions Event
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: Select your GA4 Configuration tag
- **Event Name**: `explore_sessions`
- **Parameters**:
  - `event_category`: Engagement
  - `event_label`: Explore Sessions Click
- **Trigger**: Custom Event → Event name: `explore_sessions`

## Step 3: Link GA4 to Google Ads

1. In Google Analytics 4:
   - Go to **Admin** → **Google Ads Links**
   - Click **Link** → Select your Google Ads account
   - Enable **Import conversions from Google Ads**

2. In Google Ads:
   - Go to **Tools & Settings** → **Conversions**
   - Click **+ New conversion action**
   - Select **Import** → **Google Analytics 4**
   - Select the events you want to import:
     - `phone_call`
     - `whatsapp_click`
     - `book_appointment`
   - Set conversion values and attribution models

## Step 4: Test Your Setup

1. Use GTM Preview Mode to test events
2. Use GA4 DebugView to verify events are firing
3. Test in Google Ads to ensure conversions are importing

## Tracked Events

The following events are automatically tracked:

1. **phone_call** - When user clicks any call button
2. **whatsapp_click** - When user clicks WhatsApp button
3. **book_appointment** - When user clicks "Book Your Appointment"
4. **explore_sessions** - When user clicks "Explore Sessions"

All events include contextual data like button location and phone numbers.
