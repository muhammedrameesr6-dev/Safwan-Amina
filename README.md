# Safwan & Amina — Royal Emerald & Gold Wedding Invitation

A luxury, interactive wedding invitation web application built for **Safwan Kakkarakandy & Amina Nafas**, cloned and enhanced from [najeem-mirsha-wedding.vercel.app](https://najeem-mirsha-wedding.vercel.app/).

Built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**.

---

## 💍 Wedding Details

- **Groom:** Safwan Kakkarakandy  
  *Son of Mr. Noushad P & Mrs. Fousiya K*  
  *Residence: Foujas, J.T Road, Thalassery, Saidarpally*

- **Bride:** Amina Nafas  
  *Daughter of Mr. Mohammed Nafas RM & Mrs. Shabana Nafas*  
  *Residence: AAMI, Saidarpally, Behind Marble India, Thalassery*

### 🗓️ Events Schedule
1. **Nikkah Ceremony**
   - **Date:** Saturday, 26th December 2026
   - **Time:** 04:30 PM
   - **Venue:** Groom's Residence (Foujas, J.T Road, Thalassery, Saidarpally)

2. **Wedding Reception**
   - **Date:** Sunday, 27th December 2026
   - **Time:** 12:00 PM – 03:00 PM
   - **Venue:** Groom's Residence (Foujas, J.T Road, Thalassery, Saidarpally)

### 📞 Contact Numbers
- `+91 90748 52853` (Direct Call / WhatsApp)
- `+91 80892 70055` (Direct Call / WhatsApp)

---

## ✨ Features Included

1. **3D Gatefold Envelope Experience:**
   - Deep emerald velvet texture with ornate gold leaf borders.
   - Wax seal emblem (`S ♡ A`) with pulsing animation.
   - Dual silk gold ribbons that slide outward when tapped.
   - Smooth 3D gatefold door opening (`rotateY`) revealing the inner invitation card.

2. **Background Audio & Floating Player:**
   - Plays the traditional wedding melody (`wedding-invitation.mp3`).
   - Automatically fades in volume (0 to 70%) upon opening the envelope.
   - Floating gold button (bottom-right) to toggle playback anytime.

3. **Ambient & Interactive Particle Systems:**
   - **Continuous Falling Leaves & Petals:** 18 ambient drifting particles (slender leaves, curved leaves, flower petals, sparkles) with 3D sways.
   - **Interactive Tap Burst:** Tapping or clicking anywhere generates a burst of falling gold leaves and sparkles.

4. **Save The Date 3D Flip Card:**
   - 3D flip card with gold corner ornaments.
   - Auto-flips after entering the viewport or on tap.
   - Front: Save the date circular badge for December 26 & 27, 2026.
   - Back: Accurate **December 2026 mini-calendar** highlighting the 26th (Nikkah) & 27th (Reception) in glowing gold + Google Calendar link button.

5. **Live Countdown Timer:**
   - Accurate real-time countdown to the Nikkah (Days, Hours, Minutes, Seconds).

6. **The Celebrations (Dual Event Cards):**
   - Dedicated celebration cards for both the **Nikkah** and the **Wedding Reception** with timings, venues, Google Maps location buttons, and Calendar links.

7. **Residences & Direct Contacts:**
   - Cards for Groom's Residence (*Foujas*) and Bride's Residence (*AAMI*) with Google Maps links.
   - Direct Call and WhatsApp buttons for both contact numbers.

8. **Family Blessings & Sacred Quranic Covenant:**
   - Parents' names and addresses with calligraphy ornaments.
   - Surah Ar-Rum (30:21) verse in Arabic calligraphy with English translation.

9. **Interactive Wishes & Blessings Guestbook:**
   - Guests can leave their congratulations & du'a.
   - Edit and delete options, persisted in `localStorage`.

10. **Closing Du'a & Typography:**
    - Traditional Arabic wedding du'a (*Baarakallaahu lakuma*).
    - Google Fonts: *Great Vibes*, *Amiri*, *Cinzel*, *Cormorant Garamond*, *Alex Brush*.

---

## 🚀 Quick Start

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Build for Production
```bash
npm run build
```
The optimized production build is generated in the `dist/` folder, ready to deploy directly to Vercel, Netlify, or GitHub Pages.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```text
├── dist/                      # Ready-to-deploy production build
├── public/
│   ├── assets/
│   │   ├── couple.jpg         # Couple portrait (can be replaced with Safwan & Amina's photo)
│   │   ├── petal.png          # Falling petal graphic
│   │   └── seal.png           # Wax seal graphic
│   ├── audio/
│   │   └── wedding-invitation.mp3 # Wedding music track
│   └── favicon.ico
├── src/
│   ├── config/
│   │   └── weddingData.js     # Centralized wedding data & settings
│   ├── components/
│   │   ├── EnvelopeGatefold.jsx   # 3D gatefold envelope entrance
│   │   ├── MainInvitation.jsx     # Main multi-section invitation page
│   │   ├── SaveTheDateCard.jsx    # 3D flippable calendar card
│   │   ├── CountdownTimer.jsx     # Real-time countdown
│   │   ├── WishesGuestbook.jsx    # Interactive guest wishes board
│   │   ├── FallingLeaves.jsx      # Ambient falling petals & leaves
│   │   ├── TapBurstParticles.jsx  # Interactive tap burst particles
│   │   └── Ornaments.jsx          # SVG ornaments, dividers & leaf vectors
│   ├── App.jsx                # Main application state & stage management
│   ├── index.css              # Emerald/velvet textures & 3D CSS keyframes
│   └── main.jsx               # React entry point
├── package.json
├── tailwind.config.js
└── vite.config.js
```
