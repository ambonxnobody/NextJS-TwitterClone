import Image from 'next/image'
import Link from "next/link";

import { FaArrowLeft, FaEllipsisH, FaCheckCircle } from 'react-icons/fa'

export default function Dashboard() {
  return (
      <>
          <div className="flex gap-5 items-center px-3">
            <Link href="/">
                <FaArrowLeft />
            </Link>
            <div>
                <div className="flex items-center gap-1">
                    <p className="text-[#E7E9EA] font-bold text-[18px]">NASA</p>
                    <FaCheckCircle color="#829AAB" />
                </div>
                <p className="text-[#71767B] text-[12px]">69.7K Tweets</p>
            </div>
          </div>

          <div className="relative">
              <Image src="/image/NASABackground.jpg" alt="NASA Background" width={600} height={200} ></Image>
              <div className="absolute left-5 -bottom-1/3 rounded-full overflow-hidden">
                <Image src="/image/NASAProfile.jpg" alt="NASA Profile" width={140} height={140} ></Image>
              </div>
          </div>

          <div className="flex items-center justify-end gap-3 mt-2 px-3">
              <button title="More" className="bg-black border border-[rgb(83,100,113)] hover:bg-[rgba(239,243,244,0.1)] rounded-full p-2 transition-all ease-in-out duration-500">
                  <FaEllipsisH size={12} />
              </button>
              <button className="text-[14px] bg-[rgb(239,243,244)] active:bg-[rgb(215,219,220)] focus:outline-none focus:bg-[rgb(215,219,220)] hover:bg-[rgb(215,219,220)] transition-all ease-in-out duration-500 text-black rounded-full font-bold px-4 py-2">Follow</button>
          </div>

          <div className="px-3 mt-14">
              <div className="flex items-center gap-1">
                  <p className="text-[#E7E9EA] font-bold text-[18px]">NASA</p>
                  <FaCheckCircle color="#829AAB" />
              </div>
              <p className="text-[#71767B] text-[14px]">@NASA</p>

              <p className="text-[14px] mt-3">There&apos;s space for everybody. ✨</p>
          </div>
      </>
  )
}
