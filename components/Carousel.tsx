'use client'

import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Carousel ({slides}: {slides: book[]}) {
    // interface slidesBook {
    //     ImagePath: string;
    //     ImageAlt: string;
    //     Title: string;
    //     Author: string,
    //     Synopsis: string;
    // }
    
    // let slides: slidesBook[] = [
    //     {
    //       ImagePath: '/assets/imageSea1.png',
    //       ImageAlt: 'Sea 1',
    //       Title: 'Book 1',
    //       Author: 'Author 1',
    //       Synopsis: 'Synopsis 1 - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, modi recusandae, minima temporibus ducimus suscipit eveniet dolorem debitis et fugit quaerat natus deleniti hic commodi. Voluptas cum asperiores distinctio sit.'
    //     },
    //     {
    //       ImagePath: '/assets/imageSea2.png',
    //       ImageAlt: 'Sea 2',
    //       Title: 'Book 2',
    //       Author: 'Author 2',
    //       Synopsis: 'Synopsis 2 - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, modi recusandae, minima temporibus ducimus suscipit eveniet dolorem debitis et fugit quaerat natus deleniti hic commodi. Voluptas cum asperiores distinctio sit.'
    //     },
    //     {
    //       ImagePath: '/assets/imageSea3.png',
    //       ImageAlt: 'Sea 3',
    //       Title: 'Book 3',
    //       Author: 'Author 3',
    //       Synopsis: 'Synopsis 3 - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, modi recusandae, minima temporibus ducimus suscipit eveniet dolorem debitis et fugit quaerat natus deleniti hic commodi. Voluptas cum asperiores distinctio sit.'
    //     },
    //     {
    //       ImagePath: '/assets/imageSea4.png',
    //       ImageAlt: 'Sea 4',
    //       Title: 'Book 4',
    //       Author: 'Author 4',
    //       Synopsis: 'Synopsis 4 - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, modi recusandae, minima temporibus ducimus suscipit eveniet dolorem debitis et fugit quaerat natus deleniti hic commodi. Voluptas cum asperiores distinctio sit.'
    //     },
        
    //   ]

      const [slideIndex, setSlideIndex] = useState(0);
    
      function prevSlide () {
        if(slideIndex === 0) {
            setSlideIndex(slides.length - 1);
        }
        else {
            setSlideIndex(slideIndex - 1);
        }
      }
      function nextSlide () {
        if (slideIndex === slides.length -1) {
            setSlideIndex(0)
        }
        else {
            setSlideIndex(slideIndex + 1);
        }      }
    return (
        <div className="relative w-full sm:w-3/4 overflow-hidden">
            <div 
                className='Carousel flex w-full transition ease-out duration-400'
                style={{
                    transform: `translateX(-${slideIndex * 100}%)`
                }}
            >
                {slides.map((s: book, i: number) => {
                    return (
                        <div key={i}  className="Slides w-full flex flex-shrink-0 p-6">
                            <div className='HeroBook flex flex-col items-center mx-auto text-black pt-2 px-4'>
                                <div className= 'BookCover w-[100px] lg:w-[130px] h-[150px] lg:h-[195px] border-4 relative'>
                                    <Image 
                                        src= {s.ImagePath}
                                        alt= {s.ImageAlt}
                                        fill={true}
                                        sizes="33vw"
                                    />
                                </div>
                                <p className='BookTitle'>{s.Title}</p>
                                <p className='BookAuthor'>by {s.Author} </p>
                                <button className='bg-transparent hover:bg-black text-black font-semibold hover:text-gray-300 py-2 px-4 mt-2 border border-black hover:border-transparent rounded '>Buy</button>
                            </div>
                            <div className='HeroSynopsis hidden mx-2.5 sm:block'>
                                <p className='HeroBookSynopsis text-ellipsis overflow-hidden'>{s.Synopsis}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="CarouselArrows absolute w-full top-1/2">
                <button className='flex absolute left-0 w-7 h-7 bg-slate-300 opacity-50 justify-center items-center' onClick={prevSlide}><FaChevronLeft/></button>
                <button className='flex absolute right-0 w-7 h-7 bg-slate-300 opacity-50 justify-center items-center' onClick={nextSlide}><FaChevronRight/></button>            
            </div>
            <div className="CarouselDots flex absolute w-full justify-center bottom-0 space-x-5">
                {slides.map((s: book, i: number) => {
                    return (
                        <div 
                            key={i}
                            className={`w-4 h-4 rounded-full cursor-pointer ${i===slideIndex?'bg-white':'bg-slate-300' }`}
                            onClick={() => {
                                setSlideIndex(i);
                            }}
                        />
                    )
                })}
            </div> 
        </div>              
    )
}
