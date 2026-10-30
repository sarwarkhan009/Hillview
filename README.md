# HillView Public School, Simdega - Website

Official website of **HillView Public School, Simdega** (CBSE Affiliation No. 3430725),
managed by Ramawtar Ji Memorial Trust.

Built with **Next.js (React) + Firebase** (Firestore + Storage + Auth). Public pages are
static and fast; the school office manages **News, Events, Notices and Gallery photos**
from the `/admin` panel.

Design by **Future Spark App Studio**.

---

## 1. Run the site locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

Build for production:

```bash
npm run build
npm start
```

## 2. Firebase setup (school/admin does this - exact steps)

The site reads all Firebase values from environment variables. **Nothing Firebase-related
is committed to this repo.**

### Step 1 - Create the project
1. Go to https://console.firebase.google.com and sign in.
2. Click **Add project**, name it e.g. `hillview-website`, continue (Analytics optional).

### Step 2 - Register a Web App and copy the config
1. In the project, click the **Web icon (`</>`)** to add an app, name it `website`.
2. Firebase shows a `firebaseConfig` object. Keep it open.

### Step 3 - Add the config to the site
Create a file named `.env.local` in the project root (same folder as `package.json`):

```
NEXT_PUBLIC_FIREBASE_API_KEY=<apiKey>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<authDomain>
NEXT_PUBLIC_FIREBASE_PROJECT_ID=<projectId>
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<storageBucket>
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<messagingSenderId>
NEXT_PUBLIC_FIREBASE_APP_ID=<appId>
```

Restart `npm run dev` after saving.

### Step 4 - Enable login (Authentication)
1. Firebase console -> **Build -> Authentication -> Get started**.
2. Enable **Email/Password** sign-in.
3. Go to **Users -> Add user** and create the admin login (school email + a strong
   password you choose). This is the only login for `/admin`.

### Step 5 - Create the database (Firestore)
1. **Build -> Firestore Database -> Create database** -> Production mode -> location
   `asia-south1` (Mumbai) is a good choice.
2. Open the **Rules** tab and publish:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{collection}/{docId} {
      allow read: if true;                       // public site reads
      allow write: if request.auth != null;      // only the logged-in admin writes
    }
  }
}
```

### Step 6 - Create file storage (for gallery photos)
1. **Build -> Storage -> Get started** -> Production mode.
2. Rules tab:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /gallery/{fileName} {
      allow read: if true;
      allow write: if request.auth != null
                   && request.resource.size < 5 * 1024 * 1024
                   && request.resource.contentType.matches('image/.*');
    }
  }
}
```

### Step 7 - Use the admin panel
1. Open `/admin` on the site, sign in with the user from Step 4.
2. Add **Notices, News, Events** and **Gallery** photos. They appear on the site
   immediately.

## 3. Editing fixed content

Text that rarely changes (about, messages, contact, facilities, admissions info) lives in
one file:

```
lib/content.js
```

Edit and redeploy. Menu structure is in `lib/nav.js`.

## 4. Deploying (free options)

- **Vercel** (recommended): import this repo on https://vercel.com, add the same 6
  `NEXT_PUBLIC_FIREBASE_*` variables in Project Settings -> Environment Variables, deploy.
- **Firebase Hosting**: `npm run build` then use the Firebase CLI (`firebase init hosting`,
  `firebase deploy`). Set the env vars in `.env.local` before building.

## 5. Project structure

```
app/                 pages (App Router)
  admin/             admin panel (login + content managers)
  about/ academics/ admissions/ facilities/ recognition/
  notices/ news/ events/ gallery/  contact/
components/          header, footer, hero, shared blocks
components/admin/    admin panel components
lib/content.js       all fixed school text  <-- edit me
lib/nav.js           menu structure
lib/firebase.js      Firebase client (env var based)
lib/firestore.js     database helpers
public/images/       logo and placeholder images
```

## 6. Notes

- Placeholder SVG images are used for now; replace files in `public/images/` with real
  school photos (keep the same file names) and upload gallery photos via `/admin`.
- Items marked **VERIFY** in `lib/content.js` are facts the school office still needs to
  confirm (classes covered by affiliation, postal PIN).
