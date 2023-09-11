<!-- Otrzymujemy i wyprowadzamy całą listę kontaktów w postaci tabeli (console.table) -->

node index.js --action list
https://monosnap.com/file/w4dX0oaE32RoGGqklF8WkcDqfsINbv

<!-- Otrzymujemy kontakt po id -->

node index.js --action get --id 05olLMgyVQdWRwgKfg5J6
https://monosnap.com/file/1r1MTFkoBF7pou7LXzFtOR9jzpz2Gj

<!-- Dodajemy kontakt -->

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/3ZbGcCy4EJy1dloIvYicqGfbC7WT5P

<!-- Usuwamy kontakt -->

node index.js --action remove --id qdggE76Jtbfd9eWJHrssH
https://monosnap.com/file/AbkxFT1mp9fx57q3UEmS38DRBgSMDG
