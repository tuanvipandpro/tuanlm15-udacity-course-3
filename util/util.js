import fs from "fs";
import Jimp from "jimp";


// filterImageFromURL
// helper function to download, filter, and save the filtered image locally
// returns the absolute path to the local image
// INPUTS
//    inputURL: string - a publicly accessible url to an image file
// RETURNS
//    an absolute path to a filtered image locally saved file
 export async function filterImageFromURL(inputURL) {

  const photo = await Jimp.read(inputURL);
  const outpath =
    "/tmp/filtered." + Math.floor(Math.random() * 2000) + ".jpg";

  return await photo
    .resize(256, 256) // resize
    .quality(60) // set JPEG quality
    .greyscale() // set greyscale
    .writeAsync(outpath) ? outpath : null

  // return new Promise(async (resolve, reject) => {
  //   try {
  //     const photo = await Jimp.read(inputURL);
  //     const outpath =
  //       "/tmp/filtered." + Math.floor(Math.random() * 2000) + ".jpg";

  //     await photo
  //       .resize(256, 256) // resize
  //       .quality(60) // set JPEG quality
  //       .greyscale() // set greyscale
  //       .write(outpath, (img) => {
  //         console.log(img)
  //         resolve(outpath);
  //       });

  //       resolve(outpath);
  //   } catch (error) {
  //     console.error(error)
  //     reject(error);
  //   }
  // });
}

// deleteLocalFiles
// helper function to delete files on the local disk
// useful to cleanup after tasks
// INPUTS
//    files: Array<string> an array of absolute paths to files
 export function deleteLocalFiles(files) {
  for (let file of files) {
    setTimeout(() => fs.unlinkSync(file), 5)
  }
}
