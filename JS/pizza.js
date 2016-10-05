/**
 * Created by NicholasTurner on 10/4/16.
 */
$("#delivery").click(function() {$("#myfields").prop("disabled", false);});
$("#pickup").click(function() {$("#myfields").prop("disabled", true);});
$(".btn").click(function() {
    console.log("Your Pizza Order has been entered, Please tip your driver!");
});