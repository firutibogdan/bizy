var fs = require('fs');
var PDFDocument = require('pdfkit');

var doc = new PDFDocument({bufferPages: true});

doc.pipe(fs.createWriteStream('result.pdf'));

doc.addPage();
doc.addPage();
doc.addPage();
doc.addPage();
doc.addPage();
doc.addPage();
doc.addPage();
doc.addPage();
doc.addPage();
doc.addPage();

//login page
doc.switchToPage(0);
doc
	// background image
	.image('img/bgnd.jpg', 50, 70, {width: 300, height:570})

	// header
	.lineWidth(70).lineCap('round').moveTo(85,70).lineTo(315,70).stroke("#000")
	.lineWidth(60).lineCap('butt').moveTo(50,95).lineTo(350,95).stroke("#000")

	// footer
	.lineWidth(50).lineCap('round').moveTo(75,660).lineTo(325,660).stroke("#338099")
	.lineWidth(30).lineCap('butt').moveTo(50,650).lineTo(350,650).stroke("#338099")
	.fontSize(20).fillColor("#205060").text("2020", 175, 645)

	// login
	.lineWidth(53).lineCap('round').moveTo(120,375).lineTo(280,375).stroke("#006080")
	.lineWidth(53).lineCap('round').moveTo(120,450).lineTo(280,450).stroke("#006080")
	.lineWidth(40).lineCap('round').moveTo(155,500).lineTo(245,500).stroke("#006080")
	.circle(200, 240, 80).lineWidth(2).fillOpacity(0.2).fillAndStroke("red", "#000")
	.fillOpacity(1)
	.fontSize(20).fillColor("#ffffff").text("Email", 100, 370)
	.fontSize(20).fillColor("#ffffff").text("Password", 100, 445)
	.fontSize(15).fillColor("#00ff00").text("Discover Now", 155, 496)
	.image('img/bizy.png', 120, 160, {width: 160})
	.image('img/email.png', 65, 363, {width: 25})
	.image('img/lock.png', 65, 435, {width: 25})

	.lineWidth(40).lineCap('round').moveTo(80,600).lineTo(175,600).stroke("#006080")
	.lineWidth(40).lineCap('round').moveTo(230,600).lineTo(320,600).stroke("#006080")
	.fontSize(15).fillColor("#ffffff").text("Not connected yet?", 65,595)
	.fontSize(15).fillColor("#ffffff").text("Forgot password?", 215,595)

	

	// frame
	.image('img/phone.png', 0, 15, {width: 400})
	
	// clickable areas
	.link(155, 480, 100, 50, 3)
	.link(65, 585, 120, 40, 1)
	.link(215, 585, 120, 40, 2);

doc.switchToPage(1);
doc
	// background image
	.image('img/bgnd.jpg', 50, 70, {width: 300, height:570})


	// header
	.lineWidth(70).lineCap('round').moveTo(85,70).lineTo(315,70).stroke("#000")
	.lineWidth(60).lineCap('butt').moveTo(50,95).lineTo(350,95).stroke("#000")

	// footer
	.lineWidth(50).lineCap('round').moveTo(75,660).lineTo(325,660).stroke("#338099")
	.lineWidth(30).lineCap('butt').moveTo(50,650).lineTo(350,650).stroke("#338099")
	.fontSize(20).fillColor("#205060").text("2020", 175, 645)
	
	// create account
	.lineWidth(20).lineCap('round').moveTo(110,335).lineTo(280,335).stroke("#338099")
	.lineWidth(30).lineCap('round').moveTo(105,375).lineTo(210,375).stroke("#338099")
	.lineWidth(30).lineCap('round').moveTo(105,415).lineTo(210,415).stroke("#338099")
	.lineWidth(30).lineCap('round').moveTo(105,455).lineTo(210,455).stroke("#338099")
	.lineWidth(30).lineCap('round').moveTo(105,495).lineTo(210,495).stroke("#338099")
	.lineWidth(30).lineCap('round').moveTo(115,605).lineTo(270,605).stroke("#338099")

	.circle(200, 240, 80).lineWidth(2).fillOpacity(0.2).fillAndStroke("red", "#000")
	.fillOpacity(1)
	.fontSize(15).fillColor("#00ff00").text("Upload a stunning picture", 110, 330)
	.fontSize(15).fillColor("#ffffff").text("Password", 100, 370)
	.fontSize(15).fillColor("#ffffff").text("Confirm Password", 100, 410)
	.fontSize(15).fillColor("#ffffff").text("Facebook", 100, 450)
	.fontSize(15).fillColor("#ffffff").text("...", 100, 490)
	.fontSize(15).fillColor("#00ff00").text("Create and Share Cards", 110, 600)

	.image('img/me.png', 120, 160, {width: 160})
	.image('img/lock.png', 60, 363, {width: 25})
	.image('img/facebook.png', 60, 443, {width: 25})
	.image('img/twitter.png', 60, 483, {width: 25})


	
	// frame
	.image('img/phone.png', 0, 15, {width: 400})

	// clickable area
	.link(100, 585, 190, 40, 3);


doc.switchToPage(2);
doc
	// background image
	.image('img/bgnd.jpg', 50, 70, {width: 300, height:570})


	// header
	.lineWidth(70).lineCap('round').moveTo(85,70).lineTo(315,70).stroke("#000")
	.lineWidth(60).lineCap('butt').moveTo(50,95).lineTo(350,95).stroke("#000")

	// footer
	.lineWidth(50).lineCap('round').moveTo(75,660).lineTo(325,660).stroke("#338099")
	.lineWidth(30).lineCap('butt').moveTo(50,650).lineTo(350,650).stroke("#338099")
	.fontSize(20).fillColor("#205060").text("2020", 175, 645)

	// recover password
	.lineWidth(20).lineCap('butt').moveTo(60,335).lineTo(340,335).stroke("#338099")
	.fontSize(15).fillColor("#ffffff").text("We will help you change your password", 70, 330)

	.lineWidth(30).lineCap('round').moveTo(95,550).lineTo(310,550).stroke("#338099")
	.fontSize(15).fillColor("#00ff00").text("I am ready to change my password", 85, 545)

	.lineWidth(30).lineCap('round').moveTo(110,375).lineTo(210,375).stroke("#338099")
	.fontSize(15).fillColor("#ffffff").text("Enter your email", 100, 370)
	.image('img/passwd.png', 135, 170, {width: 120})
	.image('img/email.png', 65, 363, {width: 25})


	// frame
	.image('img/phone.png', 0, 15, {width: 400})

	// clickable area
	.link(80, 530, 245, 40, 0);

doc.switchToPage(3);
// HOME PAGE
doc
	// background image
	.image('img/bgnd.jpg', 50, 70, {width: 300, height:570})

	// middle line
	.lineWidth(10).path('M 200,120 L 200,680').stroke("#338099")

	// header
	.lineWidth(70).lineCap('round').moveTo(85,70).lineTo(315,70).stroke("#000")
	.lineWidth(60).lineCap('butt').moveTo(50,95).lineTo(350,95).stroke("#000")

	// footer
	.lineWidth(50).lineCap('round').moveTo(75,660).lineTo(325,660).stroke("#338099")
	.lineWidth(30).lineCap('butt').moveTo(50,650).lineTo(350,650).stroke("#338099")
	.fontSize(20).fillColor("#205060").text("2020", 175, 645)

	// Share & Search
	.fontSize(20).fillColor("#c4e1ed").text("Share", 100, 245)
	.image('img/share.png', 80, 300, {width: 80})
	.fontSize(20).fillColor("#c4e1ed").text("Search", 250, 505)
	.image('img/search.png', 240, 400, {width: 80})

	// frame
	.image('img/phone.png', 0, 15, {width: 400})

	// clickable areas
	.link(50, 125, 145, 510, 10)
	.link(200, 125, 145, 510, 4);

// CONNECT PAGE
doc.switchToPage(4);
doc
	// background image
	.image('img/bgnd.jpg', 50, 70, {width: 300, height:570})

	// header
	.lineWidth(70).lineCap('round').moveTo(85,70).lineTo(315,70).stroke("#000")
	.lineWidth(60).lineCap('butt').moveTo(50,95).lineTo(350,95).stroke("#000")

	// footer
	.lineWidth(50).lineCap('round').moveTo(75,660).lineTo(325,660).stroke("#338099")
	.lineWidth(30).lineCap('butt').moveTo(50,650).lineTo(350,650).stroke("#338099")
	.fontSize(20).fillColor("#205060").text("2020", 175, 645)

	// maybe you know
	.lineWidth(30).lineCap('butt').moveTo(50,140).lineTo(350,140).stroke("#338099")
	.fontSize(20).fillColor("#205060").text("Maybe You Know", 125, 135)
	.lineWidth(80).lineCap('butt').moveTo(50,195).lineTo(350, 195).stroke("#2d7086")
	.circle(90, 195, 28).lineWidth(2).fillOpacity(0.2).fillAndStroke("red", "#000")
	.circle(156, 195, 28).lineWidth(2).fillOpacity(0.2).fillAndStroke("red", "#000")
	.circle(221, 195, 28).lineWidth(2).fillOpacity(0.2).fillAndStroke("red", "#000")
	.circle(286, 195, 28).lineWidth(2).fillOpacity(0.2).fillAndStroke("red", "#000")
	.lineWidth(2).path("M 345,223 Q 300,195 345,167").fillOpacity(0.2).fillAndStroke("red", "#000")
	.fillOpacity(1)
	.image('img/rihanna.png', 72, 170, {width: 35})
	.image('img/obama.png', 136, 170, {width: 40})
	.image('img/blackpink.png', 201, 170, {width: 40})
	.image('img/smith.png', 266, 170, {width: 40})

	// cards
	.rect(100, 250, 200, 350).lineWidth(2).fillAndStroke("#1f5060", "#000")
	.circle(150, 270, 13).lineWidth(2).fillOpacity(0.2).fillAndStroke("red", "#000")
	.fillOpacity(1)
	.image('img/john.png', 139, 259, {width: 23})
	.fontSize(12).fillColor("#e6e6e6").text("John Smith", 170, 265)
	.rect(80, 290, 240, 330).lineWidth(2).fillAndStroke("#1f5060", "#000")
	.circle(120, 320, 18).lineWidth(2).fillOpacity(0.2).fillAndStroke("red", "#000")
	.fillOpacity(1)
	.image('img/michael.png', 105, 303, {width: 32})
	.fontSize(20).fillColor("#e6e6e6").text("Michael Fritz", 145, 310)
	.fontSize(12).fillColor("#e6e6e6").text("CEO, Ganya", 165, 350)
	.image('img/call.png', 90, 373, {width: 25})
	.fontSize(12).fillColor("#e6e6e6").text("(+4) 0721 221 222", 120, 380)
	.image('img/email.png', 90, 403, {width: 25})
	.fontSize(12).fillColor("#e6e6e6").text("michael.fritz@gmail.com", 120, 410)
	.image('img/facebook.png', 90, 433, {width: 25})
	.fontSize(12).fillColor("#e6e6e6").text("www.facebook.com/michael.fritz", 120, 440)
	.image('img/linkedin.png', 90, 463, {width: 25})
	.fontSize(12).fillColor("#e6e6e6").text("www.linkedin.com/michael.fritz", 120, 470)
	.image('img/twitter.png', 90, 493, {width: 25})
	.fontSize(12).fillColor("#e6e6e6").text("www.twitter.com/michael.fritz", 120, 500)
	.image('img/skype.png', 90, 525, {width: 25})
	.fontSize(12).fillColor("#e6e6e6").text("michael.fritz", 120, 530)

	// frame
	.image('img/phone.png', 0, 15, {width: 400})

	// clickable areas
	.link(60, 165, 60, 60, 6)
	.link(125, 165, 60, 60, 7)
	.link(190, 165, 60, 60, 8)
	.link(255, 165, 60, 60, 9)
	.link(100, 250, 200, 45, 5);

// CONNECT PAGE 1
doc.switchToPage(5);
doc
	// background image
	.image('img/bgnd.jpg', 50, 70, {width: 300, height:570})

	// header
	.lineWidth(70).lineCap('round').moveTo(85,70).lineTo(315,70).stroke("#000")
	.lineWidth(60).lineCap('butt').moveTo(50,95).lineTo(350,95).stroke("#000")

	// footer
	.lineWidth(50).lineCap('round').moveTo(75,660).lineTo(325,660).stroke("#338099")
	.lineWidth(30).lineCap('butt').moveTo(50,650).lineTo(350,650).stroke("#338099")
	.fontSize(20).fillColor("#205060").text("2020", 175, 645)

	// maybe you know
	.lineWidth(30).lineCap('butt').moveTo(50,140).lineTo(350,140).stroke("#338099")
	.fontSize(20).fillColor("#205060").text("Maybe You Know", 125, 135)
	.lineWidth(80).lineCap('butt').moveTo(50,195).lineTo(350, 195).stroke("#2d7086")
	.circle(90, 195, 28).lineWidth(2).fillOpacity(0.2).fillAndStroke("red", "#000")
	.circle(156, 195, 28).lineWidth(2).fillOpacity(0.2).fillAndStroke("red", "#000")
	.circle(221, 195, 28).lineWidth(2).fillOpacity(0.2).fillAndStroke("red", "#000")
	.circle(286, 195, 28).lineWidth(2).fillOpacity(0.2).fillAndStroke("red", "#000")
	.lineWidth(2).path("M 345,223 Q 300,195 345,167").fillOpacity(0.2).fillAndStroke("red", "#000")
	.fillOpacity(1)
	.image('img/rihanna.png', 72, 170, {width: 35})
	.image('img/obama.png', 136, 170, {width: 40})
	.image('img/blackpink.png', 201, 170, {width: 40})
	.image('img/smith.png', 266, 170, {width: 40})

	// cards
	.rect(100, 250, 200, 350).lineWidth(2).fillAndStroke("#1f5060", "#000")
	.circle(150, 270, 13).lineWidth(2).fillOpacity(0.2).fillAndStroke("red", "#000")
	.fillOpacity(1)
	.image('img/michael.png', 139, 259, {width: 23})
	.fontSize(12).fillColor("#e6e6e6").text("Michael Fritz", 170, 265)
	.rect(80, 290, 240, 330).lineWidth(2).fillAndStroke("#1f5060", "#000")
	.circle(120, 320, 18).lineWidth(2).fillOpacity(0.2).fillAndStroke("red", "#000")
	.fillOpacity(1)
	.image('img/john.png', 105, 303, {width: 32})
	.fontSize(20).fillColor("#e6e6e6").text("John Smith", 145, 310)
	.fontSize(12).fillColor("#e6e6e6").text("CEO, Smith&Smith", 165, 350)
	.image('img/call.png', 90, 373, {width: 25})
	.fontSize(12).fillColor("#e6e6e6").text("(+4) 0776 388 972", 120, 380)
	.image('img/email.png', 90, 403, {width: 25})
	.fontSize(12).fillColor("#e6e6e6").text("john.smith@gmail.com", 120, 410)
	.image('img/facebook.png', 90, 433, {width: 25})
	.fontSize(12).fillColor("#e6e6e6").text("www.facebook.com/john.smith", 120, 440)
	.image('img/linkedin.png', 90, 463, {width: 25})
	.fontSize(12).fillColor("#e6e6e6").text("www.linkedin.com/john.smith", 120, 470)
	.image('img/twitter.png', 90, 493, {width: 25})
	.fontSize(12).fillColor("#e6e6e6").text("www.twitter.com/john.smith", 120, 500)
	.image('img/skype.png', 90, 525, {width: 25})
	.fontSize(12).fillColor("#e6e6e6").text("john.smith", 120, 530)

	// frame
	.image('img/phone.png', 0, 15, {width: 400})

	// clickable areas
	.link(60, 165, 60, 60, 6)
	.link(125, 165, 60, 60, 7)
	.link(190, 165, 60, 60, 8)
	.link(255, 165, 60, 60, 9)
	.link(100, 250, 200, 45, 4);

// CONNECT PAGE RIHANNA
doc.switchToPage(6);
doc
	// background image
	.image('img/bgnd.jpg', 50, 70, {width: 300, height:570})

	// header
	.lineWidth(70).lineCap('round').moveTo(85,70).lineTo(315,70).stroke("#000")
	.lineWidth(60).lineCap('butt').moveTo(50,95).lineTo(350,95).stroke("#000")

	// footer
	.lineWidth(50).lineCap('round').moveTo(75,660).lineTo(325,660).stroke("#338099")
	.lineWidth(30).lineCap('butt').moveTo(50,650).lineTo(350,650).stroke("#338099")
	.fontSize(20).fillColor("#205060").text("2020", 175, 645)

	// share
	.lineWidth(70).lineCap('round').moveTo(110,375).lineTo(290,375).stroke("#006080")
	.circle(200, 240, 80).lineWidth(2).fillOpacity(0.2).fillAndStroke("red", "#000")
	.circle(200, 510, 80).lineWidth(2).fillOpacity(0.2).fillAndStroke("red", "#000")
	.fillOpacity(1)
	.fontSize(20).fillColor("#ffffff").text("Connect with Rihanna", 100, 370)
	.image('img/me.png', 120, 160, {width: 160})
	.image('img/rihanna.png', 150, 440, {width: 100})

	// frame
	.image('img/phone.png', 0, 15, {width: 400})

// CONNECT PAGE OBAMA
doc.switchToPage(7);
doc
	// background image
	.image('img/bgnd.jpg', 50, 70, {width: 300, height:570})

	// header
	.lineWidth(70).lineCap('round').moveTo(85,70).lineTo(315,70).stroke("#000")
	.lineWidth(60).lineCap('butt').moveTo(50,95).lineTo(350,95).stroke("#000")

	// footer
	.lineWidth(50).lineCap('round').moveTo(75,660).lineTo(325,660).stroke("#338099")
	.lineWidth(30).lineCap('butt').moveTo(50,650).lineTo(350,650).stroke("#338099")
	.fontSize(20).fillColor("#205060").text("2020", 175, 645)

	// share
	.lineWidth(70).lineCap('round').moveTo(110,375).lineTo(290,375).stroke("#006080")
	.circle(200, 240, 80).lineWidth(2).fillOpacity(0.2).fillAndStroke("red", "#000")
	.circle(200, 510, 80).lineWidth(2).fillOpacity(0.2).fillAndStroke("red", "#000")
	.fillOpacity(1)
	.fontSize(20).fillColor("#ffffff").text("Connect with Obama", 105, 370)
	.image('img/me.png', 120, 160, {width: 160})
	.image('img/obama.png', 150, 440, {width: 100})

	// frame
	.image('img/phone.png', 0, 15, {width: 400})

// CONNECT PAGE JISOO
doc.switchToPage(8);
doc
	// background image
	.image('img/bgnd.jpg', 50, 70, {width: 300, height:570})

	// header
	.lineWidth(70).lineCap('round').moveTo(85,70).lineTo(315,70).stroke("#000")
	.lineWidth(60).lineCap('butt').moveTo(50,95).lineTo(350,95).stroke("#000")

	// footer
	.lineWidth(50).lineCap('round').moveTo(75,660).lineTo(325,660).stroke("#338099")
	.lineWidth(30).lineCap('butt').moveTo(50,650).lineTo(350,650).stroke("#338099")
	.fontSize(20).fillColor("#205060").text("2020", 175, 645)

	// share
	.lineWidth(70).lineCap('round').moveTo(110,375).lineTo(290,375).stroke("#006080")
	.circle(200, 240, 80).lineWidth(2).fillOpacity(0.2).fillAndStroke("red", "#000")
	.circle(200, 510, 80).lineWidth(2).fillOpacity(0.2).fillAndStroke("red", "#000")
	.fillOpacity(1)
	.fontSize(20).fillColor("#ffffff").text("Connect with Jisoo", 115, 370)
	.image('img/me.png', 120, 160, {width: 160})
	.image('img/blackpink.png', 150, 440, {width: 110})

	// frame
	.image('img/phone.png', 0, 15, {width: 400})

// CONNECT PAGE SMITH
doc.switchToPage(9);
doc
	// background image
	.image('img/bgnd.jpg', 50, 70, {width: 300, height:570})

	// header
	.lineWidth(70).lineCap('round').moveTo(85,70).lineTo(315,70).stroke("#000")
	.lineWidth(60).lineCap('butt').moveTo(50,95).lineTo(350,95).stroke("#000")

	// footer
	.lineWidth(50).lineCap('round').moveTo(75,660).lineTo(325,660).stroke("#338099")
	.lineWidth(30).lineCap('butt').moveTo(50,650).lineTo(350,650).stroke("#338099")
	.fontSize(20).fillColor("#205060").text("2020", 175, 645)

	// share
	.lineWidth(70).lineCap('round').moveTo(110,375).lineTo(290,375).stroke("#006080")
	.circle(200, 240, 80).lineWidth(2).fillOpacity(0.2).fillAndStroke("red", "#000")
	.circle(200, 510, 80).lineWidth(2).fillOpacity(0.2).fillAndStroke("red", "#000")
	.fillOpacity(1)
	.fontSize(20).fillColor("#ffffff").text("Connect with Will Smith", 98, 370)
	.image('img/me.png', 120, 160, {width: 160})
	.image('img/smith.png', 150, 440, {width: 100})

	// frame
	.image('img/phone.png', 0, 15, {width: 400})

// CONNECT PAGE ANONYMOUS
doc.switchToPage(10);
doc
	// background image
	.image('img/bgnd.jpg', 50, 70, {width: 300, height:570})

	// header
	.lineWidth(70).lineCap('round').moveTo(85,70).lineTo(315,70).stroke("#000")
	.lineWidth(60).lineCap('butt').moveTo(50,95).lineTo(350,95).stroke("#000")

	// footer
	.lineWidth(50).lineCap('round').moveTo(75,660).lineTo(325,660).stroke("#338099")
	.lineWidth(30).lineCap('butt').moveTo(50,650).lineTo(350,650).stroke("#338099")
	.fontSize(20).fillColor("#205060").text("2020", 175, 645)

	// share
	.lineWidth(70).lineCap('round').moveTo(110,375).lineTo(290,375).stroke("#006080")
	.circle(200, 240, 80).lineWidth(2).fillOpacity(0.2).fillAndStroke("red", "#000")
	.circle(200, 510, 80).lineWidth(2).fillOpacity(0.2).fillAndStroke("red", "#000")
	.fillOpacity(1)
	.fontSize(20).fillColor("#ffffff").text("Waiting for others...", 115, 370)
	.image('img/me.png', 120, 160, {width: 160})
	.image('img/qmark.png', 80, 440, {width: 250})

	// frame
	.image('img/phone.png', 0, 15, {width: 400})

doc.end();

