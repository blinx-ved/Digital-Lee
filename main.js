   
    import { h, Component, render } from 'https://esm.sh/preact';
    import htm from 'https://esm.sh/htm';
    const html = htm.bind(h);
    window.onbeforeunload = function () {
        window.scrollTo(0,0);
    };
    class App extends Component {
        componentDidMount(){
            new Typed('#landingText', {
                strings: ['Would you save me?'],
                typeSpeed: 90,  
                backSpeed: 50,
                backDelay: 1500,
                startDelay: 500,
                showCursor: false,
            });
            anime({targets: `.navt`, translateY: 100, duration: 2000, delay: 3000, easing: 'easeOutBounce'})  

        }
        render() {

            var prevSection = -1
            window.onscroll = function(){
                var section = window.scrollY/innerHeight
                if(Math.floor(prevSection+0.2)<Math.floor(section+0.2)){
                    //make section specific animations
                    if(Math.round(section)==1){
                        console.log("ran")
                        anime({targets: `#factIFL`, translateX: "100vw", duration:4000, easing: 'spring(1, 50, 10, 0)'})  
                        anime({targets: `#factIFR`, translateX: "-100vw", duration: 4000, easing: 'spring(1, 50, 10, 0)'})  
                    }else if(Math.round(section)==2){
                        console.log("hwuifiwfeuiferh")
                        anime({targets: `#one`, translateX: "100vw", duration: 4000})  
                        anime({targets: `#two`, translateX: "100vw", duration: 4000})  
                        anime({targets: `#three`, translateX: "-100vw", duration: 3500})  
                        anime({targets: `#four`, translateX: "-100vw", duration: 3500})  
                    }else if(Math.round(section)==3){
                        console.log("hwuifiwfeuiferh")
                        anime({targets: `#appone`, translateX: "100vw", duration: 4000})  
                        anime({targets: `#apptwo`, translateX: "-100vw", duration: 4000})  
                    }
                }
                prevSection = section
            }

            var thing= ["Landing", "Facts","Gallery","Download the app"]
            var facts= ["It is estimated that there is over 150 peices of litter for each person in Fort Myers ", 
            "Every year the city of Fort Myers removes 51 cubic yards of trash from our waterways."]
            return (html`<body class=" text-white ">
                <nav id="nav" style="transform: translate(0, -100px);" class="navt fixed top-0 left-0 w-full grid grid-rows-1 grid-flow-col border-y-[3px] border-white backdrop-blur-sm bg-black/50   z-50">
                    ${thing.map(d=>{return(html`<a href=${"#" + d} class="navBorder py-2 w-full text-center sm:font-bold  border-r-[3px] border-white hover:bg-white/25 hover:ease-in-out transition-all">${d}</a>`)})}
                </nav>
                <main class="overflow-hidden font-serif ">
                    <section id="Landing" class=" h-[100vh] w-full border-b-4 border-white bg-[url('manatee.jpg')] bg-cover bg-center backdrop-blur-sm relative">
                        <div class="backdrop-brightness-[0.7]  flex pt-[5vh] w-full h-full px-2 bg-gradient-to-t from-black to-transparent">
                            <h1 id="landingText" class="w-full sm:text-[20vh] text-[7vh] leading-none text-center font-bold absolute inset-y-[10%]"></h1>
                        </div>
                    </section>
                    <section id="Facts" class=" h-[100vh] w-full border-b-4 border-black bg-[url('manatee1.jpg')] bg-cover bg-center">
                        <div class="backdrop-brightness-[0.6] pt-[5vh] w-full h-full relative sm:bg-gradient-to-l bg-gradient-to-t from-black to-transparent">
                            <h1 style="transform: translate(-100vw, 0);" id="factIFL" class="w-full h-fit  pt-8   sm:text-[10vw] text-[8vh] sm:text-left text-center font-serif font-bold absolute top-0 left-0">Did you know...</h1>
                            <div style="transform: translate(100vw, 0);" id="factIFR" class="grid gap-4 grid-cols-1 right-0 bottom-0 absolute sm:w-fit w-full inset-y-2/4">
                                ${facts.map((d)=>{return(html`<h2 class="text-[3vh] text-center sm:float-right sm:px-2 px-4 sm:w-[40vw] border-y-2 h-fit border-white">${d}</h2>`)})}
                            </div>
                        </div>
                    </section>
                    <section id="Gallery" class="grid grid-cols-2 overflow bg-slate-800 h-[100vh] w-full border-b-4 border-black font-sans">
                        <div style="transform: translate(-100vw, 0);" id="one" class="border-l-4 border-t-4 border-white bg-[url('1.jpg')] bg-cover bg-center relative"><p class="w-full p-2 absolute bottom-0 bg-black/50">Fort Myers Beach</p></div>
                        <div style="transform: translate(-100vw, 0);" id="two" class="border-l-4 border-t-4 border-white bg-[url('2.jpg')] bg-cover bg-center relative"><p class="w-full p-2 absolute bottom-0 bg-black/50">Caloosahatchee Bridge</p></div>
                        <div style="transform: translate(100vw, 0);" id="three" class="border-l-4 border-t-4 border-white bg-[url('3.jpg')] bg-cover bg-center relative"><p class="w-full p-2 absolute bottom-0 bg-black/50">Caloosahatchee Bridge</p></div>
                        <div style="transform: translate(100vw, 0);" id="four" class="border-l-4 border-t-4 border-white bg-[url('4.jpg')] bg-cover bg-center relative"><p class="w-full p-2 absolute bottom-0 bg-black/50">Fort Myers Beach</p></div>
                    </section>
                    <section id="Download the app" class=" h-[100vh] w-full border-b-4 border-black bg-[url('manatee.jpg')] bg-cover bg-center">
                        <div class="backdrop-brightness-[0.6] pt-12 w-full h-full sm:bg-gradient-to-l bg-gradient-to-t from-black to-transparent relative">
                            <h1 style="transform: translate(-100vw, 0);"  id="appone" class="w-full h-fit  pt-8   sm:text-[10vw] text-[8vh] sm:text-left text-center font-serif font-bold absolute top-0 left-0">You can help...</h1>
                            <div style="transform: translate(100vw, 0);"  id="apptwo" class="grid gap-4 justify-items-center grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] right-0 bottom-0 absolute w-full inset-y-2/4">
                                <p id="" class="h-min justify-self-center sm:text-[3vh] text-[5vw] text-center sm:px-2 px-4 sm:w-[40vw] border-y-2 h-fit border-white">By downloading our app you can report litter so we can come and pick it up And with your help, together we can keep our beautiful Fort Myers ecosystem Clean, Pristene, and Healthy. </p>
                                <img src="qrcode.png" class="rounded w-[35vh] hidden sm:block row-span-2" /> 
                                <div class="grid grid-cols-1 justify-items-center align-middle">
                                    <a href="https://fortmyers.com" class="h-fit text-center backdrop-blur-sm bg-black/50 p-2 align-middle rounded ring-white hover:ring-white/20 ring text-white text-xl transition">Download on Android</a>
                                    <a href="https://fortmyers.com" class="h-fit text-center backdrop-blur-sm bg-black/50 p-2 align-middle rounded ring-white hover:ring-white/20 ring text-white text-xl transition">Download on IOS</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer class="h-[10vh] bg-slate-800">
                    <p class="text-xl w-full text-center pt-6">© Tyler Tocket 2023</p>
                </footer>
            </body>`);
        }
    }
    render(html`<${App}/>`, document.body);