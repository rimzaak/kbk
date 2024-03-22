'use client'

import useMediaQuery from "@/utils/mediaQuery";
import { useEffect, useState } from "react";

export default function FeaturedButton () {
    let categories: string[] = [
        'Fiction',
        'Non-Fiction',
        'Romance',
        'Thriller',
        'Young Adult',
        'Mystery',
        'Fantasy',
        'Science-Fiction',
      ]

      const [categoriesPerPage, setCategoriesPerPage] = useState<number>(8);

      const breakPoint: string = useMediaQuery();

      useEffect(() => {
        if (breakPoint === 'xsm') {
          setCategoriesPerPage(6);
        } else if (breakPoint === 'sm') {
          setCategoriesPerPage(6);
        } else if (breakPoint === 'md') {
          setCategoriesPerPage(7);
        } else if (breakPoint === 'lg') {
          setCategoriesPerPage(8);
        } else {
          setCategoriesPerPage(8);
        }
      }, [breakPoint]);

      const categoriesList:string[] = categories.slice(0, categoriesPerPage);


      return (
        <div className='FeaturedButtons w-1/3 flex flex-col space-y-5'>
            {categoriesList.map((category: string, i: number) => {
              return (
                <button key={i} className='FeaturedButton bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded border border-black'>{category}</button>
              )
            })}
        </div>
      )
}