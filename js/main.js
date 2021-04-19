window.onload = function(){
	var myFullpage = new fullpage('#fullpage', {
		//Навигация
		menu: '#menu',
		lockAnchors: false,
		anchors:['firstPage', 'secondPage', 'thirdPage','fourthPage'],
		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: ['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide'],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',
	
		//Скроллинг
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: true,
		interlockedSlides: false,
		dragAndMove: true,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		bigSectionsDestination: null,
	
		//Доступ
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,
		licenseKey:null,
		//Дизайн
		controlArrows: true,
		verticalCentered: true,
		//sectionsColor : ['#ccc', '#fff'],
		//paddingTop: '3em',
		//paddingBottom: '10px',
		//fixedElements: '#header, .footer',
		//responsiveWidth: 0,
		//responsiveHeight: 0,
		//responsiveSlides: false,
		//parallax: false,
		//parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
		//dropEffect: false,
		//dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999},
		//cards: true,
		//cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},
	
		//Настроить селекторы
		sectionSelector: '.section',
		slideSelector: '.slide',
	
		lazyLoading: true,
	
		//события
		onLeave: function(origin, destination, direction){},
		afterLoad: function(origin, destination, direction){},
		afterRender: function(){},
		afterResize: function(width, height){},
		afterReBuild: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(section, origin, destination, direction){},
		onSlideLeave: function(section, origin, destination, direction){}
	});
	
	let menuBtnChanges = function () {
		let menuBtn = document.querySelector(".menuBtn");
		menuBtn.addEventListener("click", function (e) {
		  e.preventDefault();
		  menuBtn.classList.toggle("menuBtn-act");
		});
	  };

	  menuBtnChanges()
}