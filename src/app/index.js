import Photos from './photos';
import "./index.css";
const photos = new Photos();

async function main(){
	console.log(await photos.getPhotos())
}
main();

