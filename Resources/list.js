
exports.showInfo = function(){	
	// the main scroll view where all the information will be included
	
	var windowInfo = Ti.UI.createWindow({
		//showVerticalScrowIndicator : true,
		//backgroundImage: "Halftone-Grunge-Textures.jpg",
		layout : "vertical",
		fullscreen: true,
		
	});
	
	
	
	var scrollView = Ti.UI.createScrollView({
		  contentWidth: 'auto',
		  contentHeight: 'auto',
		  showVerticalScrollIndicator: true,
		  showHorizontalScrollIndicator: true,
		  // height: '80%',
		  // width: '80%',
		  layout: "vertical",
		//  backgroundColor: "blue"
	//	fullscreen: true
	});

	
	var dbController = require('dbController'); // create instance for database controller
	var data = dbController.findAll();
	if(typeof data['high'] !== 'undefined'){       // checking if data is retrieved from database
		//date
		var currentDate = new Date();
		
		var lblYear = Ti.UI.createLabel({
			color: 'white',
			left: 10,
			fontWeight: 'bold',
			text: currentDate.getFullYear() + " " + "/" + " " + currentDate.getMonth() + " " + "/" + " " + currentDate.getDate()  ,
			top: 10
		});
		
			//view1 where is all the names of the items
		var topView = Ti.UI.createView({
			width: "100%",
			layout : "horizontal",
			height: "20%",
		//	backgroundColor: "yellow"	
		});
		
		
		//bitcoin logo coin
		
		var logoCoin = Ti.UI.createLabel({
			backgroundImage: "bitcoin-logo.png",
			top: 50,
			width: 120,
			height: 30,
			left: -90
			
		});
		
		
		var megaView = Ti.UI.createView({   //includes view1 and view2
			width: "100%",
			layout : "horizontal",
			height: "50%",
			//left: 10,
			top: 10,
			backgroundColor: "#2E2E2E"
				
		});
		
		//view1 where is all the names of the items
		var view1 = Ti.UI.createView({
			width: "50%",
			layout : "vertical",
			left: 10
		//	backgroundColor: "white"
			//top: 20
				
		});
		
		//view2 where is all the current values of the items
		var view2 = Ti.UI.createView({
			width: "30%",
			layout : "vertical",
			left:0
		//	backgroundColor: "yellow"	
				//top: 20
		});
		
		var marketView = Ti.UI.createView({
			width: "100%",
			layout : "horizontal",
			backgroundColor: "black",
			top:15
		});
		
		//========================   ITEMS   ==================================
		//high price label
		var lblHighPrice = Ti.UI.createLabel({
			color: 'white',
			//backgroundColor: "yellow",
			font:{fontFamily:'Trebuchet MS',fontSize:18,fontWeight:'bold'},
			 // backgroundGradient: {
        // type: 'linear',
        // startPoint: { x: '0%', y: '50%' },
        // endPoint: { x: '100%', y: '50%' },
        // colors: [ { color: 'red', offset: 0.0}, { color: 'pink', offset: 0.50 }, { color: 'red', offset: 1.0 } ],
    // },
			left: 20,
			text: 'High Price: ',
			top: 20
		});
		// high price value
		var highPrice = Ti.UI.createLabel({
			color: 'white',
			left: 10,
			text: data['high'],
			top: 20
		});
		
		//low price label
		var lblLowPrice = Ti.UI.createLabel({
			color: 'white',
			left: 20,
			text: 'Low Price: ',
			font:{fontFamily:'Trebuchet MS',fontSize:18,fontWeight:'bold'},
			top: 20
		});
		
		//low price value
		var lowPrice = Ti.UI.createLabel({
			color: 'white',
			left: 10,
			text: data['low'],
			top: 22
		});
		
		//average label
		var lblAvg = Ti.UI.createLabel({
			color: 'white',
			left: 20,
			text: 'Avergage: ',
			font:{fontFamily:'Trebuchet MS',fontSize:18,fontWeight:'bold'},
			top: 20
		});
		
		//average value
		var avg = Ti.UI.createLabel({
			color: 'white',
			left: 10,
			text: data['avg'],
			top: 22
		});
		
		var title = Ti.UI.createLabel({
			color: 'white',
			left: 20,
			text: "BTC-E.COM    BTC-USD prices" ,
			top: 20
		});
		//============== TEXT OF MARKET TITLE  ============
		var marketTitle = Ti.UI.createLabel({
			color: 'white',
			//left: 20,
			text: "BTC-E.com & Bot",
			font : {fontFamily:"Helvetica",fontsize:10,fontWeight: "bold"},
			top: 20
		});
		//==============image of bot markets==========
		var marketImage = Ti.UI.createLabel({
			backgroundImage: "SF_Market.png",
			top: 10,
			width: 120,
			height: 120
		});
		//===============sound for image market============
		
		var sound = Titanium.Media.createSound({
			url: 'gold_coins_pirate_treasure_drop_onto_hard_surface.mp3',
			preload: true
		});
		
		//--=========  event listener for the sound of the market in pirate gold coins .mp3
		marketImage.addEventListener('click', function() {
			sound.play();
		});
		
		// BTC-USD button
		var buttonBtc = Ti.UI.createButton({    //Button btc-usd
			backgroundImage: 'q.png',
			left: 5,
			title: "BTC-USD Bot" ,
			top: 5,
			height: 30,
			font : {fontFamily:"Helvetica",fontsize:8,fontWeight: "bold"},
			color: 'black',
			width: 110
		});
		
		//======Add event Listener for button to website
		buttonBtc.addEventListener('click', function(){

			var web = require('website');
			web.btcFunct();
			
		});

		
		//============BTC-E BUTTON WEBSITE=====================
		var buttonBtce = Ti.UI.createButton({
			backgroundImage: 'w.png',
			left: 10,
			title: "BTC-E.com" ,
			top: 5,
			height: 30,
			font : {fontFamily:"Helvetica",fontsize:8,fontWeight: "bold"},
			color: 'black',
			width: 120,
		});
		
		//======Add event Listener for button btc website
		buttonBtce.addEventListener('click', function(){
			var na = require('BTC-E-Website');
			na.btceFunct();
		
		});
		
	// add to calendar
		var addText = Ti.UI.createLabel({
			color: 'white',
			left: 20,
			text: "Check Calendar ",
			font : {fontFamily:"Helvetica",fontsize:10,fontWeight: "bold"},
			top: 20
		});
		
		//button save to calendar
		var calendar= Ti.UI.createButton({
			backgroundImage: 'Calendar-icon.png',
			title: "",
			font : {fontFamily:"Helvetica",fontsize:100,fontWeight: "bold"},
			color: 'black',
			top: 5,
			width: 50,
			height:50,
			left: 50
			//borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		});
		
		//======Add event Listener CALENDAR
		calendar.addEventListener('click', function(){  
			var na = require('CALENDAR');
			na.calendarFunct();
		
		});
	
		topView.add(lblYear);
		topView.add(logoCoin);
			
		view1.add(lblHighPrice);
		view2.add(highPrice);
		view1.add(lblLowPrice);
		view2.add(lowPrice);
		view1.add(lblAvg);
		view2.add(avg);
		view1.add(title);
		marketView.add(buttonBtce);

		marketView.add(buttonBtc);
	

		view2.add(addText);
		view2.add(calendar);
		
		windowInfo.add(scrollView);
		
		scrollView.add(topView);
		scrollView.add(megaView);
		scrollView.add(marketTitle);
		scrollView.add(marketImage);
		scrollView.add(marketView);
		megaView.add(view1);
		megaView.add(view2);
	
	} else {
		// when there is no information to show(for connectivity error or api result null)
		var lblInfo = Ti.UI.createLabel({
			color: 'white',
			text: 'No information found'	
		});
		
		windowInfo.add(lblInfo);
	};
	exports.windowInfo = windowInfo;
	windowInfo.open({modal:true,
  modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL,
  modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN
  		
 	});
};