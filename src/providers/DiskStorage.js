const fs = require("fs");
const path = require("path");
const { TMP_FOLDER, UPLOAD_FOLDER } = require("../config/upload");

class DiskStorage {

  async saveFile(file) {
    await fs.promises.rename(
      path.resolve(TMP_FOLDER, file),
      path.resolve(UPLOAD_FOLDER, file)
    )
  }

  async deleteFile(file) {
    const filePath = path.resolve(UPLOAD_FOLDER, file);

    try {
      await fs.promises.stat(filePath);
    } catch (error) {
      return
    }

    await fs.promises.unlink(filePath)
  }
}

module.exports = DiskStorage;