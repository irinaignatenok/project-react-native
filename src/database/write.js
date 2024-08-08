import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from './config';

export async function save(data) {
    try {
        const dbCollection = collection(db, "reviews")
        const docRef = await addDoc(dbCollection, data)
        return docRef.id
    } catch (e) {
        return null
    }
}

export async function update(id, data) {
    try {
        const docRef = doc(db, "reviews", id);
        await updateDoc(docRef, data);
        return true;
    } catch (error) {
        console.error("Error updating document:", error);
        return false;
    }
}