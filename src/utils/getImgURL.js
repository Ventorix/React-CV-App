export default function getImageUrl(name, ext) {
	return new URL(`/${name}.${ext}`, import.meta.url).href;
}
