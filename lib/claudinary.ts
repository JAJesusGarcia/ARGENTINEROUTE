const CLOUD_NAME = "dpadnzbyw";
const PROJECT_FOLDER = "ARGENTINEROUTE";

export function cloudinary(path: string): string {
  const cleanPath = path
    .replace(/^\/+/, "")
    .replace(/\.(jpg|jpeg|png|webp|avif|gif|svg)$/i, "");

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto/${PROJECT_FOLDER}/${cleanPath}`;
}

export function cloudinaryVideo(path: string): string {
  const cleanPath = path
    .replace(/^\/+/, "")
    .replace(/\.(mp4|mov|webm)$/i, "");

  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/q_auto/${PROJECT_FOLDER}/${cleanPath}`;
}