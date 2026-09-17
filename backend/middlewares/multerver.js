import multer from 'multer';
import path from 'path';

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique name with timestamp
  }
});

// Initialize Multer with the storage configuration
const upload = multer({ storage: storage , limits: { fileSize: 50 * 1024 * 1024 }   });

// Export the Multer middleware to be used in routes
export default upload;
