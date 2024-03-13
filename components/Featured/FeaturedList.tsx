'use client'

export default function FeaturedList () {
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
    let authors: string[] = [
        'John Grisham',
        'Jeffrey Archer',
        'Dan Brown',
        'James Patterson',
        'Stephen King',
        'Danielle Steele',
        'Judith McNaught',
        'Ernest Hemingway',
    ]
    let books: string[] = [
        'The Firm',
        'A Quiver of Arrpws',
        'Angels and Demons',
        'The Locked Room',
        'Young Adult',
        'Mystery',
        'Fantasy',
        'Science-Fiction',
    ]

    return (
        <div className='FeaturedList flex justify-around bg-slate-200'>
            <button className='ListButton hover:bg-slate-300 text-gray-800 font-semibold py-2 px-4 w-full shadow'>Authors List</button>
            <button className='ListButton hover:bg-slate-300 text-gray-800 font-semibold py-2 px-4 w-full shadow'>Categories List</button>
            <button className='ListButton hover:bg-slate-300 text-gray-800 font-semibold py-2 px-4 w-full shadow'>Books List</button>
        </div>
    )
}