import { cn } from "@/lib/utils"
import Image from "next/image"

export default function ProfilePic(props) {
  const { src, alt, size } = props
  if (src === null) {
    return (
      <div className="relative w-40 h-40 overflow-hidden rounded-full">
        <picture>
          <img
            placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAmVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8I4U3+AAAAGXRSTlMAQICAgIDAwMDAwMDAwMDAwMDA/8J+1NcAAABLSURBVEjH7ZXBDQAgCERhgAT2/2d6B4TC5BpMESIjN06S3dpqSMiDPloJIwVhFSERsQIhFSERsQIhFSERsQIhFSERsQIh1eA8mwEiV9w0RjFhAAAAAElFTkSuQmCC"
            alt={alt}
          />
        </picture>
      </div>
    )
  }

  return (
    <div className={cn(`relative w-40 h-40 overflow-hidden rounded-full`, size === "lg" && "w-60 h-60")}>
      <picture>
        <Image
          priority
          placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAmVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8I4U3+AAAAGXRSTlMAQICAgIDAwMDAwMDAwMDAwMDA/8J+1NcAAABLSURBVEjH7ZXBDQAgCERhgAT2/2d6B4TC5BpMESIjN06S3dpqSMiDPloJIwVhFSERsQIhFSERsQIhFSERsQIhFSERsQIh1eA8mwEiV9w0RjFhAAAAAElFTkSuQmCC"
          className="object-cover object-center transform scale-150 translate-x-[10%]"
          src={src}
          alt={alt}
          width={480}
          height={720}
        />
      </picture>
    </div>
  )
}
