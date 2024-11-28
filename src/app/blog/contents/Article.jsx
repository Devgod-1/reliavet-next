import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Article({ id, title, name, blog_image, blog_date }) {
  const router = useRouter();
  return (
    <article
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      onClick={() => router.push("/blog/" + id)}
    >
      <div className="relative h-[400px] w-full">
        <Image
          src={blog_image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Static gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/75 to-transparent" />
        {/* Hover gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-blue-600/75 via-purple-500/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <span className="inline-block px-3 py-1 text-sm font-medium text-blue-900 bg-white/90 rounded-full self-start">
          FEATURED
        </span>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">{ title }</h3>

          <div className="flex justify-between items-end gap-3">
            <div className="relative flex items-center space-x-3">
              <div className="flex flex-col">
                <span className="font-semibold text-white">
                  {name}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-white/75">{blog_date}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
