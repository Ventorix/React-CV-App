export default function getImageUrl(name, ext) {
	return new URL(`/src/assets/${name}.${ext}`, import.meta.url).href;
}
