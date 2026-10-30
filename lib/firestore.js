import {
  collection, addDoc, updateDoc, deleteDoc, doc,
  getDocs, query, orderBy, serverTimestamp,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDb, getFirebaseStorage } from "./firebase";


export const COLLECTIONS = {
  news: "news",
  events: "events",
  notices: "notices",
  gallery: "gallery",
};


export async function listItems(kind) {
  const db = getDb();
  if (!db) return [];
  const q = query(collection(db, COLLECTIONS[kind]), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}


export async function createItem(kind, data) {
  const db = getDb();
  return addDoc(collection(db, COLLECTIONS[kind]), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}


export async function updateItem(kind, id, data) {
  const db = getDb();
  return updateDoc(doc(db, COLLECTIONS[kind], id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}


export async function deleteItem(kind, id) {
  const db = getDb();
  return deleteDoc(doc(db, COLLECTIONS[kind], id));
}


const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_IMAGE_BYTES = 5 * 1024 * 1024; // 5 MB, same as the Storage rule


export async function uploadGalleryImage(file) {
  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    throw new Error("Only JPG, PNG or WebP images are allowed.");
  }
  if (file.size > MAX_IMAGE_BYTES) {
    throw new Error("Image is larger than 5 MB.");
  }
  const storage = getFirebaseStorage();
  const path = `gallery/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file, { contentType: file.type });
  return getDownloadURL(storageRef);
}
