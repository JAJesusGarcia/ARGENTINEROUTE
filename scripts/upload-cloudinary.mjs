import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

dotenv.config({ path: ".env.local" });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const foldersToUpload = [
  {
    localPath: path.join(projectRoot, "public", "images"),
    cloudinaryPath: "ARGENTINEROUTE/images",
  },
  {
    localPath: path.join(projectRoot, "public", "videos"),
    cloudinaryPath: "ARGENTINEROUTE/videos",
  },
];

const allowedExtensions = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
  ".gif",
  ".svg",
  ".mp4",
  ".mov",
  ".webm",
]);

function getFilesRecursively(directory) {
  if (!fs.existsSync(directory)) {
    console.warn(`⚠️ No existe: ${directory}`);
    return [];
  }

  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      return getFilesRecursively(fullPath);
    }

    const extension = path.extname(entry.name).toLowerCase();

    return allowedExtensions.has(extension) ? [fullPath] : [];
  });
}

function getResourceType(filePath) {
  const extension = path.extname(filePath).toLowerCase();

  if ([".mp4", ".mov", ".webm"].includes(extension)) {
    return "video";
  }

  return "image";
}

async function uploadFolder({ localPath, cloudinaryPath }) {
  const files = getFilesRecursively(localPath);

  if (files.length === 0) {
    console.log(`⚠️ No se encontraron archivos en ${localPath}`);
    return;
  }

  console.log(`\n📁 Subiendo ${files.length} archivos desde ${localPath}\n`);

  for (const filePath of files) {
    const relativePath = path.relative(localPath, filePath);

    const parsedPath = path.parse(relativePath);

    const relativeDirectory =
      parsedPath.dir === ""
        ? ""
        : parsedPath.dir.split(path.sep).join("/");

    const publicId = [
      cloudinaryPath,
      relativeDirectory,
      parsedPath.name,
    ]
      .filter(Boolean)
      .join("/");

    try {
      const result = await cloudinary.uploader.upload(filePath, {
        resource_type: getResourceType(filePath),
        public_id: publicId,
        overwrite: true,
        invalidate: true,
      });

      console.log(`✅ ${relativePath}`);
      console.log(`   ${result.public_id}`);
      console.log(`   ${result.secure_url}`);
    } catch (error) {
      console.error(`❌ Error subiendo ${relativePath}`);

      if (error instanceof Error) {
        console.error(`   ${error.message}`);
      } else {
        console.error(error);
      }
    }
  }
}

async function main() {
  const requiredVariables = [
    "CLOUDINARY_CLOUD_NAME",
    "CLOUDINARY_API_KEY",
    "CLOUDINARY_API_SECRET",
  ];

  const missingVariables = requiredVariables.filter(
    (variable) => !process.env[variable],
  );

  if (missingVariables.length > 0) {
    throw new Error(
      `Faltan variables en .env.local: ${missingVariables.join(", ")}`,
    );
  }

  console.log("🚀 Iniciando subida a Cloudinary");

  for (const folder of foldersToUpload) {
    await uploadFolder(folder);
  }

  console.log("\n🎉 Subida terminada");
}

main().catch((error) => {
  console.error("\n❌ El proceso terminó con un error");

  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error(error);
  }

  process.exit(1);
});

// async function testUpload() {
//   const file = path.join(
//     projectRoot,
//     "public",
//     "images",
//     "provinces",
//     "buenos-aires.webp"
//   );

//   const result = await cloudinary.uploader.upload(file, {
//     resource_type: "image",
//     public_id: "ARGENTINEROUTE/images/provinces/buenos-aires",
//     overwrite: true,
//     invalidate: true,
//     unique_filename: false,
//     use_filename: true,
//   });

//   console.log("\n✅ Imagen subida correctamente");
//   console.log("Public ID:", result.public_id);
//   console.log("URL:", result.secure_url);
// }

// testUpload().catch(console.error);