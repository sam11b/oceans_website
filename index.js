$(document).ready(function() {
	var imgOn = false;
	$("#por").click(function() {
      document.getElementById('animalImg').src = 'img/porifera.png';
      $('#fact1').text("Adult sponges do not move around. This is called being sessile.");
      $('#fact2').text("Young porifera can move about 3mm per day.");
      $('#fact3').text("Porifera are carniverous. A common food they eat are crustaceans.");
      $('.animalFact').show().css("display","flex");
		imgOn = true;
	})
	$("#cni").click(function() {
    	document.getElementById('animalImg').src = 'img/cnidaria.gif';
      $('#fact1').text("Most, but not all, corals live in colonies.");
      $('#fact2').text("Sea anenomes conserve water by pulling in their tentacles.");
      $('#fact3').text("Cnidarians are usually symmetrical.");
      $('.animalFact').show().css("display","flex");
		imgOn = true;
	})
	$("#mol").click(function() {
    	document.getElementById('animalImg').src = 'img/mollusca.png';
       $('#fact1').text("A few mollusks, like snails and clams, can be found on land.");
      $('#fact2').text("Octopuses can give a nasty bite with their beak when threatened.");
      $('#fact3').text("A giant squid can grow up to 55 ft long.");
      $('.animalFact').show().css("display","flex");
		imgOn = true;
	})
	$("#ann").click(function() {
    	document.getElementById('animalImg').src = 'img/annelida.gif';
      $('#fact1').text("Some, but not all, annelids can survive after being frozen.");
      $('#fact2').text("There are between 9000-10000 annelid species known today.");
      $('#fact3').text("Earthworms are annelids.");
      $('.animalFact').show().css("display","flex");
		imgOn = true;
	})
	$("#art").click(function() {
    	document.getElementById('animalImg').src = 'img/arthropod.png';
      $('#fact1').text("Arthropods have segmented bodies and an exoskeleton.");
      $('#fact2').text("Arthropods go through a period of metamorphasis in their lifetimes.");
      $('#fact3').text("Arthropods evolved more than 500 million years ago and have an open circulatory system.");
      $('.animalFact').show().css("display","flex");
		imgOn = true;
	})
	$("#ech").click(function() {
    	document.getElementById('animalImg').src = 'img/echinoderm.gif';
      $('#fact1').text("Echinoderms have no blood. Instead they have a water vascular system.");
      $('#fact2').text("Some echinoderms are carniverous, like starfish.");
      $('#fact3').text("Sea cucumbers are isotonic, therefore the density of salt inside them is the same as that of the salt water. Placing one in fresh water will cause it to swell up and explode.");
      $('.animalFact').show().css("display","flex");
		imgOn = true;
	})
	$("#cho").click(function() {
    document.getElementById('animalImg').src = 'img/chordata.gif';
      $('#fact1').text("All chordata have a tubular nerve chord called the notochord.");
      $('#fact2').text("Their gill slits are in their throats or pharynxes.");
      $('#fact3').text("All chordata have a tail containing no integral organs.");
    $('.animalFact').show().css("display","flex");
		imgOn = true;
	})
});