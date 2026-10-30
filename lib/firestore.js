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

export async function uploadGalleryImage(file) {
  const storage = getFirebaseStorage();
  const path = `gallery/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
}
