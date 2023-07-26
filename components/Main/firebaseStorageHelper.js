import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebaseConfig';

export const getImageDownloadURL = async (imageName) => {
  const imageRef = ref(storage, `PCs/${imageName}`);
  try {
    const downloadURL = await getDownloadURL(imageRef);
    return downloadURL;
  } catch (error) {
    console.error("Error getting image download URL:", error);
    return null;
  }
};
