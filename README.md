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
4. **Important - block strangers from creating their own account.** With Email/Password
   enabled, anyone who knows the (public) Firebase config can create a user through
   Firebase's API unless you turn sign-up off. In **Authentication -> Settings ->
   User actions**, disable **Enable create (sign-up)** (keep **Enable delete** off too).
5. In the same **Settings** tab, keep **Email enumeration protection** ON (default).
6. Failed-login throttling: Firebase Auth already rate-limits repeated wrong-password
   attempts per device/IP automatically. On top of that, the `/admin` page itself
   locks the login form for 15 minutes after 3 wrong attempts in the same browser.


### Step 5 - Create the database (Firestore)
1. **Build -> Firestore Database -> Create database** -> Production mode -> location
   `asia-south1` (Mumbai) is a good choice.
2. Open the **Rules** tab and publish:


Replace `ADMIN_EMAIL_HERE` with the exact admin email you created in Step 4:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function isAdmin() {
      return request.auth != null
        && request.auth.token.email == 'ADMIN_EMAIL_HERE';
    }
    // Public can READ only these four collections.
    match /{col}/{docId} {
      allow read: if col in ['news', 'events', 'notices', 'gallery'];
      allow create, update: if isAdmin()
        && col in ['news', 'events', 'notices', 'gallery']
        && request.resource.data.keys().hasOnly(
             ['title', 'date', 'body', 'time', 'description', 'link',
              'caption', 'imageUrl', 'createdAt', 'updatedAt'])
        && (!request.resource.data.keys().hasAny(['title'])
            || request.resource.data.title is string
               && request.resource.data.title.size() < 200);
      allow delete: if isAdmin()
        && col in ['news', 'events', 'notices', 'gallery'];
    }
    // Everything else is denied.
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

`request.auth != null` alone is NOT enough here: it lets ANY signed-in user
(including a stranger who self-registers, see Step 4) edit the site. The email
check above makes only the school admin a writer.


### Step 6 - Create file storage (for gallery photos)
1. **Build -> Storage -> Get started** -> Production mode.
2. Rules tab:


Replace `ADMIN_EMAIL_HERE` with the exact admin email from Step 4:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /gallery/{fileName} {
      allow read: if true;
      allow write: if request.auth != null
                   && request.auth.token.email == 'ADMIN_EMAIL_HERE'
                   && request.resource.size < 5 * 1024 * 1024
                   && request.resource.contentType in
                      ['image/jpeg', 'image/png', 'image/webp'];
    }
    match /{allPaths=**} {
      allow read, write: if false;
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


## 6. Extra hardening (optional but recommended)


- **App Check**: Firebase console -> **App Check** -> register the web app with
  reCAPTCHA, then enforce it for Firestore and Storage. This blocks most scripted
  abuse of the public Firebase config.
- **Security headers**: the site now sends a Content Security Policy and standard
  security headers (see `next.config.mjs`).
- **Login lockout**: the `/admin` form locks for 15 minutes after 3 wrong attempts
  in the same browser. Firebase Auth additionally throttles repeated failed logins
  on its own.


## 7. Notes


- Placeholder SVG images are used for now; replace files in `public/images/` with real
  school photos (keep the same file names) and upload gallery photos via `/admin`.
- Items marked **VERIFY** in `lib/content.js` are facts the school office still needs to
  confirm (classes covered by affiliation, postal PIN).
