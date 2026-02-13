//  const name = "John Doe";
//  const age = 30;
//  console.log(`my name is "${name}" and my age is "${age}"`);

//  const gameName = new String("tubduktubduk")
//     console.log(gameName);          // [String: 'tubduktubduk']
//     console.log(typeof gameName);   // object

//     console.log(gameName.length);   // 13
//     console.log(gameName[0]);       // t
//     console.log(gameName[1]);       // u
//     console.log(gameName.toUpperCase()); // TUBDUKTUBDUK
//     console.log(gameName.toLowerCase()); // tubduktubduk
const gameName = new String("tubduk")
    console.log(gameName.includes("tub"));          // true
    console.log(gameName.startsWith("tub"));        // true
    console.log(gameName.endsWith("tub"));          // false
    console.log(gameName.indexOf('b'));             // 2
    console.log(gameName.slice(0, 3));              // tub
    console.log(gameName.slice(-8,5));              // tubdu
    console.log(gameName.substring(0, 3));          // tub
    console.log(gameName.trim());                   // tubduktubduk // erases spaces at the beginning and end of the string
    console.log(gameName.repeat(3));                // tubduktubduktubduktubduk    

    const url = "https://www.youtube.com/watch?v=abc123";
    const videoId = url.split("v=")[1];
    console.log(videoId);                           // abc123

    
    console.log(url.split("v="));                   // [ 'https://www.youtube.com/watch?', 'abc123' ]

    console.log(url.split("."));                    // [ 'https://www', 'youtube', 'com/watch?v=abc123' ]
 
    console.log(url.replace("youtube", "vimeo"));   // https://www.vimeo.com/watch?v=abc123
