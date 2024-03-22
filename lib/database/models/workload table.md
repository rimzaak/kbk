<!-- Workload table -->
Sign up
    - Write
    - username, name, email, phone, dob, addresses, links, userrating, photo
    - Once a lifetime
    - High
    - Add new document (User)

List a new Book
    - Write
    - Book (Title, author, bookcover,ISBN, releasedate, synopsis, rating), Category (category), Author (author), Listing (user, price, date bought, condition, location, isCOD, qty available) 
    - 10 per day
    - High
    - Add new document (Book, Category, Author, Listing)
    - Refer to user, category, Author

Add an existing book
    - Write
    - (user, price, date bought, condition, location, isCOD), Listing
    - 10 per day
    - High
    - Add new document (Listing)
    - Refer to Book, User
    
Find a book
    - Read
    - Book (Title,author,bookcover,synopsis,ISBN, releasedate,rating), Listing (createdat,user,price,date,bought,condition,location,isCOD, qty available), transactions
    - 100 per day
    - High
    - Refer to Book, Listing, Transaction

Show featured books
    - Read
    - Book (Title, author, bookcover, synopsis, releasedate, rating) Listing (Qty available, price), transaction
    - 100 per day
    - High
    - Refer to Book, Listing, Transactions

Transaction
    - Write
    - Transaction (user bought/sold,userrating seller/buyer, date/time, shipment option, shipping address, shipping cost, issucceed), Listing(qty available, price, isCOD)
    - 100 per day
    - High
    - Add New Doc (Transaction)
    - Refer to User, Book, Listing

Messaging
    - Write
    - Message, date/time, user from/to, Book, Transaction
    - 100 per day
    - High
    - Reference (Message)
    - refer to User, Book, Transaction 

List all listings for a book
    - Read
    - Book (Listing), Listing (Qty available, price, created at, condition, location, isCOD, user)
    - 50per day
    - medium
    - Refer to Book, Listing

Filter according to category
    - Read
    - Title, author, bookcover, synopsis, price, releasedate, qty available, rating, transaction
    - 100 per day
    - Medium
    - Refer to Book

Show all categories
    - Read
    - categories
    - 100 per day
    - Medium
    - Refer to Category

Show all authors
    - Read
    - Authors
    - 100 per day
    - Medium
    - Refer to Author

Show User Info
    - Read
    - Username, messages, name, email, phone, dob, addresses, links, userrating, transactions, listing, isVerified, 
    - 10 per day
    - Low
    - Refer to User, messages, transactions, Book, 


<!-- Relational map -->

User 1 to N
    - Listings

Users N to N
    <!-- - Books -->
    - Transactions (Multiple people per transaction inclusive of unsuccessful transactions)
    - Messages

Book 1 to 1 
    - Author

Book 1 to N
    <!-- - Messages -->
    - Listings

Books N to N
    <!-- - Users -->
    - Categories
    - Transactions (multiple books per transaction)

Message 1 to 1
    <!-- - Book -->
    - Transaction
    - Listing

Messages N to N
    - Users

Transactions 1 to N
    - Messages

Transactions N to N
    - Books (multiple transactions per book)
    - Users (Multiple users per transaction inclusive of failed transaction)
    - Categories (Multiple books per transaction)
    - Listings (Multiple transaction per listing inclusive of failed, and multiple listing per transaction )
    - Authors (multiple books per transaction)

Listing 1 to 1
    - Book
    - User

Listing 1 to N
    - Messages

Listings N to N
    - Transactions (Multiple listings per transaction)

Categories N to N
    - Books
    - Transactions (Multiple books per transaction)

Author 1 to N
    - Books

Author N to N
    - Transactions (Multiple books per transaction)