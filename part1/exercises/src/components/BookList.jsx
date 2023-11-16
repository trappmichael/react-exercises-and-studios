export default function BookList() {
   let pageTitle = "Books I Read This Month";
   let book1 = "https://pictures.abebooks.com/isbn/9780441005901-us.jpg";
   let book2 = "https://pictures.abebooks.com/inventory/md/md31653683860.jpg";
   let book3 = "https://pictures.abebooks.com/isbn/9780679736325-us.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Dune" />
         <img src={book2} alt="My Brilliant Friend" />
         <img src={book3} alt="Suttree" />
      </div>      
   );
}