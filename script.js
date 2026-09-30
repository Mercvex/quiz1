const pages = {
    home: `
    <!--
        <div class="navigation"> 
            <button class="navbar" onclick="navigateTo('home')">Home</button>
            <button class="navbar" onclick="navigateTo('profile')">Profile</button>
            <button class="navbar" onclick="navigateTo('hometown')">Hometown</button>
            <button class="navbar" onclick="navigateTo('food')">Food</button>
            <button class="navbar" onclick="navigateTo('tourist')">Tourist</button>
        </div>
    -->
        <div class="homepage">
            <h1 class="welcome">Welcome To</h1>
            <h1 class="website">My Website</h1>
            <p class="deskripsi"> This website was created for Web Programming Quiz 1</p>
            <p> Created by Medina</p>
            <button class="tombol" onclick="navigateTo('profile')">Profile</button>
        </div>
    `,
    profile: `
        <div class ="myprofile">
            <h1 class="profileku">My Profile</h1>
            <p><span>Name</span>: Medina Kusuma Prianda</p>
            <p><span>NRP</span>: 5025251240</p>
            <p><span>Major</span>: Informatics Engineering</p>
            <p><span>Course</span>: Web Programming</p>
            <p><span>Class</span>: D</p>
            <p><span>Hometown</span>: Ponorogo</p>
            <p><span>Hobby</span>: Playing video game</p>
        </div>
    `,
    hometown: `
        <div class ="asal">
            <h1 class="kab">Hometown</h1>
            <p>Located in an intermontane basin in the eastern part of Java, Ponorogo is a city whose cultural life is strongly shaped by traditional practices embedded in everyday social structures. The city extends across a varied landscape of river systems, agricultural land and highland areas, and is organised around a dense network of villages that function as active cultural units. Social cohesion and mutual cooperation are widely valued, with cultural expression playing a central role in community life.</p>
            <br>
            <p>Crafts and Folk Art are closely intertwined with Ponorogo’s performing traditions, most notably ‘Reog Ponorogo’, a dance drama that narrates the city’s founding history and has been transmitted since the fifteenth century. Reog combines dance, music, costume making and mask production, generating a broad craft ecosystem involving artisans specialized in giant masks, costumes, accessories and traditional musical instruments. Nearly every village maintains a Reog studio, serving as a space for training, production and intergenerational transmission.</p>
            <br>
            <p>Alongside performing arts, the city sustains traditional crafts such as batik, pottery and bone-based crafts linked to prehistoric Sampungian heritage.</p>
        </div>
    `,
    food: `
        <div class ="makanan">
            <h1 class="sate">Local Food</h1>
            <p>Sate Ponorogo is a regional satay dish originating from Ponorogo, a regency in East Java, Indonesia. It is a distinct variation of Indonesian chicken satay, known for its specific marination technique, longer and thinner meat slices, and rich peanut sauce that differs from the versions found in Central Java or Jakarta.</p>
            <br>
            <p>The chicken is sliced in broad, flat pieces instead of cubes, allowing it to absorb the marinade more effectively and cook evenly on skewers. The preparation of sate Ponorogo begins with marinating chicken pieces in a mixture of shallots, garlic, coriander, candlenuts, turmeric, galangal, salt, and a generous amount of sweet soy sauce or palm sugar-based seasoning.</p>
            <br>
            <p>The marinade is sometimes applied in two stages to allow deeper flavor absorption, often involving hours or even overnight soaking. Unlike other satay types where the meat is threaded onto skewers in smaller chunks, the pieces used for sate Ponorogo are cut lengthwise and arranged on bamboo skewers with more space between them, helping them cook faster and develop a slightly charred edge while staying tender.</p>
            <br>
            <p>Grilling is done over charcoal, with repeated basting using a similar sweet-savory sauce derived from the marinade. The cooking process is closely monitored, and the skewers are turned regularly to ensure even grilling. The accompanying peanut sauce is smoother and slightly thinner compared to the Central Javanese variety, often mixed with sweet soy sauce and a small amount of chicken broth or leftover marinade for depth.</p>
            <br>
            <p>It is served separately or poured over the satay along with sliced shallots, lime wedges, and fresh chili. Sate Ponorogo is commonly eaten with rice cakes known as lontong, or with steamed rice, and is typically served at specialized stalls or street vendors in Ponorogo, some of which have operated for generations.</p>
            <br>
            <p>While variations of chicken satay exist throughout Indonesia, sate Ponorogo is notable for the prominence it gives to the marinade and the specific slicing and skewering method that define its appearance and texture. The dish has gained recognition beyond its region, with stalls in Surabaya, Jakarta, and even other provinces offering it under the same name, though the most sought-after versions remain those sold in the town of Ponorogo itself.</p>
        </div>
    `,
     tourist: `
        <div class ="tempat">
            <h1 class="wisata">Tourist Places</h1>
            <ul>
                <li>Ngebel lake => Located in Ngebel District, this picturesque lake offers stunning views of the surrounding hills and forests. Visitors can enjoy activities such as boating, fishing, and picnicking in a serene natural setting.</li>
                <br>
                <li>Ponorogo carnival => Held annually, Ponorogo Carnival is a vibrant cultural event that showcases traditional arts, music, dance, and elaborate costumes. The carnival attracts both locals and tourists and offers a glimpse into the rich cultural heritage of Ponorogo.</li>
                <br>
                <li>Jolotundo waterfall => Situated in Sawoo District, Jolotundo Waterfall is a hidden gem known for its cascading waters and lush green surroundings. The waterfall is ideal for nature lovers and photographers seeking tranquility and natural beauty.</li>
            </ul>
        </div>
    `,
}

function navigateTo(page) {
    const main = document.getElementById('main');
    main.innerHTML = pages[page];

    if (page === 'home') {
        history.pushState(null, '', '/quiz1');
    } else {
        history.pushState(null, '', '/quiz1/' + page);
    }
}

function loadPage() {
    const path = window.location.pathname;
    const parts = path.split('/');

    const currentPage = parts[2] || 'home';
    document.getElementById('main').innerHTML = pages[currentPage] || pages.home;
}

loadPage();

window.addEventListener('popstate', loadPage);