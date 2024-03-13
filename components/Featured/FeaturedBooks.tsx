'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import useMediaQuery from "@/lib/utils/mediaQuery";


export default function FeaturedBooks ({featuredBooks}: {featuredBooks: book[]}) {
    // interface featuredBook {
    //     ImagePath: string;
    //     ImageAlt: string;
    //     Title: string;
    //     Author: string,
    // }

    // const [featuredBooks, setFeaturedBooks] = useState<featuredBook[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [booksPerPage, setBooksPerPage] = useState<number>(8);

    // let featuredBooks: featuredBook[] = ([
    //     {
    //         ImagePath: '/assets/imageSea1.png',
    //         ImageAlt: 'Sea 1',
    //         Title: 'Book 1',
    //         Author: 'Author 1',
    //     },
    //     {
    //         ImagePath: '/assets/imageSea2.png',
    //         ImageAlt: 'Sea 2',
    //         Title: 'Book 2',
    //         Author: 'Author 2',
    //     },
    //     {
    //         ImagePath: '/assets/imageSea3.png',
    //         ImageAlt: 'Sea 3',
    //         Title: 'Book 3',
    //         Author: 'Author 3',
    //     },
    //     {
    //         ImagePath: '/assets/imageSea4.png',
    //         ImageAlt: 'Sea 4',
    //         Title: 'Book 4',
    //         Author: 'Author 4',
    //     },
    //     {
    //         ImagePath: '/assets/imageSea1.png',
    //         ImageAlt: 'Sea 1',
    //         Title: 'Book 5',
    //         Author: 'Author 5',
    //     },
    //     {
    //         ImagePath: '/assets/imageSea2.png',
    //         ImageAlt: 'Sea 2',
    //         Title: 'Book 6',
    //         Author: 'Author 6',
    //     },
    //     {
    //         ImagePath: '/assets/imageSea3.png',
    //         ImageAlt: 'Sea 3',
    //         Title: 'Book 7',
    //         Author: 'Author 7',
    //     },
    //     {
    //         ImagePath: '/assets/imageSea4.png',
    //         ImageAlt: 'Sea 4',
    //         Title: 'Book 8',
    //         Author: 'Author 8',
    //     },
    //     {
    //         ImagePath: '/assets/imageSea1.png',
    //         ImageAlt: 'Sea 1',
    //         Title: 'Book 9',
    //         Author: 'Author 9',
    //     },
    //     {
    //         ImagePath: '/assets/imageSea2.png',
    //         ImageAlt: 'Sea 2',
    //         Title: 'Book 10',
    //         Author: 'Author 10',
    //     },
    //     {
    //         ImagePath: '/assets/imageSea3.png',
    //         ImageAlt: 'Sea 3',
    //         Title: 'Book 11',
    //         Author: 'Author 11',
    //     },
    //     {
    //         ImagePath: '/assets/imageSea4.png',
    //         ImageAlt: 'Sea 4',
    //         Title: 'Book 12',
    //         Author: 'Author 12',
    //     },
    //     {
    //         ImagePath: '/assets/imageSea1.png',
    //         ImageAlt: 'Sea 1',
    //         Title: 'Book 13',
    //         Author: 'Author 13',
    //     },
    //     {
    //         ImagePath: '/assets/imageSea2.png',
    //         ImageAlt: 'Sea 2',
    //         Title: 'Book 14',
    //         Author: 'Author 14',
    //     },
    //     {
    //         ImagePath: '/assets/imageSea3.png',
    //         ImageAlt: 'Sea 3',
    //         Title: 'Book 15',
    //         Author: 'Author 15',
    //     },
    //     {
    //         ImagePath: '/assets/imageSea4.png',
    //         ImageAlt: 'Sea 4',
    //         Title: 'Book 16',
    //         Author: 'Author 16',
    //     },
    // ]);
    
    const indexLastBook:number = currentPage * booksPerPage;
    const indexFirstBook:number = indexLastBook - booksPerPage;
    const gridBooks:book[] = featuredBooks.slice(indexFirstBook, indexLastBook);

    function nextPage () {
        if (currentPage < featuredBooks.length/booksPerPage) {
            setCurrentPage(currentPage + 1);
        }        
    } 
    function prevPage ()  {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            console.log(currentPage)
        }
    }
    function selectPage (n: number) {
        setCurrentPage(n);
    }

    const breakPoint: string = useMediaQuery();

    useEffect(() => {
        if (breakPoint === 'xsm') {
            setBooksPerPage(2);
        } else if (breakPoint === 'sm') {
            setBooksPerPage(4);
        } else if (breakPoint === 'md') {
            setBooksPerPage(6);
        } else if (breakPoint === 'lg') {
            setBooksPerPage(8);
        } else {
            setBooksPerPage(10);
        }
      }, [breakPoint]);
    

    return (
        <div className="flex-cols w-full">
            <div className={`FeaturedGrid grid px-2 pb-7 gap-4 w-full place-content-around place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5`}>
                {gridBooks.map((g: book, i: number) => {
                    return (
                        <div key={i} className={`FeaturedBook flex-col items-center bg-gray-700 text-white p-2`}>
                            <div className='FeaturedBookCover relative w-[100px] lg:w-[130px] h-[150px] lg:h-[195px] bg-black'>
                                <Image 
                                    src= {g.ImagePath}
                                    alt= {g.ImageAlt}
                                    fill={true}
                                    sizes="33vw"
                                />
                            </div>
                            <p className='FeaturedBoookTitle'>{g.Title} </p>
                            <p className='FeaturedBookAuthor'>by {g.Author} </p>
                        </div>
                    )
                })}
            </div>
            <Pagination 
                booksPerPage={booksPerPage}
                totalBooks={featuredBooks.length}
                prevPage={prevPage}
                nextPage={nextPage}
                selectPage={selectPage}
                currentPage={currentPage}
            />
        </div>
    )
}