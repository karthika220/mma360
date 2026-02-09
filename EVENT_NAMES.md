# Event Names Reference

## 📊 Conversion Events (For Google Ads)

### 1. `call_click` ✅ **PRIMARY CONVERSION**
**Purpose:** Track all phone call button clicks as one conversion event

**Triggered by:**
- `.btn-primary` (Call Now buttons)
- `.phone-btn` (Phone buttons)
- `.floating-btn-left` (Floating call button)
- `.cta-btn` (Call to Action buttons)
- `.contact-btn` (Contact Us buttons)
- `.book-btn` (Book Your Appointment button)

**Event Parameters:**
```javascript
{
    'event': 'call_click',
    'event_category': 'Conversion',
    'event_label': 'Phone Call Click' | 'Contact Us - Phone Call' | 'Book Appointment - Phone Call',
    'value': 1,
    'currency': 'INR',
    'phone_number': '+918148490360',
    'button_type': 'btn-primary' | 'phone-btn' | 'floating-btn-left' | 'cta-btn' | 'contact-btn' | 'book-btn',
    'button_text': 'Call Now' | 'Book Your Appointment' | etc.
}
```

**GTM Setup:**
- **Tag Type:** Google Analytics: GA4 Event
- **Event Name:** `call_click`
- **Trigger:** Custom Event → `call_click`
- **Mark as Conversion:** ✅ Yes (in GA4)

---

### 2. `whatsapp_click` ✅ **PRIMARY CONVERSION**
**Purpose:** Track all WhatsApp button clicks as one conversion event

**Triggered by:**
- `.floating-btn-right` (Floating WhatsApp button)
- `.whatsapp-btn` (WhatsApp buttons in navbar)

**Event Parameters:**
```javascript
{
    'event': 'whatsapp_click',
    'event_category': 'Conversion',
    'event_label': 'WhatsApp Click',
    'value': 1,
    'currency': 'INR',
    'phone_number': '918148490360',
    'button_type': 'floating-btn-right' | 'whatsapp-btn'
}
```

**GTM Setup:**
- **Tag Type:** Google Analytics: GA4 Event
- **Event Name:** `whatsapp_click`
- **Trigger:** Custom Event → `whatsapp_click`
- **Mark as Conversion:** ✅ Yes (in GA4)

---

## 📈 Engagement Events (Not Conversions)

### 3. `explore_sessions` ℹ️ **ENGAGEMENT ONLY**
**Purpose:** Track engagement when users click "Explore Sessions" button

**Triggered by:**
- `.explore-btn` (Explore Sessions button)

**Event Parameters:**
```javascript
{
    'event': 'explore_sessions',
    'event_category': 'Engagement',
    'event_label': 'Explore Sessions Click'
}
```

**GTM Setup:**
- **Tag Type:** Google Analytics: GA4 Event
- **Event Name:** `explore_sessions`
- **Trigger:** Custom Event → `explore_sessions`
- **Mark as Conversion:** ❌ No (engagement only)

---

## 🎯 Summary

### Conversion Events (Import to Google Ads):
1. ✅ **`call_click`** - All phone call button clicks
2. ✅ **`whatsapp_click`** - All WhatsApp button clicks

### Engagement Events (Analytics Only):
3. ℹ️ **`explore_sessions`** - Explore Sessions button clicks

---

## 📋 GTM Configuration Checklist

### Required Tags:

#### Tag 1: GA4 Configuration
- **Type:** Google Analytics: GA4 Configuration
- **Measurement ID:** `G-ELQNBXKR56`
- **Trigger:** All Pages

#### Tag 2: Call Click Conversion
- **Type:** Google Analytics: GA4 Event
- **Event Name:** `call_click`
- **Configuration Tag:** (Select Tag 1)
- **Trigger:** Custom Event → `call_click`
- **Mark as Conversion:** ✅ Yes

#### Tag 3: WhatsApp Click Conversion
- **Type:** Google Analytics: GA4 Event
- **Event Name:** `whatsapp_click`
- **Configuration Tag:** (Select Tag 1)
- **Trigger:** Custom Event → `whatsapp_click`
- **Mark as Conversion:** ✅ Yes

#### Tag 4: Explore Sessions (Optional)
- **Type:** Google Analytics: GA4 Event
- **Event Name:** `explore_sessions`
- **Configuration Tag:** (Select Tag 1)
- **Trigger:** Custom Event → `explore_sessions`
- **Mark as Conversion:** ❌ No

---

## 🔍 Testing Event Names

### In Browser Console:
```javascript
// Check if events are firing
console.log(window.dataLayer);

// Should see events like:
// {event: 'call_click', event_category: 'Conversion', ...}
// {event: 'whatsapp_click', event_category: 'Conversion', ...}
// {event: 'explore_sessions', event_category: 'Engagement', ...}
```

### In GTM Preview Mode:
1. Click WhatsApp button → Should see `whatsapp_click` event
2. Click any Call button → Should see `call_click` event
3. Click Explore Sessions → Should see `explore_sessions` event

### In GA4 DebugView:
- Events should appear with exact names: `call_click`, `whatsapp_click`, `explore_sessions`

---

## ⚠️ Important Notes

1. **Event names are case-sensitive:** 
   - ✅ `call_click` (correct)
   - ❌ `Call_Click` (wrong)
   - ❌ `call-click` (wrong)

2. **All call buttons use the same event:** 
   - All phone call buttons trigger `call_click` event
   - This groups all call conversions into one metric

3. **All WhatsApp buttons use the same event:**
   - All WhatsApp buttons trigger `whatsapp_click` event
   - This groups all WhatsApp conversions into one metric

4. **Event Parameters:**
   - `event_category`: Always 'Conversion' for conversion events
   - `event_label`: Varies by button type (for reporting)
   - `value`: Always 1 (can be changed if you want to assign different values)
   - `currency`: Always 'INR'

---

## 📞 Contact Info in Events

- **Phone Number:** `+918148490360` (for call_click events)
- **WhatsApp Number:** `918148490360` (for whatsapp_click events)

---

**Last Updated:** Pre-deployment
**GTM Container:** GTM-K5XBF42C
**GA4 ID:** G-ELQNBXKR56
