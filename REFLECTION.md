Jag använder mig utav meningsfulla namn som är tydliga och namnet förklarar av sig själv vad dess för funktion är. Namnen är inte förkordade och därför går de att uttala. Metodnamnen är ett verb och är tydliga med vad de gör, och säger inget annat. Det finns heller inte några noise-ord i variabelnamn, så som object eller array.

Funktionerna är korta och de gör bara en sak. Blocken i if-satsen är bara en rad, förutom där jag delat upp en sträng på två rader för att göra det enklare att läsa. Metoderna tar inga argument och håller det på en enklare abstraktionsnivå. Det finns heller inte någon repetion i metoderna.

Använder mig i princip inte alls utav kommentarer då jag tycker att koden i sig är tydlig. Då skulle kommentarerna bara vara överflödiga. Finns en kommentar på ett ställe där jag känner att den skulle kunna vara till nytta, även om variabelnamnt är tydligt.

Jag har en konsekvent indentering rakt igenom min kod för att göra koden mer lättläst för oss som arbetar med den. Jag har satt en gräns för hur jag ska hantera den horisontella formateringen, där rader bara får vara 125 karaktärer lång. Jag fick därför dela upp en sträng på rad 42 för att göra det mer lättläst. Jag har också variabler så nära som möjligt till där de används.
![Rad uppdelad på rad 42, 43](/img/formatting.png)

Här borde koden delas upp för att inte bryta mot Law of Demeter. Nu blir koden istället ett så kallat trainwreck.
![Hade kunnat dela upp koden](/img/trainwreck.png)

Felhanteringen är väldigt dålig i min kod och i principt icke-existerande. Borde finnas åtminstånde en try-catch. Jag borde kasta ett undantag när man försöker starta applikationen utan att skriva in ett filnamn. Undantaget borde tala om vad som blir fel och varför. 

Den här applikationen är väldigt beroende på module CodeAnalyzer. Det är bättre att vara beroende av kod som man själv äger och kan kontrollera.

Jag har några manuella testfall. De är enkla ett läsa och därför enkelt att testa dem. Det är enkelt att så vilka tester som fungerar och vilka som inte gör det. Varje testfall testar ett koncept och inte flera.

Klassen CodeSummary är ganska liten och innehåller sju metoder. Klassnamnet är tydligt och förklarar vad klassen gör. Jag borde kanske brytit ut ansvaret för att skriva ut till konsolen då det inte har men analyserande av koden att göra.
