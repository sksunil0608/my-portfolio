// export default function cloudinaryLoader({
//     src,
//     width,
//     quality,
// }: {
//     src: string
//     width: number
//     quality?: number
// }) {
//     const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
//     return `https://res.cloudinary.com/demo/image/upload/${params.join(
//         ','
//     )}${src}`
// }

// my-loader.ts
import type { ImageLoader } from 'next/image';

const localLoader: ImageLoader = ({ src }) => {
  return src; // Don't add any domain or params
};

export default localLoader;
