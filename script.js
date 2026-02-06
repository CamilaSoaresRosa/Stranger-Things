gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);

ScrollSmoother.create({
	smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
	effects: true, // looks for data-speed and data-lag attributes on elements
	// smoothTouch: 0.1  much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});

gsap.from(".hero", {
    opacity: 0
})

gsap.from("picture", {
    y: -70, 
    duration: 1
})

gsap.fromTo(".pessoinhas",{ //solução pelo chat gpt pra arrumar a imagem que ficava fora de alinhamentop
    y: 70 },
  { y: 0, duration: 1 }
)

gsap.from(".cidades" {
    x:50,
})