import Image from 'next/image'
import { Avatar } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar name="Junior" />
      <h1 className='font-bold text-red-500'>

        Hello mấy thằng lồn
      </h1>
      <img src='https://photo2.tinhte.vn/data/attachment-files/2021/07/5557920_CV.jpg' />
    </>
  )
}
