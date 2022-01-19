export function setLang(lang) {
    let langJson = {};
    if(lang === 'se') {
        langJson = {
            'aboutTitle': 'om mig',
            'workTitle': 'arbete',
            'eduTitle': 'utbildning',
            'otherTitle': 'andra meriter',
            'mediaTitle': 'media',
            'contactTitle': 'kontakt',
            'workListUl': `<li>  
                                <span>
                                <p class="smalltitle"> 
                                <img src="../images/vklogo.png" width="30px" height="auto" alt="VK logo"> 
                                <span class="indent"> IT INTERN - VASAKRONAN </span> </p>
                                <p class="txt dbindent"> Utvecklade en IoT lösning för Vasakronan som användes för att visualisera inomhusklimat i temperatur, CO2, TVOC och luftfuktighet.
                                Projektet är främst skrivet i JavaScript och TypeScript.  </p>
                                <p class="txt dbindent"> mars 2021 - augusti 2021 <span> 
                                <p class="it dbindent"> Projektet började som ett kandidatarbete - men utvecklades sedan till ett IT internship under sommaren. </p> 
                                <p class="it dbindent"> Du kan läsa rapporten genom att trycka <a href="https://drive.google.com/file/d/1U7AgXnTBBT3LWj9F_nKa_zOw6UHOX3Gk/view?usp=sharing" class="it"> här</a> eller genom att kika på projektets <a href="https://github.com/NiklasVasa/Titti-project" class="it"> GitHub repo</a>.</span></p></span> 
                            </li>

                            <li>
                            <span>
                            <p class="smalltitle">
                            <img src="../images/prodjob.jpg" width="30px" height="auto" alt="Prod logo">
                            <span class="indent"> FRILANS MUSIKPRODUCENT</span></p>
                            <p class="txt dbindent"> Jag har en enskild firma där jag producerar, mixar, mastrar och DJar. Jag har över 10 000 000 plays på 
                            streamingtjänster som Spotify och Apple Music.  </p>
                            <p class="it dbindent"> Mer information - och smakprov - finns under "media" delen på denna sidan. :) </p>
                            </span>
                        </li>

                            <li>
                                <span> 
                                <p class="smalltitle"> 
                                <img src="../images/avlogo.jpeg" width="30px" height="auto" alt="Aviator logo">
                                <span class="indent">BAGGAGEHANTERING - AVIATOR</span> </p>
                                <p class="txt dbindent"> Tog hand om baggaget på Arlanda för Aviator. </p>
                                <p class="txt dbindent"> maj 2019 - augusti 2019 </p>
                                </span> 
                            </li>

                            <li>
                                <span> 
                                <p class="smalltitle"> 
                                <img src="../images/hstadlogo.png" width="30px" height="auto" alt="Halmstad logo">
                                <span class="indent">LÄRARVIKARIE - HALMSTAD KOMMUN</span> </p>
                                <p class="txt dbindent"> Främst i åk 1-5. </p>
                                <p class="txt dbindent"> november 2017 - mars 2018 </p>
                                </span> 
                            </li>

                            <li>
                                <span> 
                                <p class="smalltitle"> 
                                <img src="../images/hnlogo.png" width="30px" height="auto" alt="Höganäs logo">
                                <span class="indent"> FÖRRÅD - HÖGANÄS</span> </p>
                                <p class="txt dbindent"> Tog hand om inventering samt tog emot leveranser på Höganäs Halmstadbruken. </p>
                                <p class="txt dbindent"> juni 2017 - augusti 2017 </p>
                                </span> 
                            </li>
                            `,
            'otherListDiv': `<div  id="innerOtherDiv">
                            <ul style="grid-area:ri">
                            <li class="rili">  
                            <span>
                            <p class="smalltitle"> 
                            <img src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_translate_48px-1024.png" width="30px" height="auto" alt="Language"> 
                            <span class="indent"> SPRÅK </span> </p>
                            <p class="smalltitle"> Svenska </p>
                            <p class="txt indent"> Modersmål. </p>
                            <p class="smalltitle"> Engelska </p>
                            <p class="txt indent"> Flytande. 112/120 på TOEFL i januari 2021. </p>
                            <p class="smalltitle"> Japanska </p>
                            <p class="txt indent"> Vardagsspråk - inte riktigt helt flytande än. Studerar för JLPT N1 nivå. </p>
                            <span> 
                            </li>
                            <li class="rili">
                            <span>
                            <p class="smalltitle"> 
                            <img src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_developer_mode_48px-512.png" width="30px" height="auto" alt="Developer"> 
                            <span class="indent"> UTVECKLING </span> </p>
                            <p class="smalltitle"> Front end </p>
                            <p class="txt indent"> JavaScript, TypeScript, Vue </p>
                            <p class="txt indent"> HTML </p>
                            <p class="txt indent"> CSS </p>
                            <p class="smalltitle"> Back end</p>
                            <p class="txt indent"> SQLServer, MySQL </p>
                            <p class="txt indent"> NodeJS </p>
                            <p class="smalltitle"> Andra språk</p>
                            <p class="txt indent"> Python </p>
                            <p class="txt indent"> R </p>
                            <p class="txt indent"> Matlab </p>
                            <p class="txt indent"> Java </p
                            <span> 
                        </li>
                        </ul>

                        <ul style="grid-area:le">
                        <li class="leli">
                        <span>
                        <p class="smalltitle"> 
                        <img src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_my_library_music_48px-512.png" width="30px" height="auto" alt="music production"> 
                        <span class="indent"> MUSIKPRODUKTION </span> </p>
                        <p class="smalltitle"> Mjukvara </p>
                        <p class="txt indent"> Ableton Live, Native Instruments Traktor, UAD Console, Waves </p>
                        <p class="smalltitle"> Hårdvara </p>
                        <p class="txt indent"> UAD Hardware (Apollo Twin), Tascam racks, allmän mixerkunskap </p>
                        <span> 
                        </li>
                        <li class="leli">
                        <span>
                        <p class="smalltitle"> 
                        <img src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_nature_people_48px-512.png" width="30px" height="auto" alt="Developer"> 
                        <span class="indent"> VOLONTÄRSARBETE </span> </p>
                        <p class="smalltitle"> Engineers Without Borders Sweden </p>
                        <p class="txt indent"> Var medlem i Uppsalautskottets ledningsgrupp. Ansvarade för en grupp på 8 volotärer. </p>
                        <p class="smalltitle"> UTN - Studentkår </p>
                        <p class="txt indent"> Fadderkå. Ansvarig för faddrarna för ett civilingenjörsprogram vid Uppsala universitet. </p>
                        <p class="txt indent"> Ansvarade för ungefär 60 faddrar och 90 nya studenter, i ett event som totalt innefattade ungefär 1200 volontärer. </p>
                        <span> 
                        </li>
                        </ul>
                        </div>
                        `,
            'eduListUl': `<li>  
                            <span>
                            <p class="smalltitle"> 
                            <img src="../images/uulogo.png" width="30px" height="auto" alt="UU logo"> 
                            <span class="indent"> Civilingenjör i System i Teknik och Samhället - Uppsala universitet </span> </p>
                            <p class="txt"> En civilingenjörsutbildning vid Uppsala universitet. Civilingenjörsprogrammet i System i Teknik och Samhälle
                            har en tvärvetenskaplig inriktning och hanterar snittet där samhället möter tekniken. Jag studerar IT-inriktning. </p>
                            <p class="txt"> augusti 2018 - now </p>
                            <span> 
                        </li>

                        <li>
                            <span> 
                            <p class="smalltitle"> 
                            <img src="../images/kglogo.jpeg" width="30px" height="auto" alt="kattegattgymnasiet logo">
                            <span class="indent"> Naturvetenskap NANA - Kattegattgymnasiet</span> </p>
                            <p class="txt"> Naturvetenskapligt program på gymnasieskolan Kattegattgymnasiet i Halmstad. </p>
                            <p class="txt"> augusti 2013 - juni 2017 </p>
                            </span> 
                        </li>

                        <li>
                        <span> 
                        <p class="smalltitle"> 
                        <img src="../images/rologo.png" width="30px" height="auto" alt="皇學館高等学校">
                        <span class="indent"> Rotary Youth Exchange - 皇學館高等学校</span> </p>
                        <p class="txt"> Mellan tvåan och trean på gymnasiet åkte jag på ungdomsutbyte till Japan. Jag gick på
                        皇學館高等学校 (Kogakkan High School) i staden Ise, Mie prefektur.</p>
                        <p class="txt"> augusti 2015 - juni 2016 </p>
                        </span> 
                        </li>
                        `,
            'contactListUl': `
                    <li>
                    <img src="../images/linkedin.png" width="30px" height="auto" alt="lin">
                    <a href="https://www.linkedin.com/in/niklas-norinder-90805b16a/" > LinkedIn </a>
                    </li>

                    <li>
                    <img src="../images/ig.png" width="30px" height="auto" alt="ig">
                    <a href="https://www.instagram.com/clavibeats" > Instagram </a>
                    </li>

                    <li>
                    <img src="../images/github.png" width="30px" height="auto" alt="mail">
                    <a href="https://github.com/ChefKeff" > GitHub </a>
                    </li>

                    <li>
                    <img src="../images/cv.png" width="30px" height="auto" alt="mail">
                    <a href="../CV.pdf" download="CV_Niklas_Norinder">Resumé</a>
                    </li>
                    `,
            'spanTxtQkInf': `<h2 class = "title"> NIKLAS NORINDER </h2>
                            <p class = "smalltitle">Ålder</p>
                            <p class = "txt indent">   24</p>
                            <p class = "smalltitle">Plats</p>
                            <p class = "txt indent">   Uppsala, Sverige</p>
                            <p class = "smalltitle">Just nu håller jag på med</p>
                            <p class = "txt indent">   Student Civilingenjörsprogrammet i System i Teknik och Samhället, Uppsala universitet</p>`,
            'spanTxtAbout': `<p class = "smalltitle">Hej!</p>
                            <p class = "txt">Jag heter Niklas Norinder. Jag pluggar just nu mitt fjärde år vid Uppsala universitet
                            till civilingenjör i System i Teknik och Samhälle. På fritiden gillar jag att skapa och producera musik, laga mat, springa,
                            hänga med mina vänner och programmera.</p>
                            <p class = "txt"> Jag har vuxit upp på den svenska västkusten <i> (västkust, bäskust!!) </i>, i både 
                            Göteborg och Halmstad. Under mina gymnasiestudier valde jag att spendera ett år i Japan som utbytesstudent för att 
                            bredda mina perspektiv och prova något nytt. Jag utvecklades otroligt mycket under mitt utbyte, däribland mina kommunikativa, och språkliga, färdigheter.</p>
                            <p class = "txt">2018 började jag plugga vid Uppsala universitet, och just nu så står jag inför ytterligare ett utbyte till Japan
                            HT22 (om corona tillåter, såklart).</p>`,
            'spanTxtSpotify': `<h2 class = "smalltitle"> SPOTIFY </h2>
                                <p class = "txt"> Här är ett urval låtar som jag jobbat på från Spotify. </p>
                                <p class = "txt"> Jag har antingen uppträtt på, producerat, mixat eller mastrat låtarna. Alla är gjorde med hjälp av Ableton Live,
                                Waves-paketet och olika hårdvara. Jag har agerat ljudtekniker under inspelningen av majoriteten av låtarna också.</p>`,
            'spanTxtBeats': `<h2 class = "smalltitle"> BEATS </h2>
                            <p class = "txt"> Här kan du lyssna på lite beats som jag har producerat. De finns i widgeten till vänster.
                            Alla beats är producerade helt av mig med hjälp av Ableton Live. </p>
                            <p class = "txt">Beatsen är <strong>inte</strong> färdigmixade eller mastrade. För att höra färdiga låtar
                            rekommenderar jag att du kikar i Spotify-widgeten ovan.</p>`,
            'aboutPPBtnTxt': `Om sidan`,
            'gitHubTxt': `Klicka här för att bli komma till GitHub-repon och spana in koden för hemsidan.`,
            'nameLbl': 'Ditt namn',
            'mailLbl': 'Din mail',
            'subjLbl': 'Ämne',
            'enqLbl': 'Text'

        }
    }
    if(lang === 'eng') {
        langJson = {
            'aboutTitle': '<h1 class = "title preload">about me</h1>',
            'workTitle': '<h1 class = "title preload">work</h1>',
            'eduTitle': '<h1 class = "title preload">education</h1>',
            'otherTitle': '<h1 class = "title preload">other merits</h1>',
            'mediaTitle': '<h1 class = "title preload">media</h1>',
            'contactTitle': '<h1 class = "title preload">contact</h1>',
            'workListUl': `<li>  
                                <span>
                                <p class="smalltitle"> 
                                <img src="../images/vklogo.png" width="30px" height="auto" alt="VK logo"> 
                                <span class="indent"> IT INTERN - VASAKRONAN </span> </p>
                                <p class="txt dbindent"> Developing an IoT solution for displaying indoor temperature, CO2, TVOC and Humidity, for internal use at Vasakronan. The project is written in 
                                JavaScript and mainly TypeScript. Connecting several different IoT APIs on a single webpage. </p>
                                <p class="txt dbindent"> March 2021 - August 2021 <span> 
                                <p class="it dbindent"> This project started as a bachelor's thesis, later developing into a full fledged internship. </p> 
                                <p class="it dbindent"> You can read more about this project by looking at the bachelor's thesis <a href="https://drive.google.com/file/d/1U7AgXnTBBT3LWj9F_nKa_zOw6UHOX3Gk/view?usp=sharing" class="it"> here</a> or by visiting the <a href="https://github.com/NiklasVasa/Titti-project" class="it"> GitHub repo</a>.</span></p></span> 
                            </li>

                            <li>
                            <span>
                            <p class="smalltitle">
                            <img src="../images/prodjob.jpg" width="30px" height="auto" alt="Prod logo">
                            <span class="indent"> FREELANCE MUSIC PRODUCER</span></p>
                            <p class="txt dbindent"> I run a one-man company doing some music production, mixing, mastering and DJing. 
                            Since the start in 2018, I have accumulated over 10.000.000 streams on my music on services like Spotify and Apple Music. </p>
                            <p class="it dbindent"> More information, as well as soundbites, can be found in the "media" section of this website. </p>
                            </span>
                        </li>

                            <li>
                                <span> 
                                <p class="smalltitle"> 
                                <img src="../images/avlogo.jpeg" width="30px" height="auto" alt="Aviator logo">
                                <span class="indent">BAGGAGE HANDLING - AVIATOR</span> </p>
                                <p class="txt dbindent"> Managing the luggage for Aviator at Arlanda airport. </p>
                                <p class="txt dbindent"> May 2019 - August 2019 </p>
                                </span> 
                            </li>

                            <li>
                                <span> 
                                <p class="smalltitle"> 
                                <img src="../images/hstadlogo.png" width="30px" height="auto" alt="Halmstad logo">
                                <span class="indent">SUBSTITUTE TEACHER - HALMSTAD KOMMUN</span> </p>
                                <p class="txt dbindent"> Substituting for classes 1 through 5 (7 year to 11 year old students) mainly. </p>
                                <p class="txt dbindent"> November 2017 - March 2018 </p>
                                </span> 
                            </li>

                            <li>
                                <span> 
                                <p class="smalltitle"> 
                                <img src="../images/hnlogo.png" width="30px" height="auto" alt="Höganäs logo">
                                <span class="indent"> STORAGE - HÖGANÄS</span> </p>
                                <p class="txt dbindent"> Responsible for keeping inventory and accepting deliveries at Höganäs Halmstadbruken. </p>
                                <p class="txt dbindent"> June 2017 - August 2017 </p>
                                </span> 
                            </li>
                            `,
            'otherListDiv': `<div  id="innerOtherDiv">
                            <ul style="grid-area:ri">
                            <li class="rili">  
                            <span>
                            <p class="smalltitle"> 
                            <img src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_translate_48px-1024.png" width="30px" height="auto" alt="Language"> 
                            <span class="indent"> LANGUAGE </span> </p>
                            <p class="smalltitle"> Swedish </p>
                            <p class="txt indent"> Native. </p>
                            <p class="smalltitle"> English </p>
                            <p class="txt indent"> Fluent. 112/120 on the TOEFL in January 2021. </p>
                            <p class="smalltitle"> Japanese </p>
                            <p class="txt indent"> Conversational, not yet fluent. Aspirations to reach JPLT N1 level. </p>
                            <span> 
                            </li>
                            <li class="rili">
                            <span>
                            <p class="smalltitle"> 
                            <img src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_developer_mode_48px-512.png" width="30px" height="auto" alt="Developer"> 
                            <span class="indent"> DEVELOPMENT </span> </p>
                            <p class="smalltitle"> Front end </p>
                            <p class="txt indent"> JavaScript, TypeScript, Vue </p>
                            <p class="txt indent"> HTML </p>
                            <p class="txt indent"> CSS </p>
                            <p class="smalltitle"> Back end</p>
                            <p class="txt indent"> SQLServer, MySQL </p>
                            <p class="txt indent"> NodeJS </p>
                            <p class="smalltitle"> Other languages</p>
                            <p class="txt indent"> Python </p>
                            <p class="txt indent"> R </p>
                            <p class="txt indent"> Matlab </p>
                            <p class="txt indent"> Java </p
                            <span> 
                        </li>
                        </ul>

                        <ul style="grid-area:le">
                        <li class="leli">
                        <span>
                        <p class="smalltitle"> 
                        <img src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_my_library_music_48px-512.png" width="30px" height="auto" alt="music production"> 
                        <span class="indent"> MUSIC PRODUCTION </span> </p>
                        <p class="smalltitle"> Software </p>
                        <p class="txt indent"> Ableton Live, Native Instruments Traktor, UAD Console, Melodyne </p>
                        <p class="smalltitle"> Hardware </p>
                        <p class="txt indent"> UAD Hardware (Apollo Twin), Tascam racks, mixer knowledge </p>
                        <span> 
                        </li>
                        <li class="leli">
                        <span>
                        <p class="smalltitle"> 
                        <img src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_nature_people_48px-512.png" width="30px" height="auto" alt="Developer"> 
                        <span class="indent"> VOLUNTEERING </span> </p>
                        <p class="smalltitle"> Engineers Without Borders Sweden </p>
                        <p class="txt indent"> Active in the Uppsala managing group. Head of The Reflective Engineer, managing a team of around 8 people. </p>
                        <p class="smalltitle"> UTN - Faculty Student Union </p>
                        <p class="txt indent"> Fadderkå. Responsible for the buddy-program for one of the engineering programs at Uppsala University. </p>
                        <p class="txt indent"> Managing around 60 volunteers and 90 new students. In an event reaching more than 1200 people. </p>
                        <span> 
                        </li>
                        </ul>
                        </div>
                        `,
            'eduListUl': `<li>  
                            <span>
                            <p class="smalltitle"> 
                            <img src="../images/uulogo.png" width="30px" height="auto" alt="UU logo"> 
                            <span class="indent"> M.Sc. Sociotechnical Engineering - Uppsala University </span> </p>
                            <p class="txt"> A master of science in (civil) engineering at Uppsala University. The Sociotechnical Systems Engineering 
                            program is quite unique, as it is one of the few programs that combines IT and tech with social studies. My studies are 
                            focused a lot on the cross-section between humans and tech. </p>
                            <p class="txt"> August 2018 - now </p>
                            <span> 
                        </li>

                        <li>
                            <span> 
                            <p class="smalltitle"> 
                            <img src="../images/kglogo.jpeg" width="30px" height="auto" alt="kattegattgymnasiet logo">
                            <span class="indent"> Natural Sciences - Kattegattgymnasiet</span> </p>
                            <p class="txt"> Before starting at Uppsala University I attended Kattegattgymnasiet (Kattegatt High School) in my hometown of Halmstad and studied
                            natural sciences. I was particularly fond of mathematics and physics.</p>
                            <p class="txt"> August 2013 - June 2017 </p>
                            </span> 
                        </li>

                        <li>
                        <span> 
                        <p class="smalltitle"> 
                        <img src="../images/rologo.png" width="30px" height="auto" alt="皇學館高等学校">
                        <span class="indent"> Rotary Youth Exchange - 皇學館高等学校</span> </p>
                        <p class="txt"> In the midst of my high school career I decided to go on an exchange to Japan trough Rotary. I attended
                        皇學館高等学校 (Kogakkan High School) in Ise city, Mie prefecture for one year between my second and third year of high school.</p>
                        <p class="txt"> August 2015 - June 2016 </p>
                        </span> 
                        </li>
                        `,
            'contactListUl': `
                    <li>
                    <img src="../images/linkedin.png" width="30px" height="auto" alt="lin">
                    <a href="https://www.linkedin.com/in/niklas-norinder-90805b16a/" > LinkedIn </a>
                    </li>

                    <li>
                    <img src="../images/ig.png" width="30px" height="auto" alt="ig">
                    <a href="https://www.instagram.com/clavibeats" > Instagram </a>
                    </li>

                    <li>
                    <img src="../images/github.png" width="30px" height="auto" alt="mail">
                    <a href="https://github.com/ChefKeff" > GitHub </a>
                    </li>

                    <li>
                    <img src="../images/cv.png" width="30px" height="auto" alt="mail">
                    <a href="../CV.pdf" download="CV_Niklas_Norinder">Resumé</a>
                    </li>
                    `,
            'spanTxtQkInf': `<h2 class = "title"> NIKLAS NORINDER </h2>
                            <p class = "smalltitle">Age</p>
                            <p class = "txt indent">   24</p>
                            <p class = "smalltitle">Location</p>
                            <p class = "txt indent">   Uppsala, Sweden</p>
                            <p class = "smalltitle">Current occupation</p>
                            <p class = "txt indent">   M.Sc student, Engineering, Uppsala University</p>`,
            'spanTxtAbout': `<p class = "smalltitle">Hello!</p>
                            <p class = "txt">My name is Niklas Norinder. I am currently studying my fourth year in
                            Sociotechnical Systems Engineering at Uppsala University. Outside of my studies I like to 
                            produce and create music, program, run and hang out with my friends.</p>
                            <p class = "txt"> Originally born and raised on the Swedish west coast, in both 
                            Gothenburg and Halmstad, I decided to spend a year abroad in Japan in high school to broaden my
                            horizons and try something new. The exchange had a huge impact on me, furthering my communicative skills.</p>
                            <p class = "txt">In 2018 I moved to Uppsala to study engineering. I am currently slated for another year abroad
                            in Japan in the spring of 2022, this time I will study at the University of Tokyo (if covid allows it, that is).</p>`,
            'spanTxtSpotify': `<h2 class = "smalltitle"> SPOTIFY </h2>
                                <p class = "txt"> This is a selection of songs that I have worked on which have 
                                been published to Spotify. </p>
                                <p class = "txt"> I have either performed, produced or mixed the songs. I am using Ableton Live
                                as my main DAW, and the Waves-bundle, alongside other VSTs for mixing and producing. 
                                I am also well farmiliar with Analog Lab and similar VSTis used in audio production.</p>`,
            'spanTxtBeats': `<h2 class = "smalltitle"> BEATS </h2>
                            <p class = "txt"> Here you can find a selection of my beats without vocals. 
                            The beats displayed in the widget on the left are produced entirely by me, using 
                            the DAW Ableton Live. </p>
                            <p class = "txt">The beats are <strong>not</strong> mixed or mastered to be published to streaming services as they are
                            displayed here. To hear finished productions, please refer to the Spotify playlist referenced
                            in the widget above.</p>`,
            'aboutPPBtnTxt': `About this site`,
            'gitHubTxt': `Hit the button to learn more about this personal portfolio by visiting the GitHub repo.`,
            'nameLbl': 'Your name',
            'mailLbl': 'Your Email',
            'subjLbl': 'subject',
            'enqLbl': 'enquiry'

        }
    }
    if(lang === 'jp') {
        langJson = {
            'aboutTitle': '<h1 class ="title" data-content="僕の事につて"> 僕の事につて</h1>',
            'workTitle': '<h1 class ="title" data-content="仕事">仕事</h1>',
            'eduTitle': '<h1 class ="title" data-content="教育">教育</h1>',
            'otherTitle': '<h1 class ="title" data-content="他の長所">他の長所</h1>',
            'mediaTitle': '<h1 class ="title" data-content="メディア">メディア</h1>',
            'contactTitle': '<h1 class ="title" data-content="コンタクト">コンタクト</h1>',
            'workListUl': `<li>  
                                <span>
                                <p class="smalltitle"> 
                                <img src="../images/vklogo.png" width="30px" height="auto" alt="VK logo"> 
                                <span class="indent"> IT インターン - VASAKRONAN </span> </p>
                                <p class="txt dbindent"> 建物内の温度、CO2、TVOC、湿気などを簡単にわかるためのホームページを開発する。IoTのセンサーAPIと建物のBIMモデルAPIを使って作っていた。 </p>
                                <p class="txt dbindent"> 2021年3月 - 2021年8月 <span> 
                                <p class="it dbindent"> 元々このプロジェクトは大学のバチェラー論文であっったが、論文を書く後はプロジェクトを夏インターンシップで進む事になってきた。 </p> 
                                <p class="it dbindent"> もしも気になってもらった、バチェラー論文は <a href="https://drive.google.com/file/d/1U7AgXnTBBT3LWj9F_nKa_zOw6UHOX3Gk/view?usp=sharing" class="it"> こちら</a> に読むことができる。それとも<a href="https://github.com/NiklasVasa/Titti-project" class="it"> GitHub</a>を見てみてください。</span></p></span> 
                            </li>

                            <li>
                                <span> 
                                <p class="smalltitle"> 
                                <img src="../images/avlogo.jpeg" width="30px" height="auto" alt="Aviator logo">
                                <span class="indent">荷物捜査 - AVIATOR</span> </p>
                                <p class="txt dbindent"> Arlanda空港で荷物を操作する。 </p>
                                <p class="txt dbindent"> 2019年5月 - 2019年8月 </p>
                                </span> 
                            </li>

                            <li>
                                <span> 
                                <p class="smalltitle"> 
                                <img src="../images/hstadlogo.png" width="30px" height="auto" alt="Halmstad logo">
                                <span class="indent">代用教員 - HALMSTAD KOMMUN</span> </p>
                                <p class="txt dbindent"> 小学校の１年生〜５年生の生徒に。 </p>
                                <p class="txt dbindent"> 2017年11月 - 2018年3月 </p>
                                </span> 
                            </li>

                            <li>
                                <span> 
                                <p class="smalltitle"> 
                                <img src="../images/hnlogo.png" width="30px" height="auto" alt="Höganäs logo">
                                <span class="indent"> ストレージ - HÖGANÄS</span> </p>
                                <p class="txt dbindent"> Höganäs Halmstadbrukenで。 </p>
                                <p class="txt dbindent"> 2017年6月 - 2017年8月 </p>
                                </span> 
                            </li>

                            <li>
                                <span>
                                <p class="smalltitle">
                                <img src="../images/prodjob.jpg" width="30px" height="auto" alt="Prod logo">
                                <span class="indent"> フリーランスミュージックプロデューサー</span></p>
                                <p class="txt dbindent"> 一人で音楽プロデューサーの会社をやっている。SpotifyやApple Musicに６百万以上のストリームズを集まった。 </p>
                                <p class="it dbindent"> 気になった場合、このモームページの「メディア」タッブを見てみてください。 </p>
                                </span>
                            </li>`,
                            'otherListDiv': `<div  id="innerOtherDiv">
                            <ul style="grid-area:ri">
                            <li class="rili">  
                            <span>
                            <p class="smalltitle"> 
                            <img src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_translate_48px-1024.png" width="30px" height="auto" alt="Language"> 
                            <span class="indent"> 言葉 </span> </p>
                            <p class="smalltitle"> スウェーデン語 </p>
                            <p class="txt indent"> ネイティブ </p>
                            <p class="smalltitle"> 英語 </p>
                            <p class="txt indent"> ペラペラ。 2021年１月に　TOEFL　112/120 </p>
                            <p class="smalltitle"> 日本語 </p>
                            <p class="txt indent"> マーマー。 まだまだ勉強中。JLPT N1まで行きたいと思っている。 </p>
                            <span> 
                            </li>
                            <li class="rili">
                            <span>
                            <p class="smalltitle"> 
                            <img src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_developer_mode_48px-512.png" width="30px" height="auto" alt="Developer"> 
                            <span class="indent"> プログラミング </span> </p>
                            <p class="smalltitle"> Front end </p>
                            <p class="txt indent"> JavaScript, TypeScript, Vue </p>
                            <p class="txt indent"> HTML </p>
                            <p class="txt indent"> CSS </p>
                            <p class="smalltitle"> Back end</p>
                            <p class="txt indent"> SQLServer, MySQL </p>
                            <p class="txt indent"> NodeJS </p>
                            <p class="smalltitle"> その他</p>
                            <p class="txt indent"> Python </p>
                            <p class="txt indent"> R </p>
                            <p class="txt indent"> Matlab </p>
                            <p class="txt indent"> Java </p
                            <span> 
                        </li>
                        </ul>

                        <ul style="grid-area:le">
                        <li class="leli">
                        <span>
                        <p class="smalltitle"> 
                        <img src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_my_library_music_48px-512.png" width="30px" height="auto" alt="music production"> 
                        <span class="indent"> ミュージックプロダクション </span> </p>
                        <p class="smalltitle"> ソフト </p>
                        <p class="txt indent"> Ableton Live, Native Instruments Traktor, UAD Console, Waves </p>
                        <p class="smalltitle"> ハードウェア </p>
                        <p class="txt indent"> UAD Hardware (Apollo Twin), Tascamのラックス </p>
                        <span> 
                        </li>
                        <li class="leli">
                        <span>
                        <p class="smalltitle"> 
                        <img src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_nature_people_48px-512.png" width="30px" height="auto" alt="Developer"> 
                        <span class="indent">  ボランティア  </span> </p>
                        <p class="smalltitle"> Engineers Without Borders Sweden </p>
                        <p class="smalltitle"> UTN </p>
                        <span> 
                        </li>
                        </ul>
                        </div>
                        `,
            'eduListUl': `<li>  
                            <span>
                            <p class="smalltitle"> 
                            <img src="../images/uulogo.png" width="30px" height="auto" alt="UU logo"> 
                            <span class="indent">  エンジニア  System i Teknik och Samhället - Uppsala universitet </span> </p>
                            <p class="txt"> 2018年８月〜今 </p>
                            <span> 
                        </li>

                        <li>
                            <span> 
                            <p class="smalltitle"> 
                            <img src="../images/kglogo.jpeg" width="30px" height="auto" alt="kattegattgymnasiet logo">
                            <span class="indent"> 高校 - Kattegattgymnasiet</span> </p>
                            <p class="txt"> 2013年８月- 2017年6月 </p>
                            </span> 
                        </li>

                        <li>
                        <span> 
                        <p class="smalltitle"> 
                        <img src="../images/rologo.png" width="30px" height="auto" alt="皇學館高等学校">
                        <span class="indent"> ロータリー留学 - 皇學館高等学校</span> </p>
                        <p class="txt"> 201５年８月- 201６年6月 </p>
                        </span> 
                        </li>
                        `,
            'contactListUl': `
                    <li>
                    <img src="../images/linkedin.png" width="30px" height="auto" alt="lin">
                    <a href="https://www.linkedin.com/in/niklas-norinder-90805b16a/" > LinkedIn </a>
                    </li>

                    <li>
                    <img src="../images/ig.png" width="30px" height="auto" alt="ig">
                    <a href="https://www.instagram.com/clavibeats" > Instagram </a>
                    </li>

                    <li>
                    <img src="../images/github.png" width="30px" height="auto" alt="mail">
                    <a href="https://github.com/ChefKeff" > GitHub </a>
                    </li>

                    <li>
                    <img src="../images/cv.png" width="30px" height="auto" alt="mail">
                    <a href="../CV.pdf" download="CV_Niklas_Norinder">Resumé</a>
                    </li>
                    `,
            'spanTxtQkInf': `<h2 class = "title"> NIKLAS NORINDER　<br> ニクラス・ノリンデル </h2>
                            <p class = "smalltitle">歳</p>
                            <p class = "txt indent">   24</p>
                            <p class = "smalltitle">場所</p>
                            <p class = "txt indent">   スウェーデン、ウプサラ</p>
                            <p class = "smalltitle">大学生</p>
                            <p class = "txt indent">   System i Teknik och Samhället, ウプサラ大学</p>`,
            'spanTxtAbout': `<p class = "smalltitle">こんにちは。</p>
                            <p class = "txt">ノリンデル・ニクラスと申します。スウェーデンのヨーテボリ生まれ、２４歳のウプサラ大学生です。趣味は音楽を作ったり、ジョギングしたり、友達と会ったり、プログラミングしたりすることです。
                            ２０１５年−２０１６年の間に伊勢市に留学したことがあります。その留学の間にいろいろな経験ができて、日本語もなんとなく喋られるようになってすごく良かったと思います。
                            ２０２２年の秋にまた日本に東大で留学の予定があります。</p>`,
            'spanTxtSpotify': `<h2 class = "smalltitle"> SPOTIFY </h2>
                                <h2 class = "txt"> 僕の作った曲です。</h2>`,
            'spanTxtBeats': `<h2 class = "smalltitle"> BEATS </h2>
                            <h2 class = "txt"> 僕の作ったビーツ</h2>`,
            'aboutPPBtnTxt': `このページについて`,
            'gitHubTxt': `クリックするとこのページのGitHubへ`,
            'nameLbl': '名前',
            'mailLbl': 'メール',
            'subjLbl': '内容',
            'enqLbl': 'テキスト'
        }
    }
    return(langJson)
}
