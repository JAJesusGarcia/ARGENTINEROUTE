const CLOUD_NAME = "dpadnzbyw";

export function cloudinary(path: string) {
  const cleanPath = path.replace(/^\//, "");

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto/ARGENTINEROUTE/${cleanPath}`;
}

export function cloudinaryVideo(path: string) {
  const cleanPath = path.replace(/^\//, "");

  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/q_auto/ARGENTINEROUTE/${cleanPath}`;
}