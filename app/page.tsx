import Carousel from '@/components/Carousel';
import Image from 'next/image';
import Link from 'next/link';
import { FaUser } from "react-icons/fa";

import Featured from '@/components/Featured/Featured';
import { UserButton, SignedOut, SignedIn } from '@clerk/nextjs';

// fetch data using getstaticprops 
// export const getStaticProps = (async (context) => {
//   const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   const repo = await res.json()
//   return { props: { repo } }
// }) satisfies GetStaticProps<{
//   repo: Repo
// }>
 
// export default function Page({
//   repo,
// }: InferGetStaticPropsType<typeof getStaticProps>) {
//   return repo.stargazers_count
// }

export default function Home() {

  // to fetch data in getStaticProps
  let heroBooks: book[] = [
    {
      ImagePath: '/assets/imageSea1.png',
      ImageAlt: 'Sea 1',
      Title: 'Book 1',
      Author: 'Author 1',
      Synopsis: 'Synopsis 1 - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, modi recusandae, minima temporibus ducimus suscipit eveniet dolorem debitis et fugit quaerat natus deleniti hic commodi. Voluptas cum asperiores distinctio sit.'
    },
    {
      ImagePath: '/assets/imageSea2.png',
      ImageAlt: 'Sea 2',
      Title: 'Book 2',
      Author: 'Author 2',
      Synopsis: 'Synopsis 2 - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, modi recusandae, minima temporibus ducimus suscipit eveniet dolorem debitis et fugit quaerat natus deleniti hic commodi. Voluptas cum asperiores distinctio sit.'
    },
    {
      ImagePath: '/assets/imageSea3.png',
      ImageAlt: 'Sea 3',
      Title: 'Book 3',
      Author: 'Author 3',
      Synopsis: 'Synopsis 3 - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, modi recusandae, minima temporibus ducimus suscipit eveniet dolorem debitis et fugit quaerat natus deleniti hic commodi. Voluptas cum asperiores distinctio sit.'
    },
    {
      ImagePath: '/assets/imageSea4.png',
      ImageAlt: 'Sea 4',
      Title: 'Book 4',
      Author: 'Author 4',
      Synopsis: 'Synopsis 4 - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, modi recusandae, minima temporibus ducimus suscipit eveniet dolorem debitis et fugit quaerat natus deleniti hic commodi. Voluptas cum asperiores distinctio sit.'
    },
    
    ]
  let featuredBooks: book[] = ([
      {
          ImagePath: '/assets/imageSea1.png',
          ImageAlt: 'Sea 1',
          Title: 'Book 1',
          Author: 'Author 1',
      },
      {
          ImagePath: '/assets/imageSea2.png',
          ImageAlt: 'Sea 2',
          Title: 'Book 2',
          Author: 'Author 2',
      },
      {
          ImagePath: '/assets/imageSea3.png',
          ImageAlt: 'Sea 3',
          Title: 'Book 3',
          Author: 'Author 3',
      },
      {
          ImagePath: '/assets/imageSea4.png',
          ImageAlt: 'Sea 4',
          Title: 'Book 4',
          Author: 'Author 4',
      },
      {
          ImagePath: '/assets/imageSea1.png',
          ImageAlt: 'Sea 1',
          Title: 'Book 5',
          Author: 'Author 5',
      },
      {
          ImagePath: '/assets/imageSea2.png',
          ImageAlt: 'Sea 2',
          Title: 'Book 6',
          Author: 'Author 6',
      },
      {
          ImagePath: '/assets/imageSea3.png',
          ImageAlt: 'Sea 3',
          Title: 'Book 7',
          Author: 'Author 7',
      },
      {
          ImagePath: '/assets/imageSea4.png',
          ImageAlt: 'Sea 4',
          Title: 'Book 8',
          Author: 'Author 8',
      },
      {
          ImagePath: '/assets/imageSea1.png',
          ImageAlt: 'Sea 1',
          Title: 'Book 9',
          Author: 'Author 9',
      },
      {
          ImagePath: '/assets/imageSea2.png',
          ImageAlt: 'Sea 2',
          Title: 'Book 10',
          Author: 'Author 10',
      },
      {
          ImagePath: '/assets/imageSea3.png',
          ImageAlt: 'Sea 3',
          Title: 'Book 11',
          Author: 'Author 11',
      },
      {
          ImagePath: '/assets/imageSea4.png',
          ImageAlt: 'Sea 4',
          Title: 'Book 12',
          Author: 'Author 12',
      },
      {
          ImagePath: '/assets/imageSea1.png',
          ImageAlt: 'Sea 1',
          Title: 'Book 13',
          Author: 'Author 13',
      },
      {
          ImagePath: '/assets/imageSea2.png',
          ImageAlt: 'Sea 2',
          Title: 'Book 14',
          Author: 'Author 14',
      },
      {
          ImagePath: '/assets/imageSea3.png',
          ImageAlt: 'Sea 3',
          Title: 'Book 15',
          Author: 'Author 15',
      },
      {
          ImagePath: '/assets/imageSea4.png',
          ImageAlt: 'Sea 4',
          Title: 'Book 16',
          Author: 'Author 16',
      },
  ]);
    
  return (
    <main>
      <section className='Header flex justify-between py-7 px-10 my-5'>
        <div></div>
        <div className='HeaderLogo grid justify-items-center'>
          <h1 className='HeaderLogoTop text-7xl sm:text-8xl'>KBK</h1>
          <h2 className='HeaderLogoText text-lg sm:text-2xl'>Kedai Buku Kita</h2>
          <h3 className='HeaderLogoTag text-sm sm:text-lg'>Your Destination for Preloved Books</h3>
        </div>
        <div className='Login flex items-center'>
          <SignedOut>
            <button type='button' className='sm:block w-8 h-8 sm:w-full rounded-full bg-blue-600 hover:bg-blue-500 active:bg-blue-400'>
              <Link href='/sign-in'>
                <p className='hidden sm:block sm:text-white mx-3'>Login/Sign Up</p>
                <FaUser className='sm:hidden text-white text-3xl m-auto' />
              </Link>
            </button>
            <button>

            </button>

          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
          </SignedIn>
        </div>
      </section>
      <section className='Searchbar flex w-full justify-center contents-center pb-7 my-5'>
        <input className='w-3/4 px-2 border-black border-2'/>
        <button type='submit' className='bg-slate-600 hover:bg-slate-500 py-2 px-4 rounded inline-flex items-center'>
          <Image
            src='/assets/search.svg'
            width={25} 
            height={25}
            alt='search'
          />
        </button>
      </section>
      <section className='Hero flex h-96 px-10 my-5 mx-5 py-5 bg-gradient-to-r from-slate-300 to-slate-500'>
        <div className='HeroButtons hidden sm:flex flex-col w-1/4  m-5'>
          <button className='HeroButton w-full mb-5 bg-transparent hover:bg-black text-black font-semibold hover:text-gray-300 py-2 px-4 border border-black hover:border-transparent rounded'>Selling Fast</button>
          <button className='HeroButton w-full my-5 bg-transparent hover:bg-black text-black font-semibold hover:text-gray-300 py-2 px-4 border border-black hover:border-transparent rounded'>Recently Added</button>
          <button className='HeroButton w-full mt-5 bg-transparent hover:bg-black text-black font-semibold hover:text-gray-300 py-2 px-4 border border-black hover:border-transparent rounded'>Newest</button>
        </div>
        <Carousel slides={heroBooks} />                   
      </section>
      <section className='Featured flex flex-col bg-slate-300 py-5 px-10 my-5 mx-5'>
        <Featured featuredBooks={featuredBooks} />
      </section>
      <section className='AdCarousel'>
        <div className='hidden lg:flex flex-nowrap overflow-x-hidden items-center h-56 mx-56'>
          <div className='font-mono text-4xl/loose font-black text-center text-red-800/75 uppercase align-middle min-w-full bg-yellow-200 animate-adslide'>Free Shipping on orders above MYR50</div>
          <div className='font-serif text-4xl/loose font-black text-center text-lime-800/75 uppercase align-middle min-w-full bg-purple-200 animate-adslide'>Chat directy with sellers</div>
          <div className='font-serif text-4xl/loose font-black text-center text-sky-800/75 uppercase align-middle min-w-full bg-orange-200 animate-adslide'>List your preloved books</div>
        </div>
      </section>
      <section className='Footer'>
        <div className='FooterContent py-10 bg-slate-500 flex'>
          <div className='FooterLinks basis-3/4 flex justify-around'>
            <div className='left text-white'>
              <p>Book Condition</p>
              <p>About</p>
              <p>FAQ</p>
            </div>
            <div className='right text-white'>
              <p>Report Bugs</p>
              <p>Legal</p>
              <p>Credit</p>
            </div>
          </div>
          <div className='FooterLogo basis-1/4 text-white'>
            <p>KBK</p>
            <p>Kedai Buku Kita</p> 
            <p>Your Destination for Preloved Books</p>
          </div>
        </div>
        <div className='FooterCredit bg-black text-white text-center'> Credit  Credit  Credit  Credit  Credit </div>
      </section>
    </main>
  )
}

 