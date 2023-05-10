ACADEMIA DE STUDII ECONOMICE DIN BUCUREȘTI
Sisteme Informatice Pentru Managementul Proceselor Și Resurselor Economice

Documentație
Motivational Quotes App


Profesor Coordonator:
Conf. univ. dr. Timofte Carmen
Student:
Vasilache Ligia-Gabriela
Grupa: 1121


București 2023

Cuprins
1.	Introducere	
2.	Descriere problemă	
3.	Descriere API	
4.	Flux de date	
5.	Capturi ecran aplicație	
6.	Concluzii finale	
7.	Referințe	


1.	Introducere 

Această aplicație este un generator de citate care îi ajută pe utilizatori să-și găsească inspirația și motivația în fiecare zi. Utilizatorii pot adăuga citate inspiraționale pe baza unui anumit subiect și a autorului respectiv. Aplicația oferă utilizatorilor posibilitatea de a alege din mai multe subiecte și de a adăuga propriile lor citate, astfel încât alți utilizatori să le poată vedea și să le poată fi și lor de ajutor.
Scopul acestei aplicații este de a oferi o sursă de motivație pentru utilizatorii care doresc să fie mai productivi, să atingă obiective și să se simtă mai bine cu ei înșiși. Aplicația poate fi folosită de către oricine dorește să își îmbunătățească starea de spirit și să găsească inspirație în fiecare zi.
Pagina principală a aplicației, "MainPage", permite utilizatorilor să caute și să vizualizeze citate de inspirație în funcție de temă. Utilizatorii pot selecta tema dorită dintr-un meniu derulant și aplicația afișează un citat aleatoriu din baza de date care corespunde temei selectate.
Prin intermediul paginii "InsertPage", utilizatorii pot adăuga un nou citat în baza de date a aplicației. Pentru a face acest lucru, utilizatorii trebuie să completeze un formular, care include trei câmpuri: "Choose a topic" (alegeți o temă), "Enter quote" (introduceți citatul) și "Enter author" (introduceți autorul citatului). După ce utilizatorii completează și trimit formularul, citatul este adăugat în baza de date și poate fi accesat de alți utilizatori.
Unul dintre principalele beneficii ale aplicației este că oferă o sursă de inspirație și motivație pentru utilizatorii săi. Utilizatorii pot găsi citate care să îi ajute să se concentreze mai bine la muncă, să-și îmbunătățească starea de spirit sau să-și sporească încrederea în sine. În plus, prin adăugarea citatelor lor preferate în baza de date, utilizatorii pot contribui la crearea unei comunități care își împărtășește aceleași valori și aspirații. Aplicația este ușor de utilizat și oferă o interfață intuitivă și prietenoasă, ceea ce o face accesibilă pentru oricine.


2.	Descriere problemă

Acest proiect este un exemplu de utilizare a tehnologiilor de programare web și a arhitecturii cloud computing pentru a crea o aplicație web. În particular, proiectul este scris în JavaScript și utilizează biblioteca React pentru a crea interfața utilizatorului.
Aplicația web oferă o bază de date de citate motivaționale și încurajatoare, în care utilizatorii pot adăuga propriile lor citate și pot căuta și vizualiza citatele adăugate de alți utilizatori. Proiectul utilizează o arhitectură bazată pe microservicii, cu un serviciu API care expune funcționalitatea bazei de date și un serviciu web care servește interfața utilizatorului.
Pentru a rula proiectul local, utilizatorul trebuie să instaleze dependențele proiectului folosind npm, apoi să ruleze serviciile API și web folosind comenzile npm start în directorul corespunzător fiecărui serviciu. Proiectul este o bună resursă pentru a învăța despre utilizarea tehnologiilor de programare web și cloud computing pentru a crea aplicații web scalabile și robuste.
În realizarea proiectului am utilizat trei tehnologii-cheie, și anume MongoDB, NextJS și Vercel Deploy. Fiecare dintre aceste tehnologii au avut un rol important în dezvoltarea și funcționarea aplicației:
1. MongoDB este o bază de date NoSQL care este utilizată în principal pentru aplicațiile web care necesită scalabilitate și performanță. Aceasta utilizează o structură de date denumită BSON (Binary JSON) care poate fi mai rapidă decât JSON-ul, ceea ce o face ideală pentru proiectul meu. Prin utilizarea lui MongoDB, am putut stoca și accesa ușor citatele introduse în aplicație și am putut adăuga noi citate în baza de date prin intermediul formularului de adăugare de citate.
2. Next.js este un cadru de aplicație React pentru construirea aplicațiilor web. Acesta adaugă un nivel suplimentar de abstractizare și funcționalitate la React, permitând programatorilor să construiască rapid aplicații web dinamică. Next.js facilitează dezvoltarea și gestionarea aplicațiilor, oferind avantaje precum server-side rendering, optimizarea automată a imaginilor, încărcarea automată a paginilor și multe altele.
Visual Studio Code este un editor de cod open-source dezvoltat de Microsoft, cunoscut pentru gama largă de funcționalități utile pentru programatorii care lucrează cu diverse limbaje de programare, inclusiv JavaScript și TypeScript.
Atunci când vine vorba de dezvoltarea aplicațiilor Next.js, Visual Studio Code mi-a oferit un mediu de dezvoltare robust cu un set bogat de instrumente și plugin-uri utile care au ajutat la scrierea și debugarea codului. În plus, Visual Studio Code oferă o integrare strânsă cu Git, ceea ce a facilitat gestionarea codului sursă. 
3. Vercel Deploy este o platformă de deploy și de hosting pentru aplicațiile web. Aceasta oferă o experiență ușoară de implementare și de scalabilitate, ceea ce face ca procesul de lansare al aplicației să fie mai eficient și mai rapid. Folosind Vercel Deploy, am putut lansa aplicația pe un server cloud și am putut beneficia de o serie de caracteristici, precum auto-scaling, deploy continuu și securitate integrată.


3.	Descriere API 

În cadrul aplicației mele API-ul permite utilizatorilor să caute citate după subiect și autor, precum și să adauge citate noi în baza de date. 
În pagina Main - API-ul din acest cod este un API REST care permite utilizatorilor să acceseze și să interacționeze cu o bază de date de citate motivaționale. Acest API include următoarele rute și metode HTTP:
1. `GET /api/records`: Această rută este folosită pentru a obține toate înregistrările din baza de date și se utilizează metoda HTTP GET.
2. `POST /api/records`: Această rută este folosită pentru a adăuga o nouă înregistrare în baza de date și se utilizează metoda HTTP POST. Se așteaptă ca corpul solicitării să fie un obiect JSON ce conține informațiile despre înregistrare.
3. `DELETE /api/records`: Această rută este folosită pentru a șterge o înregistrare existentă din baza de date și se utilizează metoda HTTP DELETE. Se așteaptă ca ID-ul înregistrării să fie transmis în parametrii URL-ului. 
API-ul utilizează de asemenea librăria `useState` și hook-ul `useEffect` din React pentru a gestiona starea componentei și pentru a efectua acțiuni asincrone.

În pagina Insert - API-ul din acest cod este un API REST care permite utilizatorilor să adauge noi înregistrări într-o bază de date de citate motivaționale. Acest API include următoarele rute și metode HTTP:
1. `POST /api/records`: Această rută este folosită pentru a adăuga o nouă înregistrare în baza de date și se utilizează metoda HTTP POST. Se așteaptă ca corpul solicitării să fie un obiect JSON ce conține informațiile despre înregistrare.
API-ul utilizează de asemenea librăria `useState` și hook-ul `useEffect` din React pentru a gestiona starea componentei și pentru a efectua acțiuni asincrone. Mai exact, hook-ul `useState` este utilizat pentru a gestiona valorile câmpurilor de intrare și pentru a actualiza starea componentei în funcție de schimbările acestora, în timp ce hook-ul `useEffect` este utilizat pentru a efectua o cerere HTTP asincronă către API-ul de adăugare înregistrări atunci când utilizatorul trimite formularul.


4.	Flux de date

Directorul `js` din proiectul meu `cloud-computing` conține codul JavaScript folosit pentru partea de front-end a aplicației.
În acest director există mai multe subdirectoare și fișiere care conțin codul pentru diverse componente ale aplicației. De exemplu, directorul `components` conține cod pentru diferitele pagini ale aplicației, inclusiv `MainPage`și  `InsertPage`. Aceste pagini sunt scrise folosind framework-ul React și conțin cod JSX care definește aspectul și comportamentul paginii.
Directorul `App.js` leagă toate componentele împreună. Acesta definește diferitele rute ale aplicației și care componentă trebuie afișată pentru fiecare rută.
Fișierul `apiMathods.js` conține cod pentru a face cereri HTTP către API-ul serverului. Acesta utilizează API-ul `fetch` pentru a trimite cereri la server și a primi răspunsuri.
Fișierul `index.js` este punctul de intrare al aplicației de front-end. Acesta randează componenta `App` în elementul HTML `div` cu ID-ul "root" din pagina `index.html`.
În general, directorul `js` conține codul pentru partea de front-end a aplicației, care este responsabilă pentru afișarea interfeței și gestionarea interacțiunilor utilizatorului.

MainPage –
Acesta este un cod scris în limbajul React și este folosit pentru a afișa o pagină cu citate motivaționale. În plus față de componente React precum `useEffect` și `useState`, codul face uz de API-uri pentru a efectua operații CRUD pe un set de date de citate motivaționale.

Pentru a explica fluxul de date în acest cod, putem începe prin a discuta despre `fetchQuotes()` și `useEffect(() => { fetchQuotes(); }, []);`:
1. `fetchQuotes()` este o funcție asincronă care efectuează o solicitare GET la `/api/records` și stochează datele răspunsului în starea componentei `quotes`. În cazul în care există o eroare, funcția va afișa un mesaj de eroare în consolă.
2. `useEffect(() => { fetchQuotes(); }, []);` efectuează o solicitare GET la `/api/records` atunci când componenta este montată pentru prima dată. Acest lucru este realizat prin efectuarea apelului funcției `fetchQuotes()` în corpul funcției `useEffect()`.

În continuare, putem discuta despre `addRecord()` și `handleNewQuote()`:
3. `addRecord()` este o funcție asincronă care efectuează o solicitare POST la `/api/records` și adaugă un nou citat motivant la lista de citate. Funcția primește ca parametru obiectul `record`, care este transmis ca corp al solicitării. În cazul în care solicitarea este reușită, noua listă de citate este actualizată prin adăugarea noului citat.
4. `handleNewQuote()` este o funcție care este apelată atunci când utilizatorul dorește să afișeze un citat nou. Funcția extrage lista filtrată de citate și selectează un citat aleatoriu din aceasta. Citatul selectat este stocat în starea componentei `quote`.

Următorul aspect important este `deleteRecord()`:
5. `deleteRecord()` este o funcție asincronă care efectuează o solicitare DELETE la `/api/records` și șterge citatul corespunzător identificat prin parametrul `id`. După ștergerea citatului, lista de citate este actualizată prin eliminarea citatului șters.

În cele din urmă, putem discuta despre interacțiunea utilizatorului cu componenta:
6. Utilizatorul poate filtra lista de citate prin selectarea unei teme din meniul dropdown.
7. Utilizatorul poate apăsa pe butonul "New Quote" pentru a afișa un citat nou. În cazul în care lista filtrată este goală, butonul este dezactivat.
8. Utilizatorul poate apăsa pe butonul "Delete" corespunzător unui citat pentru a-l șterge.
În ceea ce privește autentificarea și autorizarea, acest cod nu conține nicio astfel de funcționalitate. 

InsertPage-
Acesta este un fișier JavaScript React ce definește o componentă numită InsertPage. Această componentă definește o pagină care permite utilizatorilor să adauge citate inspiraționale într-o bază de date prin intermediul unui formular. Când utilizatorii completează formularul și apasă butonul "Submit", funcția `insertRecord()` este apelată. Această funcție preia datele introduse de utilizator din formular și le trimite prin intermediul unei cereri HTTP POST către un endpoint API (`/api/records`). 
Interfața utilizatorului constă într-un formular ce conține trei câmpuri: "Choose a topic", "Enter quote" și "Enter author". Primul câmp este un meniu drop-down ce permite utilizatorului să aleagă unul dintre cinci subiecte: "Work", "Motivation", "Success", "Happiness" și "Love". Celelalte două câmpuri sunt câmpuri de text în care utilizatorul trebuie să introducă citatul și autorul acestuia.
Dacă cererea este realizată cu succes, funcția `insertRecord()` șterge datele introduse de utilizator din formular și afișează un mesaj în consolă care indică încărcarea cu succes a unei înregistrări.
Componentul este stilizat cu CSS inline pentru a arăta mai bine în cadrul paginii.
Fluxul de date pentru pagina "insert" este următorul:
1. Utilizatorul completează formularul pentru a adăuga un citat motivational.
2. Când utilizatorul apasă butonul "Submit", o solicitare HTTP de tip POST este trimisă către API-ul nostru, care conține informațiile din formular.
3. API-ul validează datele și adaugă citatul în baza de date. Dacă informațiile sunt valide, API-ul trimite un răspuns HTTP cu un cod de status 200 OK. În caz contrar, un cod de eroare este returnat.
4. Componenta React primește răspunsul API-ului și afișează un mesaj corespunzător utilizatorului, indicând dacă citatul a fost adăugat cu succes sau nu.

Exemple de request / response pentru API-ul din pagina "insert":

•	Exemplu de request:
```
POST /api/records HTTP/1.1
Content-Type: application/json
{
  "author": "John Doe",
  "quote": "The only way to do great work is to love what you do."
}
```

•	Exemplu de response:
```
HTTP/1.1 200 OK
Content-Type: application/json
{
  "status": "success",
  "message": "Record added successfully"
}
```
Metode HTTP folosite în API-ul din pagina "insert":
- POST: Folosit pentru a trimite informațiile formularului către API-ul nostru.
- Autentificare și autorizare servicii utilizate: Nu există autentificare sau autorizare în cadrul acestui API, deoarece nu este necesară autentificarea pentru a adăuga citate în baza de date.

5.	Capturi ecran aplicație

- link video- prezentare proiect: https://youtu.be/Y8EJNo1L8BI
- link publicare: https://cloud-computing-uze3.vercel.app
- link GitHub: https://github.com/LIGIA0/cloud-computing.git

6.	Concluzii finale

În concluzie, aplicația descrisă în acest document este un generator de citate motivaționale care oferă o sursă de inspirație și motivație pentru utilizatorii săi. Utilizatorii pot adăuga propriile lor citate în baza de date și pot căuta și vizualiza citatele adăugate de alți utilizatori. Această aplicație utilizează tehnologii cloud și de programare web, precum MongoDB, NextJS și Vercel Deploy, pentru a crea o aplicație web scalabilă și robustă. Prin intermediul acestei aplicații, utilizatorii pot îmbunătăți starea lor de spirit și pot contribui la crearea unei comunități care își împărtășește aceleași valori și aspirații.

7.	Referințe

https://gurita-alexandru.gitbook.io/cloud-computing-2023-simpre/
https://nextjs.org/docs
