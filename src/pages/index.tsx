import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from "next/router";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  return (
    <div className='grid grid-cols-5 gap-4 h-screen'>
      <div className='rounded-md bg-gray-200 bg-[url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Solid_red.svg/2048px-Solid_red.svg.png")] cursor-pointer' onClick={() => {
          router.push("/red");
        }}>
      </div>      
      <div className='rounded-md bg-gray-200 bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2LkpUnGaTr0JnI-IFkJ7rOqsH_3MMf11j5PqCqxDwPQ&s")] cursor-pointer'></div>
      <div className='rounded-md bg-gray-200 bg-[url("https://htmlcolorcodes.com/assets/images/colors/yellow-color-solid-background-1920x1080.png")]'></div>
      <div className='rounded-md bg-gray-200 bg-[url("https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3346.jpg")] '></div>
      <div className='rounded-md bg-gray-200 bg-[url("https://i.imgur.com/eucAMTA.jpg")]'></div>
      <div className='rounded-md bg-gray-200 bg-[url("https://www.mbfg.co.uk/user/products/br_green_3712_500.jpg")]'></div>
      <div className='rounded-md bg-gray-200 bg-[url("https://htmlcolorcodes.com/assets/images/colors/teal-color-solid-background-1920x1080.png")]'></div>
      <div className='rounded-md bg-gray-200 bg-[url("https://htmlcolorcodes.com/assets/images/colors/baby-blue-color-solid-background-1920x1080.png")]'></div>
      <div className='rounded-md bg-gray-200 bg-[url("https://htmlcolorcodes.com/assets/images/colors/bright-blue-color-solid-background-1920x1080.png")]'></div>
      <div className='rounded-md bg-gray-200 bg-[url("https://5.imimg.com/data5/SELLER/Default/2022/2/QS/GA/RR/983171/persian-blue-500x500.png")]'></div>
      <div className='rounded-md bg-gray-200 bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFPxrM6LnygxNoD4iJsPlJoHb0BSHIHcDbdSBJ18ulYZzp12y9zF4Sayu6kniO6eHhmI&usqp=CAU")]'></div>
      <div className='rounded-md bg-gray-200 bg-[url("https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Purple_website.svg/1200px-Purple_website.svg.png")]'></div>
    </div>
  )
}
