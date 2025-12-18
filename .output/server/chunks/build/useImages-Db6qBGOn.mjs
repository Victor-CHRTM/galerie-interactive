import { u as useNuxtApp } from './server.mjs';

const useImages = () => {
  const { $supabase } = useNuxtApp();
  const fetchImages = async () => {
    try {
      const { data, error } = await $supabase.from("images").select("*").order("position", { ascending: true });
      if (error) {
        console.error("Erreur fetchImages:", error);
        return [];
      }
      return data != null ? data : [];
    } catch (error) {
      console.error("Exception fetchImages:", error);
      return [];
    }
  };
  const createImage = async (newImage) => {
    try {
      const { data, error } = await $supabase.from("images").insert([newImage]).select().single();
      if (error) {
        console.error("Erreur createImage:", error);
        return null;
      }
      return data;
    } catch (error) {
      console.error("Exception createImage:", error);
      return null;
    }
  };
  const updateImage = async (id, updates) => {
    try {
      const { data, error } = await $supabase.from("images").update(updates).eq("id", id).select().single();
      if (error) {
        console.error("Erreur updateImage:", error);
        return null;
      }
      return data;
    } catch (error) {
      console.error("Exception updateImage:", error);
      return null;
    }
  };
  const deleteImage = async (id) => {
    try {
      const { error } = await $supabase.from("images").delete().eq("id", id);
      if (error) {
        console.error("Erreur deleteImage:", error);
        return false;
      }
      return true;
    } catch (error) {
      console.error("Exception deleteImage:", error);
      return false;
    }
  };
  const uploadImage = async (file) => {
    try {
      const timestamp = Date.now();
      const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
      const fileName = `${timestamp}-${sanitizedName}`;
      const { error: uploadError } = await $supabase.storage.from("gallery-images").upload(fileName, file, {
        cacheControl: "3600",
        upsert: false
      });
      if (uploadError) {
        console.error("Erreur uploadImage:", uploadError);
        return null;
      }
      const { data } = $supabase.storage.from("gallery-images").getPublicUrl(fileName);
      return data.publicUrl;
    } catch (error) {
      console.error("Exception uploadImage:", error);
      return null;
    }
  };
  const deleteImageFromStorage = async (imageUrl) => {
    try {
      const fileName = imageUrl.split("/").pop();
      if (!fileName) return false;
      const { error } = await $supabase.storage.from("gallery-images").remove([fileName]);
      if (error) {
        console.error("Erreur deleteImageFromStorage:", error);
        return false;
      }
      return true;
    } catch (error) {
      console.error("Exception deleteImageFromStorage:", error);
      return false;
    }
  };
  return {
    fetchImages,
    createImage,
    updateImage,
    deleteImage,
    uploadImage,
    deleteImageFromStorage
  };
};

export { useImages as u };
//# sourceMappingURL=useImages-Db6qBGOn.mjs.map
