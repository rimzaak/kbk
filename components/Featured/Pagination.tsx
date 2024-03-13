'use client'

import useMediaQuery from "@/lib/utils/mediaQuery";
import { useEffect, useState } from "react";

export default function Pagination ({ booksPerPage, totalBooks, prevPage, nextPage, selectPage, currentPage }: {booksPerPage: number, totalBooks: number, prevPage: () => void, nextPage: () => void, selectPage: (n: number) => void, currentPage: number}) {
    const pages:number[] = [];

    for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) 
        {
            pages.push(i);
        }

    const [pageNumbers, setPageNumbers] = useState<number>(8);
    const [indexofFirstPage, setIndexofFirstPage] = useState<number>(0);
    const gridPages = pages.slice(indexofFirstPage, pageNumbers);

    const breakPoint: string = useMediaQuery();

    useEffect(() => {
        if (breakPoint === 'xsm') {
            setPageNumbers(currentPage + 1);
            currentPage !=1 && setIndexofFirstPage(currentPage - 2);
        } else if (breakPoint === 'sm') {
            setPageNumbers(currentPage + 3);
            (currentPage > 3) && setIndexofFirstPage(currentPage - 4);
        } else {
            setPageNumbers(currentPage + 6);
            (currentPage > 5) && setIndexofFirstPage(currentPage - 6);
        }
      }, [breakPoint, currentPage]);

      

    return (    
        <div className='PageSelector col-span-3 md:col-span-4 w-full flex gap-4 justify-center px-10'>
            {/* <button className='PageSelectorButton border-black border-1 px-2 py-2 hover:bg-gray-50 ring-inset ring-1 hover:ring-2'>{'First'}</button> */}
            <button className='PageSelectorButton hidden sm:inline border-black border-1 px-2 py-2 hover:bg-gray-50 ring-inset ring-1 hover:ring-2' onClick={() => prevPage()}>{'Prev'}</button>
            <button className='PageSelectorButton  sm:hidden border-black border-1 px-2 py-2 hover:bg-gray-50 ring-inset ring-1 hover:ring-2' onClick={() => prevPage()}>{'<'}</button>
            {gridPages.map((n: number, i: number) => {
                return (
                    <button 
                        key={i}
                        className={
                            currentPage === n
                                ?'PageSelectorButton border-black border-1 px-2 py-2 rounded-l-md px-2 py-2 bg-gray-50 ring-inset ring-2'
                                :'PageSelectorButton border-black border-1 px-2 py-2 hover:bg-gray-50 ring-inset ring-1'
                            }
                        onClick={() => selectPage(n)}>{n}</button>
                )
            })}
            <button className='PageSelectorButton hidden sm:inline border-black border-1 px-2 py-2 hover:bg-gray-50 ring-inset ring-1 hover:ring-2' onClick={() => nextPage()}>{'Next'}</button>
            <button className='PageSelectorButton sm:hidden border-black border-1 px-2 py-2 hover:bg-gray-50 ring-inset ring-1 hover:ring-2' onClick={() => nextPage()}>{'>'}</button>
            {/* <button className='PageSelectorButton border-black border-1 px-2 py-2 hover:bg-gray-50 ring-inset ring-1 hover:ring-2'>{'Last'}</button> */}
        </div> 
    )
}