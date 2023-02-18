interface Category {
   _id: string;
   _createdAt: string;
   _updatedAt: string;
   _rev: string;
   _type: "category";
   slug: {
    _type: "slug";
    current: string;
   };
   title: string
}

// d.ts syntax oznacza że środowisko aplikacji zna ten plik i nie musimy
// exportować zawartych tu rzecyz np interfejsów