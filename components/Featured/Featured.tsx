'use client'

import FeaturedBooks from "./FeaturedBooks";
import FeaturedButton from "./FeaturedButton";
import FeaturedList from "./FeaturedList";

export default function Featured ({featuredBooks}: {featuredBooks: book[]}){
    return (
        <div>
            <div className='FeaturedBooks flex mb-7'>
                <FeaturedButton />
                <FeaturedBooks featuredBooks={featuredBooks} />         
            </div>
            <FeaturedList />
        </div>
    )
}