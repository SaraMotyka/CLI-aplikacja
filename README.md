<!-- Otrzymujemy i wyprowadzamy całą listę kontaktów w postaci tabeli (console.table) -->

node index.js --action list
<img src="../CLI-APLIKACJA/images/action.list.png" alt="List"/>

<!-- Otrzymujemy kontakt po id -->

node index.js --action get --id 05olLMgyVQdWRwgKfg5J6
<img src="../CLI-APLIKACJA/images/action.get.png" alt="Get"/>

<!-- Dodajemy kontakt -->

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
<img src="../CLI-APLIKACJA/images/action.add.png" alt="Add"/>

<!-- Usuwamy kontakt -->

node index.js --action remove --id qdggE76Jtbfd9eWJHrssH
<img src="../CLI-APLIKACJA/images/action.remove.png" alt="Remove"/>
