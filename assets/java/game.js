
// Arrange variables needed
// <==========================================
var wins = 0;
var losses = 0;
var userTotal = 0;

var random = Math.floor(Math.random() * 120);

var blueNum = Math.floor(Math.random() * 12);
var greenNum = Math.floor(Math.random() * 12);
var redNum = Math.floor(Math.random() * 12);
var yellowNum = Math.floor(Math.random() * 12);


// Starts the game
// <======================================================
function startGame() {
		
		random = Math.floor(Math.random() * 120);
			console.log(random)

		$("#boxRandom").text(random);

		blueNum = Math.floor(Math.random() * 12);
		greenNum = Math.floor(Math.random() * 12);
		redNum = Math.floor(Math.random() * 12);
		yellowNum = Math.floor(Math.random() * 12);

		usertotal = 0;

		$("#totalScore").text(userTotal);
	

// Set how to win and lose game 
// <=====================================================

	if(userTotal === random) {
			wins++;
			$("#Wins").html("Wins:" + wins);
			reset();
		};
	if(userTotal > random) {
			losses++
			$("#Losses").html("Losses:" + losses);
			reset();
		};
	

// Set the clicks for the jewel imgs
// <=======================================================
	$("#blueJewel").on("click", function() {
		userTotal= userTotal + blueNum;
		$("#totalScore").text(userTotal);
	})
		console.log("New userTotal" + blueNum);


	$("#greenJewel").on("click", function() {
		userTotal= userTotal + greenJewel;
		$("#totalScore").text(userTotal);
	})
		console.log("New userTotal" + greenNum);


	$("#redJewel").on("click", function() {
		userTotal= userTotal + redJewel;
		$("#totalScore").text(userTotal);
	})
		console.log("New userTotal" + redNum);


	$("#yellowJewel").on("click", function() {
		userTotal= userTotal + yellowJewel;
		$("#totalScore").text(userTotal);
	})
		console.log("New userTotal" + yellowNum);


}
startGame();







