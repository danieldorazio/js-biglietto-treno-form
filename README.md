###Esercizio
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

###Svolgimento 

HTML: Fare struttura
JS: Tutto deve partire al click del tasto INVIA Il codive va all'interno dell'event listener:

**Dati**

- Prelevare il numero di chilometri da percorrere
- Prelevare l'eta del passegero 

**Logica**
- Calcolare prezzo intero del biglietto
- Valutare età passegero
- Applicare sconto dove è presente
- Preparare il messaggio di risultato

**Output**

- Trovare l'elemento in HTML dove stampare il risultato
- Iserire la sezione del risultato 

Per cancellare Aggiungiamo event listener sul tasto CANCELLA: Al click:

- Cancellare dati dall'input
- Cancellare campi dei risultati
- Nascondere la sezione del risultato

