import Image from "next/image";

export default function Article({ article }) {
  return (
    <article className="group relative rounded-2xl overflow-hidden">
      <div className="relative h-[400px] w-full">
        <Image
          src={article.image}
          alt={article.title}
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
          <h3 className="text-2xl font-bold text-white">{article.title}</h3>

          <div className="flex justify-between items-end gap-3">
            <div className="relative flex items-center space-x-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="rounded-full object-cover w-10 h-10"
              />

              <div className="flex flex-col">
                <span className="font-semibold text-white">
                  {article.author.name}
                </span>
                <div className="flex items-center">
                  {article.author.isVerified && (
                    <svg
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[18px] h-[18px] mr-1"
                    >
                      <g id="Icon ">
                        <path
                          id="Oval"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16.2223 31.0082C24.4874 31.0082 31.1877 24.3655 31.1877 16.1713C31.1877 7.97716 24.4874 1.33447 16.2223 1.33447C7.95709 1.33447 1.25684 7.97716 1.25684 16.1713C1.25684 24.3655 7.95709 31.0082 16.2223 31.0082Z"
                          fill="#36B37E"
                        />
                        <path
                          id="Icon"
                          d="M14.2252 20.8997L10.1574 16.891C10.0438 16.7784 9.98694 16.6335 9.98694 16.4564C9.98694 16.2793 10.0438 16.1344 10.1574 16.0217L11.0587 15.1524C11.1723 15.0236 11.3144 14.9592 11.4849 14.9592C11.6554 14.9592 11.8056 15.0236 11.9356 15.1524L14.6636 17.857L20.5095 12.0614C20.6394 11.9326 20.7896 11.8682 20.9601 11.8682C21.1306 11.8682 21.2727 11.9326 21.3864 12.0614L22.2876 12.9307C22.4013 13.0434 22.4581 13.1883 22.4581 13.3654C22.4581 13.5425 22.4013 13.6873 22.2876 13.8L15.1021 20.8997C14.9884 21.0285 14.8422 21.0929 14.6636 21.0929C14.485 21.0929 14.3389 21.0285 14.2252 20.8997Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  )}
                  <span className="text-white/90 text-sm italic">
                    Verified writer
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-white/75">{article.date}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
